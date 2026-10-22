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
      setLastError(err);
      return { ok: false, offline: true, chat: null };
    });
}

export function watchChat(id, cb) {
  const r = chatRef(id);
  if (!r) {
    cb(null, false);
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
      setLastError(err);
      cb(null, false);
    }
  );
}

export function watchChats(cb) {
  const c = coll();
  if (!c) {
    cb([], false);
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
        setLastError(err);
        cb([], false);
      }
    );
}

export function watchMessages(id, cb) {
  const m = msgColl(id);
  if (!m) {
    cb([], false);
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
        setLastError(err);
        cb([], false);
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
      setLastError(err);
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
      setLastError(err);
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
