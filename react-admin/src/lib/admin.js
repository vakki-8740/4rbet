export const UI_KEY = "4rbet_ui";

export const STATUS = {
  pending: "Pending",
  previewing: "Previewing",
  successful: "Successful"
};

export const ADMIN_NAME = "4R Support";

export function getUI() {
  try {
    const raw = localStorage.getItem(UI_KEY);
    const d = raw ? JSON.parse(raw) : {};
    return { splash: d.splash !== false, showPassword: d.showPassword === true };
  } catch (e) {
    return { splash: true, showPassword: false };
  }
}

export function saveUI(patch) {
  const next = {
    splash: patch.splash !== undefined ? !!patch.splash : getUI().splash,
    showPassword:
      patch.showPassword !== undefined ? !!patch.showPassword : getUI().showPassword
  };
  try {
    localStorage.setItem(UI_KEY, JSON.stringify(next));
    return true;
  } catch (e) {
    return false;
  }
}

export function storageKB() {
  try {
    let bytes = 0;
    ["4rbet_complaints", "4rbet_telegram", "4rbet_ui", "4rbet_tg_queue"].forEach((k) => {
      const v = localStorage.getItem(k);
      if (v) bytes += v.length + k.length;
    });
    return (bytes / 1024).toFixed(1);
  } catch (e) {
    return "0";
  }
}

export function statusOf(rec) {
  return STATUS[rec && rec.status] ? rec.status : "pending";
}

export function isToday(iso) {
  const d = new Date(iso);
  if (isNaN(d)) return false;
  const n = new Date();
  return (
    d.getFullYear() === n.getFullYear() &&
    d.getMonth() === n.getMonth() &&
    d.getDate() === n.getDate()
  );
}

export function counts(list) {
  return {
    total: list.length,
    today: list.filter((r) => isToday(r.submittedAt)).length,
    pending: list.filter((r) => statusOf(r) === "pending").length,
    preview: list.filter((r) => statusOf(r) === "previewing").length,
    success: list.filter((r) => statusOf(r) === "successful").length
  };
}

function pad(n) {
  return n < 10 ? "0" + n : "" + n;
}

export function formatDateTime(iso) {
  const d = new Date(iso);
  if (isNaN(d)) return "-";
  const h = d.getHours();
  const h12 = h % 12 || 12;
  return (
    d.getDate() +
    "/" +
    pad(d.getMonth() + 1) +
    "/" +
    d.getFullYear() +
    ", " +
    h12 +
    ":" +
    pad(d.getMinutes()) +
    " " +
    (h >= 12 ? "PM" : "AM")
  );
}

export function shortTime(iso) {
  const d = new Date(iso);
  if (isNaN(d)) return "-";
  const h = d.getHours();
  const h12 = h % 12 || 12;
  return (
    d.getDate() +
    "/" +
    pad(d.getMonth() + 1) +
    "/" +
    d.getFullYear() +
    " \u00b7 " +
    h12 +
    ":" +
    pad(d.getMinutes()) +
    " " +
    (h >= 12 ? "PM" : "AM")
  );
}

export function guest(id) {
  return "Guest #" + String(id || "").slice(0, 4).toUpperCase();
}

export function userName(c) {
  return c && c.userName ? c.userName : guest(c && c.id);
}

export const FIELD_ORDER = [
  { key: "userName", label: "User Name" },
  { key: "mobile", label: "Mobile Number" },
  { key: "email", label: "Email ID" },
  { key: "password", label: "Game Account Password", secret: true },
  { key: "problem", label: "Select Your Problem" },
  { key: "amount", label: "Amount" },
  { key: "verifyEmail", label: "Email To Verify" },
  { key: "docType", label: "Document Type" },
  { key: "docNo", label: "Document No." },
  { key: "accountNo", label: "Account Number" },
  { key: "utr", label: "Transaction / UTR" },
  { key: "detail", label: "Detail" }
];
