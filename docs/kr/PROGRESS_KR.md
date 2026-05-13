# AI Prompt Framework Guide — 진행 현황

최종 업데이트: 2026-05-13
주 개발 브랜치: `second`
배포 플랫폼: GitHub Pages

---

# 프로젝트 개요

AI Prompt Framework Guide 프로젝트는 단순 Prompt Reference 사이트에서 모듈형 Enterprise AI Workflow 및 AI Adoption Platform 형태로 확장되고 있습니다.

현재 주요 개발 방향:

- 모듈형 GitHub Pages 구조
- 재사용 가능한 Rendering 시스템
- Workflow 중심 AI 가이드
- Enterprise AI 도입 구조
- 실무 중심 AI 활용 교육
- 웍스AI 운영 가이드
- 사내 업무 중심 AI Workflow

---

# 브랜치 현황

## main

기존 레거시 구조 브랜치.

목적:
- 과거 구조 참고
- 단일 HTML 구조 백업
- 이전 콘텐츠 복구 참고용

상태:
- 추가 개발 예정 없음
- 참고용 유지

---

## second

현재 메인 개발 브랜치.

목적:
- 현재 실제 개발 브랜치
- 모듈형 구조 기반
- Shared Rendering 시스템 개발
- 웍스AI 가이드 확장
- Enterprise Workflow 구현

현재 중점 작업:
- Shared Utility 표준화
- 인터랙티브 Workflow 구조
- UI 일관성 개선
- Enterprise 중심 가이드
- Screenshot 및 Workflow 시각화

---

# Foundation Guide 진행 현황

## Best Practices

### 완료 섹션

- Common Mistakes
- Hallucination Guide
- Prompt Structure Guide
- AI Usage Principles
- 실무 중심 예제

### 개선 완료 사항

- Shared Card Layout 적용
- 계층 구조 및 Spacing 개선
- 가독성 향상
- 긴 정보형 구조 개선

---

# Shared Rendering 구조 진행 현황

## wrksAIRenderUtils.js 확장

### 추가된 Shared Components

```txt
renderHero()
renderCoreMessage()
renderPromptBox()
renderWorkflowSteps()
renderGuideVisuals()
renderExpectedResults()
renderPreviewSection()
```

### 목적

- 중복 Rendering 제거
- UI 일관성 개선
- 확장 구조 단순화
- Workflow 기반 Layout 지원

---

# Copy 시스템 리팩토링

## 완료

기존 Foundation 영역의 Copy Icon 구조로 통합 완료.

현재 Prompt / Example 영역은:

```js
renderPromptBox(...)
```

방식으로 통일.

장점:

- Copy Interaction 통일
- UI 구조 일관성 유지
- Shared Rendering 구조 활용
- 유지보수 단순화

---

# 웍스AI Guide 진행 현황

현재 웍스AI 영역은:

```txt
정적 정보 페이지
```

에서

```txt
Workflow 중심 Enterprise AI Guide
```

형태로 확장 중.

---

# 인터랙티브 Workflow 시스템 진행 현황

## Workflow 시각화

### 완료

- Shared Workflow Rendering
- 재사용 가능한 Workflow Card
- 표준 Workflow Layout

---

## Screenshot / Visual Placeholder 시스템

### 완료

- Shared Preview Section
- Visual Placeholder 구조
- 추후 이미지 통합 구조 준비

---

# UI / UX 진행 현황

## 완료

- Shared Section 그룹화
- Workflow 중심 Layout 구조
- 페이지 일관성 개선
- 중복 Layout 제거
- Shared Preview 구조 적용

---

# 현재 남은 작업

## 시각 자료 통합

### 예정

- 실제 Screenshot 추가
- Workflow Diagram 추가
- Before / After 예제
- Token 비교 시각화
- Agent 설정 예제
- Enterprise Workflow Gallery

---

# 장기 방향성

```txt
Static Prompt Reference
→
Foundation AI Guide
→
Workflow 중심 Enterprise AI Guide
→
Enterprise AI Adoption Platform
```
