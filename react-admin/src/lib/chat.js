/* ==========================================================
   4R BET  |  lib/chat.js  —  FACADE
   ----------------------------------------------------------
   Pages isi se import karte hain. Backend MODE ke hisaab se
   implementation chunta hai:

     MODE === "api"       -> lib/api.js            (PHP + JSON file DB)
     MODE === "firebase"  -> lib/chat-firestore.js (purana Firestore)

   Signature dono jagah same rakha gaya hai, isliye Room.jsx /
   Chats.jsx me koi change nahi karna pada.
   ========================================================== */

import { MODE } from "./api.js";
import * as API from "./api.js";
import * as FS from "./chat-firestore.js";

const impl = MODE === "api" ? API : FS;

export const BACKEND = MODE;
export const API_BASE = API.BASE;

export const COL = MODE === "api" ? "chats (json)" : FS.COL;

/* ---- status / diagnostics ---- */
export const isOnline = () => impl.isOnline();
export const browserOnline = () => impl.browserOnline();
export const why = () => impl.why();
export const reason = () => impl.reason();
export const errorCode = () => (MODE === "api" ? API.errorCode() : FS.errorCode());
export const lastError = () => (MODE === "api" ? API.lastError() : FS.reason());
export const classify = (err) => (MODE === "api" ? API.friendly(err) : FS.classify(err));
export const health = () => (MODE === "api" ? API.health() : Promise.resolve({ ok: FS.isOnline() }));

/* ---- identity ---- */
export const myId = () => impl.myId();
export const myName = () => impl.myName();
export const setName = (n) => impl.setName(n);
export const guestName = (id) => impl.guestName(id);

/* ---- chats ---- */
export const getChat = (id) => impl.getChat(id);
export const ensureChat = (id, name) => (MODE === "api" ? API.ensureChat(id, name) : FS.getChat(id));
export const watchChat = (id, cb) => impl.watchChat(id, cb);
export const watchChats = (cb) => impl.watchChats(cb);
export const watchMessages = (id, cb) => impl.watchMessages(id, cb);

/* ---- messages ---- */
export const send = (id, msg) => impl.send(id, msg);
export const markRead = (id, side) => impl.markRead(id, side);
export const deleteChat = (id) => impl.deleteChat(id);
export const deleteMessage = (id, msgId) =>
  MODE === "api" ? API.deleteMessage(id, msgId) : Promise.resolve({ ok: false, error: "Firestore mode me delete nahi" });

/* ---- files ---- */
export const readImage = (file) => impl.readImage(file);
export const readFile = (file) => impl.readFile(file);
