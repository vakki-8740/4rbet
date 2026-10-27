/* ==========================================
   4R-ADMIN (React)  |  API Configuration
   ------------------------------------------
   Backend: PHP (Wasmer Edge) + JSON-file DB.

   backend: "api"       -> PHP API  (default)
            "firebase"  -> purana Firestore flow

   base:    ""          -> same-origin "/api"
                            (Vercel rewrite: /api/* -> Wasmer app)
            "https://4rbet-api-<USERNAME>.wasmer.app" -> direct
   ========================================== */

window.FOURR_API = {
  backend: "api",
  base: "",

  /* polling (real-time chat) */
  pollMs: 1500,
  pollFastMs: 900,
  adminPollMs: 3000,
  mailPollMs: 15000,

  /* localStorage keys (purane Firebase keys se alag, siwa cache ke) */
  deviceKey: "4rbet_device_id",
  tokenKey: "4rbet_admin_token",
  adminKey: "4rbet_admin_profile",
  cacheKey: "4rbet_complaints"
};

/* ?api=<url> ya ?backend=firebase se override (testing) */
(function () {
  try {
    var q = new URLSearchParams(location.search || "");
    if (q.get("api")) window.FOURR_API.base = q.get("api");
    var b = q.get("backend");
    if (b === "api" || b === "firebase") window.FOURR_API.backend = b;
  } catch (e) {}
})();
