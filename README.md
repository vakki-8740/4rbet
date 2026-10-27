# 4R BET — Support Site + Admin Panel + PHP API

Teen cheezein ek hi repo me:

| Folder | Kya hai | Kahan deploy hota hai |
|---|---|---|
| `/` (root) | User support site (7 pages) + mailbox + live chat | **Vercel** |
| `/4R-ADMIN` | Legacy admin panel (plain JS + PWA) | **Vercel** (same site) |
| `/react-admin` | Naya React admin panel (`dist/` committed) | **Vercel** (same site) |
| `/api` | **PHP 8.3 backend + JSON-file database** | **Wasmer Edge** |

Backend ab **PHP** me hai aur database **JSON files** me (Wasmer ka persistent
volume). Firebase/Firestore ka code repo me abhi bhi hai — `backend: "firebase"`
karke purane flow par wapas ja sakte ho.

```
Vercel (static site + panels)
      │  /api/* rewrite (vercel.json)
      ▼
Wasmer Edge  →  PHP (api/public/index.php)
      │              ├── src/JsonStore.php  flock + atomic write + .bak
      │              ├── src/Repo.php       complaints / chats / messages / settings
      │              ├── src/Auth.php       bcrypt + HMAC token
      │              └── src/Telegram.php   server-side alerts (token browser me nahi)
      ▼
/data/4rbet/*.json   +   /data/4rbet/uploads/…
```

Detail: [`api/README.md`](api/README.md)

---

## Deploy checklist (sirf 3 jagah apna Wasmer username bharna hai)

1. **`api/app.yaml`**
   - `owner: YOUR_WASMER_USERNAME`
   - `env.PUBLIC_BASE_URL: https://4rbet-api-YOUR_WASMER_USERNAME.wasmer.app`
   - `env.ALLOWED_ORIGINS: https://<aapka-vercel-domain>` (comma separated, multiple ok)
2. **`vercel.json`** → `rewrites[0].destination`:
   `https://4rbet-api-YOUR_WASMER_USERNAME.wasmer.app/api/:path*`
3. **Wasmer secret** (token signing key — file me kabhi mat likhna):
   ```bash
   wasmer app secrets create APP_KEY "$(openssl rand -hex 32)"
   ```

### Backend (Wasmer)
```bash
cd api
wasmer deploy
curl https://4rbet-api-<USERNAME>.wasmer.app/api/health      # warnings[] padhna

# pehla admin (SSH capability on ho to)
wasmer app ssh -- wasmer run php/php:php /app/tools/install.php \
  --email=4r@admin.com --password='StrongPass123'
# SSH na ho to: pehla POST /api/admin/login hi admin bana deta hai

# self-test (25+ checks: write/read, cursor polling, unread, auth, masking…)
wasmer app ssh -- wasmer run php/php:php /app/tools/install.php --selftest
```

### Frontend (Vercel)
Repo ko Vercel se connect karo — build command ki zaroorat nahi (static site).
`react-admin/dist/` pehle se committed hai; React code badlo to:
```bash
cd react-admin && npm install && npm run build
```

### Backend switch (kabhi Firestore par wapas jaana ho)
- User site + legacy panel: `js/api-config.js` → `backend: "firebase"`
- React panel: `react-admin/public/js/api-config.js` → `backend: "firebase"` (+ rebuild)
- Temporary test: URL me `?backend=firebase` ya `?api=https://…wasmer.app`

---

## Real-time chat kaise chalta hai

Wasmer Edge par PHP ke liye WebSocket/long-SSE practical nahi, isliye
**cursor-based polling**:

```
GET /api/chats/{id}/messages?since=<seq>   har 0.9–1.5s
```

- `seq` har chat ka monotonic counter → message na duplicate, na miss
- Tab hidden → polling pause; wapas aate hi turant sync
- Naya message bhejte hi poll trigger (feel real-time wali rehti hai)
- Attachments ab **file upload** hain (dataURL nahi) → Firestore wala 1 MB document
  limit ka problem khatam; images 4 MB tak, files 2 MB tak

Purana "internet nahi hai" wala jhootha error ab asli wajah batata hai:
chat page ke status bar par tap → **Connection Check** (`CONFIG / NETWORK / CORS /
SERVER / DATABASE / AUTH / WRITE / SIZE`), **Report Copy** se poora JSON milta hai.

---

## Local dev

```bash
# frontend (static) — koi bhi server, e.g.
npx serve -l 8080 .          # ya python3 -m http.server 8080

# backend (PHP 8.3 install ho to)
cd api
DATA_DIR=/tmp/4rbet-data APP_ENV=development ALLOWED_ORIGINS='*' \
  php -S localhost:8081 -t public public/router.php
```
Local me frontend `/api` same-origin expect karta hai, isliye ya to
`js/api-config.js` me `base: "http://localhost:8081"` daalo, ya URL me
`?api=http://localhost:8081` laga do.

---

## Repo map (quick)

```
index.html, *-problem.html, *-verification.html, mailbox.html, online-chat.html
css/style.css
js/  firebase-config.js  firebase-db.js  chat-db.js  chat-page.js  main.js  telegram.js  pwa.js
     api-config.js  api.js          <-- NAYA: PHP API client (drop-in adapter)
4R-ADMIN/  login|index|complaint|chat|room|settings.html  js/{admin,admin-chat,auth,auth-api,…}.js  sw.js
react-admin/  src/lib/{api,chat,complaints,auth}.js (facade) + *-firestore.js (purana impl)
              dist/  <-- committed build (Vercel isi ko serve karta hai)
api/    app.yaml  wasmer.toml  config/php.ini  public/{index,router}.php
        src/{JsonStore,Http,Auth,Repo,Telegram}.php  tools/install.php  README.md
tools/migrate-firestore.js   purana Firestore data copy karne ke liye
vercel.json                  /api/* -> Wasmer rewrite + SW cache headers
firestore.rules              purane flow ke liye (API mode me zaroorat nahi)
```

## Known issues (abhi tak fix nahi)

- `firestore.rules` chats/messages ko public read+delete deta hai — **API mode me
  ye file use hi nahi hoti**, par Firestore mode me risk hai
- Complaint ka `password` field plaintext store hota hai (admin ko dikhana zaroori
  hai, public responses me masked). Behtar: ye field maango hi mat
- `4R-ADMIN/js/admin.js` me `initShell()` ka brace bug + dead `LOGO` const
- `js/firebase-db.js`, `js/telegram.js`, `js/pwa.js`, `css/` teen jagah duplicate
- JSON-file DB single-writer par safe hai — traffic badhe to `scaling.mode` mat
  badalna, ya `Repo.php` ke neeche SQL layer laga lena
