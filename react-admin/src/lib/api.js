/* ==========================================================
   4R BET  |  react-admin  ->  PHP API client
   ----------------------------------------------------------
   Backend: PHP (Wasmer Edge) + JSON-file database.
   Ye module chat / complaints / auth / telegram - chaaron ka
   API implementation deta hai. Purane Firestore modules
   (chat-firestore.js, complaints-firestore.js, auth-firestore.js)
   abhi bhi maujood hain; chat.js / complaints.js / auth.js
   facade MODE ke hisaab se impl chunte hain.

   Config (priority):
     1. window.FOURR_API        (public/js/api-config.js)
     2. import.meta.env.VITE_API_BASE / VITE_BACKEND
     3. default: backend "api", base "/api" (Vercel rewrite -> Wasmer)
   ========================================================== */

const W = typeof window !== "undefined" ? window : {};
const CFG = W.FOURR_API || {};

const ENV_BASE = (import.meta && import.meta.env && import.meta.env.VITE_API_BASE) || "";
const ENV_BACKEND = (import.meta && import.meta.env && import.meta.env.VITE_BACKEND) || "";

export const MODE =
  (ENV_BACKEND || CFG.backend || "api") === "firebase" ? "firebase" : "api";

const RAW_BASE = ENV_BASE || CFG.base || "";
export const BASE = normBase(RAW_BASE);
export const ORIGIN = BASE.replace(/\/api$/, "");

const POLL = Number(CFG.pollMs) || 1500;
const POLL_FAST = Number(CFG.pollFastMs) || 900;
const ADMIN_POLL = Number(CFG.adminPollMs) || 3000;
const MAIL_POLL = Number(CFG.mailPollMs) || 15000;

const DEVICE_KEY = CFG.deviceKey || "4rbet_device_id";
const TOKEN_KEY = CFG.tokenKey || "4rbet_admin_token";
const PROFILE_KEY = CFG.adminKey || "4rbet_admin_profile";
const CACHE_KEY = CFG.cacheKey || "4rbet_complaints";   /* purana key hi reuse - cache na toote */
const CHAT_ID_KEY = "4rbet_chat_id";
const CHAT_NAME_KEY = "4rbet_chat_name";

function normBase(b) {
  const s = String(b == null ? "" : b).trim().replace(/\/+$/, "");
  if (!s) return "/api";
  return /\/api$/.test(s) ? s : s + "/api";
}

/* ---------- tiny helpers ---------- */

const lsGet = (k) => { try { return W.localStorage.getItem(k); } catch (e) { return null; } };
const lsSet = (k, v) => { try { W.localStorage.setItem(k, String(v)); return true; } catch (e) { return false; } };
const lsDel = (k) => { try { W.localStorage.removeItem(k); } catch (e) {} };

function randHex(n) {
  let out = "";
  if (W.crypto && W.crypto.getRandomValues) {
    const buf = new Uint8Array(n);
    W.crypto.getRandomValues(buf);
    for (let i = 0; i < buf.length; i++) out += (buf[i] < 16 ? "0" : "") + buf[i].toString(16);
    return out;
  }
  for (let j = 0; j < n * 2; j++) out += Math.floor(Math.random() * 16).toString(16);
  return out;
}

export function deviceId() {
  let d = lsGet(DEVICE_KEY);
  if (!d || !/^[A-Za-z0-9_-]{8,64}$/.test(d)) {
    d = "d" + randHex(12);
    lsSet(DEVICE_KEY, d);
  }
  return d;
}

export const getToken = () => lsGet(TOKEN_KEY) || "";
export const setToken = (t) => (t ? lsSet(TOKEN_KEY, t) : lsDel(TOKEN_KEY));
export const getProfile = () => { try { return JSON.parse(lsGet(PROFILE_KEY) || "null"); } catch (e) { return null; } };
export const setProfile = (p) => (p ? lsSet(PROFILE_KEY, JSON.stringify(p)) : lsDel(PROFILE_KEY));

export function absUrl(u) {
  const s = String(u || "");
  if (!s) return "";
  if (/^(https?:|data:|blob:)/i.test(s)) return s;
  return ORIGIN + (s.charAt(0) === "/" ? s : "/" + s);
}

/* ---------- error classification (chat-firestore.js jaisi hi keys) ---------- */

