import { state } from "../state.js";
import { FRAMEWORKS } from "../../data/frameworks.js";
import { escapeHtml } from "../utils.js";

function diffClass(difficulty = "") {
  if (difficulty === "easy") return "badge-easy";
  if (difficulty === "medium") return "badge-medium";
  if (difficulty === "intermediate") return "badge-intermediate";
  return "badge-advanced";
}

export function renderFrameworks() {
  if (state.currentSubTab === "overview") {
    return renderFrameworkOverview();
  }

  const fw = FRAMEWORKS.find(item => item.id === state.currentSubTab);

  if (!fw) {
    return `
      <section class="detail-view">
        <button type="button" class="back-btn" id="back-to-fw-overview">← Back to Overview</button>
        <div class="detail-hero">
          <div class="detail-top">
            <div class="detail-icon">⚠️</div>
            <div class="detail-title-wrap">
              <h2>Framework not found</h2>
              <div class="detail-subtitle">선택한 프레임워크 데이터를 찾을 수 없습니다.</div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  return renderFrameworkDetail(fw);
}

function renderFrameworkOverview() {
  return `
    <div class="section-block">
      <div class="section-head">
        <div>
          <h3>⭐ Main Frameworks</h3>
          <p>대표 프레임워크를 카드 형태로 확인할 수 있습니다.</p>
        </div>
      </div>

      <div class="overview-grid">
        ${FRAMEWORKS.map(fw => `
          <article class="fw-card">
            <div class="badge-row">
              <span class="badge badge-id">${escapeHtml(fw.name || fw.id || "")}</span>
              <span class="badge ${diffClass(fw.difficulty)}">${escapeHtml(fw.diffLabel || "")}</span>
            </div>

            <h3>${escapeHtml(fw.title || fw.name || "")}</h3>
            <div class="fullname">${escapeHtml(fw.fullName || "")}</div>
            <p>${escapeHtml(fw.shortDesc || "")}</p>

            <button
              type="button"
              class="view-btn"
              data-fw-id="${escapeHtml(fw.id)}"
            >
              상세 보기 →
            </button>
          </article>
        `).join("")}
      </div>
    </div>
  `;
}

function renderFrameworkDetail(fw) {
  const currentSection = state.currentFrameworkSection || "doc";

  const docVisible = currentSection === "doc" ? "visible" : "";
  const imgVisible = currentSection === "img" ? "visible" : "";
  const docActive = currentSection === "doc" ? "active" : "";
  const imgActive = currentSection === "img" ? "active" : "";

  return `
    <section class="detail-view">
      <button type="button" class="back-btn" id="back-to-fw-overview">← Back to Overview</button>

      <div class="detail-hero">
        <div class="detail-top">
          <div class="detail-icon">⚡</div>
          <div class="detail-title-wrap">
            <h2>${escapeHtml(fw.title || fw.name || "")} (${escapeHtml(fw.fullName || "")})</h2>
            <div class="detail-subtitle">${escapeHtml(fw.shortDesc || "")}</div>
          </div>
        </div>
      </div>

      <div class="strategy-switch">
        <button
          type="button"
          class="strategy-tab doc ${docActive}"
          data-fw-section="doc"
        >
          <div class="strategy-tab-head">
            <span>📄</span>
            <span>문서 생성 전략</span>
          </div>
          <div class="strategy-tab-body">${escapeHtml(fw.docCompare || "-")}</div>
        </button>

        <button
          type="button"
          class="strategy-tab img ${imgActive}"
          data-fw-section="img"
        >
          <div class="strategy-tab-head">
            <span>🖼️</span>
            <span>이미지 생성 전략</span>
          </div>
          <div class="strategy-tab-body">${escapeHtml(fw.imgCompare || "-")}</div>
        </button>
      </div>

      <div class="content-section ${docVisible}">
        <div class="card-grid">
          <div class="content-card">
            <h4>📝 프롬프트</h4>

            <div class="prompt-guide">
              <div class="guide-item use-when">
                <span class="guide-label">✔ 사용 상황</span>
                <div class="guide-text">${escapeHtml(fw.useWhen || "-")}</div>
              </div>

              <div class="guide-item quick-example">
                <span class="guide-label">💬 빠른 예시</span>
                <div class="guide-text quick-example-text">${escapeHtml(fw.quickExample || "-")}</div>
              </div>
            </div>

            <div class="prompt-box">${escapeHtml(fw.docPrompt || "-")}</div>
          </div>

          <div class="content-card">
            <h4>✅ AI 예상 출력물</h4>
            <div class="result-box">${escapeHtml(fw.docResult || "-")}</div>
          </div>
        </div>
      </div>

      <div class="content-section ${imgVisible}">
        <div class="card-grid">
          <div class="content-card">
            <h4>🖼️ 이미지 프롬프트</h4>

            <div class="prompt-guide">
              <div class="guide-item use-when">
                <span class="guide-label">✔ 사용 상황</span>
                <div class="guide-text">${escapeHtml(fw.useWhen || "-")}</div>
              </div>

              <div class="guide-item quick-example">
                <span class="guide-label">💬 빠른 예시</span>
                <div class="guide-text quick-example-text">${escapeHtml(fw.quickExample || "-")}</div>
              </div>
            </div>

            <h4 style="margin-bottom:8px">🇺🇸 이미지 프롬프트 (영문)</h4>
            <div class="prompt-box">${escapeHtml(fw.imgPromptEn || "-")}</div>

            <div style="margin-top:12px">
              <h4 style="margin-bottom:8px">🇰🇷 이미지 프롬프트 (한글)</h4>
              <div class="prompt-box">${escapeHtml(fw.imgPromptKo || "-")}</div>
            </div>
          </div>

          <div class="content-card" style="padding:0;overflow:hidden">
            <div class="img-wrap">
              <img src="${escapeHtml(fw.imgData || "")}" alt="${escapeHtml(fw.title || fw.name || "framework image")}" loading="lazy">
            </div>
            <div class="img-desc">${escapeHtml(fw.imgDesc || "-")}</div>
          </div>
        </div>
      </div>
    </section>
  `;
}