# 4R BET — API (PHP + JSON-file database)

Backend ab **PHP 8.3** me hai aur **database JSON files** me — koi SQL server nahi,
koi Firebase nahi. Deploy target: **Wasmer Edge**. Frontend pehle ki tarah **Vercel** par.

```
Browser (Vercel: index.html / 4R-ADMIN / react-admin)
        │  HTTPS + JSON  (Authorization: Bearer <token>)
        ▼
PHP API (Wasmer Edge)  ──►  /data/4rbet/*.json   (persistent volume)
        │
        └──► Telegram Bot API (server-side curl; token browser me nahi jaata)
```

---

## 1. Folder layout

```
api/
├── app.yaml               Wasmer Edge app config (volume, env, scaling)
├── wasmer.toml            package + php runner command
├── config/php.ini         PHP settings (uploads, opcache, errors)
├── public/
│   ├── index.php          front controller — SAARE routes yahan
│   └── router.php         built-in server router (static files vs API)
├── src/
│   ├── JsonStore.php      JSON "database" engine (lock + atomic write + backup)
│   ├── Http.php           Req / Res / Router / Cors / Uploads / V / ApiError
│   ├── Auth.php           admin users, bcrypt, HMAC token, login rate-limit
│   ├── Repo.php           domain layer: complaints / chats / messages / settings
│   └── Telegram.php       server-side alerts + fail-queue + retry
└── tools/install.php      CLI: admin banao, self-test, status
```

Framework nahi hai, composer dependency nahi hai — sirf PHP + `curl`/`mbstring`/`hash`/`json`.

---

## 2. Data model (JSON files)

Volume `/data` par, `DATA_DIR=/data/4rbet`:

| File | Kya rakhti hai |
|---|---|
| `meta.json` | schema version, counters (`complaints`, …), auto-generated `appKey` |
| `admins.json` | admin list: `id, email, name, hash(bcrypt), role, disabled, createdAt, lastLoginAt` |
| `settings.json` | `telegram{botToken,chatId,enabled}`, `ui{showPassword,splash}` |
| `complaints/index.json` | summaries (newest first) — list bina har file padhe ban jaati hai |
| `complaints/<id>.json` | poora record: `data`, `images[]`, `status`, `history[]`, `deviceId`, `chatId` |
| `chats/index.json` | chat summaries (`lastText`, `lastWho`, `unreadAdmin`, `unreadUser`) |
| `chats/<id>/chat.json` | chat doc + `seq` (message counter) |
| `chats/<id>/messages.json` | `{seq, items[]}` — sirf us chat ke messages |
| `chats/<id>/archive-N.json` | 1000 se purane messages |
| `uploads/YYYY/MM/<uuid>.<ext>` | complaint/chat attachments |
| `telegram-queue.json` | jo alert bhejne me fail hue, retry ke liye |
| `ratelimit.json` | login brute-force window (per IP) |

### Relations ("data relating")
Sab documents me **IDs/references** se relation banta hai — Firestore jaisa nested nahi:

- `complaint.deviceId` → user ki pehchaan (isi se `/api/complaints/mine` chalta hai,
  purana mailbox sirf ek device ke localStorage tak seemit tha)
- `complaint.images[].path` → `uploads/YYYY/MM/…`
- `complaint.chatId` ↔ `chats/<chatId>` (admin complaint se seedha chat khol sakta hai)
- `message.attachment.path` → `uploads/…`
- har record me `createdAt/updatedAt` + `createdBy/updatedBy` (complaint me `history[]` audit trail)

### Concurrency
Wasmer volumes multi-writer DB ke liye ideal nahi hain, isliye `JsonStore` me:

1. **flock** — har file par sidecar `.lock` + `LOCK_EX|LOCK_NB` retry (4s timeout)
2. **atomic write** — temp file → `rename()` (aadhi-likhi file kabhi nahi milti)
3. **backup/recovery** — har write se pehle `.bak`; corrupt JSON mile to `.bak` se restore
4. **sharding** — ek chat/complaint sirf apni chhoti file likhta hai
5. `scaling.mode: single_concurrency` (app.yaml) — ek hi instance

Read-modify-write hamesha `transaction()` ke andar karo.

---

## 3. Endpoints

### Public
| Method | Path | Kaam |
|---|---|---|
| GET | `/api/health` | storage writable? disk, telegram, admins, warnings |
| GET | `/api/boot` | ek call me: `ui` settings + device ki complaints (site startup) |
| POST | `/api/complaints` | complaint (JSON ya multipart `image_<field>`), Telegram alert server-side |
| GET | `/api/complaints/mine` | `X-Device-Id` se apni complaints (password masked) |
| POST | `/api/chats` | chat ensure/create (`chatId` do to purani hi use hoti hai) |
| GET | `/api/chats/{id}/messages?since=<seq>` | **polling** — sirf naye messages |
| POST | `/api/chats/{id}/messages` | user message (+ optional image attachment) |
| PATCH | `/api/chats/{id}/messages/{mid}` | apna text edit |
| DELETE | `/api/chats/{id}/messages/{mid}` | apna message delete |
| POST | `/api/chats/{id}/read` | user side unread clear |
| GET | `/api/files/{yyyy}/{mm}/{name}` | upload serve (immutable cache, `?download`) |