export const HINTS = {
  OK: "Sab theek hai — API connect ho gayi.",
  CONFIG: "API base set karein (public/js/api-config.js ya VITE_API_BASE) — Wasmer app ka URL.",
  NETWORK: "API tak request pahunchi hi nahi. Internet ya Wasmer app URL check karein.",
  CORS: "Browser ne request rok di (CORS). app.yaml ke ALLOWED_ORIGINS me ye domain daalein.",
  SERVER: "API ne 5xx diya. Wasmer logs dekhein: wasmer app logs <app>",
  DATABASE: "API chal rahi hai par data dir writable nahi — volume mount (/data) check karein.",
  AUTH: "Login zaroori hai ya session expire ho gaya.",
  WRITE: "Read ok hai, write fail — volume permission / disk check karein.",
  SIZE: "Payload bahut bada hai (image limit 4MB).",
  OTHER: "Kuch galat hua — report copy karke bhejein.",
};

const state = { lastError: "", lastCode: "", lastWhy: "OK", online: false, health: null };

export const hint = (w) => HINTS[w] || HINTS.OTHER;
export const why = () => state.lastWhy || "OK";
export const reason = () => state.lastError || (why() === "OK" ? "" : hint(why()));
export const errorCode = () => state.lastCode || "";
export const browserOnline = () => (W.navigator ? W.navigator.onLine !== false : true);
export const lastError = () => state.lastError;

function classify(err, status) {
  const msg = String((err && (err.message || err)) || "");

  if (status === 401 || status === 403) {
    state.lastWhy = "AUTH";
    state.lastError = msg || "Login zaroori hai";
  } else if (status >= 500) {
    state.lastWhy = "SERVER";
    state.lastError = msg || "API error " + status;
  } else if (status === 413) {
    state.lastWhy = "SIZE";
    state.lastError = msg || "Payload bahut bada hai";
  } else if (/failed to fetch|networkerror|load failed|network/i.test(msg)) {
    state.lastWhy = browserOnline() ? "CORS" : "NETWORK";
    state.lastError = browserOnline()
      ? "API se connect nahi hua — URL ya CORS (ALLOWED_ORIGINS) check karein"
      : "Internet nahi hai (browser offline)";
  } else {
    state.lastWhy = "OTHER";
    state.lastError = msg || "Unknown error";
  }

  state.lastCode = status ? String(status) : "";
  return state.lastError;
}

export function friendly(err) { return classify(err, 0); }

/* ---------- core request ---------- */

export function url(path) {
  const p = String(path || "");
  return BASE + (p.charAt(0) === "/" ? p : "/" + p);
}

export function request(method, path, body, opts = {}) {
  const headers = { "X-Device-Id": deviceId() };
  let payload = null;

  if (body instanceof FormData) payload = body;
  else if (body != null) {
    headers["Content-Type"] = "application/json";
    payload = JSON.stringify(body);
  }

  const t = opts.token === undefined ? getToken() : opts.token;
  if (t) headers.Authorization = "Bearer " + t;

  const started = Date.now();

  return fetch(url(path), { method, headers, body: payload, cache: "no-store" })
    .then((res) => {
      const ct = res.headers.get("content-type") || "";
      const p = /json/i.test(ct) ? res.json() : res.text();
      return p.then((data) => {
        const ms = Date.now() - started;
        if (!res.ok) {
          const msg = (data && data.error) || "HTTP " + res.status;
          classify(new Error(msg), res.status);
          return { ok: false, status: res.status, code: res.status, error: msg, why: why(), hint: hint(why()), ms, data };
        }
        state.lastError = ""; state.lastCode = ""; state.lastWhy = "OK"; state.online = true;
        return { ok: true, status: res.status, data, ms };
      });
    })
    .catch((err) => {
      const msg = classify(err, 0);
      state.online = false;
      return { ok: false, status: 0, code: 0, error: msg, why: why(), hint: hint(why()), offline: true };
    });
}

export const isOnline = () => MODE === "api" && (state.online || state.lastWhy === "OK");
export const health = () => request("GET", "/health").then((r) => { if (r.ok) state.health = r.data; return r; });

function dataUrlToBlob(dataUrl, fallbackName) {
  try {
    const parts = String(dataUrl || "").split(",");
    const mime = ((parts[0] || "").match(/data:([^;]+)/) || [, "application/octet-stream"])[1];
    const bin = atob(parts[1] || "");
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
    const ext = (mime.split("/")[1] || "bin").replace("jpeg", "jpg");
    return { blob: new Blob([arr], { type: mime }), name: fallbackName || "file." + ext };
  } catch (e) { return null; }
}

