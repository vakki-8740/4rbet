/* ==========================================================
   4R BET  |  lib/complaints.js  —  FACADE
   ----------------------------------------------------------
   MODE === "api"       -> lib/api.js                  (PHP + JSON file DB)
   MODE === "firebase"  -> lib/complaints-firestore.js (purana Firestore)
   ========================================================== */

import { MODE } from "./api.js";
import * as API from "./api.js";
import * as FS from "./complaints-firestore.js";

const impl = MODE === "api" ? API : FS;

export const BACKEND = MODE;
export const CACHE_KEY = MODE === "api" ? "4rbet_complaints" : FS.CACHE_KEY;
export const COL = MODE === "api" ? "complaints (json)" : FS.COL;

/* ---- local cache (offline bhi panel khulta hai) ---- */
export const cacheRead = () => impl.cacheRead();
export const cacheWrite = (list) => impl.cacheWrite(list);
export const cacheUpdate = (id, patch) => impl.cacheUpdate(id, patch);
export const cacheRemove = (id) => impl.cacheRemove(id);

/* ---- cloud ---- */
export const isOnline = () => impl.isOnline();
export const listComplaints = () => impl.listComplaints();
export const updateStatus = (id, status, statusAt) => impl.updateStatus(id, status, statusAt);
export const deleteComplaint = (id) => impl.deleteComplaint(id);
export const deleteAll = () => impl.deleteAll();
export const subscribe = (cb) => impl.subscribe(cb);

/* API mode me extra: server health + stats (Home page ke liye handy) */
export const stats = () => (MODE === "api" ? API.request("GET", "/admin/stats") : Promise.resolve({ ok: false }));
export const overview = () => (MODE === "api" ? API.request("GET", "/admin/overview") : Promise.resolve({ ok: false }));
