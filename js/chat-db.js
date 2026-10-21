/* ==========================================
   4R BET  |  chat-db.js
   Support chat ke liye Firestore layer.
   User panel aur admin panel dono yahi file use karte hain.

   Structure:
   chats/{chatId}
     userName, createdAt, updatedAt,
     lastText, lastWho, unreadAdmin, unreadUser
   chats/{chatId}/messages/{msgId}
     who: "user" | "admin", text, at,
     image (dataUrl), fileName, fileData (dataUrl)

   chatId user ke browser me localStorage me rehta hai,
   isliye wahi user dobara aaye to same chat khulti hai.
   ========================================== */

window.FourRChat = (function () {
  "use strict";

  var COL    = (window.FIREBASE_CHAT_COLLECTION) || "chats";
  var MSG    = "messages";
  var ID_KEY = "4rbet_chat_id";
  var NAME_KEY = "4rbet_chat_name";

  var IMG_MAX_BYTES = 700 * 1024;
  var FILE_MAX_BYTES = 350 * 1024;

  var state = {
    db: null,
    online: false,
    checked: false,
    lastError: ""
  };

  /* ==========================================
     INIT
     ========================================== */

  function init() {
    if (state.checked) return state.online;
    state.checked = true;

    var SDK = window.firebase;

    if (!SDK) {
      state.lastError = "Firebase SDK load nahi hua (internet check karein)";
      return false;
    }

    if (!window.FIREBASE_CONFIG) {
      state.lastError = "firebase-config.js missing hai";
      return false;
    }

    try {
      if (!SDK.apps || !SDK.apps.length) {
        SDK.initializeApp(window.FIREBASE_CONFIG);
      }
      state.db = SDK.firestore();
      state.online = true;
      state.lastError = "";
    } catch (e) {
      state.db = null;
      state.online = false;
      state.lastError = e.message || String(e);
    }

    return state.online;
  }

  function coll() { return state.db.collection(COL); }
  function chatRef(id) { return coll().doc(id); }
  function msgColl(id) { return chatRef(id).collection(MSG); }

  /* ==========================================
     IDENTITY (user browser)
     ========================================== */

  function genId() {
    var chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    var out = "";
    var i;

    if (window.crypto && window.crypto.getRandomValues) {
      var buf = new Uint8Array(16);
      window.crypto.getRandomValues(buf);
      for (i = 0; i < buf.length; i++) out += chars[buf[i] % chars.length];
      return out;
    }

    for (i = 0; i < 16; i++) out += chars[Math.floor(Math.random() * chars.length)];
    return out;
  }

  function myId() {
    var id = "";
    try { id = localStorage.getItem(ID_KEY) || ""; } catch (e) { id = ""; }

    if (!id) {
      id = genId();
      try { localStorage.setItem(ID_KEY, id); } catch (e) { /* ignore */ }
    }
    return id;
  }

  function guestName(id) {
    return "Guest #" + String(id || myId()).slice(0, 4).toUpperCase();
  }

  function myName() {
    try { return localStorage.getItem(NAME_KEY) || ""; } catch (e) { return ""; }
  }

  function setName(name) {
    var n = String(name || "").trim().slice(0, 40);
    try { localStorage.setItem(NAME_KEY, n); } catch (e) { /* ignore */ }
    return n;
  }

  /* ==========================================
     CHAT DOC
     ========================================== */

  function ensureChat(id, name) {
    if (!init() || !state.db) {
      return Promise.resolve({ ok: false, offline: true, error: state.lastError });
    }

    var now = new Date().toISOString();
    var ref = chatRef(id);

    return ref.get()
      .then(function (snap) {
        if (!snap.exists) {
          return ref.set({
            id: id,
            userName: name || guestName(id),
            createdAt: now,
            updatedAt: now,
            lastText: "",
            lastWho: "",
            unreadAdmin: 0,
            unreadUser: 0
          }).then(function () {
            return { ok: true, offline: false, created: true };
          });
        }

        if (name && name !== snap.data().userName) {
          return ref.set({ userName: name }, { merge: true })
            .then(function () {
              return { ok: true, offline: false, created: false };
            });
        }

        return { ok: true, offline: false, created: false };
      })
      .catch(function (err) {
        state.lastError = friendly(err);
        return { ok: false, offline: true, error: state.lastError };
      });
  }

  function getChat(id) {
    if (!init() || !state.db) {
      return Promise.resolve({ ok: false, offline: true, error: state.lastError, chat: null });
    }

    return chatRef(id).get()
      .then(function (snap) {
        if (!snap.exists) return { ok: true, offline: false, chat: null };
        var o = snap.data() || {};
        o.id = o.id || snap.id;
        return { ok: true, offline: false, chat: o };
      })
      .catch(function (err) {
        state.lastError = friendly(err);
        return { ok: false, offline: true, error: state.lastError, chat: null };
      });
  }

  function watchChat(id, cb) {
    if (!init() || !state.db) {
      cb(null, false);
      return function () {};
    }

    return chatRef(id).onSnapshot(function (snap) {
      if (!snap.exists) { cb(null, true); return; }
      var o = snap.data() || {};
      o.id = o.id || snap.id;
      cb(o, true);
    }, function (err) {
      state.lastError = friendly(err);
      cb(null, false);
    });
  }

  /* Admin: saari chats (newest activity first) */
  function watchChats(cb) {
    if (!init() || !state.db) {
      cb([], false);
      return function () {};
    }

    return coll()
      .orderBy("updatedAt", "desc")
      .limit(200)
      .onSnapshot(function (snap) {
        var list = snap.docs.map(function (d) {
          var o = d.data() || {};
          o.id = o.id || d.id;
          return o;
        });
        cb(list, true);
      }, function (err) {
        state.lastError = friendly(err);
        cb([], false);
      });
  }

  /* ==========================================
     MESSAGES
     ========================================== */

  function watchMessages(id, cb) {
    if (!init() || !state.db) {
      cb([], false);
      return function () {};
    }

    return msgColl(id)
      .orderBy("at", "asc")
      .limit(500)
      .onSnapshot(function (snap) {
        var list = snap.docs.map(function (d) {
          var o = d.data() || {};
          o.id = d.id;
          return o;
        });
        cb(list, true);
      }, function (err) {
        state.lastError = friendly(err);
        cb([], false);
      });
  }

  function preview(m) {
    if (m.text) return String(m.text).slice(0, 90);
    if (m.image) return "Photo";
    if (m.fileName) return "File: " + m.fileName;
    return "";
  }

  function send(id, msg) {
    if (!init() || !state.db) {
      return Promise.resolve({ ok: false, offline: true, error: state.lastError });
    }

    var who = msg.who === "admin" ? "admin" : "user";
    var at  = new Date().toISOString();

    var body = {
      who: who,
      text: String(msg.text || "").slice(0, 4000),
      at: at,
      name: msg.name || (who === "admin" ? "4R Support" : "")
    };

    if (msg.image) body.image = msg.image;
    if (msg.fileName) body.fileName = String(msg.fileName).slice(0, 120);
    if (msg.fileData) body.fileData = msg.fileData;

    var patch = {
      id: id,
      updatedAt: at,
      lastText: preview(body),
      lastWho: who
    };

    try {
      var inc = window.firebase.firestore.FieldValue.increment(1);
      if (who === "user") patch.unreadAdmin = inc;
      else patch.unreadUser = inc;
    } catch (e) {
      if (who === "user") patch.unreadAdmin = 1;
      else patch.unreadUser = 1;
    }

    var batch = state.db.batch();
    batch.set(msgColl(id).doc(), body);
    batch.set(chatRef(id), patch, { merge: true });

    return batch.commit()
      .then(function () { return { ok: true, offline: false }; })
      .catch(function (err) {
        state.lastError = friendly(err);
        return { ok: false, offline: true, error: state.lastError };
      });
  }

  function editMessage(id, msgId, text) {
    if (!init() || !state.db) return Promise.resolve({ ok: false, offline: true });

    return msgColl(id).doc(msgId)
      .update({ text: String(text || "").slice(0, 4000), editedAt: new Date().toISOString() })
      .then(function () { return { ok: true }; })
      .catch(function (err) {
        state.lastError = friendly(err);
        return { ok: false, error: state.lastError };
      });
  }

  function deleteMessage(id, msgId) {
    if (!init() || !state.db) return Promise.resolve({ ok: false, offline: true });

    return msgColl(id).doc(msgId).delete()
      .then(function () { return { ok: true }; })
      .catch(function (err) {
        state.lastError = friendly(err);
        return { ok: false, error: state.lastError };
      });
  }

  function markRead(id, side) {
    if (!init() || !state.db) return Promise.resolve(false);

    var patch = {};
    patch[side === "admin" ? "unreadAdmin" : "unreadUser"] = 0;

    return chatRef(id).set(patch, { merge: true })
      .then(function () { return true; })
      .catch(function () { return false; });
  }

  function deleteChat(id) {
    if (!init() || !state.db) return Promise.resolve({ ok: false, offline: true });

    return msgColl(id).limit(400).get()
      .then(function (snap) {
        var batch = state.db.batch();
        snap.docs.forEach(function (d) { batch.delete(d.ref); });
        batch.delete(chatRef(id));
        return batch.commit();
      })
      .then(function () { return { ok: true }; })
      .catch(function (err) {
        state.lastError = friendly(err);
        return { ok: false, error: state.lastError };
      });
  }

  /* ==========================================
     FILES -> DATA URL
     ========================================== */

  function readImage(file) {
    return new Promise(function (resolve, reject) {
      if (!file || !/^image\//.test(file.type || "")) {
        reject(new Error("Sirf image file chunein."));
        return;
      }

      var reader = new FileReader();

      reader.onerror = function () { reject(new Error("File padhi nahi ja saki.")); };

      reader.onload = function () {
        var raw = String(reader.result || "");
        var img = new Image();

        img.onerror = function () { resolve({ dataUrl: raw, name: file.name }); };

        img.onload = function () {
          var max = 1000;
          var scale = Math.min(1, max / Math.max(img.width, img.height));
          var w = Math.max(1, Math.round(img.width * scale));
          var h = Math.max(1, Math.round(img.height * scale));

          var cv = document.createElement("canvas");
          cv.width = w;
          cv.height = h;
          cv.getContext("2d").drawImage(img, 0, 0, w, h);

          var out = raw;
          try { out = cv.toDataURL("image/jpeg", 0.72); } catch (e) { out = raw; }

          if (out.length > IMG_MAX_BYTES) {
            try { out = cv.toDataURL("image/jpeg", 0.5); } catch (e) { /* ignore */ }
          }

          if (out.length > IMG_MAX_BYTES) {
            reject(new Error("Image bahut badi hai, chhoti image chunein."));
            return;
          }

          resolve({ dataUrl: out, name: file.name });
        };

        img.src = raw;
      };

      reader.readAsDataURL(file);
    });
  }

  function readFile(file) {
    return new Promise(function (resolve, reject) {
      if (!file) { reject(new Error("File chunein.")); return; }

      if (file.size > FILE_MAX_BYTES) {
        reject(new Error("File 350KB se badi hai. Chhoti file bhejein."));
        return;
      }

      var reader = new FileReader();
      reader.onerror = function () { reject(new Error("File padhi nahi ja saki.")); };
      reader.onload = function () {
        resolve({ dataUrl: String(reader.result || ""), name: file.name });
      };
      reader.readAsDataURL(file);
    });
  }

  /* ==========================================
     ERRORS
     ========================================== */

  function friendly(err) {
    var code = (err && err.code) || "";
    var msg  = (err && err.message) || String(err);

    if (code === "permission-denied" || /permission/i.test(msg)) {
      return "Firestore rules me chat allowed nahi hai (firestore.rules update karein)";
    }
    if (code === "unavailable" || /network|offline|fetch/i.test(msg)) {
      return "Internet nahi hai. Connection check karein.";
    }
    if (/exceed|too large|1 ?MiB|1048576/i.test(msg)) {
      return "Message bahut bada hai.";
    }
    return msg;
  }

  return {
    COL: COL,
    init: init,
    isOnline: function () { return init() && !!state.db; },
    lastError: function () { return state.lastError; },

    myId: myId,
    myName: myName,
    setName: setName,
    guestName: guestName,

    ensureChat: ensureChat,
    getChat: getChat,
    watchChat: watchChat,
    watchChats: watchChats,
    watchMessages: watchMessages,
    send: send,
    editMessage: editMessage,
    deleteMessage: deleteMessage,
    markRead: markRead,
    deleteChat: deleteChat,

    readImage: readImage,
    readFile: readFile
  };

})();