### Admin (`Authorization: Bearer <token>`)
| Method | Path |
|---|---|
| POST | `/api/admin/login` `{email,password}` → `{token, expiresAt, admin}` |
| GET | `/api/admin/me` · `/api/admin/overview` · `/api/admin/stats` |
| GET | `/api/admin/complaints?status=&category=&q=&limit=&offset=` (`?unmasked` = password dikhao) |
| GET/PATCH/DELETE | `/api/admin/complaints/{id}` (PATCH `{status: pending\|previewing\|successful}`) |
| GET | `/api/admin/chats?unread` · `/api/admin/chats/{id}/messages?since=` |
| POST | `/api/admin/chats/{id}/messages` · `/api/admin/chats/{id}/read` |
| DELETE | `/api/admin/chats/{id}` |
| GET/PUT | `/api/admin/settings` |
| POST | `/api/admin/telegram/test` · `/api/admin/telegram/flush` |
| GET/POST | `/api/admin/drive` · `/drive/backup` · `/drive/backups` · `/drive/restore` · `/drive/test` · `/drive/folder` · `/drive/cron?key=` |

Errors hamesha `{"ok":false,"error":"...","code":<status>}` shape me, sahi HTTP status ke saath.

### Auth
- Password: `password_hash(..., PASSWORD_BCRYPT, cost 11)`, `admins.json` me
- Token: `base64url(payload).base64url(hmac_sha256(payload, APP_KEY))`, payload `{sub, role, iat, exp, jti}`, TTL 7 din
- Har request par token verify + admin abhi bhi `admins.json` me hai ya nahi (delete/disabled = token dead)
- Login par per-IP limit: 15 minute me 8 galat koshish
- **Koi signup endpoint nahi** — purana Firebase panel galat password par account bana deta tha

---

## 4. Real-time chat (polling)

Wasmer Edge par PHP ke liye WebSocket / lamba SSE practical nahi hai, isliye
**cursor-based short polling**:

```js
let seq = 0;
async function poll() {
  const r = await fetch(API + '/api/chats/' + id + '/messages?since=' + seq);
  const j = await r.json();
  j.items.forEach(render);          // sirf naye messages aate hain
  seq = j.seq;                      // cursor aage badhao
  setTimeout(poll, j.items.length ? 1000 : 1500);
}
document.addEventListener('visibilitychange', () => { /* tab hidden = pause */ });
```

- `seq` har chat ka monotonic counter hai → duplicate/miss nahi hota
- Tab hidden ho to polling pause (battery/data bachta hai)
- Bheja message turant local render (optimistic), server `seq` milne par confirm

### Google Drive (backup + upload mirror) — `src/Drive.php`

Database JSON files volume par hoti hain. Drive integration se:

- **backup** — saari JSON files ka ek snapshot (`4rbet-backup-YYYYmmdd-HHMMSS.json`) Drive par
- **mirror** — har uploaded image/file Drive par bhi copy (`images[].driveId` record me save)
- **restore** — kisi bhi backup se volume wapas bhar do

Modes: `off` / `backup` / `mirror` / `both` — `GDRIVE_MODE` env se ya
`PUT /api/admin/settings {"drive":{"mode":"both"}}` (React panel → Settings → Google Drive Backup).

**Auth:** Wasmer ke PHP me `openssl` extension nahi hai, isliye service-account JWT (RS256)
sign nahi ho sakta → default **OAuth2 refresh token** (sirf curl chahiye).
(`openssl` available ho to service account path bhi kaam karta hai — code me dono hain.)

Refresh token banane ka sabse aasaan tarika:

1. console.cloud.google.com → project → **APIs & Services → Library** → *Google Drive API* enable
2. **OAuth consent screen** → External → apna email test user me add
3. **Credentials → Create credentials → OAuth client ID → Desktop app** → client id/secret copy
4. https://developers.google.com/oauthplayground → gear icon → *Use your own OAuth credentials*
5. Scope: `https://www.googleapis.com/auth/drive` (recommended) ya `…/auth/drive.file`
   — `drive.file` me app sirf **apne banaye** files/folder dekh sakti hai, isliye tab
   `GDRIVE_FOLDER_ID` khaali chhod dein (API apna folder bana legi)
6. *Authorize APIs* → *Exchange authorization code for tokens* → **refresh_token** copy

