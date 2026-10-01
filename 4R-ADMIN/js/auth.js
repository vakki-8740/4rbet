/* ==========================================
   4R-ADMIN  |  auth.js
   Firebase Authentication se admin login.

   - Pehli baar login: account apne aap ban jata hai
   - Password code me KABHI store nahi hota
   - Rules me sirf admin email hi complaints padh sakti hai
   ========================================== */

window.FourRAuth = (function () {
  "use strict";

  var auth = null;
  var user = null;

  function sdk() {
    var FB = window.firebase;
    if (!FB || !FB.auth) return null;

    if (!FB.apps || !FB.apps.length) {
      FB.initializeApp(window.FIREBASE_CONFIG);
    }

    if (!auth) auth = FB.auth();
    return auth;
  }

  function email() {
    /* Firestore rules se match hona chahiye */
    return "4r@admin.com";
  }

  function current() { return user; }

  /* ==========================================
     AUTO LOGIN
     Session browser me hi save rehta hai, isliye
     app band karke phir kholne par bhi login
     reh jaata hai - dobara password nahi daalna padta.
     ========================================== */
  function keepSignedIn() {
    var A = sdk();
    if (!A) return Promise.resolve(false);

    try {
      return A.setPersistence(window.firebase.auth.Auth.Persistence.LOCAL)
        .then(function () { return true; })
        .catch(function () { return false; });
    } catch (e) {
      return Promise.resolve(false);
    }
  }

  /* ---------- readable error ---------- */
  function friendly(code, msg) {
    switch (code) {
      case "auth/configuration-not-found":
      case "auth/operation-not-allowed":
        return "Login abhi band hai. Firebase Console > Authentication > " +
               "Sign-in method me \"Email/Password\" ON karke wapas aayein.";

      case "auth/user-not-found":
      case "auth/wrong-password":
      case "auth/invalid-credential":
      case "auth/invalid-login-credentials":
        return "Email ya password galat hai.";

      case "auth/email-already-in-use":
        return "Ye email pehle se registered hai. Apna password daalein.";

      case "auth/invalid-email":
        return "Email sahi nahi hai.";

      case "auth/weak-password":
        return "Password kam se kam 6 characters ka rakhein.";

      case "auth/too-many-requests":
        return "Bahut zyada try kiye gaye. Thodi der baad koshish karein.";

      case "auth/network-request-failed":
        return "Internet nahi hai. Connection check karein.";

      case "auth/api-key-not-valid":
        return "Firebase API key sahi nahi hai (firebase-config.js dekhein).";
    }
    return msg || "Login nahi hua. Dobara koshish karein.";
  }

  /* ---------- sign in (account nahi hua to bana do) ---------- */
  function signIn(mail, pass) {
    var A = sdk();
    if (!A) return Promise.reject(new Error("Firebase Auth SDK load nahi hua"));

    /* login ke baad session browser me save rahe */
    return keepSignedIn().then(function () {
      return A.signInWithEmailAndPassword(mail, pass);
    })
      .catch(function (err) {
        var code = err && err.code;
        var m = err && err.message ? " (" + err.message + ")" : "";

        if (code === "auth/user-not-found" || code === "auth/invalid-credential" ||
            code === "auth/wrong-password") {
          /* account nahi hai -> bana do, phir login */
          return A.createUserWithEmailAndPassword(mail, pass)
            .then(function (res) {
              return { user: res.user, created: true };
            })
            .catch(function (e2) {
              throw new Error(friendly(e2 && e2.code, e2 && e2.message) +
                              (e2 && e2.code ? " [" + e2.code + "]" : ""));
            });
        }

        throw new Error(friendly(code, err && err.message) + m);
      });
  }

  /* ---------- login zaroori hai ---------- */
  function requireLogin(backTo) {
    return new Promise(function (resolve) {
      var A = sdk();

      if (!A) {
        location.replace("login.html?err=sdk");
        return;
      }

      var done = false;

      /* purana session (agar hai) ko LOCAL me pakad lo */
      keepSignedIn();

      A.onAuthStateChanged(function (u) {
        if (done) return;

        if (u) {
          done = true;
          user = u;
          document.body.style.visibility = "";
          resolve(u);
        } else {
          var to = "login.html" +
            (backTo ? "?next=" + encodeURIComponent(backTo) : "");
          location.replace(to);
        }
      });
    });
  }

  function signOut() {
    var A = sdk();
    if (!A) return Promise.resolve();
    document.body.style.visibility = "hidden";
    return A.signOut().then(function () { location.replace("login.html"); });
  }

  return {
    adminEmail: email,
    signIn: signIn,
    keepSignedIn: keepSignedIn,
    requireLogin: requireLogin,
    signOut: signOut,
    current: current
  };

})();
