/* ==========================================
   4R-ADMIN (React)  |  Service Worker
   - navigation     : network first, cache fallback
   - code (js/css)  : network first, cache fallback
                      (hashed /assets/* cache first - naam badal jaata hai)
   - firebase / telegram : never cache
   ========================================== */

var VERSION = "4r-react-admin-v4";

var SKIP = [
  "googleapis.com",
  "firebase",
  "gstatic.com",
  "identitytoolkit",
  "api.telegram.org"
];

self.addEventListener("install", function () {
  self.skipWaiting();
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.map(function (k) {
          return k === VERSION ? null : caches.delete(k);
        })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

function skip(url) {
  return SKIP.some(function (s) { return url.indexOf(s) !== -1; });
}

self.addEventListener("fetch", function (e) {
  var req = e.request;

  if (req.method !== "GET") return;
  if (skip(req.url)) return;
  if (new URL(req.url).origin !== self.location.origin) return;

  /* SPA navigation */
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req)
        .then(function (res) {
          var copy = res.clone();
          caches.open(VERSION).then(function (c) { c.put(req, copy); });
          return res;
        })
        .catch(function () {
          return caches.match(req).then(function (hit) {
            return hit || caches.match("./index.html");
          });
        })
    );
    return;
  }

  var url = new URL(req.url);

  function cached(res) {
    if (res && res.status === 200 && res.type === "basic") {
      var copy = res.clone();
      caches.open(VERSION).then(function (c) { c.put(req, copy); });
    }
    return res;
  }

  /* Vite ke hashed bundle (/assets/index-XXXX.js) - naam hi badal jaata
     hai, isliye cache first safe hai */
  var hashed = /\/assets\//.test(url.pathname);

  /* baaki code (js/firebase-config.js, css/style.css, manifest.json ...)
     -> NETWORK FIRST, warna purana code cache me phans jaata hai */
  if (!hashed && /\.(js|mjs|css|json|html?)(\?|$)/i.test(url.pathname)) {
    e.respondWith(
      fetch(req)
        .then(cached)
        .catch(function () {
          return caches.match(req).then(function (hit) {
            return hit || new Response("Offline", { status: 503, statusText: "Offline" });
          });
        })
    );
    return;
  }

  /* static assets */
  e.respondWith(
    caches.match(req).then(function (hit) {
      if (hit) return hit;
      return fetch(req).then(cached);
    })
  );
});
