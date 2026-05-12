// assets/js/render/bestPracticesOverview.js
import { escapeHtml } from "../utils.js";

const bestPracticeCards = [
  {
    badge: "PATTERNS",
    title: "Prompt Patterns",
    subtitle: "좋은 프롬프트를 만드는 기본 구조",
    desc: "역할 지정, 출력 형식, Context 제공, 검증 요청 등 직원들이 반복적으로 사용할 수 있는 프롬프트 패턴을 정리합니다.",
    tags: ["기본기", "업무 활용", "복붙 가능"],
    tab: "prompt-patterns"
  },
  {
    badge: "HALLUCINATION",
    title: "Hallucination Guide",
    subtitle: "AI 환각 방지 가이드",
    desc: "AI가 그럴듯하지만 틀린 답변을 만드는 상황을 이해하고, 업무에서 검증하는 방법을 정리합니다.",
    tags: ["검증", "주의사항", "정확도"],
    tab: "hallucination-guide"
  },
  {
    badge: "MISTAKES",
    title: "Common Mistakes",
    subtitle: "AI 사용 시 흔한 실수",
    desc: "질문이 모호하거나, 자료 없이 단정하거나, 결과를 검토하지 않는 등 실무에서 자주 발생하는 AI 사용 실수를 정리합니다.",
    tags: ["실수 방지", "개선 예시", "실무형"],
    tab: "common-mistakes"
  }
];

function renderCard(item) {
  return `
    <article class="fw-card">
      <div class="badge-row">
        <span class="badge badge-id">${escapeHtml(item.badge)}</span>
        <span class="badge badge-easy">Guide</span>
      </div>

      <h3>${escapeHtml(item.title)}</h3>
      <div class="fullname">${escapeHtml(item.subtitle)}</div>
      <p>${escapeHtml(item.desc)}</p>

      <div class="strengths">
        ${item.tags.map(tag => `<span class="strength-tag">${escapeHtml(tag)}</span>`).join("")}
      </div>

      <button type="button" class="view-btn" data-best-practice-tab="${escapeHtml(item.tab)}">
        상세 보기 →
      </button>
    </article>
  `;
}

export function renderBestPracticesOverview() {
  return `
    <section class="page-hero page-hero-card">
      <p class="eyebrow">Best Practices</p>
      <h1>AI를 더 정확하고 안전하게 사용하는 방법</h1>
      <p>
        좋은 프롬프트 작성법, 환각 방지, 흔한 실수 예방 방법을 한 곳에서 확인할 수 있는 실무형 가이드입니다.
      </p>
    </section>

    <div class="overview-grid">
      ${bestPracticeCards.map(renderCard).join("")}
    </div>
  `;
}