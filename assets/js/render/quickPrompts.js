import { QUICK_PROMPTS } from "../../data/quickPrompts.js";

export function renderQuickPrompts() {
  return `
    <section class="card-grid">
      ${QUICK_PROMPTS.map(item => `
        <article class="card">
          <h3>${item.title}</h3>
          <p>${item.shortDesc}</p>
          <div><strong>언제 사용:</strong> ${item.useWhen}</div>
          <div><strong>예시:</strong> ${item.quickExample}</div>
          <div><strong>프롬프트:</strong></div>
          <pre>${item.prompt}</pre>
          <div><strong>예상 결과:</strong> ${item.expectedOutput}</div>
        </article>
      `).join("")}
    </section>
  `;
}