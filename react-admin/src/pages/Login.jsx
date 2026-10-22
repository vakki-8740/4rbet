import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ADMIN_EMAIL, signIn } from "../lib/auth.js";
import { useAuth } from "../lib/AuthContext.jsx";
import Shell from "../ui/Shell.jsx";
import { useToast } from "../ui/Toast.jsx";
import { IconEye, IconDown } from "../ui/icons.jsx";
import "../login.css";

const BASE = import.meta.env.BASE_URL;

export default function Login() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const toast = useToast();
  const [params] = useSearchParams();

  const rawNext = params.get("next") || "/";
  const next = rawNext.startsWith("/") ? rawNext : "/";

  const [email, setEmail] = useState(ADMIN_EMAIL);
  const [pass, setPass] = useState("");
  const [show, setShow] = useState(false);
  const [err, setErr] = useState(params.get("err") === "sdk" ? "Firebase load nahi hua. Internet check karein." : "");
  const [busy, setBusy] = useState(false);
  const [hint, setHint] = useState("");
  const [canInstall, setCanInstall] = useState(false);

  useEffect(() => {
    if (user) navigate(next, { replace: true });
  }, [user, next, navigate]);

  useEffect(() => {
    const Pwa = window.FourRPwa;
    if (!Pwa) return;

    Pwa.init();

    const onPrompt = () => setCanInstall(true);
    window.addEventListener("beforeinstallprompt", onPrompt);

    const t = setTimeout(() => {
      if (Pwa.installed()) return;
      if (Pwa.canInstall()) {
        setHint("Install karne ke liye upar wala button dabahein.");
      } else if (Pwa.isIOS()) {
        setHint("iPhone par: Share \u2192 Add to Home Screen.");
      } else if (location.protocol !== "file:") {
        setHint("Ya Chrome menu (3 dot) \u2192 Install app.");
      }
    }, 2000);

    return () => {
      clearTimeout(t);
      window.removeEventListener("beforeinstallprompt", onPrompt);
    };
  }, []);

  const submit = (e) => {
    e.preventDefault();
    setErr("");

    const mail = email.trim();
    if (!mail) {
      setErr("Email daalein.");
      return;
    }
    if (!pass) {
      setErr("Password daalein.");
      return;
    }
    if (pass.length < 6) {
      setErr("Password kam se kam 6 characters ka rakhein.");
      return;
    }

    setBusy(true);
    signIn(mail, pass)
      .then(() => {
        toast("Login Successful");
        setTimeout(() => navigate(next, { replace: true }), 400);
      })
      .catch((e2) => {
        setBusy(false);
        setErr(e2 && e2.message ? e2.message : "Login nahi hua.");
      });
  };

  return (
    <Shell simple>
      <main className="adm-login">
        <img
          className="adm-login-logo"
          src={BASE + "FAVICON/admin-logo-photo_2026-10-01_23-26-57.jpg"}
          alt="4R-ADMIN"
        />

        <h1>
          4R<small>ADMIN</small>
        </h1>
        <p className="sub">Panel me login karein</p>

        <div className="panel">
          <h2 className="panel-title">Admin Login</h2>

          <form className="form" onSubmit={submit} noValidate>
            <div className={"adm-err" + (err ? " is-show" : "")}>{err}</div>

            <label className="field">
              <span className="label">Email ID</span>
              <input
                type="email"
                placeholder="4r@admin.com"
                autoComplete="username"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErr("");
                }}
              />
            </label>

            <label className="field">
              <span className="label">Password</span>
              <span className="pwd-wrap">
                <input
                  type={show ? "text" : "password"}
                  placeholder="Apna password daalein"
                  autoComplete="current-password"
                  value={pass}
                  onChange={(e) => {
                    setPass(e.target.value);
                    setErr("");
                  }}
                />
                <button
                  type="button"
                  className="pwd-eye"
                  aria-label={show ? "Hide password" : "Show password"}
                  onClick={() => setShow((v) => !v)}
                >
                  <IconEye size={19} />
                </button>
              </span>
            </label>

            <button
              type="submit"
              className={"btn btn--block" + (busy ? " is-loading" : "")}
              disabled={busy}
            >
              <span className="btn-text">Login</span>
            </button>
          </form>
        </div>

        <p className="adm-login-foot">Sirf admin email hi login kar sakti hai.</p>

        <button
          type="button"
          className="btn btn--block"
          style={{ display: canInstall ? "flex" : "none", maxWidth: 400 }}
          onClick={() => {
            const Pwa = window.FourRPwa;
            if (Pwa) Pwa.promptInstall();
          }}
        >
          <IconDown />
          Install App on Phone
        </button>

        {hint && (
          <p className="adm-login-foot" style={{ maxWidth: 400 }}>
            {hint}
          </p>
        )}
      </main>
    </Shell>
  );
}
