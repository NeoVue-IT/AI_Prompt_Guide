import { FRAMEWORKS } from "../../data/frameworks.js";
import { escapeHtml } from "../utils.js";
import { diffClass, renderTags } from "../ui.js";

function renderFrameworkPreviewCard(fw) {
  return `
    <article class="fw-card">
      <div class="badge-row">
        <span class="badge badge-id">${escapeHtml(fw.name || fw.id || "")}</span>
        <span class="badge ${diffClass(fw.difficulty)}">${escapeHtml(fw.diffLabel || "")}</span>
      </div>

      <h3>${escapeHtml(fw.title || fw.name || "")}</h3>
      <div class="fullname">${escapeHtml(fw.fullName || "")}</div>
      <p>${escapeHtml(fw.shortDesc || "")}</p>

      ${renderTags(fw.category, fw.tags)}

      <button
        type="button"
        class="view-btn"
        data-overview-fw-id="${escapeHtml(fw.id)}"
      >
        상세 보기 →
      </button>
    </article>
  `;
}

function renderLibraryCard({ badge, badgeLabel, title, subtitle, desc, tags, actionId }) {
  return `
    <article class="fw-card">
      <div class="badge-row">
        <span class="badge badge-id">${escapeHtml(badge)}</span>
        <span class="badge badge-easy">${escapeHtml(badgeLabel)}</span>
      </div>

      <h3>${escapeHtml(title)}</h3>
      <div class="fullname">${escapeHtml(subtitle)}</div>
      <p>${escapeHtml(desc)}</p>

      <div class="strengths">
        ${tags.map(tag => `<span class="strength-tag">${escapeHtml(tag)}</span>`).join("")}
      </div>

      <button
        type="button"
        class="view-btn"
        data-overview-action="${escapeHtml(actionId)}"
      >
        상세 보기 →
      </button>
    </article>
  `;
}

export function renderOverview() {
  const mainFrameworks = FRAMEWORKS.slice(0, 5);

  return `
    <div class="section-block">
      <div class="section-head">
        <div>
          <h3>⭐ Main Frameworks</h3>
          <p>핵심 프레임워크 5개를 먼저 빠르게 확인할 수 있습니다.</p>
        </div>
      </div>

      <div class="overview-grid">
        ${mainFrameworks.map(renderFrameworkPreviewCard).join("")}
      </div>
    </div>

    <div class="section-block">
      <div class="section-head">
        <div>
          <h3>📦 Prompt Libraries</h3>
          <p>실무에서 바로 활용할 수 있는 프롬프트 라이브러리와 가이드입니다.</p>
        </div>
      </div>

      <div class="overview-grid">
        ${renderLibraryCard({
          badge: "QUICK",
          badgeLabel: "실무형",
          title: "Quick Prompt Library",
          subtitle: "빠른 프롬프트 모음",
          desc: "자주 쓰는 요청을 카드 형태로 모아 바로 복사하고 활용할 수 있는 섹션입니다.",
          tags: ["복붙용", "실무형", "빠른 활용"],
          actionId: "quick-prompts"
        })}

        ${renderLibraryCard({
          badge: "EXCEL",
          badgeLabel: "업무 템플릿",
          title: "Excel Prompt Library",
          subtitle: "엑셀 업무 프롬프트 모음",
          desc: "데이터 분석, 함수, 차트, 자동화 등 실무에서 바로 쓸 수 있는 엑셀 프롬프트 모음입니다.",
          tags: ["실무형", "복붙용", "엑셀 업무"],
          actionId: "excel"
        })}

        ${renderLibraryCard({
          badge: "AGENT",
          badgeLabel: "가이드",
          title: "Agent Guide",
          subtitle: "에이전트 활용 가이드",
          desc: "어떤 상황에서 어떤 에이전트를 써야 하는지 정리할 예정인 가이드 섹션입니다.",
          tags: ["가이드", "활용법", "추가 예정"],
          actionId: "agents"
        })}
      </div>
    </div>
  `;
}