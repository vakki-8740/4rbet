/* ==========================================================
   4R BET  |  lib/auth.js  —  FACADE
   ----------------------------------------------------------
   MODE === "api"       -> lib/api.js            (bcrypt + HMAC token, admins.json)
   MODE === "firebase"  -> lib/auth-firestore.js (Firebase Auth)

   Zaroori farq: API mode me **auto-signup nahi hai**. Purana
   Firebase flow galat password par naya account bana deta tha
   (isi se panel ka guard kamzor padta tha). Yahan admin sirf
   server par pehle se maujood ho, ya pehli baar install ho.
   ========================================================== */

import { MODE } from "./api.js";
import * as API from "./api.js";
import * as FS from "./auth-firestore.js";

const impl = MODE === "api" ? API : FS;

export const BACKEND = MODE;
export const ADMIN_EMAIL = MODE === "api" ? API.ADMIN_EMAIL : FS.ADMIN_EMAIL;

export const signIn = (mail, pass) => impl.signIn(mail, pass);
export const signOut = () => impl.signOut();
export const onAuth = (cb) => impl.onAuth(cb);

/* API mode me session token/profile (debug + Shell ke liye) */
export const token = () => (MODE === "api" ? API.getToken() : "");
export const profile = () => (MODE === "api" ? API.getProfile() : null);
