/* ==========================================
   4R BET &mdash; Support Site  |  main.js
   ========================================== */

(function () {
  "use strict";

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

  /* Image ko chhota karke base64 me store karte hain,
     warna localStorage ka 5MB limit jaldi phat jayega. */
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

      return compressImage(file, 520, 0.6).then(function (dataUrl) {
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
    return d.getDate() + "/" + pad(d.getMonth() + 1) + "/" + d.getFullYear() +
           ", " + pad(d.getHours()) + ":" + pad(d.getMinutes()) + " " + ampm(d.getHours());
  }

  function ampm(h) { return h >= 12 ? "PM" : "AM"; }

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

    var total  = records.length;
    var pending = records.filter(function (r) { return r.status !== "successful"; }).length;
    var done    = total - pending;

    document.getElementById("statTotal").textContent = total;
    document.getElementById("statPending").textContent = pending;
    document.getElementById("statDone").textContent = done;

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

      /* Password: sirf 20% dikhe, baaki hidden */
      function maskPassword(pw) {
        pw = String(pw || "");
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
        var status = r.status === "successful" ? "successful" : "pending";
        var statusTxt = status === "successful" ? "Successful" : "Pending";

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
        var saved = addComplaint(buildRecord(form, images));

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

  /* ---------- Online chat (demo bot) ---------- */
  var chatForm = document.getElementById("chatForm");
  var chatBox  = document.getElementById("chatMessages");
  var chatIn   = document.getElementById("chatField");
  var startBtn = document.getElementById("startChat");

  var replies = [
    "Aapka message mil gaya. Kya aap apna User ID de sakte hain?",
    "Dhanyavaad! Problem note kar li gayi hai.",
    "Koi bhi aur sawal ho to yahi message karein."
  ];
  var rIndex = 0;

  function addMsg(text, who, name) {
    var d = document.createElement("div");
    d.className = "msg msg--" + who;
    if (name) {
      var n = document.createElement("span");
      n.className = "msg-name";
      n.textContent = name;
      d.appendChild(n);
    }
    var p = document.createElement("p");
    p.textContent = text;
    d.appendChild(p);
    chatBox.appendChild(d);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

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

  if (startBtn) {
    startBtn.addEventListener("click", function () {
      addMsg("Live chat shuru! Apni problem batayein.", "agent", "Support Agent");
      if (chatIn) chatIn.focus();
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
