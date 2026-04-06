import { escapeHtml } from "./utils.js";

export function diffClass(difficulty = "") {
  if (difficulty === "easy") return "badge-easy";
  if (difficulty === "medium") return "badge-medium";
  if (difficulty === "intermediate") return "badge-intermediate";
  return "badge-advanced";
}

export function renderTags(category, tags = []) {
  const chips = [];

  if (category) {
    chips.push(`<span class="strength-tag">${escapeHtml(category)}</span>`);
  }

  if (Array.isArray(tags)) {
    chips.push(
      ...tags.map(tag => `<span class="strength-tag">${escapeHtml(tag)}</span>`)
    );
  }

  if (!chips.length) return "";

  return `<div class="strengths">${chips.join("")}</div>`;
}