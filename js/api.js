/* ==========================================================
   4R BET  |  js/api.js
   ----------------------------------------------------------
   PHP API (Wasmer Edge) + JSON-file database ke liye client.

   Do drop-in adapters deta hai:

     window.FourRApi     -> chat   (js/chat-db.js  / FourRChat  jaisa surface)
     window.FourRApiDb   -> complaints (js/firebase-db.js / FourR jaisa surface)
     window.FourRApiAdmin-> login / settings / stats (admin panels ke liye)

   Isliye pages ka code almost badalna nahi pada - sirf ye decide karna
   hai ki kaunsa backend use ho (js/api-config.js -> backend).

   Real-time: Wasmer par PHP ke liye WebSocket practical nahi, isliye
   cursor-based polling (GET .../messages?since=<seq>) - har ~1-1.5s,
   tab hidden ho to pause.
   ========================================================== */

(function () {
  "use strict";

  var CFG  = window.FOURR_API || {};
  var MODE = CFG.backend === "firebase" ? "firebase" : "api";

  /* ---------- base URL ---------- */

  function normBase(b) {
    var s = String(b == null ? "" : b).trim().replace(/\/+$/, "");
    if (!s) return "/api";                     /* same-origin (vercel rewrite) */
    if (/\/api$/.test(s)) return s;
    return s + "/api";
  }

  var BASE = normBase(CFG.base);

  /* "/api" -> ""  ;  "https://x.wasmer.app/api" -> "https://x.wasmer.app" */
  var ORIGIN = BASE.replace(/\/api$/, "");

  var POLL       = Number(CFG.pollMs)      || 1500;
  var POLL_FAST  = Number(CFG.pollFastMs)  || 900;
  var ADMIN_POLL = Number(CFG.adminPollMs) || 3000;
  var MAIL_POLL  = Number(CFG.mailPollMs)  || 20000;

  var DEVICE_KEY = CFG.deviceKey || "4r_device_id";
  var TOKEN_KEY  = CFG.tokenKey  || "4r_admin_token";
  var ADMIN_KEY  = CFG.adminKey  || "4r_admin_profile";
  var CACHE_KEY  = CFG.cacheKey  || "4r_api_complaints";

  /* ---------- storage helpers ---------- */

  function lsGet(k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { window.localStorage.setItem(k, v); return true; } catch (e) { return false; } }
  function lsDel(k) { try { window.localStorage.removeItem(k); } catch (e) {} }

  function randHex(n) {
    var out = "";
    if (window.crypto && window.crypto.getRandomValues) {
      var buf = new Uint8Array(n);
      window.crypto.getRandomValues(buf);
      for (var i = 0; i < buf.length; i++) {
        out += (buf[i] < 16 ? "0" : "") + buf[i].toString(16);
      }
      return out;
    }
    for (var j = 0; j < n * 2; j++) out += Math.floor(Math.random() * 16).toString(16);
    return out;
  }

  function deviceId() {
    var d = lsGet(DEVICE_KEY);
    if (!d || !/^[A-Za-z0-9_-]{8,64}$/.test(d)) {
      d = "d" + randHex(12);
      lsSet(DEVICE_KEY, d);
    }
    return d;
  }

  function token()     { return lsGet(TOKEN_KEY) || ""; }
  function setToken(t) { if (t) lsSet(TOKEN_KEY, String(t)); else lsDel(TOKEN_KEY); }
  function adminProfile() {
    try { return JSON.parse(lsGet(ADMIN_KEY) || "null"); } catch (e) { return null; }
  }
  function setAdminProfile(p) { if (p) lsSet(ADMIN_KEY, JSON.stringify(p)); else lsDel(ADMIN_KEY); }

  /* ---------- state ---------- */

  var state = {
    lastError: "",
    lastCode: "",
    lastWhy: "OK",
    online: false,
    health: null,
    checkedAt: 0
  };

  /* ---------- classification (wahi keys jo chat-db.js me the) ---------- */

  var HINTS = {
    OK:       "Sab theek hai - API connect ho gayi.",
    CONFIG:   "js/api-config.js me API base set karein (Wasmer app ka URL), ya vercel.json ka /api rewrite check karein.",
    NETWORK:  "API tak request pahunchi hi nahi. Internet, ya Wasmer app ka URL, ya CORS (ALLOWED_ORIGINS) check karein.",
    CORS:     "Browser ne request rok di (CORS). Wasmer app.yaml ke ALLOWED_ORIGINS me is site ka domain daalein.",
    SERVER:   "API ne error diya (5xx). Wasmer logs dekhein: wasmer app logs <app>",
    DATABASE: "API chal rahi hai par data dir writable nahi. app.yaml me volume mount (/data) check karein.",
    AUTH:     "Login zaroori hai ya session expire. Admin panel se dobara login karein.",
    WRITE:    "Read chal raha hai par write nahi ho raha. Volume permission / disk full check karein.",
    SIZE:     "Payload bahut bada hai. Image chhoti karein (limit 4MB).",
    OTHER:    "Kuch galat hua - report copy karke bhejein."
  };

  function hint(why) { return HINTS[why] || HINTS.OTHER; }
  function why()     { return state.lastWhy || "OK"; }
  function reason()  { return state.lastError || (why() === "OK" ? "" : hint(why())); }

  function browserOnline() {
    return window.navigator ? navigator.onLine !== false : true;
  }

  function classify(err, status) {
    var msg = String((err && (err.message || err)) || "");

    if (status === 401 || status === 403) {
      state.lastWhy = "AUTH";
      state.lastError = msg || "Login zaroori hai";
      return state.lastError;
    }
    if (status >= 500) {
      state.lastWhy = "SERVER";
      state.lastError = msg || ("API error " + status);
      return state.lastError;
    }
    if (status === 413) {
      state.lastWhy = "SIZE";
      state.lastError = msg || "Payload bahut bada hai";
      return state.lastError;
    }

    /* fetch fail = network ya CORS (browser dono me same TypeError deta hai) */
    if (/failed to fetch|networkerror|load failed|network/i.test(msg)) {
      state.lastWhy = browserOnline() ? "CORS" : "NETWORK";
      state.lastError = browserOnline()
        ? "API se connect nahi hua - URL ya CORS (ALLOWED_ORIGINS) check karein"
        : "Internet nahi hai (browser offline)";
      return state.lastError;
    }

    state.lastWhy = "OTHER";
    state.lastError = msg || "Unknown error";
    return state.lastError;
  }

  /* ---------- URL helpers ---------- */

  function url(path) {
    var p = String(path || "");
    if (p.charAt(0) !== "/") p = "/" + p;
    return BASE + p;
  }

  /* server ne relative url diya ho ("/api/files/...") to absolute banao */
  function absUrl(u) {
    var s = String(u || "");
    if (!s) return "";
    if (/^https?:\/\//i.test(s) || /^data:/i.test(s) || /^blob:/i.test(s)) return s;
    if (s.charAt(0) !== "/") s = "/" + s;
    return ORIGIN + s;
  }

  /* ---------- core request ---------- */

  function request(method, path, body, opts) {
    opts = opts || {};

    var headers = { "X-Device-Id": deviceId() };
    var payload = null;

    if (body instanceof FormData) {
      payload = body;                       /* content-type browser set karega */
    } else if (body != null) {
      headers["Content-Type"] = "application/json";
      payload = JSON.stringify(body);
    }

    var t = opts.token === undefined ? token() : opts.token;
    if (t) headers["Authorization"] = "Bearer " + t;

    var started = Date.now();

    return fetch(url(path), {
      method: method,
      headers: headers,
      body: payload,
      cache: "no-store"
    }).then(function (res) {
      var ct = res.headers.get("content-type") || "";
      var p  = /json/i.test(ct) ? res.json() : res.text();

      return p.then(function (data) {
        var ms = Date.now() - started;

        if (!res.ok) {
          var msg = (data && data.error) || ("HTTP " + res.status);
          classify(new Error(msg), res.status);
          return {
            ok: false, status: res.status, code: res.status, error: msg,
            why: why(), hint: hint(why()), ms: ms, data: data
          };
        }

        /* success - health related failures alag se note karte hain */
        state.lastError = "";
        state.lastCode  = "";
        state.lastWhy   = "OK";
        state.online    = true;

        return { ok: true, status: res.status, data: data, ms: ms };
      });
    }).catch(function (err) {
      var msg = classify(err, 0);
      state.online = false;
      return { ok: false, status: 0, code: 0, error: msg, why: why(), hint: hint(why()), offline: true };
    });
  }

  /* ---------- dataURL -> Blob (upload ke liye) ---------- */

  function dataUrlToBlob(dataUrl, fallbackName) {
    try {
      var parts = String(dataUrl || "").split(",");
      var head  = parts[0] || "";
      var raw   = parts[1] || "";
      var mime  = (head.match(/data:([^;]+)/) || [, "application/octet-stream"])[1];
      var bin   = atob(raw);
      var arr   = new Uint8Array(bin.length);
      for (var i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);

      var ext = (mime.split("/")[1] || "bin").replace("jpeg", "jpg");
      return { blob: new Blob([arr], { type: mime }), name: fallbackName || ("file." + ext), mime: mime };
    } catch (e) {
      return null;
    }
  }

  /* ==========================================================
     CHAT ADAPTER  (FourRChat jaisa surface)
     ========================================================== */

  var chats = {};   /* chatId -> {items, seq, chat, subsM, subsC, timer, inflight} */

  function chatState(id) {
    if (!chats[id]) {
      chats[id] = {
        items: [], seq: 0, chat: null,
        subsM: [], subsC: [],
        timer: null, inflight: false, fails: 0
      };
    }
    return chats[id];
  }

  function mapMessage(m) {
    var out = {
      id:   m.id || "",
      seq:  Number(m.seq || 0),
      who:  m.who === "admin" ? "admin" : "user",
      text: String(m.text || ""),
      at:   m.at || "",
      name: m.name || ""
    };

    var a = m.attachment;
    if (a && a.url) {
      var u = absUrl(a.url);
      out.attachment = a;
      out.fileName   = a.name || "";
      if (a.kind === "image") {
        out.image = u;
      } else {
        out.fileData = u;
        out.fileUrl  = u;
      }
    }
    return out;
  }

  function notify(st) {
    var list = st.items.slice();
    for (var i = 0; i < st.subsM.length; i++) {
      try { st.subsM[i](list, true, ""); } catch (e) { console.warn(e); }
    }
    for (var j = 0; j < st.subsC.length; j++) {
      try { st.subsC[j](st.chat, true, ""); } catch (e2) { console.warn(e2); }
    }
  }

  function notifyFail(st, res) {
    for (var i = 0; i < st.subsM.length; i++) {
      try { st.subsM[i](st.items.slice(), false, reason()); } catch (e) {}
    }
    for (var j = 0; j < st.subsC.length; j++) {
      try { st.subsC[j](st.chat, false, reason()); } catch (e2) {}
    }
  }

  function tick(id) {
    var st = chatState(id);

    if (st.inflight) return;
    if (document.hidden) {                    /* tab band -> polling pause */
      st.timer = setTimeout(function () { tick(id); }, POLL * 3);
      return;
    }

    st.inflight = true;

    request("GET", "/chats/" + encodeURIComponent(id) + "/messages?since=" + st.seq + "&limit=500")
      .then(function (res) {
        st.inflight = false;

        if (!res.ok) {
          st.fails++;
          if (st.fails === 1 || st.fails % 10 === 0) notifyFail(st, res);
          st.timer = setTimeout(function () { tick(id); }, POLL * Math.min(8, st.fails));
          return;
        }

        st.fails = 0;
        var d = res.data || {};
        var items = d.items || [];

        if (items.length) {
          for (var i = 0; i < items.length; i++) {
            var mm = mapMessage(items[i]);
            /* dup guard (network retry / overlap) */
            var dup = false;
            for (var k = 0; k < st.items.length; k++) {
              if (st.items[k].id === mm.id) { dup = true; break; }
            }
            if (!dup) st.items.push(mm);
          }
          st.items.sort(function (a, b) { return a.seq - b.seq; });
          /* bahut lamba history browser me mat rakho */
          if (st.items.length > 800) st.items = st.items.slice(-800);
        }

        if (typeof d.seq === "number") st.seq = d.seq;
        if (d.chat) st.chat = d.chat;

        state.health = null;
        notify(st);

        var wait = items.length ? POLL_FAST : POLL;
        if (d.truncated) wait = 60;            /* aur bhi bacha hai - turant lao */
        st.timer = setTimeout(function () { tick(id); }, wait);
      });
  }

  function startPoll(id) {
    var st = chatState(id);
    if (st.timer) return;
    tick(id);
  }

  function stopPollIfIdle(id) {
    var st = chats[id];
    if (!st) return;
    if (!st.subsM.length && !st.subsC.length) {
      if (st.timer) clearTimeout(st.timer);
      st.timer = null;
    }
  }

  /* tab wapas khule to turant sync */
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) return;
    for (var id in chats) {
      var st = chats[id];
      if (st.timer) { clearTimeout(st.timer); st.timer = null; }
      if (st.subsM.length || st.subsC.length) tick(id);
    }
  });

  /* --- public chat API --- */

  function init() {
    state.checkedAt = Date.now();
    return MODE === "api" && !!BASE;
  }

  function isOnline() {
    return init() && (state.online || state.lastWhy === "OK");
  }

  function myId() {
    var id = lsGet("4r_chat_id");
    if (!id || !/^[A-Za-z0-9_-]{8,40}$/.test(id)) {
      id = "c" + randHex(8);
      lsSet("4r_chat_id", id);
    }
    return id;
  }

  function myName() {
    return lsGet("4r_chat_name") || "";
  }

  function setName(name) {
    var n = String(name || "").trim().slice(0, 40);
    if (n) lsSet("4r_chat_name", n);
    return n;
  }

  function guestName(id) {
    return "Guest #" + String(id || "").slice(0, 4).toUpperCase();
  }

  function ensureChat(id, name) {
    return request("POST", "/chats", { chatId: id, userName: name || myName() })
      .then(function (res) {
        if (!res.ok) return { ok: false, offline: !res.status, error: res.error, created: false };
        var chat = res.data && res.data.chat;
        var st = chatState(id);
        if (chat) st.chat = chat;
        return { ok: true, offline: false, created: !!(res.data && res.data.created), chat: chat };
      });
  }

  function getChat(id) {
    return request("GET", "/chats/" + encodeURIComponent(id) + "/messages?since=999999999&limit=1")
      .then(function (res) {
        if (!res.ok) return { ok: false, offline: !res.status, error: res.error, chat: null };
        var chat = (res.data && res.data.chat) || null;
        chatState(id).chat = chat;
        return { ok: true, offline: false, chat: chat };
      });
  }

  function watchChat(id, cb) {
    var st = chatState(id);
    st.subsC.push(cb);
    startPoll(id);
    if (st.chat) setTimeout(function () { cb(st.chat, true, ""); }, 0);
    return function () {
      st.subsC = st.subsC.filter(function (f) { return f !== cb; });
      stopPollIfIdle(id);
    };
  }

  function watchMessages(id, cb) {
    var st = chatState(id);
    st.subsM.push(cb);
    startPoll(id);
    if (st.items.length) setTimeout(function () { cb(st.items.slice(), true, ""); }, 0);
    return function () {
      st.subsM = st.subsM.filter(function (f) { return f !== cb; });
      stopPollIfIdle(id);
    };
  }

  function watchChats(cb) {
    /* admin list - token zaroori */
    var stopped = false;

    function loop() {
      if (stopped) return;
      request("GET", "/admin/chats?limit=200").then(function (res) {
        if (res.ok) {
          var items = (res.data && res.data.items) || [];
          cb(items, true, "");
        } else {
          cb([], false, reason());
        }
        if (!stopped) setTimeout(loop, res.ok ? ADMIN_POLL : ADMIN_POLL * 4);
      });
    }

    loop();
    return function () { stopped = true; };
  }

  function send(id, msg) {
    msg = msg || {};
    var who  = msg.who === "admin" ? "admin" : "user";
    var path = (who === "admin" ? "/admin/chats/" : "/chats/") + encodeURIComponent(id) + "/messages";

    var fd = new FormData();
    fd.append("text", String(msg.text || "").slice(0, 4000));
    if (msg.name) fd.append("userName", String(msg.name).slice(0, 40));

    /* image / file -> real upload (dataURL nahi, isliye Firestore ka 1MB limit nahi) */
    var payloadData = msg.image || msg.fileData;
    if (payloadData) {
      var b = /^data:/.test(payloadData)
        ? dataUrlToBlob(payloadData, msg.fileName)
        : (payloadData instanceof Blob ? { blob: payloadData, name: msg.fileName || "file" } : null);

      if (!b) return Promise.resolve({ ok: false, error: "File padhi nahi ja saki" });
      fd.append("file", b.blob, b.name);
    }

    return request("POST", path, fd).then(function (res) {
      if (!res.ok) return { ok: false, offline: !res.status, error: res.error };

      /* optimistic nahi - server ka message hi list me aayega, par turant poll karo */
      var st = chats[id];
      if (st && st.timer) { clearTimeout(st.timer); st.timer = null; }
      if (st && (st.subsM.length || st.subsC.length)) tick(id);

      return { ok: true, offline: false, message: res.data && res.data.message };
    });
  }

  function editMessage(id, msgId, text) {
    return request("PATCH", "/chats/" + encodeURIComponent(id) + "/messages/" + encodeURIComponent(msgId),
      { text: String(text || "") })
      .then(function (res) {
        if (!res.ok) return { ok: false, error: res.error };
        var st = chats[id];
        if (st) {
          for (var i = 0; i < st.items.length; i++) {
            if (st.items[i].id === msgId) { st.items[i].text = String(text || ""); break; }
          }
          notify(st);
        }
        return { ok: true };
      });
  }

  function deleteMessage(id, msgId) {
    var st = chats[id];
    var isAdmin = !!token();
    var path = (isAdmin ? "/admin/chats/" : "/chats/") + encodeURIComponent(id) +
               "/messages/" + encodeURIComponent(msgId);

    return request("DELETE", path).then(function (res) {
      if (!res.ok) return { ok: false, error: res.error };
      if (st) {
        st.items = st.items.filter(function (m) { return m.id !== msgId; });
        notify(st);
      }
      return { ok: true };
    });
  }

  function markRead(id, side) {
    var path = side === "admin" ? "/admin/chats/" : "/chats/";
    return request("POST", path + encodeURIComponent(id) + "/read").then(function (res) {
      if (!res.ok) return { ok: false, error: res.error };
      var st = chats[id];
      if (st && st.chat) {
        if (side === "admin") st.chat.unreadAdmin = 0;
        else st.chat.unreadUser = 0;
      }
      return { ok: true };
    });
  }

  function deleteChat(id) {
    return request("DELETE", "/admin/chats/" + encodeURIComponent(id)).then(function (res) {
      if (!res.ok) return { ok: false, error: res.error };
      if (chats[id]) {
        if (chats[id].timer) clearTimeout(chats[id].timer);
        delete chats[id];
      }
      return { ok: true };
    });
  }

  /* image/file compress - chat-db.js jaisa hi interface (page code na badle) */

  function compressImage(file, maxSide, quality) {
    return new Promise(function (resolve) {
      if (!window.FileReader) return resolve(null);
      var fr = new FileReader();
      fr.onload = function () {
        var img = new Image();
        img.onload = function () {
          try {
            var w = img.width, h = img.height;
            var scale = Math.min(1, maxSide / Math.max(w, h));
            var c = document.createElement("canvas");
            c.width = Math.round(w * scale);
            c.height = Math.round(h * scale);
            c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
            resolve(c.toDataURL("image/jpeg", quality));
          } catch (e) { resolve(String(fr.result)); }
        };
        img.onerror = function () { resolve(String(fr.result)); };
        img.src = String(fr.result);
      };
      fr.onerror = function () { resolve(null); };
      fr.readAsDataURL(file);
    });
  }

  function readImage(file) {
    return new Promise(function (resolve, reject) {
      if (!file) return reject(new Error("File nahi mili"));
      if (!/^image\//.test(file.type || "")) return reject(new Error("Sirf image file chunein."));
      if (file.size > 8 * 1024 * 1024) return reject(new Error("Image 8MB se badi hai."));

      compressImage(file, 1400, 0.88).then(function (dataUrl) {
        resolve({ dataUrl: dataUrl || "", name: file.name, file: file });
      });
    });
  }

  function readFile(file) {
    return new Promise(function (resolve, reject) {
      if (!file) return reject(new Error("File nahi mili"));
      if (file.size > 2 * 1024 * 1024) return reject(new Error("File 2MB se badi hai."));

      var fr = new FileReader();
      fr.onload = function () { resolve({ dataUrl: String(fr.result || ""), name: file.name, file: file }); };
      fr.onerror = function () { reject(new Error("File padhi nahi ja saki")); };
      fr.readAsDataURL(file);
    });
  }

  /* ---------- diagnostics (Connection Check popup ke liye) ---------- */

  function test(name, promise, okFn) {
    return promise.then(function (v) {
      var ok = okFn ? !!okFn(v) : !!(v && v.ok);
      return {
        name: name, ok: ok,
        detail: ok ? (v && v.detail) || "ok" : "",
        error: ok ? "" : (v && v.error) || "fail",
        code:  ok ? "" : (v && v.status) || ""
      };
    }).catch(function (e) {
      return { name: name, ok: false, detail: "", error: String(e && e.message || e), code: "" };
    });
  }

  function diagnose() {
    var tests = [];
    var cid = myId();

    tests.push(Promise.resolve({
      name: "API config",
      ok: !!BASE,
      detail: BASE,
      error: "API base set nahi hai"
    }));

    if (location.protocol === "file:") {
      tests.push(Promise.resolve({
        name: "Page protocol",
        ok: false,
        detail: "",
        error: "file:// se API call nahi chalti - site ko host karein (Vercel) ya local server se kholein"
      }));
    }

    /* 1. health */
    var healthP = request("GET", "/health").then(function (res) {
      if (!res.ok) return { ok: false, error: res.error, status: res.status, why: res.why };
      state.health = res.data;
      var d = res.data || {};
      return {
        ok: !!d.writable,
        detail: "storage " + (d.storage || "?") + " · writable " + (d.writable ? "yes" : "NO") +
                " · admins " + d.admins + " · " + (d.php && d.php.version ? d.php.version : ""),
        error: d.writable ? "" : "data dir writable nahi hai (volume mount check karein)",
        status: 200,
        raw: d
      };
    });
    tests.push(test("API health (/api/health)", healthP));

    /* 2. telegram (sirf info) */
    tests.push(healthP.then(function (h) {
      var tg = (h.raw && h.raw.telegram) || {};
      return {
        name: "Telegram alerts",
        ok: true,
        detail: tg.enabled ? "ON (server-side)" : "off - admin settings se on karein",
        error: ""
      };
    }));

    /* 3. chat ensure */
    var ensureP = healthP.then(function (h) {
      if (!h.ok) return { ok: false, error: "health fail - aage test skip", status: "" };
      return ensureChat(cid, myName());
    });
    tests.push(test("Chat ensure (POST /api/chats)", ensureP));

    /* 4. message read */
    var readP = ensureP.then(function (r) {
      if (!r.ok) return { ok: false, error: r.error || "chat ensure fail", status: "" };
      return request("GET", "/chats/" + encodeURIComponent(cid) + "/messages?since=0&limit=5");
    });
    tests.push(test("Messages read", readP));

    /* 5. message write + delete (probe) */
    var probeId = "diag-" + Date.now();
    var writeP = readP.then(function (r) {
      if (!r.ok) return { ok: false, error: "read fail - write skip", status: "" };
      return send(cid, { who: "user", text: "__diagnostic__ " + probeId, name: "diagnostic" });
    }).then(function (w) {
      if (!w || !w.ok) return { ok: false, error: (w && w.error) || "write fail", status: 0 };
      var mid = w.message && w.message.id;
      if (!mid) return { ok: true, detail: "write ok" };
      return request("DELETE", "/chats/" + encodeURIComponent(cid) + "/messages/" + encodeURIComponent(mid))
        .then(function () { return { ok: true, detail: "write + delete ok" }; });
    });
    tests.push(test("Message write + delete (probe)", writeP));

    return Promise.all(tests).then(function (list) {
      var bad = list.filter(function (t) { return !t.ok; });
      var w = "OK";

      if (bad.length) {
        var first = bad[0];
        var code = Number(first.code || 0);
        var msg  = String(first.error || "");

        if (/file:\/\//.test(msg) || first.name === "Page protocol") w = "CONFIG";
        else if (code === 0 || !code) w = browserOnline() ? "CORS" : "NETWORK";
        else if (code === 401 || code === 403) w = "AUTH";
        else if (code >= 500) w = "SERVER";
        else if (first.name === "API health (/api/health)") w = "DATABASE";
        else if (first.name.indexOf("write") !== -1 || first.name.indexOf("Write") !== -1) w = "WRITE";
        else w = "OTHER";
      }

      state.lastWhy = w;
      if (bad.length) state.lastError = bad[0].error;

      var host = "";
      try { host = new URL(BASE.charAt(0) === "/" ? location.origin + BASE : BASE).host; } catch (e) { host = BASE; }

      return {
        at: new Date().toISOString(),
        backend: "php-json-api",
        protocol: location.protocol,
        host: host,
        browserOnline: browserOnline(),
        sdk: typeof fetch === "function",
        config: !!BASE,
        projectId: host,                 /* modal isi field ko dikhata hai */
        apiKeyTail: "",
        apiBase: BASE,
        deviceId: deviceId(),
        chatId: cid,
        chatName: myName(),
        dbReady: !!(state.health && state.health.writable),
        warnings: (state.health && state.health.warnings) || [],
        tests: list,
        why: w,
        hint: hint(w)
      };
    });
  }

  /* ==========================================================
     COMPLAINT ADAPTER  (window.FourR / firebase-db.js jaisa)
     ========================================================== */

  function cacheRead() {
    try {
      var l = JSON.parse(lsGet(CACHE_KEY) || "[]");
      return Array.isArray(l) ? l : [];
    } catch (e) { return []; }
  }

  function cacheWrite(list) {
    try { lsSet(CACHE_KEY, JSON.stringify((list || []).slice(0, 200))); } catch (e) {}
    fireSync();
    return true;
  }

  function fireSync() {
    try { window.dispatchEvent(new CustomEvent("4r-sync")); } catch (e) {}
  }

  function cacheAdd(rec) {
    var list = [rec].concat(cacheRead().filter(function (r) { return r.id !== rec.id; }));
    return cacheWrite(list);
  }

  function cacheUpdate(id, patch) {
    var list = cacheRead().map(function (r) {
      if (r.id === id) { for (var k in patch) r[k] = patch[k]; }
      return r;
    });
    return cacheWrite(list);
  }

  function cacheRemove(id) {
    return cacheWrite(cacheRead().filter(function (r) { return r.id !== id; }));
  }

  /* API item -> purana record shape (mailbox UI wahi expect karta hai) */
  function toRecord(it) {
    var images = (it.images || []).map(function (im) {
      return { field: im.field || "", name: im.name || "", dataUrl: absUrl(im.url || ""), url: absUrl(im.url || ""), id: im.id || "" };
    });

    return {
      id: it.id,
      category: it.category || "Complaint",
      formId: it.formId || "",
      data: it.data || {},
      images: images,
      status: it.status || "pending",
      submittedAt: it.createdAt || "",
      updatedAt: it.updatedAt || "",
      statusAt: it.statusAt || "",
      deviceId: it.deviceId || "",
      chatId: it.chatId || "",
      cloud: true
    };
  }

  function saveComplaint(record) {
    record = record || {};

    var fd = new FormData();
    fd.append("category", record.category || "Complaint");
    fd.append("deviceId", deviceId());
    if (record.chatId) fd.append("chatId", record.chatId);

    var data = {};
    for (var k in (record.data || {})) data[k] = record.data[k];
    if (record.formId) data.__formId = record.formId;
    fd.append("data", JSON.stringify(data));

    /* images: dataURL -> file upload */
    (record.images || []).forEach(function (im, i) {
      var src = im.dataUrl || im.url || "";
      if (!/^data:/.test(src)) return;
      var b = dataUrlToBlob(src, im.name || ("image-" + (i + 1) + ".jpg"));
      if (!b) return;
      fd.append("image_" + (im.field || ("img" + i)), b.blob, b.name);
    });

    return request("POST", "/complaints", fd).then(function (res) {
      if (!res.ok) return { ok: false, error: res.error, offline: !res.status };

      var d = res.data || {};
      var saved = toRecord(d.complaint || {});
      if (!saved.id) saved = record;
      cacheAdd(saved);

      return {
        ok: true,
        id: d.id || saved.id,
        shrunk: false,
        telegram: d.telegram || null,
        offline: false
      };
    });
  }

  function listComplaints() {
    /* admin token ho to saari complaints, warna sirf is device ki */
    var path = token() ? "/admin/complaints?limit=500" : "/complaints/mine?limit=200";

    return request("GET", path).then(function (res) {
      if (!res.ok) {
        /* offline/cache fallback - purana behaviour */
        return cacheRead();
      }
      var items = (res.data && res.data.items) || [];
      var list = items.map(toRecord);
      cacheWrite(list);
      return list;
    });
  }

  function updateStatus(id, status, statusAt) {
    return request("PATCH", "/admin/complaints/" + encodeURIComponent(id), { status: status })
      .then(function (res) {
        if (!res.ok) return { ok: false, error: res.error };
        cacheUpdate(id, { status: status, statusAt: statusAt || new Date().toISOString() });
        return { ok: true };
      });
  }

  function deleteComplaint(id) {
    return request("DELETE", "/admin/complaints/" + encodeURIComponent(id)).then(function (res) {
      if (!res.ok) return { ok: false, error: res.error };
      cacheRemove(id);
      return { ok: true };
    });
  }

  function deleteAll() {
    return request("GET", "/admin/complaints?limit=500").then(function (res) {
      if (!res.ok) return { ok: false, error: res.error };
      var items = (res.data && res.data.items) || [];
      return items.reduce(function (p, it) {
        return p.then(function () { return deleteComplaint(it.id); });
      }, Promise.resolve()).then(function () { return { ok: true, deleted: items.length }; });
    });
  }

  function subscribe(cb) {
    /* mailbox: pehla load turant, phir hafte-hafte poll */
    var stopped = false;

    function loop() {
      if (stopped) return;
      listComplaints().then(function (list) {
        if (typeof cb === "function") cb(list, true);
        if (!stopped) setTimeout(loop, MAIL_POLL);
      });
    }
    loop();

    return function () { stopped = true; };
  }

  /* ==========================================================
     ADMIN (login / settings / stats)
     ========================================================== */

  function login(email, password) {
    return request("POST", "/admin/login", { email: email, password: password }, { token: "" })
      .then(function (res) {
        if (!res.ok) return { ok: false, error: res.error };
        var d = res.data || {};
        setToken(d.token || "");
        setAdminProfile(d.admin || null);
        return { ok: true, admin: d.admin, expiresAt: d.expiresAt, created: !!d.created, note: d.note || "" };
      });
  }

  function logout() {
    setToken(""); setAdminProfile(null);
    return Promise.resolve({ ok: true });
  }

  function me() {
    return request("GET", "/admin/me").then(function (res) {
      if (!res.ok) {
        if (res.status === 401) { setToken(""); setAdminProfile(null); }
        return { ok: false, error: res.error };
      }
      return { ok: true, admin: res.data && res.data.admin };
    });
  }

  var Admin = {
    token: token,
    profile: adminProfile,
    login: login,
    logout: logout,
    me: me,
    stats: function () { return request("GET", "/admin/stats"); },
    overview: function () { return request("GET", "/admin/overview"); },
    settings: function () { return request("GET", "/admin/settings"); },
    saveSettings: function (patch) { return request("PUT", "/admin/settings", patch); },
    telegramTest: function () { return request("POST", "/admin/telegram/test"); },
    telegramFlush: function () { return request("POST", "/admin/telegram/flush"); },
    complaints: function (q) {
      var s = [];
      for (var k in (q || {})) if (q[k] !== "" && q[k] != null) s.push(encodeURIComponent(k) + "=" + encodeURIComponent(q[k]));
      return request("GET", "/admin/complaints" + (s.length ? "?" + s.join("&") : ""));
    },
    complaint: function (id) { return request("GET", "/admin/complaints/" + encodeURIComponent(id)); },
    setStatus: updateStatus,
    remove: deleteComplaint,
    removeAll: deleteAll,
    chats: function (onlyUnread) { return request("GET", "/admin/chats" + (onlyUnread ? "?unread" : "")); },
    messages: function (id, since) {
      return request("GET", "/admin/chats/" + encodeURIComponent(id) + "/messages?since=" + (since || 0) + "&limit=500");
    },
    reply: function (id, text, name) {
      var fd = new FormData();
      fd.append("text", String(text || ""));
      return request("POST", "/admin/chats/" + encodeURIComponent(id) + "/messages", fd);
    },
    replyWithFile: function (id, text, file) {
      var fd = new FormData();
      fd.append("text", String(text || ""));
      if (file) fd.append("file", file, file.name || "file");
      return request("POST", "/admin/chats/" + encodeURIComponent(id) + "/messages", fd);
    },
    deleteChat: deleteChat,

    /* ---- Google Drive (backup + mirror) ---- */
    drive: {
      status: function () { return request("GET", "/admin/drive"); },
      backup: function (label) { return request("POST", "/admin/drive/backup", { label: label || "manual" }); },
      backups: function () { return request("GET", "/admin/drive/backups"); },
      restore: function (id) { return request("POST", "/admin/drive/restore", { id: id, confirm: true }); },
      test: function () { return request("POST", "/admin/drive/test"); },
      makeFolder: function (name) { return request("POST", "/admin/drive/folder", { name: name || "4R-BET Backups" }); },
      setMode: function (mode, folderId) {
        var d = { mode: mode };
        if (folderId) d.folderId = folderId;
        return request("PUT", "/admin/settings", { drive: d });
      },
      cronUrl: function (key) { return url("/admin/drive/cron") + "?key=" + encodeURIComponent(key || ""); }
    }
  };

  /* ==========================================================
     TELEGRAM shim
     ----------------------------------------------------------
     Admin panel (4R-ADMIN/settings.html) window.FourRTelegram
     use karta hai. API mode me alerts SERVER bhejta hai, isliye
     ye shim settings ko /api/admin/settings se jodta hai -
     bot token ab browser me nahi, volume par rehta hai.
     ========================================================== */

  var tgCache = { botToken: "", chatId: "", enabled: false, queueLen: 0, loaded: false };
  var tgSubs = [];

  function tgNotifySubs() {
    for (var i = 0; i < tgSubs.length; i++) {
      try { tgSubs[i](tgCache); } catch (e) {}
    }
  }

  function loadTelegramSettings() {
    if (!token()) return Promise.resolve(tgCache);
    return request("GET", "/admin/settings").then(function (res) {
      if (res.ok && res.data && res.data.telegram) {
        for (var k in res.data.telegram) tgCache[k] = res.data.telegram[k];
        tgCache.loaded = true;
        tgNotifySubs();
      }
      return tgCache;
    });
  }

  var Telegram = {
    MODE: "api",
    getSettings: function () {
      return {
        botToken: tgCache.botToken || "",
        chatId: tgCache.chatId || "",
        enabled: !!tgCache.enabled
      };
    },
    saveSettings: function (patch) {
      patch = patch || {};
      for (var k in patch) tgCache[k] = patch[k];
      tgNotifySubs();

      request("PUT", "/admin/settings", { telegram: patch }).then(function (res) {
        if (res.ok && res.data && res.data.settings && res.data.settings.telegram) {
          var t = res.data.settings.telegram;
          for (var k2 in t) tgCache[k2] = t[k2];
          tgNotifySubs();
        }
      });
      return true;
    },
    isReady: function () { return !!(tgCache.botToken && tgCache.chatId); },
    buildMessage: function (rec) {
      return "New Complaint - 4R BET\n" + JSON.stringify((rec && rec.data) || rec || {}, null, 2);
    },
    sendText: function (text) {
      return request("POST", "/admin/telegram/test", { text: String(text || "") }).then(function (res) {
        if (!res.ok) throw new Error(res.error || "Telegram test fail");
        if (res.data && res.data.send && res.data.send.sent) tgCache.queueLen = 0;
        return res.data;
      });
    },
    /* complaint create hote hi SERVER alert bhejta hai - browser se kuch nahi */
    notifyComplaint: function () {
      return Promise.resolve({ ok: true, skipped: true, server: true });
    },
    flushQueue: function () {
      return request("POST", "/admin/telegram/flush").then(function (res) {
        var d = res.data || {};
        tgCache.queueLen = d.left || 0;
        return d.sent || 0;
      });
    },
    queueSize: function () { return Number(tgCache.queueLen || 0); },
    status: function () {
      return request("GET", "/health").then(function (res) {
        var tg = (res.data && res.data.telegram) || {};
        tgCache.queueLen = tg.queueLen || 0;
        if (tg.enabled !== undefined) tgCache.enabled = !!tg.enabled;
        return tg;
      });
    },
    reload: loadTelegramSettings,
    onChange: function (cb) {
      tgSubs.push(cb);
      return function () {
        tgSubs = tgSubs.filter(function (f) { return f !== cb; });
      };
    }
  };

  /* API mode me browser-side telegram (js/telegram.js) ko replace karo.
     Ye script uske baad load hoti hai, isliye shim jeetta hai. */
  if (MODE === "api") {
    window.FourRTelegram = Telegram;
    window.FourRApiMode = true;
    window.FourRApiBase = BASE;
    loadTelegramSettings();
  }

  /* ==========================================================
     EXPORTS
     ========================================================== */

  var Chat = {
    MODE: MODE,
    BASE: BASE,
    ORIGIN: ORIGIN,
    init: init,
    isOnline: isOnline,
    lastError: function () { return state.lastError; },
    lastCode: function () { return state.lastCode; },
    why: why,
    hint: function () { return hint(why()); },
    reason: reason,
    browserOnline: browserOnline,
    diagnose: diagnose,
    health: function () { return request("GET", "/health"); },
    request: request,          /* panels ke liye raw helper */
    url: url,
    absUrl: absUrl,
    deviceId: deviceId,

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
    readFile: readFile,

    telegram: Telegram,
    admin: Admin
  };

  var Db = {
    MODE: MODE,
    BASE: BASE,
    COL: "complaints (json-api)",
    init: init,
    isOnline: isOnline,
    health: function () { return request("GET", "/health"); },
    lastError: function () { return state.lastError; },
    why: why,
    reason: reason,

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
    subscribe: subscribe,

    admin: Admin
  };

  window.FourRApi      = Chat;
  window.FourRApiDb    = Db;
  window.FourRApiAdmin = Admin;

  /* ek line me pata chal jaaye ki kaunsa backend active hai */
  window.FourRBackend  = MODE;

})();
