/* =========================================================
   Remind De — landing page behavior

   1) Set your Play Store URL ONCE below.
      It is applied automatically to every button/link
      that has the `data-install-link` attribute
      (header button, hero button, bottom CTA button).
   ========================================================= */

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.vedyantrasoftlab.remindde";

document.querySelectorAll("[data-install-link]").forEach((el) => {
  el.setAttribute("href", PLAY_STORE_URL);
  el.setAttribute("target", "_blank");
  el.setAttribute("rel", "noopener noreferrer");
});

/* 2) If assets/icon.png hasn't been added yet, show a neutral
      placeholder glyph instead of a broken image icon. */
const appIcon = document.getElementById("app-icon");
if (appIcon) {
  appIcon.addEventListener("error", () => {
    appIcon.classList.add("icon-missing");
  });
}
