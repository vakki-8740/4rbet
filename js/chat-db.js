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
    lastError: "",
    lastCode: "",      /* raw Firestore error code (permission-denied / unavailable ...) */
    lastWhy: ""        /* kis wajah se fail hua: RULES | NETWORK | DATABASE | CONFIG | SDK | OK */
  };

  /* Browser khud online hai ya nahi - ye Firestore error se alag cheez hai.
     navigator.onLine true hai phir bhi Firestore fail ho to problem
     internet NAHI, rules/config/database ki hai. */
  function browserOnline() {
    return window.navigator ? navigator.onLine !== false : true;
  }

  /* ==========================================
     INIT
     ========================================== */

  function init() {
    if (state.checked) return state.online;
    state.checked = true;

    var SDK = window.firebase;

    if (!SDK) {
      state.lastError = "Firebase SDK load nahi hua (gstatic.com block hai ya internet nahi)";
      state.lastWhy = "SDK";
      return false;
    }

    if (!window.FIREBASE_CONFIG) {
      state.lastError = "firebase-config.js missing hai";
      state.lastWhy = "CONFIG";
      return false;
    }

    try {
      if (!SDK.apps || !SDK.apps.length) {
        SDK.initializeApp(window.FIREBASE_CONFIG);
      }
      state.db = SDK.firestore();
      state.online = true;
      state.lastError = "";
      state.lastCode = "";
      state.lastWhy = "";
    } catch (e) {
      state.db = null;
      state.online = false;
      state.lastError = friendly(e);
      state.lastWhy = "CONFIG";
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
      cb(null, false, reason());
      return function () {};
    }

    return chatRef(id).onSnapshot(function (snap) {
      if (!snap.exists) { cb(null, true); return; }
      var o = snap.data() || {};
      o.id = o.id || snap.id;
      cb(o, true);
    }, function (err) {
      state.lastError = friendly(err);
      cb(null, false, reason());
    });
  }

  /* Admin: saari chats (newest activity first) */
  function watchChats(cb) {
    if (!init() || !state.db) {
      cb([], false, reason());
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
        cb([], false, reason());
      });
  }

  /* ==========================================
     MESSAGES
     ========================================== */

  function watchMessages(id, cb) {
    if (!init() || !state.db) {
      cb([], false, reason());
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
        cb([], false, reason());
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

  /* ==========================================
     ERRORS
     Har Firestore error ko uski ASLI wajah ke
     hisaab se pehchano - "internet nahi hai" tab
     hi bolo jab sach me network ki problem ho.
     ========================================== */

  function friendly(err) {
    var code = (err && err.code) || "";
    var msg  = (err && err.message) || String(err);
    var low  = String(msg).toLowerCase();

    state.lastCode = code;

    /* ---- 1. config / project level ---- */
    if (/api key not valid|api key not enabled|invalid api key|api_key/.test(low)) {
      state.lastWhy = "CONFIG";
      return "Firebase API key valid nahi hai — js/firebase-config.js check karein";
    }

    if (/does not exist|not found|project.*deleted|no such project/.test(low) &&
        /project|firebase/.test(low)) {
      state.lastWhy = "CONFIG";
      return "Firebase project exist nahi karta (projectId galat ya project delete ho gaya)";
    }

    if (/firestore api.*(not enabled|has not been enabled)|cloud firestore api/.test(low)) {
      state.lastWhy = "DATABASE";
      return "Project me Cloud Firestore API enable nahi hai";
    }

    /* ---- 2. database bana hi nahi ---- */
    if (code === "failed-precondition" ||
        /failed-precondition|database.*does not exist|has not been created|firestore.*not.*created/.test(low)) {
      state.lastWhy = "DATABASE";
      return "Firestore database create nahi hua — Firebase Console > Firestore Database > Create Database";
    }

    /* ---- 3. rules ---- */
    if (code === "permission-denied" || /permission/i.test(msg) ||
        /missing or insufficient/.test(low) || /unauthenticated/i.test(low)) {
      state.lastWhy = "RULES";
      return "Firestore rules chat ko allow nahi kar rahi — firestore.rules publish karein";
    }

    /* ---- 4. sach me network ---- */
    if (!browserOnline()) {
      state.lastWhy = "NETWORK";
      return "Internet band hai (device offline hai)";
    }

    if (code === "unavailable" || /network|offline|failed to fetch|load failed|net::|cors|timeout/.test(low)) {
      state.lastWhy = "NETWORK";
      return "Firebase server tak request nahi pahunchi — internet / firewall / file:// protocol";
    }

    /* ---- 5. size ---- */
    if (/exceed|too large|1 ?MiB|1048576/.test(low)) {
      state.lastWhy = "SIZE";
      return "Message bahut bada hai.";
    }

    state.lastWhy = "OTHER";
    return msg;
  }

  /* Kis wajah se fail hua - UI isi se sahi hint dikhaata hai */
  function why() {
    if (!state.checked) init();
    if (state.db && !state.lastWhy) return "OK";
    return state.lastWhy || (state.db ? "OK" : "SDK");
  }

  var HINTS = {
    OK:       "Connection theek hai.",
    SDK:      "Firebase SDK (gstatic.com) load nahi hua. Internet chalu karein ya CDN unblock karein.",
    CONFIG:   "js/firebase-config.js me projectId / apiKey galat hai. Sahi Firebase project ki config daalein.",
    DATABASE: "Firebase Console > Firestore Database > Create Database (Native mode) se database banayein.",
    RULES:    "Repo ki firestore.rules file ko Firebase Console > Firestore Database > Rules me paste karke PUBLISH dabayein.",
    NETWORK:  "Device offline hai, ya page file:// se khula hai (http(s) server se kholna zaroori hai), ya network Firebase ko block kar raha hai.",
    SIZE:     "Attachment chhota karein.",
    OTHER:    "Neeche diye gaye error code ko check karein."
  };

  function hint(k) { return HINTS[k] || HINTS.OTHER; }

  /* UI ke liye ek line me asli wajah */
  function reason() {
    if (state.lastError) return state.lastError;
    return hint(why());
  }

  /* ==========================================
     DIAGNOSE  : ek-ek karke test chalao aur
     batayo ki problem KAHAN hai
     ========================================== */

  function diagnose() {
    var out = {
      at: new Date().toISOString(),
      protocol: location.protocol,
      host: location.host || "(file)",
      browserOnline: browserOnline(),
      sdk: !!window.firebase,
      config: !!window.FIREBASE_CONFIG,
      projectId: (window.FIREBASE_CONFIG && window.FIREBASE_CONFIG.projectId) || "",
      apiKeyTail: (window.FIREBASE_CONFIG && window.FIREBASE_CONFIG.apiKey || "").slice(-6),
      chatId: myId(),
      chatName: myName() || "(not set)",
      dbReady: false,
      tests: []
    };

    function test(name, fn) {
      var t0 = Date.now();

      return Promise.resolve()
        .then(fn)
        .then(function (detail) {
          out.tests.push({ name: name, ok: true, ms: Date.now() - t0, detail: detail || "" });
          return true;
        }, function (err) {
          out.tests.push({
            name: name,
            ok: false,
            ms: Date.now() - t0,
            code: (err && err.code) || "",
            error: friendly(err)
          });
          return false;
        });
    }

    if (location.protocol === "file:") {
      out.tests.push({
        name: "Page protocol",
        ok: false,
        code: "file://",
        error: "Page file:// se khula hai — Firestore browser se connect nahi kar sakta. http(s) server se kholna zaroori hai."
      });
    }

    if (!init()) {
      out.tests.push({ name: "Firebase init", ok: false, code: state.lastCode, error: state.lastError });
      out.why = why();
      out.hint = hint(out.why);
      return Promise.resolve(out);
    }

    out.dbReady = !!state.db;

    /* reset - purana error report me na aaye */
    state.lastError = "";
    state.lastCode = "";
    state.lastWhy = "";

    var probeChat = "__diagnostic__";
    var probeMsg  = "diag-" + Date.now();

    return test("Firestore read (chats list)", function () {
        return coll().limit(1).get().then(function (s) { return s.size + " doc mila"; });
      })
      .then(function () {
        return test("Chat doc read (aapki chat)", function () {
          return chatRef(myId()).get().then(function (s) {
            return s.exists ? "chat exist karti hai" : "chat abhi bani nahi (normal)";
          });
        });
      })
      .then(function () {
        return test("Messages read", function () {
          return msgColl(myId()).limit(1).get().then(function (s) { return s.size + " message mila"; });
        });
      })
      .then(function () {
        return test("Write permission (probe doc)", function () {
          return chatRef(probeChat)
            .set({ probe: true, at: new Date().toISOString() })
            .then(function () { return "create ok"; });
        });
      })
      .then(function () {
        return test("Message write + delete (probe)", function () {
          return msgColl(probeChat).doc(probeMsg)
            .set({ who: "user", text: "diagnostic", at: new Date().toISOString() })
            .then(function () { return msgColl(probeChat).doc(probeMsg).delete(); })
            .then(function () { return "write + delete ok"; });
        });
      })
      .then(function () {
        /* probe chat doc hata do (rules me delete sirf admin - fail ho to ignore) */
        return chatRef(probeChat).delete().catch(function () { return null; });
      })
      .then(function () {
        out.why = why();
        out.hint = hint(out.why);
        return out;
      });
  }

  return {
    COL: COL,
    init: init,
    isOnline: function () { return init() && !!state.db; },
    lastError: function () { return state.lastError; },
    lastCode: function () { return state.lastCode; },
    why: why,
    hint: function () { return hint(why()); },
    reason: reason,
    browserOnline: browserOnline,
    diagnose: diagnose,

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
