/* ==========================================
   4R-ADMIN  |  pwa.js
   Phone par app "install" karne ke liye:
   - Service Worker register
   - Install button (menu + settings)
   ========================================== */

window.FourRPwa = (function () {
  "use strict";

  var deferred = null;   /* browser ne install prompt pakda hua */
  var swReg = null;

  /* ---------- Service Worker ---------- */
  function registerSW() {
    if (!("serviceWorker" in navigator)) return Promise.resolve(null);

    /* file:// par service worker nahi chalta - wahan skip */
    if (location.protocol === "file:") return Promise.resolve(null);

    return navigator.serviceWorker.register("sw.js")
      .then(function (reg) {
        swReg = reg;
        return reg;
      })
      .catch(function () { return null; });
  }

  function isStandalone() {
    return window.matchMedia("(display-mode: standalone)").matches ||
           window.navigator.standalone === true;
  }

  /* ---------- Install prompt ---------- */
  window.addEventListener("beforeinstallprompt", function (e) {
    e.preventDefault();
    deferred = e;
    showInstallButtons(true);
  });

  window.addEventListener("appinstalled", function () {
    deferred = null;
    showInstallButtons(false);
    document.body.setAttribute("data-installed", "1");
  });

  function canInstall() { return !!deferred; }
  function installed() { return isStandalone(); }

  /* ---------- Buttons dikhaao / chhupao ---------- */
  function showInstallButtons(show) {
    document.querySelectorAll("[data-install]").forEach(function (b) {
      b.style.display = show ? "" : "none";
    });
  }

  /* ---------- Install chalao ---------- */
  function promptInstall() {
    if (deferred) {
      deferred.prompt();
      return deferred.userChoice
        .then(function (r) {
          deferred = null;
          showInstallButtons(false);
          return r && r.outcome === "accepted";
        })
        .catch(function () { return false; });
    }

    /* browser ne prompt nahi diya (Safari/iOS) -> guide do */
    var msg = isIOS()
      ? "iPhone par: Safari me logo tap karein, phir \"Add to Home Screen\" chunein."
      : "Chrome menu (3 dot) se \"Add to Home screen\" / \"Install app\" chunein.";

    if (window.AdminPanel) window.AdminPanel.toast(msg, true);
    return Promise.resolve(false);
  }

  function isIOS() {
    return /iPad|iPhone|iPod/.test(window.navigator.userAgent) ||
           (window.navigator.platform === "MacIntel" &&
            window.navigator.maxTouchPoints > 1);
  }

  /* ---------- Buttons wire karo ---------- */
  function bind(selector) {
    document.querySelectorAll(selector).forEach(function (b) {
      b.addEventListener("click", function (e) {
        e.preventDefault();
        promptInstall();
      });
    });
  }

  function init() {
    registerSW();

    /* already installed hai to button na dikhe */
    if (installed()) {
      document.body.setAttribute("data-installed", "1");
      showInstallButtons(false);
      return;
    }

    bind("[data-install]");

    /* 1.5 sec baad check: kya prompt available hai */
    setTimeout(function () {
      if (!canInstall()) showInstallButtons(false);
    }, 1500);
  }

  return {
    init: init,
    registerSW: registerSW,
    promptInstall: promptInstall,
    canInstall: canInstall,
    installed: installed,
    isIOS: isIOS,
    showInstallButtons: showInstallButtons
  };

})();
