/* ==========================================
   4R BET  |  API Configuration
   ------------------------------------------
   Backend ab PHP (Wasmer Edge) + JSON file DB hai.
   Ye file sirf config hai - code js/api.js me hai.

   backend: "api"       -> PHP API (naya, recommended)
            "firebase"  -> purana Firestore flow

   base:    ""          -> same-origin "/api" (Vercel rewrite / local proxy)
            "https://4rbet-api-<USERNAME>.wasmer.app"  -> direct Wasmer URL
   ========================================== */

window.FOURR_API = {
  /* "api" ya "firebase" */
  backend: "api",

  /* API ka base. Khaali chhoda to same-origin /api use hoga
     (vercel.json me rewrite hai: /api/* -> Wasmer app) */
  base: "",

  /* polling intervals (real-time chat isi se chalta hai) */
  pollMs: 1500,          /* idle */
  pollFastMs: 900,       /* naya message aaya ho tab thoda tez */
  adminPollMs: 3000,     /* admin chat list */
  mailPollMs: 20000,     /* mailbox refresh */

  /* localStorage keys */
  deviceKey: "4r_device_id",
  tokenKey:  "4r_admin_token",
  adminKey:  "4r_admin_profile",
  cacheKey:  "4r_api_complaints"
};

/* Agar API base env/URL se override karna ho:
     ?api=https://4rbet-api-me.wasmer.app
   (testing ke liye handy) */
(function () {
  try {
    var q = new URLSearchParams(location.search || "");
    var v = q.get("api");
    if (v) window.FOURR_API.base = v;
    var b = q.get("backend");
    if (b === "api" || b === "firebase") window.FOURR_API.backend = b;
  } catch (e) { /* purana browser - ignore */ }
})();
