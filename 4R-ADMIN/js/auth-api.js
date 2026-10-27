/* ==========================================================
   4R-ADMIN  |  js/auth-api.js
   ----------------------------------------------------------
   API mode (backend = "api") me window.FourRAuth ko override
   karta hai. Login ab PHP API se hota hai:

     POST /api/admin/login  ->  {token, admin}
     token localStorage me  ->  har request me Authorization: Bearer

   Purana Firebase flow ka sabse bada hole yahan band hota hai:
   galat password par account AUTO-CREATE nahi hota. Admin sirf
   server par pehle se hona chahiye (ya pehli baar install ho).

   Load order zaroori hai: js/auth.js ke BAAD (isi liye html me
   ye tag uske neeche hai).
   ========================================================== */

(function () {
  "use strict";

  if (window.FourRBackend !== "api" || !window.FourRApiAdmin) return;

  var A = window.FourRApiAdmin;

  var user = null;

  function toUser(profile) {
    if (!profile) return null;
    return {
      uid: profile.id || profile.email || "admin",
      email: profile.email || "",
      displayName: profile.name || "Admin",
      role: profile.role || "admin",
      isAnonymous: false,
      metadata: {}
    };
  }

  function adminEmail() {
    var p = A.profile();
    return (p && p.email) || "4r@admin.com";
  }

  function current() {
    if (user) return user;
    user = toUser(A.profile());
    return user;
  }

  function keepSignedIn() {
    return Promise.resolve(current());
  }

  function signIn(mail, pass) {
    return A.login(String(mail || "").trim(), String(pass || ""))
      .then(function (res) {
        if (!res.ok) throw new Error(res.error || "Login fail hua");

        user = toUser(res.admin);
        return { user: user, created: !!res.created, note: res.note || "" };
      })
      .catch(function (err) {
        var msg = String((err && err.message) || err || "Login fail hua");

        if (/failed to fetch|network|cors/i.test(msg)) {
          throw new Error("API server se connect nahi hua. Wasmer app URL / internet check karein. (" + msg + ")");
        }
        throw new Error(msg);
      });
  }

  function goLogin(backTo, err) {
    var to = "login.html" +
      (backTo ? "?next=" + encodeURIComponent(backTo) : "") +
      (err ? (backTo ? "&" : "?") + "err=" + encodeURIComponent(err) : "");
    location.replace(to);
  }

  /**
   * Login zaroori hai. Token hai to server se verify hota hai
   * (GET /api/admin/me) - isliye delete/disable hua admin andar
   * nahi aa sakta.
   */
  function requireLogin(backTo) {
    return new Promise(function (resolve) {
      if (!A.token()) {
        goLogin(backTo, "session");
        return;
      }

      A.me().then(function (res) {
        if (res && res.ok) {
          user = toUser(res.admin) || current();
          document.body.style.visibility = "";
          resolve(user);
          return;
        }

        A.logout();
        goLogin(backTo, (res && res.status === 401) ? "expired" : "auth");
      });
    });
  }

  function signOut() {
    document.body.style.visibility = "hidden";
    return A.logout().then(function () {
      user = null;
      location.replace("login.html");
    });
  }

  function onAuth(cb) {
    if (!A.token()) {
      setTimeout(function () { cb(null); }, 0);
      return function () {};
    }
    A.me().then(function (res) {
      cb(res && res.ok ? (toUser(res.admin) || current()) : null);
    });
    return function () {};
  }

  /* API-mode auth install */
  window.FourRAuth = {
    MODE: "api",
    adminEmail: adminEmail,
    signIn: signIn,
    keepSignedIn: keepSignedIn,
    requireLogin: requireLogin,
    signOut: signOut,
    current: current,
    onAuth: onAuth,
    token: A.token,
    profile: A.profile,

    /* panel ko backend ki health dikhane ke liye */
    health: function () { return A.overview ? A.overview() : Promise.resolve({ ok: false }); }
  };

  console.info("[4R-ADMIN] auth: PHP API mode (token based)");
})();