/* ==========================================================
   CHAT
   ========================================================== */

const chats = {};

function cs(id) {
  if (!chats[id]) chats[id] = { items: [], seq: 0, chat: null, subsM: [], subsC: [], timer: null, inflight: false, fails: 0 };
  return chats[id];
}

export function mapMessage(m) {
  const out = {
    id: m.id || "", seq: Number(m.seq || 0),
    who: m.who === "admin" ? "admin" : "user",
    text: String(m.text || ""), at: m.at || "", name: m.name || "",
  };
  const a = m.attachment;
  if (a && a.url) {
    const u = absUrl(a.url);
    out.attachment = a;
    out.fileName = a.name || "";
    if (a.kind === "image") out.image = u;
    else { out.fileData = u; out.fileUrl = u; }
  }
  return out;
}

function notify(st) {
  const list = st.items.slice();
  st.subsM.forEach((cb) => { try { cb(list, true, ""); } catch (e) { console.warn(e); } });
  st.subsC.forEach((cb) => { try { cb(st.chat, true, ""); } catch (e) { console.warn(e); } });
}

function notifyFail(st) {
  st.subsM.forEach((cb) => { try { cb(st.items.slice(), false, reason()); } catch (e) {} });
  st.subsC.forEach((cb) => { try { cb(st.chat, false, reason()); } catch (e) {} });
}

function tick(id) {
  const st = cs(id);
  if (st.inflight) return;
  if (typeof document !== "undefined" && document.hidden) {
    st.timer = setTimeout(() => tick(id), POLL * 3);
    return;
  }
  st.inflight = true;

  request("GET", "/chats/" + encodeURIComponent(id) + "/messages?since=" + st.seq + "&limit=500").then((res) => {
    st.inflight = false;

    if (!res.ok) {
      st.fails++;
      if (st.fails === 1 || st.fails % 10 === 0) notifyFail(st);
      st.timer = setTimeout(() => tick(id), POLL * Math.min(8, st.fails));
      return;
    }

    st.fails = 0;
    const d = res.data || {};
    const items = d.items || [];

    if (items.length) {
      items.forEach((raw) => {
        const mm = mapMessage(raw);
        if (!st.items.some((x) => x.id === mm.id)) st.items.push(mm);
      });
      st.items.sort((a, b) => a.seq - b.seq);
      if (st.items.length > 800) st.items = st.items.slice(-800);
    }

    if (typeof d.seq === "number") st.seq = d.seq;
    if (d.chat) st.chat = d.chat;

    notify(st);
    st.timer = setTimeout(() => tick(id), d.truncated ? 60 : (items.length ? POLL_FAST : POLL));
  });
}

function startPoll(id) { const st = cs(id); if (!st.timer) tick(id); }

function stopIfIdle(id) {
  const st = chats[id];
  if (!st) return;
  if (!st.subsM.length && !st.subsC.length) { if (st.timer) clearTimeout(st.timer); st.timer = null; }
}

if (typeof document !== "undefined") {
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) return;
    Object.keys(chats).forEach((id) => {
      const st = chats[id];
      if (st.timer) { clearTimeout(st.timer); st.timer = null; }
      if (st.subsM.length || st.subsC.length) tick(id);
    });
  });
}

export function myId() {
  let id = lsGet(CHAT_ID_KEY);
  if (!id || !/^[A-Za-z0-9_-]{8,40}$/.test(id)) { id = "c" + randHex(8); lsSet(CHAT_ID_KEY, id); }
  return id;
}
export function guestName(id) { return "Guest #" + String(id || "").slice(0, 4).toUpperCase(); }
export function myName() { return lsGet(CHAT_NAME_KEY) || ""; }
export function setName(name) {
  const n = String(name || "").trim().slice(0, 40);
  if (n) lsSet(CHAT_NAME_KEY, n);
  return n;
}

export function getChat(id) {
  return request("GET", "/chats/" + encodeURIComponent(id) + "/messages?since=999999999&limit=1").then((res) => {
    if (!res.ok) return { ok: false, offline: !res.status, error: res.error, chat: null };
    const chat = (res.data && res.data.chat) || null;
    cs(id).chat = chat;
    return { ok: true, offline: false, chat };
  });
}

