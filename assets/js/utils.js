export function qs(selector) {
  return document.querySelector(selector);
}

export function qsa(selector) {
  return document.querySelectorAll(selector);
}

export function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function copyIconSVG() {
  return `
    <svg viewBox="0 0 24 24" class="copy-icon">
      <path d="M16 1H4C2.9 1 2 1.9 2 3V15H4V3H16V1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM19 21H8V7H19V21Z"/>
    </svg>
  `;
}

export function copyBox(id, text) {
  return `
    <div class="copy-box">
      <pre id="${id}">${text}</pre>
      <button class="copy-btn" type="button" data-copy-target="${id}">
        ${copyIconSVG()}
      </button>
    </div>
  `;
}