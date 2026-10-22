import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getUI, saveUI, storageKB } from "../lib/admin.js";
import { cacheRead, cacheWrite, deleteAll, isOnline, listComplaints } from "../lib/complaints.js";
import { getLastError } from "../lib/fb.js";
import { useComplaints } from "../lib/useComplaints.js";
import Shell from "../ui/Shell.jsx";
import { useToast } from "../ui/Toast.jsx";
import { IconBack, IconDown } from "../ui/icons.jsx";

function T() {
  return window.FourRTelegram;
}

export default function Settings() {
  const toast = useToast();
  const { list, refresh: refreshCount } = useComplaints();
  const [count, setCount] = useState(list.length);

  useEffect(() => {
    setCount(list.length);
  }, [list]);

  /* ---------------- PWA ---------------- */
  const [pwa, setPwa] = useState({ state: "CHECKING", color: "#6b7280", note: "", canInstall: false });

  const paintPwa = () => {
    const P = window.FourRPwa;
    if (!P) return;

    if (P.installed()) {
      P.showInstallButtons(false);
      setPwa({
        state: "INSTALLED",
        color: "#157a4d",
        note:
          "App phone par install ho chuka hai. Ab ise app icon se kholein &mdash; login apne aap ho jayega.",
        canInstall: false
      });
      return;
    }

    if (P.canInstall()) {
      setPwa({
        state: "READY",
        color: "#4f6bed",
        note:
          "Neeche <b>Install App on Phone</b> dabaein, phir apne phone ka logo par <b>Install</b> / <b>Add</b> chunein.",
        canInstall: true
      });
    } else if (P.isIOS()) {
      setPwa({
        state: "MANUAL",
        color: "#c2740a",
        note: "iPhone par: Chrome me <b>Share</b> button dabayein, phir <b>Add to Home Screen</b> chunein.",
        canInstall: false
      });
    } else if (location.protocol === "file:") {
      setPwa({
        state: "NEEDS HTTPS",
        color: "#e5484d",
        note:
          "Install sirf <b>https://</b> ya live server par hota hai. Project ko hosting par daalein (jaise GitHub Pages) phir kholein.",
        canInstall: false
      });
    } else {
      setPwa({
        state: "NOT AVAILABLE",
        color: "#c2740a",
        note:
          "Chrome ka menu (3 dot) kholein aur <b>Install app</b> ya <b>Add to Home screen</b> chunein.",
        canInstall: false
      });
    }
  };

  useEffect(() => {
    const P = window.FourRPwa;
    if (!P) return;
    P.init();
    paintPwa();
    const t = setTimeout(paintPwa, 2000);
    return () => clearTimeout(t);
  }, []);

  /* ---------------- Firebase ---------------- */
  const [fb, setFb] = useState({ online: false, error: "", count: 0 });

  const paintFirebase = (listNow) => {
    setFb({
      online: isOnline(),
      error: getLastError(),
      count: (listNow || cacheRead()).length
    });
  };

  useEffect(() => {
    paintFirebase();
    listComplaints().then((l) => paintFirebase(l));
    const onSync = () => paintFirebase();
    window.addEventListener("4r-sync", onSync);
    return () => window.removeEventListener("4r-sync", onSync);
  }, []);

  const syncNow = async (e) => {
    const btn = e.currentTarget;
    btn.classList.add("is-loading");
    const l = await listComplaints();
    paintFirebase(l);
    btn.classList.remove("is-loading");
    toast(getLastError() ? "Cloud error \u2014 rules check karein" : "Sync Done \u00b7 " + l.length + " complaints", !!getLastError());
  };

  /* ---------------- Telegram ---------------- */
  const [tg, setTg] = useState({ botToken: "", chatId: "", enabled: true });
  const [queue, setQueue] = useState(0);
  const [testBusy, setTestBusy] = useState(false);

  const paintTelegram = () => {
    const t = T();
    if (!t) return;
    const s = t.getSettings();
    setTg(s);
    setQueue(t.queueSize());
  };

  useEffect(() => {
    paintTelegram();
  }, []);

  const saveTg = (e) => {
    e.preventDefault();
    const t = T();
    if (!t) return;

    const ok = t.saveSettings({
      botToken: tg.botToken.trim(),
      chatId: tg.chatId.trim()
    });

    if (!ok) {
      toast("Save nahi hua \u2014 storage full hai", true);
      return;
    }

    paintTelegram();
    toast("Update Successful");
    t.flushQueue();
  };

  const testTg = () => {
    const t = T();
    if (!t) return;
    if (!t.isReady()) {
      toast("Pehle Bot Token aur Chat ID update karein", true);
      return;
    }

    setTestBusy(true);
    t.sendText(
      "\u2705 <b>4R-ADMIN</b> connection test\n" +
        "\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n" +
        "Telegram alerts <b>ON</b> hai.\n" +
        "Ab har nayi complaint yahan aa jayegi."
    )
      .then(() => toast("Test Message Sent"))
      .catch((err) => toast("Fail: " + err.message, true))
      .then(() => setTestBusy(false));
  };

  const toggleTg = () => {
    const t = T();
    if (!t) return;
    const s = t.getSettings();
    t.saveSettings({ enabled: !s.enabled });
    paintTelegram();
    if (!s.enabled) t.flushQueue();
  };

  const retryTg = () => {
    const t = T();
    if (!t) return;
    if (!t.queueSize()) {
      toast("Koi pending message nahi hai");
      return;
    }
    setTestBusy(true);
    t.flushQueue()
      .then((n) => toast(n ? n + " Message Sent" : "Abhi bhi nahi gaya \u2014 settings check karein", !n))
      .then(() => {
        setTestBusy(false);
        paintTelegram();
      });
  };

  /* ---------------- Preferences ---------------- */
  const [ui, setUi] = useState(getUI());
  const [kb, setKb] = useState(storageKB());

  useEffect(() => {
    setKb(storageKB());
  }, [list]);

  const togglePass = () => {
    saveUI({ showPassword: !getUI().showPassword });
    setUi(getUI());
    setKb(storageKB());
    toast("Update Successful");
  };

  /* ---------------- Backup ---------------- */
  const fileRef = useRef(null);

  const exportBackup = () => {
    const t = T();
    const payload = {
      app: "4R-ADMIN",
      version: 1,
      exportedAt: new Date().toISOString(),
      complaints: cacheRead(),
      telegram: t ? t.getSettings() : {},
      ui: getUI()
    };

    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    const d = new Date();
    const pad = (n) => (n < 10 ? "0" + n : "" + n);
    a.href = url;
    a.download =
      "4r-admin-backup-" + d.getFullYear() + pad(d.getMonth() + 1) + pad(d.getDate()) + ".json";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  const importBackup = (e) => {
    const f = e.target.files && e.target.files[0];
    if (!f) return;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result);
        if (!data || !Array.isArray(data.complaints)) throw new Error("bad file");

        cacheWrite(data.complaints);
        const t = T();
        if (data.telegram && t) t.saveSettings(data.telegram);
        if (data.ui) saveUI(data.ui);

        paintTelegram();
        setUi(getUI());
        setKb(storageKB());
        setCount(data.complaints.length);
        refreshCount && refreshCount();
        toast("Update Successful");
      } catch (err) {
        toast("File sahi nahi hai", true);
      }
      e.target.value = "";
    };
    reader.readAsText(f);
  };

  const wipe = () => {
    if (!window.confirm("SAARI complaints permanently delete ho jayengi (Firestore + browser dono se). Pakka?")) return;

    deleteAll().then(() => {
      refreshCount && refreshCount();
      paintFirebase([]);
      setKb(storageKB());
      toast("All Complaints Deleted");
    });
  };

  const tgOn = tg.enabled && tg.botToken && tg.chatId;

  return (
    <Shell>
      <main className="adm">
        <div className="adm-top">
          <Link className="adm-back" to="/">
            <IconBack />
            Home
          </Link>
        </div>

        <div className="adm-head">
          <h1>Settings</h1>
          <p>Telegram alerts aur panel ki basic settings yahan se update karein.</p>
        </div>

        {/* INSTALL APP */}
        <section className="adm-box" style={{ marginBottom: 14 }}>
          <div className="adm-box-head">
            <h2>Install App</h2>
            <span style={{ color: pwa.color }}>{pwa.state}</span>
          </div>

          <div className="adm-hint">
            Phone par app install karne se 4R-ADMIN apna hi icon khulta hai &mdash; browser ka bar
            nahi dikhta, aur full screen me chalta hai.
          </div>

          <div className="adm-form">
            {pwa.canInstall && (
              <button
                type="button"
                className="btn btn--block"
                onClick={() => {
                  const P = window.FourRPwa;
                  if (P) P.promptInstall().then(paintPwa);
                }}
              >
                <IconDown />
                Install App on Phone
              </button>
            )}
            <p
              className="adm-note"
              style={{ border: "1px solid var(--line)", borderRadius: 8 }}
              dangerouslySetInnerHTML={{ __html: pwa.note }}
            />
          </div>
        </section>

        {/* FIREBASE */}
        <section className="adm-box" style={{ marginBottom: 14 }}>
          <div className="adm-box-head">
            <h2>Cloud Database</h2>
            <span style={{ color: fb.error ? "#e5484d" : fb.online ? "#157a4d" : "#c2740a" }}>
              {fb.error ? "RULES ERROR" : fb.online ? "ONLINE" : "OFFLINE"}
            </span>
          </div>

          <div className="adm-set-row">
            <span className="adm-row-k">
              Firebase (Firestore)
              <small>
                {fb.error
                  ? fb.error
                  : fb.online
                  ? "Connected \u00b7 collection: complaints"
                  : "SDK load nahi hua (internet check karein)"}
              </small>
            </span>
            <span className="adm-set-val">{count}</span>
          </div>

          <div className="adm-form">
            <button type="button" className="btn btn--ghost" style={{ width: "100%" }} onClick={syncNow}>
              Sync Now
            </button>
          </div>

          <div className="adm-note" style={{ borderTop: "1px solid var(--line)" }}>
            {fb.error ? (
              <>
                <b style={{ color: "#e5484d" }}>Cloud save nahi ho raha.</b>
                <br />
                Project <b>rbet-6770a</b> ke liye rules publish nahi hui. Firebase Console &gt;
                Firestore Database &gt; Rules me project ki <b>firestore.rules</b> paste karke{" "}
                <b>Publish</b> dabayein. Tab tak complaint browser me hi save hoti rahegi.
              </>
            ) : (
              <>
                Complaint ab Firebase me save hoti hai, isliye admin panel kisi bhi device par sabhi
                complaints dekh sakta hai. Internet na ho to data browser me hi rehta hai.
              </>
            )}
          </div>
        </section>

        {/* TELEGRAM */}
        <section className="adm-box" style={{ marginBottom: 14 }}>
          <div className="adm-box-head">
            <h2>Telegram Alerts</h2>
            <span style={{ color: tgOn ? "#157a4d" : "#c2740a" }}>{tgOn ? "ON" : "OFF"}</span>
          </div>

          <div className="adm-hint">
            <b>Kaise set karein:</b>
            <br />
            1. Telegram me <b>@BotFather</b> kholein aur <b>/newbot</b> se bot banayein.
            <br />
            2. Bot token copy karke neeche paste karein.
            <br />
            3. Apni notification group banayein, bot ko us group me add karein.
            <br />
            4. Group ka <b>chat ID</b> neeche daalein.
          </div>

          <form className="adm-form" onSubmit={saveTg}>
            <div className="field">
              <label className="label" htmlFor="botToken">Bot Token</label>
              <input
                type="text"
                id="botToken"
                placeholder="1234567890:AAExxxxxxxxxxxxxxxxxxxxx"
                autoComplete="off"
                spellCheck="false"
                value={tg.botToken}
                onChange={(e) => setTg({ ...tg, botToken: e.target.value })}
              />
            </div>

            <div className="field">
              <label className="label" htmlFor="chatId">Chat ID</label>
              <input
                type="text"
                id="chatId"
                placeholder="-1001234567890"
                autoComplete="off"
                spellCheck="false"
                value={tg.chatId}
                onChange={(e) => setTg({ ...tg, chatId: e.target.value })}
              />
            </div>

            <div className="adm-btn-row">
              <button type="submit" className="btn btn--block">
                <span className="btn-text">Update</span>
              </button>
              <button
                type="button"
                className={"btn btn--ghost" + (testBusy ? " is-loading" : "")}
                onClick={testTg}
                disabled={testBusy}
              >
                Test
              </button>
            </div>
          </form>

          <div className="adm-set-row">
            <span className="adm-row-k">
              Telegram Alerts
              <small>Har nayi complaint par message bhejein</small>
            </span>
            <button
              type="button"
              className={"adm-switch" + (tg.enabled ? " is-on" : "")}
              role="switch"
              aria-checked={tg.enabled}
              onClick={toggleTg}
            />
          </div>

          <div className="adm-set-row">
            <span className="adm-row-k">
              Pending Messages
              <small>{queue ? queue + " message waiting" : "Bheje ja chuke hain"}</small>
            </span>
            <button
              type="button"
              className={"btn btn--ghost" + (testBusy ? " is-loading" : "")}
              style={{ margin: 0, padding: "9px 14px", fontSize: 13.5, flex: "0 0 auto" }}
              onClick={retryTg}
              disabled={testBusy}
            >
              Retry
            </button>
          </div>
        </section>

        {/* PREFERENCES */}
        <section className="adm-box" style={{ marginBottom: 14 }}>
          <div className="adm-box-head">
            <h2>Panel Preferences</h2>
            <span>Working</span>
          </div>

          <div className="adm-set-row">
            <span className="adm-row-k">
              Show Password in User Mailbox
              <small>Band rahe to password chhupa hua dikhega</small>
            </span>
            <button
              type="button"
              className={"adm-switch" + (ui.showPassword ? " is-on" : "")}
              role="switch"
              aria-checked={ui.showPassword}
              onClick={togglePass}
            />
          </div>

          <div className="adm-set-row">
            <span className="adm-row-k">
              Storage Used
              <small>Browser me saved data</small>
            </span>
            <span className="adm-set-val">{kb} KB</span>
          </div>

          <div className="adm-set-row">
            <span className="adm-row-k">
              Total Complaints
              <small>Panel me saved</small>
            </span>
            <span className="adm-set-val">{count}</span>
          </div>
        </section>

        {/* BACKUP */}
        <section className="adm-box" style={{ marginBottom: 14 }}>
          <div className="adm-box-head">
            <h2>Backup &amp; Restore</h2>
            <span>JSON</span>
          </div>

          <div className="adm-form">
            <div className="adm-btn-row">
              <button type="button" className="btn btn--block" onClick={exportBackup}>
                <span className="btn-text">Export Backup</span>
              </button>
              <button
                type="button"
                className="btn btn--ghost"
                onClick={() => fileRef.current && fileRef.current.click()}
              >
                Import
              </button>
            </div>
            <input ref={fileRef} type="file" accept=".json,application/json" hidden onChange={importBackup} />
            <p className="adm-note" style={{ border: "1px solid var(--line)", borderRadius: 8 }}>
              Export se saari complaints ke data aur images ek file me mil jayenge.
            </p>
          </div>
        </section>

        <section className="adm-box adm-danger">
          <div className="adm-box-head">
            <h2>Danger Zone</h2>
            <span>Careful</span>
          </div>
          <div className="adm-form">
            <button type="button" className="btn btn--block" onClick={wipe}>
              Delete All Complaints
            </button>
          </div>
        </section>
      </main>
    </Shell>
  );
}
