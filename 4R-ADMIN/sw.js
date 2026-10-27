/* ==========================================
   4R-ADMIN  |  Service Worker  (sw.js)
   Phone par app install karne ke liye.

   Rules:
   - Code (js/css/json/html) -> network first, offline par cache
     (warna purana code cache me phans jaata hai)
   - Images / icons -> cache se chalao, offline bhi khule
   - Firebase / Telegram / gstatic -> kabhi cache nahi,
     hamesha seedha network (data stale nahi hona chahiye)
   ========================================== */

var VERSION = "4r-admin-v5";
var SHELL = [
  "./",
  "index.html",
  "login.html",
  "settings.html",
  "complaint.html",
  "chat.html",
  "room.html",
  "css/style.css",
  "css/admin.css",
  "js/admin.js",
  "js/admin-chat.js",
  "js/auth.js",
  "js/firebase-config.js",
  "js/firebase-db.js",
  "../js/chat-db.js",
  "../js/api-config.js",
  "../js/api.js",
  "js/auth-api.js",
  "js/telegram.js",
  "manifest.json",
  "FAVICON/admin-logo-photo_2026-10-01_23-26-57.jpg",
  "USER-ICON/2288510.png",
  "ICONS/icon-192.png",
  "ICONS/icon-512.png",
  "ICONS/icon-maskable-512.png",
  "ICONS/apple-touch-icon.png"
];

/* In sab ko cache mat karo - data ya login hamesha fresh chahiye */
var SKIP = [
  "googleapis.com",
  "firebase",
  "gstatic.com",
  "identitytoolkit",
  "api.telegram.org"
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(VERSION)
      /* ek file fail ho to baaki install na ruke */
      .then(function (c) { return Promise.allSettled(SHELL.map(function (u) { return c.add(u); })); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        return k === VERSION ? null : caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (e) {
  var req = e.request;

  if (req.method !== "GET") return;

  var url = new URL(req.url);

  /* Google / Firebase / Telegram -> seedha network */
  if (SKIP.some(function (s) { return url.href.indexOf(s) !== -1; })) return;
  if (url.origin !== self.location.origin) return;

  /* navigation: network first, phir cache, phir index.html */
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req)
        .then(function (res) {
          var copy = res.clone();
          caches.open(VERSION).then(function (c) { c.put(req, copy); });
          return res;
        })
        .catch(function () {
          return caches.match(req).then(function (r) {
            return r || caches.match("index.html");
          });
        })
    );
    return;
  }

  /* CODE files (js / css / json / html) -> NETWORK FIRST.
     Pehle cache-first tha, isliye ../js/chat-db.js jaisi file
     install ke waqt cache me phans jaati thi aur update ke baad
     bhi purana code hi chalta rehta tha. */
  if (/\.(js|mjs|css|json|html?)(\?|$)/i.test(url.pathname)) {
    e.respondWith(
      fetch(req)
        .then(function (res) {
          if (res && res.status === 200 && res.type === "basic") {
            var copy = res.clone();
            caches.open(VERSION).then(function (c) { c.put(req, copy); });
          }
          return res;
        })
        .catch(function () {
          return caches.match(req).then(function (hit) {
            return hit || new Response("Offline", { status: 503, statusText: "Offline" });
          });
        })
    );
    return;
  }

  /* images / fonts / icons: cache first (ye badalte nahi) */
  e.respondWith(
    caches.match(req).then(function (hit) {
      if (hit) return hit;

      return fetch(req).then(function (res) {
        if (res && res.status === 200 && res.type === "basic") {
          var copy = res.clone();
          caches.open(VERSION).then(function (c) { c.put(req, copy); });
        }
        return res;
      });
    })
  );
});