export function ensureChat(id, name) {
  return request("POST", "/chats", { chatId: id, userName: name || myName() }).then((res) => {
    if (!res.ok) return { ok: false, offline: !res.status, error: res.error, created: false };
    const chat = res.data && res.data.chat;
    if (chat) cs(id).chat = chat;
    return { ok: true, offline: false, created: !!(res.data && res.data.created), chat };
  });
}

export function watchChat(id, cb) {
  const st = cs(id);
  st.subsC.push(cb);
  startPoll(id);
  if (st.chat) setTimeout(() => cb(st.chat, true, ""), 0);
  return () => { st.subsC = st.subsC.filter((f) => f !== cb); stopIfIdle(id); };
}

export function watchMessages(id, cb) {
  const st = cs(id);
  st.subsM.push(cb);
  startPoll(id);
  if (st.items.length) setTimeout(() => cb(st.items.slice(), true, ""), 0);
  return () => { st.subsM = st.subsM.filter((f) => f !== cb); stopIfIdle(id); };
}

export function watchChats(cb) {
  let stopped = false;
  const loop = () => {
    if (stopped) return;
    request("GET", "/admin/chats?limit=200").then((res) => {
      if (res.ok) cb((res.data && res.data.items) || [], true, "");
      else cb([], false, reason());
      if (!stopped) setTimeout(loop, res.ok ? ADMIN_POLL : ADMIN_POLL * 4);
    });
  };
  loop();
  return () => { stopped = true; };
}

export function send(id, msg) {
  msg = msg || {};
  const who = msg.who === "admin" ? "admin" : "user";
  const path = (who === "admin" ? "/admin/chats/" : "/chats/") + encodeURIComponent(id) + "/messages";

  const fd = new FormData();
  fd.append("text", String(msg.text || "").slice(0, 4000));
  if (msg.name) fd.append("userName", String(msg.name).slice(0, 40));

  const payload = msg.image || msg.fileData || msg.file;
  if (payload) {
    let b = null;
    if (typeof Blob !== "undefined" && payload instanceof Blob) b = { blob: payload, name: msg.fileName || payload.name || "file" };
    else if (/^data:/.test(String(payload))) b = dataUrlToBlob(payload, msg.fileName);
    if (!b) return Promise.resolve({ ok: false, offline: false, error: "File padhi nahi ja saki" });
    fd.append("file", b.blob, b.name);
  }

  return request("POST", path, fd).then((res) => {
    if (!res.ok) return { ok: false, offline: !res.status, error: res.error };
    const st = chats[id];
    if (st) {
      if (st.timer) { clearTimeout(st.timer); st.timer = null; }
      if (st.subsM.length || st.subsC.length) tick(id);
    }
    return { ok: true, offline: false, message: res.data && res.data.message };
  });
}

export function markRead(id, side) {
  const base = side === "admin" ? "/admin/chats/" : "/chats/";
  return request("POST", base + encodeURIComponent(id) + "/read").then((res) => {
    if (!res.ok) return { ok: false, error: res.error };
    const st = chats[id];
    if (st && st.chat) st.chat[side === "admin" ? "unreadAdmin" : "unreadUser"] = 0;
    return { ok: true };
  });
}

export function deleteChat(id) {
  return request("DELETE", "/admin/chats/" + encodeURIComponent(id)).then((res) => {
    if (!res.ok) return { ok: false, error: res.error };
    if (chats[id]) { if (chats[id].timer) clearTimeout(chats[id].timer); delete chats[id]; }
    return { ok: true };
  });
}

export function deleteMessage(id, msgId) {
  const path = (getToken() ? "/admin/chats/" : "/chats/") + encodeURIComponent(id) + "/messages/" + encodeURIComponent(msgId);
  return request("DELETE", path).then((res) => {
    if (!res.ok) return { ok: false, error: res.error };
    const st = chats[id];
    if (st) { st.items = st.items.filter((m) => m.id !== msgId); notify(st); }
    return { ok: true };
  });
}

/* image/file: API me real upload hota hai, isliye dataURL compress ki zaroorat nahi.
   Interface wahi rakha hai jo chat-firestore.js ka tha. */
