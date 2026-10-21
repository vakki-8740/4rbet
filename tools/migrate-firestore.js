#!/usr/bin/env node
/* ==========================================================
   4R BET  |  Firestore data migrate / backup tool
   ----------------------------------------------------------
   Purane Firebase project ka data naye project me copy karta hai.
   Copy hone par purana data delete NAHI hota.

   Data:
     complaints
     chats  +  chats/{id}/messages

   Usage (Termux / Node 18+):

     # sirf backup (JSON file me save)
     node tools/migrate-firestore.js \
       --old-key=OLD_API_KEY --new-key=NEW_API_KEY \
       --dump=backup-4rbet.json

     # migrate + backup
     node tools/migrate-firestore.js \
       --old-key=OLD_API_KEY --new-key=NEW_API_KEY \
       --dump=backup-4rbet.json

   Purane project me read access ke 2 tarike:
     1) Firestore Rules me temporarily:  allow read: if true;
     2) Ya admin ka Firebase ID token do:
        --old-token=eyJhbGciOi...

   Naye project me likhne ke liye wahan firestore.rules publish hona
   chahiye (complaints/chats me create allowed hai).
   ========================================================== */

"use strict";

const fs = require("fs");
const path = require("path");

/* ---------- args ---------- */

const argv = process.argv.slice(2);
const args = {};

argv.forEach((a) => {
  const m = /^--([^=]+)=(.*)$/.exec(a);
  if (!m) return;
  /* --old-project  aur  --oldProject  dono chalein */
  const key = m[1].replace(/-([a-z])/g, function (_, c) { return c.toUpperCase(); });
  args[key] = m[2];
});

const OLD_PROJECT = args.oldProject || "rbet-6770a";
const NEW_PROJECT = args.newProject || "rbet-ffd57";
const OLD_KEY = args.oldKey;
const NEW_KEY = args.newKey;
const OLD_TOKEN = args.oldToken || process.env.OLD_ID_TOKEN || "";
const DUMP = args.dump || "";
const DRY = args.dryRun === "1" || args.dryRun === "true";

if (!OLD_KEY || !NEW_KEY) {
  console.error(
    "\nUsage:\n" +
    "  node tools/migrate-firestore.js --old-key=OLD_API_KEY --new-key=NEW_API_KEY [--dump=backup.json] [--dry-run]\n\n" +
    "Options:\n" +
    "  --old-project=  (default rbet-6770a)\n" +
    "  --new-project=  (default rbet-ffd57)\n" +
    "  --old-token=    purane project ke admin ka Firebase ID token (optional)\n" +
    "  --dump=FILE     saara data JSON backup me bhi save karo\n" +
    "  --dry-run       sirf gino, kuch bhi naye project me na likho\n"
  );
  process.exit(1);
}

const BASE = (args.base || "https://firestore.googleapis.com/v1/projects").replace(/\/$/, "");

function headers(token) {
  const h = { "Content-Type": "application/json" };
  if (token) h.Authorization = "Bearer " + token;
  return h;
}

function reason(res, json) {
  const e = (json && json.error) || {};
  return (e.status || res.status) + ": " + (e.message || "unknown error");
}

/* ---------- read ---------- */

async function listDocs(project, key, colPath, token) {
  const out = [];
  let pageToken = "";

  do {
    let url = BASE + "/" + project + "/databases/(default)/documents/" + colPath +
              "?pageSize=300&key=" + encodeURIComponent(key);
    if (pageToken) url += "&pageToken=" + encodeURIComponent(pageToken);

    const res = await fetch(url, { headers: headers(token) });
    const json = await res.json();

    if (!res.ok) {
      throw new Error("READ " + colPath + " -> " + reason(res, json));
    }

    (json.documents || []).forEach((d) => out.push(d));
    pageToken = json.nextPageToken || "";
  } while (pageToken);

  return out;
}

/* ---------- write ---------- */

async function upsertDoc(project, key, colPath, id, fields, token) {
  const url = BASE + "/" + project + "/databases/(default)/documents/" +
              colPath + "/" + encodeURIComponent(id) + "?key=" + encodeURIComponent(key);

  const res = await fetch(url, {
    method: "PATCH",
    headers: headers(token),
    body: JSON.stringify({ fields: fields || {} }),
  });

  const json = await res.json();
  if (!res.ok) {
    throw new Error("WRITE " + colPath + "/" + id + " -> " + reason(res, json));
  }
  return json;
}

function idOf(doc) {
  const parts = String(doc.name || "").split("/");
  return parts[parts.length - 1];
}

/* ---------- dump ---------- */

const dump = { project: OLD_PROJECT, exportedAt: new Date().toISOString(), collections: {} };

function addToDump(colPath, docs) {
  dump.collections[colPath] = docs.map((d) => ({ id: idOf(d), fields: d.fields || {} }));
}

/* ---------- copy ---------- */

async function copyCollection(colPath, opts) {
  process.stdout.write("reading " + colPath + " ... ");

  const docs = await listDocs(OLD_PROJECT, OLD_KEY, colPath, OLD_TOKEN);
  console.log(docs.length + " docs");

  addToDump(colPath, docs);

  let written = 0;

  for (const doc of docs) {
    const id = idOf(doc);

    if (!DRY) {
      await upsertDoc(NEW_PROJECT, NEW_KEY, colPath, id, doc.fields);
      written++;
    }

    if (opts && opts.nested) {
      const sub = colPath + "/" + id + "/" + opts.nested;
      const kids = await listDocs(OLD_PROJECT, OLD_KEY, sub, OLD_TOKEN);

      if (kids.length) {
        addToDump(sub, kids);
        console.log("   " + sub + ": " + kids.length + " docs");
      }

      for (const kid of kids) {
        if (!DRY) await upsertDoc(NEW_PROJECT, NEW_KEY, sub, idOf(kid), kid.fields);
        written++;
      }
    }
  }

  console.log((DRY ? "would write " : "written ") + written + " docs for " + colPath);
  return docs.length;
}

/* ---------- main ---------- */

(async function main() {
  console.log("Old project : " + OLD_PROJECT + (OLD_TOKEN ? " (admin token)" : " (api key only)"));
  console.log("New project : " + NEW_PROJECT);
  console.log("Mode        : " + (DRY ? "DRY RUN (no writes)" : "COPY"));
  console.log("");

  const totalComplaints = await copyCollection("complaints");
  const totalChats = await copyCollection("chats", { nested: "messages" });

  if (DUMP) {
    dump.totals = { complaints: totalComplaints, chats: totalChats };
    fs.mkdirSync(path.dirname(path.resolve(DUMP)), { recursive: true });
    fs.writeFileSync(DUMP, JSON.stringify(dump, null, 2));
    console.log("\nBackup JSON : " + DUMP);
  }

  console.log("\nDone. Purane project ka data waise hi safe hai (kuch delete nahi hua).");
})().catch((err) => {
  console.error("\nFAILED: " + err.message);
  console.error("\nAgar READ permission denied aaya hai to purane project ki Firestore Rules me");
  console.error("temporarily `allow read: if true;` karke dobara chalayein (baad me wapas revert karein).");
  process.exit(1);
});
