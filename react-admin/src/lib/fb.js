import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

export const FB = firebase;
export const ADMIN_EMAIL = "4r@admin.com";

let app = null;

export function getApp() {
  if (app) return app;

  const cfg = window.FIREBASE_CONFIG;
  if (!cfg) throw new Error("firebase-config.js missing hai");

  app = firebase.apps && firebase.apps.length
    ? firebase.app()
    : firebase.initializeApp(cfg);

  return app;
}

let db = null;
export function getDb() {
  if (!db) db = firebase.firestore(getApp());
  return db;
}

let auth = null;
export function getAuth() {
  if (!auth) auth = firebase.auth(getApp());
  return auth;
}

let lastError = "";

export function friendly(err) {
  const code = (err && err.code) || "";
  const msg = (err && err.message) || String(err);

  if (code === "permission-denied" || /permission/i.test(msg)) {
    return "Firestore rules me allowed nahi hai (firestore.rules update karein)";
  }
  if (code === "unavailable" || /network|offline|fetch/i.test(msg)) {
    return "Internet nahi hai. Connection check karein.";
  }
  if (/exceed|too large|1 ?MiB|1048576/i.test(msg)) {
    return "Document 1MB se bada ho gaya";
  }
  return msg;
}

export function setLastError(err) {
  lastError = friendly(err);
  return lastError;
}

export function getLastError() {
  return lastError;
}
