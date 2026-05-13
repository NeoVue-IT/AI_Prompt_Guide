# docs/en/PROGRESS.md

```md
# AI Prompt Framework Guide — Progress

Last Updated: 2026-05-13
Primary Development Branch: `second`
Deployment Platform: GitHub Pages

---

# Project Overview

The AI Prompt Framework Guide project is evolving from a simple static prompt reference into a modular enterprise-oriented AI workflow and adoption platform.

The current development direction focuses on:

- Modular GitHub Pages architecture
- Reusable rendering systems
- Workflow-oriented AI guidance
- Enterprise AI adoption structure
- Practical AI usage education
- 웍스AI operational guidance
- Internal business-oriented AI workflows

---

# Branch Status

## main

Legacy architecture branch.

Purpose:
- Historical reference
- Backup of original single-page structure
- Recovery reference for older content

Status:
- No active development planned
- Retained for reference only

---

## second

Primary active development branch.

Purpose:
- Current production development branch
- Modular architecture foundation
- Shared rendering system development
- 웍스AI guide expansion
- Enterprise workflow implementation

Current Focus:
- Shared utility standardization
- Interactive workflow structure
- UI consistency
- Internal enterprise-oriented guidance
- Screenshot and visual workflow integration

---

## third (planned)

Future internal enterprise deployment branch.

Planned Purpose:
- Company-internal deployment
- Enterprise onboarding system
- Internal workflow examples
- AI governance structure
- Department-specific AI workflow guidance

---

# Core Architecture Progress

## Modular Refactor

### Completed

- Monolithic structure separated into modular assets
- GitHub Pages compatible structure implemented
- Shared navigation system implemented
- Shared rendering structure established
- Shared utility functions expanded
- Reusable card layout system implemented
- Shared workflow rendering architecture added

---

# Current Repository Structure

```txt
/assets
  /css
  /data
  /images
  /js

/docs
  /en
  /kr
```

---

# Foundation Guide Progress

## Best Practices

### Completed Sections

- Common Mistakes
- Hallucination Guide
- Prompt Structure Guidance
- AI Usage Principles
- Business-Oriented Examples

### Improvements Completed

- Shared card layout integration
- Cleaner hierarchy and spacing
- Improved readability
- Reduced information dumping
- Improved internal-training usability

---

## Prompt Patterns

### Completed

- Pattern-based prompt organization
- Reusable prompt card layouts
- Category-based navigation structure
- Shared UI styling improvements

### Current Direction

Prompt Patterns are transitioning toward:

- Real-world enterprise examples
- Workflow-oriented prompting
- Practical AI usage education
- Internal-use prompt systems

---

# Shared Rendering System Progress

## wrksAIRenderUtils.js Expansion

### Shared Components Added

```txt
renderHero()
renderCoreMessage()
renderPromptBox()
renderWorkflowSteps()
renderGuideVisuals()
renderExpectedResults()
renderPreviewSection()
```

### Goals

- Reduce duplicated rendering logic
- Improve UI consistency
- Simplify future expansion
- Standardize layout structure
- Support workflow-oriented sections

---

# Copy System Refactor

## Completed

Unified copy system using the original foundational copy icon structure.

### Previous Issue

Different sections used:

- Manual copy buttons
- Different prompt box layouts
- Inconsistent rendering styles
- Mixed copy interaction behavior

### Current Result

Prompt/example sections now use:

```js
renderPromptBox(...)
```

Benefits:

- Unified copy interaction
- Consistent visual structure
- Shared rendering logic
- Easier maintenance

---

# 웍스AI Guide Progress

## Current Primary Development Area

The 웍스AI section is transitioning from:

```txt
Static information pages
```

into:

```txt
Interactive workflow-oriented enterprise AI guide
```

---

# 웍스AI Sections Updated

## Model Selection

### Completed

- Shared hero integration
- Shared core-message integration
- Workflow rendering support
- Preview section support
- Shared layout cleanup

### Current Direction

- Model comparison guidance
- Enterprise model usage strategy
- Practical business-oriented examples

---

## Model Switching

### Completed

- Workflow-oriented structure
- Shared rendering cleanup
- Workflow visualization integration
- Expected-result preview support

### Current Direction

- Multi-model workflow guidance
- Cost vs quality workflow explanation
- Enterprise workflow optimization

---

## Token Optimization

### Completed

- Token workflow explanations
- Shared prompt rendering integration
- Workflow visualization support
- Expected-result section support

### Current Direction

- Cost-aware AI usage education
- Enterprise token management examples
- Workflow-level token optimization guidance

---

## Workflow Chains

### Completed

- Multi-step workflow guidance
- Shared workflow rendering integration
- Workflow visualization support
- Shared preview support

### Current Direction

- Real business workflow chains
- ERP-related workflow examples
- Reporting workflow structures
- Meeting workflow automation examples

---

## Recommended Agents

### Completed

- Shared prompt rendering integration
- Enterprise-oriented examples
- Shared preview integration

### Current Direction

- Department-specific agents
- Internal-use agent examples
- Workflow-specific automation examples

---

## Agent Creation

### Completed

- Agent workflow guidance
- Creation-step visualization support
- Shared rendering integration

### Current Direction

- Practical agent instruction design
- Enterprise workflow automation
- Repeatable internal-use agents

---

# Interactive Workflow System Progress

## Workflow Visualization

### Completed

- Shared workflow-step rendering
- Reusable workflow cards
- Standardized workflow layouts

### Goal

Shift pages from:

```txt
Information dump
```

to:

```txt
Practical process-oriented guidance
```

---

## Screenshot / Visual Placeholder System

### Completed

- Shared preview sections
- Shared visual placeholder structure
- Planned image integration architecture

### Planned Next Step

- Real screenshots
- Workflow diagrams
- Enterprise process visuals
- Before/after workflow comparisons

---

## Expected Result Sections

### Completed

- Shared expected-result layouts
- User outcome preview support
- Workflow-result explanation support

### Goal

Help employees understand:

- What to expect
- What output should look like
- What successful workflow usage looks like

---

# UI / UX Progress

## Completed

- Shared section grouping
- Shared spacing hierarchy
- Workflow-oriented layout structure
- Cleaner page consistency
- Reduced duplicated layout structures
- Shared preview system integration

---

# Current Remaining Work

## Visual Integration

### Planned

- Real screenshots
- Workflow diagrams
- Before/after examples
- Token comparison visuals
- Agent configuration visuals
- Enterprise workflow galleries

---

## Technical Cleanup

### In Progress

- Remove remaining unused imports
- Normalize workflow naming
- Finalize CSS organization
- Remove remaining duplicated render structures

---

## QA Remaining

### Verification Needed

- Mobile responsiveness
- GitHub Pages deployment validation
- Console error cleanup
- Relative path verification
- Shared copy interaction validation
- Layout consistency verification

---

# Long-Term Direction

```txt
Static Prompt Reference
→
Foundational AI Guide
→
Workflow-Oriented Enterprise AI Guide
→
Enterprise AI Adoption Platform
```

---

# Immediate Priorities

1. Finalize shared rendering cleanup
2. Complete screenshot integration
3. Improve mobile responsiveness
4. Expand enterprise workflow examples
5. Add workflow diagrams and galleries
6. Prepare enterprise deployment structure
```
