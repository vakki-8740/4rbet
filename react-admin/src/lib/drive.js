/* ==========================================================
   4R BET  |  lib/drive.js  —  Google Drive backup controls
   ----------------------------------------------------------
   API mode me: backup / mirror / restore sab PHP + Drive API se.
   Firestore mode me: kuch nahi (SUPPORTED = false) - panel card
   chhupa deta hai.
   ========================================================== */

import { MODE, BASE, request, getToken } from "./api.js";

export const SUPPORTED = MODE === "api";
export const API_BASE = BASE;

export const status = () => (SUPPORTED ? request("GET", "/admin/drive") : Promise.resolve({ ok: false, error: "API mode off hai" }));

export const backup = (label) =>
  SUPPORTED ? request("POST", "/admin/drive/backup", { label: label || "manual" }) : Promise.resolve({ ok: false });

export const backups = () => (SUPPORTED ? request("GET", "/admin/drive/backups") : Promise.resolve({ ok: false, data: { items: [] } }));

export const restore = (id) => (SUPPORTED ? request("POST", "/admin/drive/restore", { id, confirm: true }) : Promise.resolve({ ok: false }));

export const test = () => (SUPPORTED ? request("POST", "/admin/drive/test") : Promise.resolve({ ok: false }));

export const makeFolder = (name) =>
  SUPPORTED ? request("POST", "/admin/drive/folder", { name: name || "4R-BET Backups" }) : Promise.resolve({ ok: false });

/** mode: off | backup | mirror | both */
export const setMode = (mode, folderId) => {
  if (!SUPPORTED) return Promise.resolve({ ok: false });
  const drive = { mode };
  if (folderId) drive.folderId = folderId;
  return request("PUT", "/admin/settings", { drive });
};

/** External cron ke liye URL (CRON_KEY secret lagta hai) */
export const cronUrl = (key) => (SUPPORTED ? BASE + "/admin/drive/cron?key=" + encodeURIComponent(key || "") : "");

export const hasToken = () => !!getToken();
