/* ==========================================
   4R BET  |  chat-page.js
   Online chat page ka controller.
   Messages Firestore me save hote hain, admin panel
   se real time reply aata hai.
   ========================================== */

(function () {
  "use strict";

  var form = document.getElementById("chatForm");
  if (!form) return;

  var C = window.FourRChat;
  if (!C) return;

  var box     = document.getElementById("chatMessages");
  var field   = document.getElementById("chatField");
  var stateEl = document.getElementById("chatState");
  var latest  = document.getElementById("btnLatest");
  var imageIn = document.getElementById("imageInput");
  var fileIn  = document.getElementById("fileInput");
  var btnImage = document.getElementById("btnImage");
  var btnFile  = document.getElementById("btnFile");
  var sendBtn  = form.querySelector("button[type=submit]");

  var nameModal = document.getElementById("nameModal");
  var nameField = document.getElementById("nameField");
  var nameSave  = document.getElementById("nameSave");

  var chatId = C.myId();
  var myName = C.myName();
  var stick  = true;
  var started = false;

  /* ==========================================
     HELPERS
     ========================================== */

  function pad(n) { return n < 10 ? "0" + n : "" + n; }

  function stamp(iso) {
    var d = iso ? new Date(iso) : new Date();
    if (isNaN(d)) return "";
    var h = d.getHours();
    var h12 = h % 12 || 12;
    return d.getDate() + "/" + pad(d.getMonth() + 1) + "/" + d.getFullYear() +
           ", " + h12 + ":" + pad(d.getMinutes()) + " " + (h >= 12 ? "PM" : "AM");
  }

  function esc(s) {
    return String(s === undefined || s === null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  var toastTimer = null;

  function toast(text) {
    var el = document.querySelector(".chat-toast");
    if (!el) {
      el = document.createElement("div");
      el.className = "toast chat-toast";
      document.body.appendChild(el);
    }
    el.textContent = text;
    void el.offsetWidth;
    el.classList.add("is-show");

    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove("is-show"); }, 2600);
  }

  function setState(online) {
    if (!stateEl) return;
    stateEl.innerHTML = online
      ? "<i></i> Online &middot; Reply in minutes"
      : "<i></i> Offline &middot; internet check karein";
    stateEl.classList.toggle("is-off", !online);
  }

  /* ==========================================
     SCROLL
     ========================================== */

  function atBottom() {
    return box.scrollHeight - box.scrollTop - box.clientHeight < 90;
  }

  function toBottom(smooth) {
    try {
      box.scrollTo({ top: box.scrollHeight, behavior: smooth ? "smooth" : "auto" });
    } catch (e) {
      box.scrollTop = box.scrollHeight;
    }
  }

  function paintLatest() {
    if (latest) latest.classList.toggle("is-show", !atBottom());
  }

  box.addEventListener("scroll", function () {
    stick = atBottom();
    paintLatest();
  }, { passive: true });

  if (latest) {
    latest.addEventListener("click", function () {
      toBottom(true);
      stick = true;
      paintLatest();
    });
  }

  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", function () {
      setTimeout(function () { if (stick) toBottom(); paintLatest(); }, 80);
    });
  }

  setTimeout(function () { toBottom(); stick = true; paintLatest(); }, 2400);

  /* ==========================================
     BUBBLE RENDER
     ========================================== */

  function bubble(m) {
    var mine = m.who !== "admin";
    var d = document.createElement("div");

    d.className = "msg " + (mine ? "msg--user" : "msg--agent");
    if (m.image || m.fileName) d.className += " msg--file";

    d.dataset.mid  = m.id;
    d.dataset.who  = mine ? "user" : "agent";
    d.dataset.time = stamp(m.at);
    d.setAttribute("role", "button");
    d.setAttribute("tabindex", "0");

    var nm = document.createElement("span");
    nm.className = "msg-name";
    nm.textContent = mine ? "You" : "Support Agent";
    d.appendChild(nm);

    if (m.image) {
      var img = document.createElement("img");
      img.className = "msg-image";
      img.src = m.image;
      img.alt = m.fileName || "image";
      d.appendChild(img);

      var cap = document.createElement("span");
      cap.className = "msg-file-cap";
      cap.textContent = m.fileName || "Photo";
      d.appendChild(cap);

    } else if (m.fileName) {
      var ico = document.createElement("span");
      ico.className = "msg-file-ico";
      ico.innerHTML =
        '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" ' +
        'stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">' +
        '<path d="M14 2.5H7.5A2.5 2.5 0 0 0 5 5v14a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 19 19V7.5L14 2.5Z"></path>' +
        '<path d="M14 2.5V7a.5.5 0 0 0 .5.5H19"></path></svg>';
      d.appendChild(ico);

      if (m.fileData) {
        var a = document.createElement("a");
        a.className = "msg-file-name";
        a.href = m.fileData;
        a.download = m.fileName;
        a.textContent = m.fileName;
        a.addEventListener("click", function (e) { e.stopPropagation(); });
        d.appendChild(a);
      } else {
        var lbl = document.createElement("span");
        lbl.className = "msg-file-name";
        lbl.textContent = m.fileName;
        d.appendChild(lbl);
      }

    } else {
      var p = document.createElement("p");
      p.className = "msg-text";
      p.textContent = m.text || "";
      d.appendChild(p);

      if (m.editedAt) {
        var ed = document.createElement("span");
        ed.className = "msg-edited";
        ed.textContent = "edited";
        d.appendChild(ed);
      }
    }

    d.addEventListener("click", function () { openPopup(d, m); });
    d.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openPopup(d, m);
      }
    });

    return d;
  }

  function render(list) {
    var grow = stick;

    box.querySelectorAll(".msg[data-mid]").forEach(function (el) { el.remove(); });

    list.forEach(function (m) { box.appendChild(bubble(m)); });

    if (grow) toBottom(true);
    paintLatest();
  }

  /* ==========================================
     MESSAGE POPUP
     ========================================== */

  var popup = document.createElement("div");
  popup.className = "modal-backdrop";
  popup.setAttribute("role", "dialog");
  popup.setAttribute("aria-modal", "true");
  popup.innerHTML =
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

  document.body.appendChild(popup);

  var ppTitle = popup.querySelector(".chat-popup-title");
  var ppWhen  = popup.querySelector(".chat-popup-when");
  var ppBody  = popup.querySelector(".chat-popup-body");
  var ppEdit  = popup.querySelector(".chat-popup-edit");
  var ppField = popup.querySelector(".popup-edit-field");
  var ppActs  = popup.querySelector(".chat-popup-acts");

  var editing = null;

  function closePopup() {
    popup.classList.remove("is-open");
    ppEdit.style.display = "none";
    ppActs.style.display = "";
    editing = null;
  }

  function openPopup(node, m) {
    editing = { node: node, msg: m };

    var mine = node.dataset.who === "user";
    ppTitle.textContent = mine ? "Your Message" : "Support Agent";
    ppWhen.innerHTML = "<strong>Sent:</strong> " + esc(node.dataset.time);

    ppBody.innerHTML = "";

    var imgEl = node.querySelector(".msg-image");
    if (imgEl) {
      var big = document.createElement("img");
      big.className = "popup-img";
      big.src = imgEl.getAttribute("src");
      big.alt = m.fileName || "image";
      ppBody.appendChild(big);

      var nm = document.createElement("p");
      nm.className = "popup-file-name";
      nm.textContent = m.fileName || "";
      ppBody.appendChild(nm);
    } else {
      var p = document.createElement("p");
      p.className = "popup-text";
      p.textContent = m.text || "";
      ppBody.appendChild(p);
    }

    var isText = !m.image && !m.fileName;
    ppActs.style.display = mine ? "" : "none";
    popup.querySelector(".cpa--edit").style.display = mine && isText ? "" : "none";
    popup.querySelector(".cpa--replay").style.display = mine && isText ? "" : "none";

    popup.classList.add("is-open");
  }

  popup.querySelector(".popup-x").addEventListener("click", closePopup);
  popup.querySelector(".popup-close").addEventListener("click", closePopup);
  popup.addEventListener("click", function (e) {
    if (e.target === popup) closePopup();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && popup.classList.contains("is-open")) closePopup();
  });

  popup.querySelector(".cpa--edit").addEventListener("click", function () {
    if (!editing || editing.msg.image || editing.msg.fileName) return;
    ppField.value = editing.msg.text || "";
    ppEdit.style.display = "block";
    ppActs.style.display = "none";
    ppField.focus();
  });

  popup.querySelector(".popup-edit-cancel").addEventListener("click", closePopup);

  popup.querySelector(".popup-edit-save").addEventListener("click", function () {
    if (!editing) return;
    var text = ppField.value.trim();
    if (!text) return;

    C.editMessage(chatId, editing.msg.id, text).then(function (res) {
      closePopup();
      if (!res.ok) toast(res.error || "Edit nahi hua");
    });
  });

  popup.querySelector(".cpa--replay").addEventListener("click", function () {
    if (!editing) return;
    var text = editing.msg.text || "";
    closePopup();
    if (text) sendText(text);
  });

  popup.querySelector(".cpa--delete").addEventListener("click", function () {
    if (!editing) return;
    var id = editing.msg.id;
    closePopup();

    C.deleteMessage(chatId, id).then(function (res) {
      if (!res.ok) toast(res.error || "Delete nahi hua");
    });
  });

  /* ==========================================
     SENDING
     ========================================== */

  function lock(on) {
    if (sendBtn) sendBtn.disabled = !!on;
    if (field) field.disabled = false;
  }

  function sendText(text) {
    var t = String(text || "").trim();
    if (!t) return;

    lock(true);
    C.send(chatId, { who: "user", text: t, name: myName }).then(function (res) {
      lock(false);
      if (!res.ok) toast(res.error || "Message nahi gaya");
    });
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var text = field.value.trim();
    if (!text) return;

    if (!C.isOnline()) {
      toast("Internet nahi hai. Connection check karein.");
      return;
    }

    field.value = "";
    sendText(text);
    field.focus();
  });

  /* ==========================================
     IMAGE / FILE
     ========================================== */

  if (btnImage && imageIn) {
    btnImage.addEventListener("click", function () { imageIn.click(); });
  }

  if (btnFile && fileIn) {
    btnFile.addEventListener("click", function () { fileIn.click(); });
  }

  if (imageIn) {
    imageIn.addEventListener("change", function () {
      var f = imageIn.files && imageIn.files[0];
      imageIn.value = "";
      if (!f) return;

      C.readImage(f).then(function (out) {
        return C.send(chatId, {
          who: "user",
          image: out.dataUrl,
          fileName: out.name,
          name: myName
        });
      }).then(function (res) {
        if (res && !res.ok) toast(res.error || "Image nahi gayi");
      }).catch(function (err) {
        toast(err.message || "Image nahi gayi");
      });
    });
  }

  if (fileIn) {
    fileIn.addEventListener("change", function () {
      var f = fileIn.files && fileIn.files[0];
      fileIn.value = "";
      if (!f) return;

      C.readFile(f).then(function (out) {
        return C.send(chatId, {
          who: "user",
          fileName: out.name,
          fileData: out.dataUrl,
          name: myName
        });
      }).then(function (res) {
        if (res && !res.ok) toast(res.error || "File nahi gayi");
      }).catch(function (err) {
        toast(err.message || "File nahi gayi");
      });
    });
  }

  /* ==========================================
     START
     ========================================== */

  function start() {
    if (started) return;
    started = true;

    C.ensureChat(chatId, myName).then(function (res) {
      setState(!!C.isOnline());
      if (res && !res.ok) toast(res.error || "Chat connect nahi hua");
    });

    C.watchMessages(chatId, function (list, online) {
      setState(online);
      render(list);
    });

    C.watchChat(chatId, function (chat, online) {
      if (!online) { setState(false); return; }
      setState(true);
      if (!chat) return;

      if (chat.userName && !myName) {
        myName = chat.userName;
      }

      var unread = Number(chat.unreadUser || 0);
      if (unread > 0) C.markRead(chatId, "user");
    });
  }

  /* ==========================================
     NAME POPUP
     ========================================== */

  function guessName() {
    try {
      var raw = localStorage.getItem("4rbet_complaints");
      var list = raw ? JSON.parse(raw) : [];
      if (list && list.length) {
        var d = list[0].data || {};
        if (d.userName) return String(d.userName).trim();
      }
    } catch (e) { /* ignore */ }
    return "";
  }

  function askName() {
    if (!nameModal) { start(); return; }

    nameField.value = "";
    nameModal.classList.add("is-open");
    setTimeout(function () { nameField.focus(); }, 120);

    function save() {
      var n = nameField.value.trim();
      myName = n ? C.setName(n) : C.setName(C.guestName(chatId));
      if (!myName) myName = C.guestName(chatId);
      nameModal.classList.remove("is-open");
      start();
    }

    nameSave.addEventListener("click", save);
    nameField.addEventListener("keydown", function (e) {
      if (e.key === "Enter") { e.preventDefault(); save(); }
    });
  }

  /* pehle se naam hai? warna complaint se guess karo */
  if (!myName) {
    var g = guessName();
    if (g) {
      myName = C.setName(g);
      start();
    } else {
      askName();
    }
  } else {
    start();
  }

})();
