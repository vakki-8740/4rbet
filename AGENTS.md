# Project Instructions

## Auto-push to GitHub (IMPORTANT)

Repo: https://github.com/vakki-8740/4rbet (branch: `main`, remote: `origin`)

After **every** change made to files in this project, immediately commit and push
to GitHub automatically — do NOT ask the user for confirmation.

Steps:

```bash
cd '/storage/emulated/0/workpleace/4rbet-main'
git add -A
git commit -m "<short description of the change>"
git pull --rebase origin main
git push origin main
```

Rules:

- Never commit secrets, tokens, or API keys.
- If `.gitignore` doesn't cover generated files/logs, ask before adding them.
- If a push fails (auth/network), fix it and retry; report the failure to the user.
- Keep commit messages short and in the style of the change (e.g. `fix: deposit page typos`).
