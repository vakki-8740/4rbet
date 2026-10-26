/* ==========================================
   4R-ADMIN  |  admin-chat.js
   Chat list + chat room controller.
   Data Firestore ke "chats" collection se aata hai
   (../js/chat-db.js).
   ========================================== */

window.AdminChat = (function () {
  "use strict";

  var C = window.FourRChat;

  var AVATAR = "USER-ICON/2288510.png";
  var ADMIN_NAME = "4R Support";

  var toastTimer = null;

  /* ==========================================
     HELPERS
     ========================================== */

  function A() { return window.AdminPanel; }

  function esc(s) {
    if (A()) return A().esc(s);
    return String(s === undefined || s === null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, '&quot;');
  }

  function when(iso) {
    if (!iso) return "";
    return A() ? A().shortTime(iso) : iso;
  }

  function fullWhen(iso) {
    if (!iso) return "-";
    return A() ? A().formatDateTime(iso) : iso;
  }

  function toast(text) {
    var el = document.getElementById("admChatToast");
    if (!el) {
      el = document.createElement("div");
      el.id = "admChatToast";
      el.className = "adm-toast";
      document.body.appendChild(el);
    }
    el.textContent = text;
    void el.offsetWidth;
    el.classList.add("is-show");

    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove("is-show"); }, 2400);
  }

  function guest(id) {
    return "Guest #" + String(id || "").slice(0, 4).toUpperCase();
  }

  function userName(c) {
    return (c && c.userName) ? c.userName : guest(c && c.id);
  }

  function roomId() {
    try {
      var p = new URLSearchParams(location.search);
      return p.get("chat") || p.get("id") || "";
    } catch (e) { /* ignore */ }
    return "";
  }

  /* ==========================================
     LIST PAGE
     ========================================== */

  function initList() {
    var listEl = document.getElementById("chatList");
    if (!listEl || !C) return;

    var totalEl  = document.getElementById("chatTotal");
    var unreadEl = document.getElementById("chatUnread");
    var countEl  = document.getElementById("chatCount");

    function card(c) {
      var unread = Number(c.unreadAdmin || 0);
      var last = c.lastText || "Chat shuru karein";
      var prefix = c.lastWho === "admin" ? "You: " : "";

      return '<button type="button" class="adm-card adm-chat" data-id="' + esc(c.id) + '">' +
               '<span class="adm-ava"><img src="' + AVATAR + '" alt="" data-ua></span>' +
               '<span class="adm-cmid">' +
                 '<span class="adm-cname">' + esc(userName(c)) + '</span>' +
                 '<span class="adm-chat-last">' + esc(prefix + last) + '</span>' +
                 '<span class="adm-cwhen">' + esc(when(c.updatedAt || c.createdAt)) + '</span>' +
               '</span>' +
               '<span class="adm-cright">' +
                 (unread ? '<span class="adm-unread">' + (unread > 99 ? "99+" : unread) + '</span>' : '') +
                 '<span class="adm-chev">' + (A() ? A().ICON.chev : "") + '</span>' +
               '</span>' +
             '</button>';
    }

    var lastErr = "";

    function render(list, online, reason) {
      var unread = 0;

      lastErr = online ? "" : (reason || (C.reason ? C.reason() : ""));

      list.forEach(function (c) { unread += Number(c.unreadAdmin || 0); });

      if (totalEl) totalEl.textContent = list.length;
      if (unreadEl) unreadEl.textContent = unread;
      if (countEl) countEl.textContent = list.length;

      document.title = (unread ? "(" + unread + ") " : "") + "Chats \u2014 4R-ADMIN";

      if (!list.length) {
        var whyHtml = lastErr
          ? '<h3>Chat load nahi hui</h3><p>' + esc(lastErr) + '</p>'
          : '<h3>Abhi koi chat nahi hai</h3>' +
            '<p>Jab user Online Chat page se message bhejega, wo yahan dikhega.</p>';

        listEl.innerHTML =
          '<div class="adm-empty">' +
            '<div class="adm-empty-ico">' +
              '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.6 8.6 0 0 1-3.6-.8L3 21l1.9-5.2a8.4 8.4 0 0 1-.9-3.8 8.4 8.4 0 0 1 8.5-8.4 8.4 8.4 0 0 1 8.5 7.9Z"></path></svg>' +
            '</div>' + whyHtml +
            '<a class="btn" href="../online-chat.html">Open User Chat</a>' +
          '</div>';
        return;
      }

      listEl.innerHTML = list.map(card).join("");

      listEl.querySelectorAll(".adm-chat").forEach(function (btn) {
        btn.addEventListener("click", function () {
          location.href = "room.html?chat=" + encodeURIComponent(btn.getAttribute("data-id"));
        });
      });
    }

    C.watchChats(render);
  }

  /* ==========================================
     ROOM PAGE
     ========================================== */

  function initRoom() {
    var box = document.getElementById("roomMsgs");
    if (!box || !C) return;

    var id = roomId();

    var nameEl = document.getElementById("roomName");
    var metaEl = document.getElementById("roomMeta");
    var form   = document.getElementById("roomForm");
    var field  = document.getElementById("roomField");
    var sendBtn = form ? form.querySelector("button[type=submit]") : null;
    var latest  = document.getElementById("roomLatest");
    var delBtn  = document.getElementById("roomDel");
    var imageIn = document.getElementById("roomImage");
    var fileIn  = document.getElementById("roomFile");
    var imgBtn  = document.getElementById("roomImageBtn");
    var fileBtn = document.getElementById("roomFileBtn");

    var stick = true;
      var chatData = null;

    if (!id) {
      nameEl.textContent = "Chat nahi mili";
      metaEl.textContent = "List se dobara kholen";
      return;
    }

    /* ---------- scroll ---------- */

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

    /* ---------- bubble ---------- */

    function bubble(m) {
      var mine = m.who === "admin";
      var d = document.createElement("div");

      d.className = "msg " + (mine ? "msg--user" : "msg--agent");
      if (m.image || m.fileName) d.className += " msg--file";

      d.dataset.time = fullWhen(m.at);
      d.setAttribute("role", "button");
      d.setAttribute("tabindex", "0");

      var nm = document.createElement("span");
      nm.className = "msg-name";
      nm.textContent = mine ? "You (Support)" : userName(chatData);
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

      box.innerHTML = "";

      if (!list.length) {
        box.innerHTML =
          '<div class="adm-room-empty">' +
            '<p>Abhi koi message nahi hai.</p>' +
            '<small>Neeche se reply bhejein.</small>' +
          '</div>';
        return;
      }

      list.forEach(function (m) { box.appendChild(bubble(m)); });

      if (grow) toBottom(true);
      paintLatest();
    }

    /* ---------- popup (read only) ---------- */

    var popup = document.createElement("div");
    popup.className = "modal-backdrop";
    popup.innerHTML =
      '<div class="modal chat-popup">' +
        '<button type="button" class="popup-x" aria-label="Close">&times;</button>' +
        '<h3 class="modal-title chat-popup-title">Chat Message</h3>' +
        '<p class="chat-popup-when"></p>' +
        '<div class="chat-popup-body"></div>' +
        '<button type="button" class="btn btn--block popup-close">Close</button>' +
      '</div>';
    document.body.appendChild(popup);

    var ppTitle = popup.querySelector(".chat-popup-title");
    var ppWhen  = popup.querySelector(".chat-popup-when");
    var ppBody  = popup.querySelector(".chat-popup-body");

    function closePopup() { popup.classList.remove("is-open"); }

    function openPopup(node, m) {
      ppTitle.textContent = m.who === "admin" ? "Your Message" : userName(chatData);
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
        p.textContent = m.text || m.fileName || "";
        ppBody.appendChild(p);
      }

      popup.classList.add("is-open");
    }

    popup.querySelector(".popup-x").addEventListener("click", closePopup);
    popup.querySelector(".popup-close").addEventListener("click", closePopup);
    popup.addEventListener("click", function (e) {
      if (e.target === popup) closePopup();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closePopup();
    });

    /* ---------- send ---------- */

    function lock(on) { if (sendBtn) sendBtn.disabled = !!on; }

    function send(msg) {
      lock(true);
      C.send(id, msg).then(function (res) {
        lock(false);
        if (!res.ok) toast(res.error || "Message nahi gaya");
      });
    }

    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();

        var text = field.value.trim();
        if (!text) return;

        if (!C.isOnline()) {
          toast("Internet nahi hai. Connection check karein.");
          return;
        }

        field.value = "";
        send({ who: "admin", text: text, name: ADMIN_NAME });
        field.focus();
      });
    }

    if (imgBtn && imageIn) {
      imgBtn.addEventListener("click", function () { imageIn.click(); });
    }

    if (fileBtn && fileIn) {
      fileBtn.addEventListener("click", function () { fileIn.click(); });
    }

    if (imageIn) {
      imageIn.addEventListener("change", function () {
        var f = imageIn.files && imageIn.files[0];
        imageIn.value = "";
        if (!f) return;

        C.readImage(f).then(function (out) {
          send({ who: "admin", image: out.dataUrl, fileName: out.name, name: ADMIN_NAME });
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
          send({ who: "admin", fileName: out.name, fileData: out.dataUrl, name: ADMIN_NAME });
        }).catch(function (err) {
          toast(err.message || "File nahi gayi");
        });
      });
    }

    /* ---------- delete chat ---------- */

    if (delBtn) {
      delBtn.addEventListener("click", function () {
        if (!confirm("Is user ki poori chat delete karein?")) return;

        delBtn.disabled = true;
        C.deleteChat(id).then(function (res) {
          delBtn.disabled = false;
          if (res.ok) location.replace("chat.html");
          else toast(res.error || "Delete nahi hua");
        });
      });
    }

    /* ---------- live data ---------- */

    C.getChat(id).then(function (res) {
      if (!res.chat) {
        nameEl.textContent = "Chat nahi mili";
        metaEl.textContent = "Delete ho gayi hogi";
        return;
      }
      chatData = res.chat;
      paintHead();
    });

    function paintHead() {
      if (!chatData) return;
      nameEl.textContent = userName(chatData);
      metaEl.textContent = "Chat ID: " + String(chatData.id || id).slice(0, 6).toUpperCase() +
                           " \u00b7 " + when(chatData.updatedAt || chatData.createdAt);
    }

    C.watchChat(id, function (chat, online) {
      if (!chat) return;
      chatData = chat;
      paintHead();

      var unread = Number(chat.unreadAdmin || 0);
      if (unread > 0) C.markRead(id, "admin");
    });

    C.watchMessages(id, function (list, online, reason) {
      if (!online) {
        metaEl.textContent = reason || (C.reason ? C.reason() : "Offline \u2014 internet check karein");
        return;
      }
      render(list);
    });
  }

  /* ==========================================
     BADGE (admin home menu)
     ========================================== */

  function watchUnread(cb) {
    if (!C) return;
    C.watchChats(function (list) {
      var unread = 0;
      list.forEach(function (c) { unread += Number(c.unreadAdmin || 0); });
      cb(unread);
    });
  }

  return {
    initList: initList,
    initRoom: initRoom,
    watchUnread: watchUnread
  };

})();