```bash
wasmer app secrets create GDRIVE_REFRESH_TOKEN "1//0g..."
wasmer app secrets create GDRIVE_CLIENT_ID     ".....apps.googleusercontent.com"
wasmer app secrets create GDRIVE_CLIENT_SECRET "GOCSPX-....."
wasmer app secrets create CRON_KEY             "$(openssl rand -hex 16)"
```

| Method | Path | Kaam |
|---|---|---|
| GET | `/api/admin/drive` | status: mode, creds, auth type, last backup, due?, disk |
| POST | `/api/admin/drive/backup` | abhi backup lo (`{label}` optional), purane prune |
| GET | `/api/admin/drive/backups` | Drive par maujood backups ki list |
| POST | `/api/admin/drive/restore` | `{id, confirm:true}` → volume wapas bharo |
| POST | `/api/admin/drive/test` | probe upload → download → delete → folder |
| POST | `/api/admin/drive/folder` | `{name}` se naya folder banao |
| GET | `/api/admin/drive/cron?key=<CRON_KEY>` | external cron ke liye (login nahi chahiye) |

CLI: `php tools/install.php --drive-test | --backup | --backups | --restore=<id> --confirm`

> Restore sirf `.json` files likhta hai — uploads (images) nahi. Images bachane ke liye
> `mirror` ya `both` mode rakhein.
> Credentials sirf **env** me hain — settings.json/repo me kabhi nahi jaate.

---

## 5. Deploy (Wasmer Edge)

```bash
# 0) wasmer CLI + login
curl https://get.wasmer.io -sSfL | sh
wasmer login

# 1) app.yaml me owner/naam theek karein
#    owner: <aapka-wasmer-username>
#    PUBLIC_BASE_URL: https://4rbet-api-<username>.wasmer.app
#    ALLOWED_ORIGINS: https://<aapka-vercel-domain>

# 2) deploy (volume khud ban jaata hai)
cd api && wasmer deploy

# 3) secret set karein (APP_KEY = token signing key)
wasmer app secrets create APP_KEY "$(openssl rand -hex 32)"

# 4) pehla admin
wasmer app ssh -- wasmer run php/php:php /app/tools/install.php \
  --email=4r@admin.com --password='StrongPass123'
#  (SSH capability na ho to: pehla POST /api/admin/login hi admin bana deta hai)

# 5) verify
curl https://4rbet-api-<username>.wasmer.app/api/health
wasmer app ssh -- wasmer run php/php:php /app/tools/install.php --selftest
```

`/api/health` me `warnings[]` padhna — writable nahi, APP_KEY auto-generated,
koi admin nahi, telegram off: sab wahan dikhta hai.

### Telegram
Admin panel → Settings me `botToken` + `chatId` daalein (`PUT /api/admin/settings`),
phir `POST /api/admin/telegram/test`. Token sirf volume par rehta hai, browser me kabhi nahi.
Alert fail ho to `telegram-queue.json` me chala jaata hai aur agle request par retry hota hai.

---

## 6. Local test (PHP install ho to)

```bash
cd api
DATA_DIR=/tmp/4rbet-data APP_ENV=development ALLOWED_ORIGINS='*' \
  php -S localhost:8080 -t public public/router.php

curl http://127.0.0.1:8080/api/health
DATA_DIR=/tmp/4rbet-data php tools/install.php --selftest
DATA_DIR=/tmp/4rbet-data php tools/install.php --email=4r@admin.com --password='StrongPass123'
```

Self-test 25+ check chalata hai: write/read/overwrite, counter, traversal guard,
complaint create+mask+status, chat ensure, message append/cursor/unread/edit,
cross-role delete block, settings, token issue/verify/login/wrong-password, telegram format.

---

## 7. Frontend se connect karna

- `js/api.js` (user site), `react-admin/src/lib/api.js` (React panel) — dono isi API ko call karte hain
- API base URL: `js/firebase-config.js` / React `.env` me `API_BASE` set karein, warna same-origin `/api`
- CORS: `ALLOWED_ORIGINS` me Vercel domain zaroor daalein (warna browser block karega)
- Purana Firebase code abhi bhi repo me hai; naya flow use karne ke liye page me
  `data-backend="api"` set karein (details: root README / `js/api.js` header)

---

## 8. Limits & honest notes

- **Single instance** rakha hai (`single_concurrency`) — JSON file DB ke liye yahi safe hai.
  Traffic badhe to Wasmer ka managed SQL (`capabilities.database`) ya koi external DB lein;
  `Repo.php` ki shape wahi rahegi, sirf `JsonStore` badalna hoga.
- Volume region-bound hai; app ko usi region me pin karein.
- Uploads: image 4 MB / file 2 MB, mime whitelist (finfo), naam UUID — `php.ini` me limits.
- Complaint `data.password` **plaintext** store hota hai (admin ko dikhana zaroori hai),
  par public/mine responses me masked. Isse behtar: password field hi na maango.
- `.bak`/`.lock` files data dir me banti hain — backup lene par inhe skip karein.
