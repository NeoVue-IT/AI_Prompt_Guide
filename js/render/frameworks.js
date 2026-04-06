import { FRAMEWORKS } from "../../data/frameworks.js";
import { state } from "../state.js";

export function renderFrameworks() {
  if (state.currentFrameworkTab === "overview") {
    return `
      <section class="card-grid">
        ${FRAMEWORKS.map(item => `
          <article class="card">
            <h3>${item.title}</h3>
            <p>${item.shortDesc}</p>
            <div class="meta">
              <strong>활용 시점:</strong> ${item.useWhen}
            </div>
            <div class="meta">
              <strong>예시:</strong> ${item.quickExample}
            </div>
          </article>
        `).join("")}
      </section>
    `;
  }

  const item = FRAMEWORKS.find(f => f.id === state.currentFrameworkTab);
  if (!item) return `<p>데이터를 찾을 수 없습니다.</p>`;

  return `
    <section class="detail-view">
      <button class="back-btn" id="back-to-fw-overview">← 전체로 돌아가기</button>
      <h2>${item.title}</h2>
      <p>${item.shortDesc}</p>

      <div class="detail-card">
        <h3>활용 시점</h3>
        <p>${item.useWhen}</p>
      </div>

      <div class="detail-card">
        <h3>빠른 예시</h3>
        <p>${item.quickExample}</p>
      </div>

      <div class="detail-card">
        <h3>프롬프트 구조</h3>
        <pre>${item.prompt}</pre>
      </div>

      <div class="detail-card">
        <h3>예상 결과</h3>
        <p>${item.expectedOutput}</p>
      </div>
    </section>
  `;
}