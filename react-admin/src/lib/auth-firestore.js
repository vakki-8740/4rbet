import { FB, getAuth, ADMIN_EMAIL } from "./fb.js";

export { ADMIN_EMAIL };

function friendly(code, msg) {
  switch (code) {
    case "auth/configuration-not-found":
    case "auth/operation-not-allowed":
      return (
        "Login abhi band hai. Firebase Console > Authentication > " +
        'Sign-in method me "Email/Password" ON karke wapas aayein.'
      );
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

function keepSignedIn(A) {
  try {
    return A.setPersistence(FB.auth.Auth.Persistence.LOCAL)
      .then(() => true)
      .catch(() => false);
  } catch (e) {
    return Promise.resolve(false);
  }
}

export function signIn(mail, pass) {
  const A = getAuth();

  return keepSignedIn(A)
    .then(() => A.signInWithEmailAndPassword(mail, pass))
    .catch((err) => {
      const code = err && err.code;
      const m = err && err.message ? " (" + err.message + ")" : "";

      if (
        code === "auth/user-not-found" ||
        code === "auth/invalid-credential" ||
        code === "auth/wrong-password"
      ) {
        return A.createUserWithEmailAndPassword(mail, pass)
          .then((res) => ({ user: res.user, created: true }))
          .catch((e2) => {
            throw new Error(
              friendly(e2 && e2.code, e2 && e2.message) +
                (e2 && e2.code ? " [" + e2.code + "]" : "")
            );
          });
      }

      throw new Error(friendly(code, err && err.message) + m);
    });
}

export function signOut() {
  const A = getAuth();
  return A.signOut();
}

export function onAuth(cb) {
  const A = getAuth();
  keepSignedIn(A);
  return A.onAuthStateChanged(cb);
}
