import { getDb, setLastError, FB } from "./fb.js";

export const COL = window.FIREBASE_CHAT_COLLECTION || "chats";
const MSG = "messages";
const ID_KEY = "4rbet_chat_id";
const NAME_KEY = "4rbet_chat_name";

const IMG_MAX_BYTES = 700 * 1024;
const FILE_MAX_BYTES = 350 * 1024;

function db() {
  try {
    return getDb();
  } catch (e) {
    setLastError(e);
    return null;
  }
}

export function isOnline() {
  return !!db();
}

function coll() {
  const D = db();
  return D ? D.collection(COL) : null;
}

function chatRef(id) {
  const c = coll();
  return c ? c.doc(id) : null;
}

function msgColl(id) {
  const r = chatRef(id);
  return r ? r.collection(MSG) : null;
}

function genId() {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let out = "";

  if (window.crypto && window.crypto.getRandomValues) {
    const buf = new Uint8Array(16);
    window.crypto.getRandomValues(buf);
    for (let i = 0; i < buf.length; i++) out += chars[buf[i] % chars.length];
    return out;
  }

  for (let i = 0; i < 16; i++) out += chars[Math.floor(Math.random() * chars.length)];
  return out;
}

export function myId() {
  let id = "";
  try {
    id = localStorage.getItem(ID_KEY) || "";
  } catch (e) {
    id = "";
  }
  if (!id) {
    id = genId();
    try {
      localStorage.setItem(ID_KEY, id);
    } catch (e) {
      /* ignore */
    }
  }
  return id;
}

export function guestName(id) {
  return "Guest #" + String(id || myId()).slice(0, 4).toUpperCase();
}

export function myName() {
  try {
    return localStorage.getItem(NAME_KEY) || "";
  } catch (e) {
    return "";
  }
}

export function setName(name) {
  const n = String(name || "").trim().slice(0, 40);
  try {
    localStorage.setItem(NAME_KEY, n);
  } catch (e) {
    /* ignore */
  }
  return n;
}

export function getChat(id) {
  const r = chatRef(id);
  if (!r) {
    return Promise.resolve({ ok: false, offline: true, chat: null });
  }

  return r
    .get()
    .then((snap) => {
      if (!snap.exists) return { ok: true, offline: false, chat: null };
      const o = snap.data() || {};
      o.id = o.id || snap.id;
      return { ok: true, offline: false, chat: o };
    })
    .catch((err) => {
      setLastError(classify(err));
      return { ok: false, offline: true, chat: null };
    });
}

export function watchChat(id, cb) {
  const r = chatRef(id);
  if (!r) {
    cb(null, false, reason());
    return () => {};
  }

  return r.onSnapshot(
    (snap) => {
      if (!snap.exists) {
        cb(null, true);
        return;
      }
      const o = snap.data() || {};
      o.id = o.id || snap.id;
      cb(o, true);
    },
    (err) => {
      setLastError(classify(err));
      cb(null, false, reason());
    }
  );
}

export function watchChats(cb) {
  const c = coll();
  if (!c) {
    cb([], false, reason());
    return () => {};
  }

  return c
    .orderBy("updatedAt", "desc")
    .limit(200)
    .onSnapshot(
      (snap) => {
        const list = snap.docs.map((d) => {
          const o = d.data() || {};
          o.id = o.id || d.id;
          return o;
        });
        cb(list, true);
      },
      (err) => {
        setLastError(classify(err));
        cb([], false, reason());
      }
    );
}

export function watchMessages(id, cb) {
  const m = msgColl(id);
  if (!m) {
    cb([], false, reason());
    return () => {};
  }

  return m
    .orderBy("at", "asc")
    .limit(500)
    .onSnapshot(
      (snap) => {
        const list = snap.docs.map((d) => {
          const o = d.data() || {};
          o.id = d.id;
          return o;
        });
        cb(list, true);
      },
      (err) => {
        setLastError(classify(err));
        cb([], false, reason());
      }
    );
}

function preview(m) {
  if (m.text) return String(m.text).slice(0, 90);
  if (m.image) return "Photo";
  if (m.fileName) return "File: " + m.fileName;
  return "";
}

export function send(id, msg) {
  const D = db();
  const r = chatRef(id);
  const m = msgColl(id);
  if (!D || !r || !m) {
    return Promise.resolve({ ok: false, offline: true });
  }

  const who = msg.who === "admin" ? "admin" : "user";
  const at = new Date().toISOString();

  const body = {
    who,
    text: String(msg.text || "").slice(0, 4000),
    at,
    name: msg.name || (who === "admin" ? "4R Support" : "")
  };

  if (msg.image) body.image = msg.image;
  if (msg.fileName) body.fileName = String(msg.fileName).slice(0, 120);
  if (msg.fileData) body.fileData = msg.fileData;

  const patch = {
    id,
    updatedAt: at,
    lastText: preview(body),
    lastWho: who
  };

  try {
    const inc = FB.firestore.FieldValue.increment(1);
    if (who === "user") patch.unreadAdmin = inc;
    else patch.unreadUser = inc;
  } catch (e) {
    if (who === "user") patch.unreadAdmin = 1;
    else patch.unreadUser = 1;
  }

  const batch = D.batch();
  batch.set(m.doc(), body);
  batch.set(r, patch, { merge: true });

  return batch
    .commit()
    .then(() => ({ ok: true, offline: false }))
    .catch((err) => {
      setLastError(classify(err));
      return { ok: false, offline: true, error: err.message };
    });
}

