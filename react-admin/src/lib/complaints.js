import { getDb, setLastError } from "./fb.js";

export const CACHE_KEY = "4rbet_complaints";
export const COL = window.FIREBASE_COLLECTION || "complaints";

export function cacheRead() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

export function cacheWrite(list) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(list));
    return true;
  } catch (e) {
    return false;
  }
}

export function cacheUpdate(id, patch) {
  const list = cacheRead();
  list.forEach((r) => {
    if (r.id === id) Object.assign(r, patch);
  });
  cacheWrite(list);
  return list;
}

export function cacheRemove(id) {
  const list = cacheRead().filter((r) => r.id !== id);
  cacheWrite(list);
  return list;
}

function emit() {
  try {
    window.dispatchEvent(new CustomEvent("4r-sync"));
  } catch (e) {
    /* old browser */
  }
}

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

export function listComplaints() {
  const D = db();
  if (!D) return Promise.resolve(cacheRead());

  return D.collection(COL)
    .orderBy("submittedAt", "desc")
    .get()
    .then((snap) => {
      const list = snap.docs.map((d) => {
        const o = d.data() || {};
        o.id = o.id || d.id;
        return o;
      });
      cacheWrite(list);
      emit();
      return list;
    })
    .catch((err) => {
      setLastError(err);
      return cacheRead();
    });
}

export function updateStatus(id, status, statusAt) {
  const at = statusAt || new Date().toISOString();
  cacheUpdate(id, { status, statusAt: at });
  emit();

  const D = db();
  if (!D) return Promise.resolve({ ok: false, offline: true });

  return D.collection(COL)
    .doc(id)
    .update({ status, statusAt: at })
    .then(() => ({ ok: true, offline: false }))
    .catch((err) => {
      setLastError(err);
      return { ok: false, offline: true, error: err.message };
    });
}

export function deleteComplaint(id) {
  cacheRemove(id);
  emit();

  const D = db();
  if (!D) return Promise.resolve({ ok: false, offline: true });

  return D.collection(COL)
    .doc(id)
    .delete()
    .then(() => ({ ok: true, offline: false }))
    .catch((err) => {
      setLastError(err);
      return { ok: false, offline: true, error: err.message };
    });
}

export function deleteAll() {
  const D = db();
  if (!D) {
    cacheWrite([]);
    emit();
    return Promise.resolve({ ok: false, offline: true });
  }

  return D.collection(COL)
    .get()
    .then((snap) => {
      const batch = D.batch();
      snap.docs.forEach((d) => batch.delete(d.ref));
      return batch.commit();
    })
    .then(() => {
      cacheWrite([]);
      emit();
      return { ok: true, offline: false };
    })
    .catch((err) => {
      setLastError(err);
      return { ok: false, offline: true, error: err.message };
    });
}

export function subscribe(cb) {
  const D = db();
  if (!D) return () => {};

  try {
    return D.collection(COL)
      .orderBy("submittedAt", "desc")
      .onSnapshot(
        (snap) => {
          const list = snap.docs.map((d) => {
            const o = d.data() || {};
            o.id = o.id || d.id;
            return o;
          });
          cacheWrite(list);
          cb(list, true);
        },
        (err) => {
          setLastError(err);
          cb(cacheRead(), false);
        }
      );
  } catch (e) {
    return () => {};
  }
}