export function readImage(file) {
  return new Promise((resolve, reject) => {
    if (!file) return reject(new Error("File nahi mili"));
    if (!/^image\//.test(file.type || "")) return reject(new Error("Sirf image file chunein."));
    if (file.size > 4 * 1024 * 1024) return reject(new Error("Image 4MB se badi hai."));
    resolve({ file, name: file.name, bytes: file.size });
  });
}

export function readFile(file) {
  return new Promise((resolve, reject) => {
    if (!file) return reject(new Error("File nahi mili"));
    if (file.size > 2 * 1024 * 1024) return reject(new Error("File 2MB se badi hai."));
    resolve({ file, name: file.name, bytes: file.size });
  });
}

/* ==========================================================
   COMPLAINTS
   ========================================================== */

export function cacheRead() {
  try { const l = JSON.parse(lsGet(CACHE_KEY) || "[]"); return Array.isArray(l) ? l : []; } catch (e) { return []; }
}

function emit() { try { W.dispatchEvent(new CustomEvent("4r-sync")); } catch (e) {} }

export function cacheWrite(list) {
  const ok = lsSet(CACHE_KEY, JSON.stringify((list || []).slice(0, 300)));
  emit();
  return ok;
}

export function cacheUpdate(id, patch) {
  const list = cacheRead();
  list.forEach((r) => { if (r.id === id) Object.assign(r, patch); });
  return cacheWrite(list);
}

export function cacheRemove(id) {
  return cacheWrite(cacheRead().filter((r) => r.id !== id));
}

/* API item -> Firestore-doc jaisa record (pages ka code na badle) */
export function toRecord(it) {
  const images = (it.images || []).map((im) => ({
    field: im.field || "", name: im.name || "", dataUrl: absUrl(im.url || ""), url: absUrl(im.url || ""), id: im.id || "",
  }));

  return Object.assign({}, it.data || {}, {
    id: it.id,
    category: it.category || "Complaint",
    formId: it.formId || "",
    data: it.data || {},
    images,
    status: it.status || "pending",
    submittedAt: it.createdAt || it.submittedAt || "",
    updatedAt: it.updatedAt || "",
    statusAt: it.statusAt || "",
    deviceId: it.deviceId || "",
    chatId: it.chatId || "",
    cloud: true,
  });
}

export function listComplaints() {
  return request("GET", "/admin/complaints?limit=500").then((res) => {
    if (!res.ok) return cacheRead();
    const items = (res.data && res.data.items) || [];
    const list = items.map(toRecord);
    cacheWrite(list);
    return list;
  });
}

export function updateStatus(id, status, statusAt) {
  return request("PATCH", "/admin/complaints/" + encodeURIComponent(id), { status }).then((res) => {
    if (!res.ok) return { ok: false, error: res.error };
    cacheUpdate(id, { status, statusAt: statusAt || new Date().toISOString() });
    return { ok: true };
  });
}

export function deleteComplaint(id) {
  return request("DELETE", "/admin/complaints/" + encodeURIComponent(id)).then((res) => {
    if (!res.ok) return { ok: false, error: res.error };
    cacheRemove(id);
    return { ok: true };
  });
}

export function deleteAll() {
  return request("GET", "/admin/complaints?limit=500").then((res) => {
    if (!res.ok) return { ok: false, error: res.error };
    const items = (res.data && res.data.items) || [];
    return items
      .reduce((p, it) => p.then(() => deleteComplaint(it.id)), Promise.resolve())
      .then(() => ({ ok: true, deleted: items.length }));
  });
}

export function subscribe(cb) {
  let stopped = false;
  const loop = () => {
    if (stopped) return;
    listComplaints().then((list) => { if (typeof cb === "function") cb(list); });
    if (!stopped) setTimeout(loop, MAIL_POLL);
  };
  loop();
  return () => { stopped = true; };
}

export const onSync = (cb) => { W.addEventListener("4r-sync", cb); return () => W.removeEventListener("4r-sync", cb); };

/* ==========================================================
   AUTH
   ========================================================== */

export function signIn(mail, pass) {
  return request("POST", "/admin/login", { email: mail, password: pass }, { token: "" }).then((res) => {
    if (!res.ok) throw new Error(res.error || "Login fail");
    const d = res.data || {};
    setToken(d.token || "");
    setProfile(d.admin || null);
    const user = toUser(d.admin || {}, d.token);
    authSubs.forEach((cb) => { try { cb(user); } catch (e) {} });
    return { user, created: !!d.created, token: d.token, note: d.note || "" };
  });
}

function toUser(admin, tok) {
  return {
    uid: admin.id || admin.email || "admin",
    email: admin.email || "",
    displayName: admin.name || "Admin",
    role: admin.role || "admin",
    token: tok || getToken(),
    isAnonymous: false,
    metadata: {},
  };
}

export function signOut() {
  setToken(""); setProfile(null);
  authSubs.forEach((cb) => { try { cb(null); } catch (e) {} });
  return Promise.resolve();
}

const authSubs = [];

export function onAuth(cb) {
  authSubs.push(cb);

  const tok = getToken();
  const prof = getProfile();

  if (!tok) { setTimeout(() => cb(null), 0); return () => {}; }

  /* token server par abhi bhi valid hai? */
  request("GET", "/admin/me").then((res) => {
    if (res.ok) {
      const a = (res.data && res.data.admin) || prof || {};
      cb(toUser(a, tok));
    } else {
      if (res.status === 401) { setToken(""); setProfile(null); }
      cb(null);
    }
  });

  return () => { const i = authSubs.indexOf(cb); if (i >= 0) authSubs.splice(i, 1); };
}

export const ADMIN_EMAIL = "4r@admin.com";

/* ==========================================================
   TELEGRAM shim (Settings.jsx window.FourRTelegram use karta hai)
   ----------------------------------------------------------
   Server-side alerts: token ab browser me nahi, volume par hai.
   Sync methods (getSettings/queueSize/isReady) local cache se
   chalte hain, jo /admin/settings se bhara jaata hai.
   ========================================================== */

const tgCache = { botToken: "", chatId: "", enabled: false, queueLen: 0, loaded: false };
const tgSubs = [];

export function loadTelegramSettings() {
  if (!getToken()) return Promise.resolve(tgCache);
  return request("GET", "/admin/settings").then((res) => {
    if (res.ok && res.data && res.data.telegram) {
      Object.assign(tgCache, res.data.telegram, { loaded: true });
      tgSubs.forEach((f) => { try { f(tgCache); } catch (e) {} });
    }
    return tgCache;
  });
}

export const TelegramShim = {
  getSettings: () => ({ botToken: tgCache.botToken || "", chatId: tgCache.chatId || "", enabled: !!tgCache.enabled }),
  saveSettings(patch) {
    Object.assign(tgCache, patch || {});
    tgSubs.forEach((f) => { try { f(tgCache); } catch (e) {} });
    request("PUT", "/admin/settings", { telegram: patch || {} }).then((res) => {
      if (res.ok && res.data && res.data.settings && res.data.settings.telegram) {
        Object.assign(tgCache, res.data.settings.telegram);
      }
    });
    return true;
  },
  isReady: () => !!(tgCache.botToken && tgCache.chatId),
  buildMessage: (rec) => "New Complaint - 4R BET\n" + JSON.stringify((rec && rec.data) || rec || {}, null, 2),
  sendText(text) {
    return request("POST", "/admin/telegram/test", { text: String(text || "") }).then((res) => {
      if (!res.ok) throw new Error(res.error || "Telegram test fail");
      if (res.data && res.data.send) tgCache.queueLen = 0;
      return res.data;
    });
  },
  notifyComplaint() {
    /* complaint create hote hi SERVER alert bhejta hai - yahan kuch nahi karna */
    return Promise.resolve({ ok: true, skipped: true, server: true });
  },
  flushQueue() {
    return request("POST", "/admin/telegram/flush").then((res) => {
      const n = (res.data && res.data.sent) || 0;
      tgCache.queueLen = (res.data && res.data.left) || 0;
      return n;
    });
  },
  queueSize: () => Number(tgCache.queueLen || 0),
  status() {
    return request("GET", "/health").then((res) => {
      const tg = (res.data && res.data.telegram) || {};
      tgCache.queueLen = tg.queueLen || 0;
      if (tg.enabled !== undefined) tgCache.enabled = !!tg.enabled;
      return tg;
    });
  },
  onChange(cb) { tgSubs.push(cb); return () => { const i = tgSubs.indexOf(cb); if (i >= 0) tgSubs.splice(i, 1); }; },
};

/* install: Settings.jsx (aur user-site) window.FourRTelegram dekhte hain.
   js/telegram.js classic script hai, module baad me chalta hai -> shim jeet-ta hai. */
if (MODE === "api" && typeof W !== "undefined") {
  W.FourRTelegram = TelegramShim;
  W.FourRApiMode = true;
  W.FourRApiBase = BASE;
  loadTelegramSettings();
}