export function markRead(id, side) {
  const r = chatRef(id);
  if (!r) return Promise.resolve(false);

  const patch = {};
  patch[side === "admin" ? "unreadAdmin" : "unreadUser"] = 0;

  return r
    .set(patch, { merge: true })
    .then(() => true)
    .catch(() => false);
}

export function deleteChat(id) {
  const D = db();
  const r = chatRef(id);
  const m = msgColl(id);
  if (!D || !r || !m) return Promise.resolve({ ok: false, offline: true });

  return m
    .limit(400)
    .get()
    .then((snap) => {
      const batch = D.batch();
      snap.docs.forEach((d) => batch.delete(d.ref));
      batch.delete(r);
      return batch.commit();
    })
    .then(() => ({ ok: true }))
    .catch((err) => {
      setLastError(classify(err));
      return { ok: false, error: err.message };
    });
}

export function readImage(file) {
  return new Promise((resolve, reject) => {
    if (!file || !/^image\//.test(file.type || "")) {
      reject(new Error("Sirf image file chunein."));
      return;
    }

    const reader = new FileReader();

    reader.onerror = () => reject(new Error("File padhi nahi ja saki."));

    reader.onload = () => {
      const raw = String(reader.result || "");
      const img = new Image();

      img.onerror = () => resolve({ dataUrl: raw, name: file.name });

      img.onload = () => {
        const max = 1000;
        const scale = Math.min(1, max / Math.max(img.width, img.height));
        const w = Math.max(1, Math.round(img.width * scale));
        const h = Math.max(1, Math.round(img.height * scale));

        const cv = document.createElement("canvas");
        cv.width = w;
        cv.height = h;
        cv.getContext("2d").drawImage(img, 0, 0, w, h);

        let out = raw;
        try {
          out = cv.toDataURL("image/jpeg", 0.72);
        } catch (e) {
          out = raw;
        }

        if (out.length > IMG_MAX_BYTES) {
          try {
            out = cv.toDataURL("image/jpeg", 0.5);
          } catch (e) {
            /* ignore */
          }
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

/* ==========================================
   ERROR CLASSIFICATION
   "internet nahi hai" tab hi bolo jab sach me
   network ki problem ho - warna asli wajah batao.
   ========================================== */

export function browserOnline() {
  return typeof navigator === "undefined" ? true : navigator.onLine !== false;
}

const HINTS = {
  OK: "Connection theek hai.",
  SDK: "Firebase SDK load nahi hua. Internet / CDN check karein.",
  CONFIG: "js/firebase-config.js me projectId ya apiKey galat hai.",
  DATABASE: "Firebase Console > Firestore Database > Create Database (Native mode) se database banayein.",
  RULES: "Repo ki firestore.rules ko Firebase Console > Firestore Database > Rules me paste karke PUBLISH dabayein.",
  NETWORK: "Device offline hai, ya page file:// se khula hai (http(s) server zaroori hai), ya network Firebase ko block kar raha hai.",
  SIZE: "Attachment chhota karein.",
  OTHER: "Error code check karein."
};

let lastWhy = "";
let lastCode = "";

export function classify(err) {
  const code = (err && err.code) || "";
  const msg = (err && err.message) || String(err);
  const low = String(msg).toLowerCase();

  lastCode = code;

  if (/api key not valid|api key not enabled|invalid api key|api_key/.test(low)) {
    lastWhy = "CONFIG";
    return "Firebase API key valid nahi hai — js/firebase-config.js check karein";
  }

  if (/does not exist|not found|no such project/.test(low) && /project|firebase/.test(low)) {
    lastWhy = "CONFIG";
    return "Firebase project exist nahi karta (projectId galat ya project delete ho gaya)";
  }

  if (/firestore api.*(not enabled|has not been enabled)|cloud firestore api/.test(low)) {
    lastWhy = "DATABASE";
    return "Project me Cloud Firestore API enable nahi hai";
  }

  if (code === "failed-precondition" || /failed-precondition|has not been created/.test(low)) {
    lastWhy = "DATABASE";
    return "Firestore database create nahi hua — Firebase Console > Firestore Database > Create Database";
  }

  if (code === "permission-denied" || /permission/i.test(msg) || /missing or insufficient/.test(low)) {
    lastWhy = "RULES";
    return "Firestore rules chat ko allow nahi kar rahi — firestore.rules publish karein";
  }

  if (!browserOnline()) {
    lastWhy = "NETWORK";
    return "Internet band hai (device offline hai)";
  }

  if (code === "unavailable" || /network|offline|failed to fetch|load failed|net::|cors|timeout/.test(low)) {
    lastWhy = "NETWORK";
    return "Firebase server tak request nahi pahunchi — internet / firewall / file:// protocol";
  }

  if (/exceed|too large|1 ?MiB|1048576/.test(low)) {
    lastWhy = "SIZE";
    return "Message bahut bada hai.";
  }

  lastWhy = "OTHER";
  return msg;
}

export function why() {
  return lastWhy || (isOnline() ? "OK" : "SDK");
}

export function reason() {
  return HINTS[why()] || HINTS.OTHER;
}

export function errorCode() {
  return lastCode;
}

export function readFile(file) {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject(new Error("File chunein."));
      return;
    }

    if (file.size > FILE_MAX_BYTES) {
      reject(new Error("File 350KB se badi hai. Chhoti file bhejein."));
      return;
    }

    const reader = new FileReader();
    reader.onerror = () => reject(new Error("File padhi nahi ja saki."));
    reader.onload = () => {
      resolve({ dataUrl: String(reader.result || ""), name: file.name });
    };
    reader.readAsDataURL(file);
  });
}
