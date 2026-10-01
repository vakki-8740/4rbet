/* ==========================================
   4R BET  |  firebase-db.js
   Firestore se complaints read / write.

   Kaam ka tareeka:
   - Firestore = main storage (source of truth)
   - localStorage = offline cache, taaki net na ho tab bhi
     site aur admin panel chalu rahe
   - Cloud me image size 1MB document limit se safe rahe
     isliye bhejne se pehle size check + auto shrink
   ========================================== */

window.FourR = (function () {
  "use strict";

  var CACHE_KEY = "4rbet_complaints";
  var COL = (window.FIREBASE_COLLECTION) || "complaints";

  /* Firestore ka 1 document limit 1 MiB hai.
     Usse aage nahi jaate - khud se margin rakhte hain. */
  var DOC_LIMIT_BYTES = 900 * 1024;

  var state = {
    db: null,
    online: false,     /* Firestore connected hai ya nahi */
    checked: false,    /* ek baar check ho chuka hai   */
    lastError: ""
  };

  /* ==========================================
     LOCAL CACHE  (sync - turant kaam karta hai)
     ========================================== */

  function cacheRead() {
    try {
      var raw = localStorage.getItem(CACHE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function cacheWrite(list) {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify(list));
      return true;
    } catch (e) {
      return false;
    }
  }

  /* Naya record cache me sab aage daal do (newest first) */
  function cacheAdd(record) {
    var list = cacheRead();
    list = list.filter(function (r) { return r.id !== record.id; });
    list.unshift(record);

    if (!cacheWrite(list)) {
      /* quota full -> images hata kar dubara */
      var light = [Object.assign({}, record, { images: [] })];
      list.slice(1).forEach(function (r) {
        light.push(r.images && r.images.length ? Object.assign({}, r, { images: [] }) : r);
      });
      cacheWrite(light);
    }
    return list;
  }

  function cacheUpdate(id, patch) {
    var list = cacheRead();
    list.forEach(function (r) {
      if (r.id === id) Object.assign(r, patch);
    });
    cacheWrite(list);
    return list;
  }

  function cacheRemove(id) {
    var list = cacheRead().filter(function (r) { return r.id !== id; });
    cacheWrite(list);
    return list;
  }

  function emit() {
    /* pages isse sun ke dobara render karte hain */
    try {
      window.dispatchEvent(new CustomEvent("4r-sync"));
    } catch (e) { /* old browser */ }
  }

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

  /* ==========================================
     IMAGE SIZE GUARD
     Firestore 1MB limit se pehle hi chhota kar do
     ========================================== */

  function bytes(str) { return str.length; }

  function docSize(record) {
    return bytes(JSON.stringify(record));
  }

  function shrinkImage(dataUrl, maxSize, quality) {
    return new Promise(function (resolve) {
      var img = new Image();
      img.onerror = function () { resolve(dataUrl); };
      img.onload = function () {
        var scale = Math.min(1, maxSize / Math.max(img.width, img.height));
        var w = Math.max(1, Math.round(img.width * scale));
        var h = Math.max(1, Math.round(img.height * scale));

        var cv = document.createElement("canvas");
        cv.width = w; cv.height = h;
        cv.getContext("2d").drawImage(img, 0, 0, w, h);

        try {
          var out = cv.toDataURL("image/jpeg", quality);
          resolve(bytes(out) < bytes(dataUrl) ? out : dataUrl);
        } catch (e) {
          resolve(dataUrl);
        }
      };
      img.src = dataUrl;
    });
  }

  /* Document 1MB se bada ban raha ho to images ko
     step-by-step chhota karte jao jab tak fit na ho jaye. */
  function fitForCloud(record) {
    var out = JSON.parse(JSON.stringify(record));

    if (!out.images || !out.images.length) {
      return Promise.resolve({ record: out, shrunk: false });
    }

    var steps = [
      { max: 1100, q: 0.72 },
      { max: 900,  q: 0.65 },
      { max: 700,  q: 0.58 },
      { max: 500,  q: 0.5  }
    ];

    var si = -1;

    function attempt() {
      si++;
      if (si >= steps.length) return Promise.resolve({ record: out, shrunk: true });

      var s = steps[si];
      return Promise.all(out.images.map(function (im) {
        if (!im || !im.dataUrl) return null;
        return shrinkImage(im.dataUrl, s.max, s.q);
      })).then(function (list) {
        out.images = out.images.map(function (im, i) {
          return (im && list[i]) ? Object.assign({}, im, { dataUrl: list[i] }) : im;
        });
        if (docSize(out) <= DOC_LIMIT_BYTES) return { record: out, shrunk: si > 0 };
        return attempt();
      });
    }

    if (docSize(out) <= DOC_LIMIT_BYTES) {
      return Promise.resolve({ record: out, shrunk: false });
    }

    return attempt();
  }

  /* ==========================================
     WRITE  : nayi complaint
     ========================================== */

  function saveComplaint(record) {
    if (!init() || !state.db) {
      cacheAdd(record);
      return Promise.resolve({ ok: false, offline: true, error: state.lastError });
    }

    return fitForCloud(record)
      .then(function (r) {
        var cloud = r.record;
        var batch = state.db.batch();
        batch.set(state.db.collection(COL).doc(cloud.id), cloud);
        return batch.commit().then(function () {
          cacheAdd(cloud);
          emit();
          return { ok: true, offline: false, shrunk: r.shrunk };
        });
      })
      .catch(function (err) {
        /* Firestore rule / network issue -> cache me bacha lo,
           taaki user ka complaint na khoye */
        cacheAdd(record);
        state.lastError = friendly(err);
        return { ok: false, offline: true, error: state.lastError };
      });
  }

  /* ==========================================
     READ  : saari complaints (newest first)
     ========================================== */

  function listComplaints() {
    if (!init() || !state.db) return Promise.resolve(cacheRead());

    return state.db.collection(COL)
      .orderBy("submittedAt", "desc")
      .get()
      .then(function (snap) {
        var list = snap.docs.map(function (d) {
          var o = d.data() || {};
          o.id = o.id || d.id;
          return o;
        });

        cacheWrite(list);
        emit();
        return list;
      })
      .catch(function (err) {
        state.lastError = friendly(err);
        return cacheRead();
      });
  }

  /* ==========================================
     UPDATE / DELETE
     ========================================== */

  function updateStatus(id, status, statusAt) {
    cacheUpdate(id, { status: status, statusAt: statusAt || new Date().toISOString() });

    if (!init() || !state.db) return Promise.resolve({ ok: true, offline: true });

    return state.db.collection(COL).doc(id)
      .update({ status: status, statusAt: statusAt || new Date().toISOString() })
      .then(function () { return { ok: true, offline: false }; })
      .catch(function (err) {
        state.lastError = friendly(err);
        return { ok: false, offline: true, error: state.lastError };
      });
  }

  function deleteComplaint(id) {
    cacheRemove(id);

    if (!init() || !state.db) return Promise.resolve({ ok: true, offline: true });

    return state.db.collection(COL).doc(id).delete()
      .then(function () { return { ok: true, offline: false }; })
      .catch(function (err) {
        state.lastError = friendly(err);
        return { ok: false, offline: true, error: state.lastError };
      });
  }

  function deleteAll() {
    if (!init() || !state.db) {
      cacheWrite([]);
      return Promise.resolve({ ok: true, offline: true });
    }

    return state.db.collection(COL).get()
      .then(function (snap) {
        var batch = state.db.batch();
        snap.docs.forEach(function (d) { batch.delete(d.ref); });
        return batch.commit();
      })
      .then(function () {
        cacheWrite([]);
        return { ok: true, offline: false };
      })
      .catch(function (err) {
        state.lastError = friendly(err);
        return { ok: false, offline: true, error: state.lastError };
      });
  }

  /* ==========================================
     LIVE UPDATE  (admin panel ke liye)
     ========================================== */

  function subscribe(cb) {
    if (!init() || !state.db) return function () {};

    try {
      return state.db.collection(COL)
        .orderBy("submittedAt", "desc")
        .onSnapshot(function (snap) {
          var list = snap.docs.map(function (d) {
            var o = d.data() || {};
            o.id = o.id || d.id;
            return o;
          });
          cacheWrite(list);
          cb(list, true);
        }, function (err) {
          state.lastError = friendly(err);
          cb(cacheRead(), false);
        });
    } catch (e) {
      return function () {};
    }
  }

  /* ==========================================
     ERRORS
     ========================================== */

  function friendly(err) {
    var code = (err && err.code) || "";
    var msg  = (err && err.message) || String(err);

    if (code === "permission-denied" || /permission/i.test(msg)) {
      return "Firestore rules me write allowed nahi hai";
    }
    if (code === "unavailable" || /network|offline|fetch/i.test(msg)) {
      return "Internet nahi hai - data browser me save ho gaya";
    }
    if (/exceed|too large|1 ?MiB|1048576/i.test(msg)) {
      return "Document 1MB se bada ho gaya";
    }
    return msg;
  }

  return {
    COL: COL,
    init: init,
    isOnline: function () { return init() && !!state.db; },
    lastError: function () { return state.lastError; },

    cacheRead: cacheRead,
    cacheWrite: cacheWrite,
    cacheAdd: cacheAdd,
    cacheUpdate: cacheUpdate,
    cacheRemove: cacheRemove,
    onSync: function (cb) { window.addEventListener("4r-sync", cb); },

    saveComplaint: saveComplaint,
    listComplaints: listComplaints,
    updateStatus: updateStatus,
    deleteComplaint: deleteComplaint,
    deleteAll: deleteAll,
    subscribe: subscribe
  };

})();
