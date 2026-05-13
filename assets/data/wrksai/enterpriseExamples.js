export const enterpriseExamples = {
  eyebrow: "웍스AI Guide",
  title: "Enterprise Examples",
  description:
    "회사 업무에 실제로 적용할 수 있는 웍스AI 활용 예시입니다. 단순 프롬프트 예시가 아니라 업무 흐름, 추천 모델, 추천 에이전트, 최종 산출물까지 연결해서 보여줍니다.",

  coreMessage: {
    title: "핵심 원칙",
    body: "Enterprise Example은 AI 사용 예시가 아니라, 실제 업무를 AI Workflow로 바꾸는 적용 사례입니다."
  },

  examples: [
    {
      title: "IT 장애 대응 보고서 작성",
      department: "IT",
      situation:
        "사용자 PC, O365, ERP, 네트워크 장애 등 이슈가 발생했을 때 조치 내용을 관리자 보고용으로 정리해야 하는 경우",
      workflow: [
        "Issue Summary",
        "Symptom Classification",
        "Root Cause Check",
        "Action Plan",
        "Final Report"
      ],
      recommendedModels: [
        "Fast Model: 증상 및 메모 정리",
        "Reasoning Model: 원인 후보 및 조치 방향 분석",
        "Fast Model: 최종 보고서 문장 정리"
      ],
      recommendedAgent: "IT Report Assistant",
      output:
        "장애 개요 / 발생 현황 / 원인 후보 / 조치 내용 / 재발 방지 또는 확인 필요사항",
      caution:
        "내부 IP, 계정정보, 보안 설정값, 사용자 개인정보는 마스킹 후 입력해야 합니다."
    },
    {
      title: "회의록 → 실행 항목 보고",
      department: "전 부서",
      situation:
        "회의 녹취록 또는 메모를 바탕으로 결정사항, 담당자, 기한, 후속 조치를 정리해야 하는 경우",
      workflow: [
        "Transcript",
        "Summary",
        "Decision Items",
        "Action Items",
        "Follow-up Report"
      ],
      recommendedModels: [
        "Large Context Model: 긴 회의록 이해",
        "Reasoning Model: 결정사항과 리스크 분리",
        "Fast Model: 보고용 형식 정리"
      ],
      recommendedAgent: "Meeting Summary Assistant",
      output:
        "회의 목적 / 핵심 요약 / 결정사항 / Action Items / 담당자 / 기한 / 확인 필요사항",
      caution:
        "논의만 된 내용을 확정된 결정사항으로 표현하지 않도록 주의해야 합니다."
    },
    {
      title: "생산 RAW 데이터 정리 및 집계",
      department: "생산 / 품질 / IT",
      situation:
        "생산 원본 데이터를 정제하고 공정별 집계 또는 ERP 업로드용 형태로 변환해야 하는 경우",
      workflow: [
        "Raw Data",
        "Cleanup Rules",
        "Validation",
        "Aggregation",
        "ERP Format"
      ],
      recommendedModels: [
        "Fast Model: 데이터 규칙 정리",
        "Coding / Data Model: Excel/Python 처리 로직 작성",
        "Reasoning Model: 예외 케이스 및 검증 기준 점검"
      ],
      recommendedAgent: "Production Data Assistant",
      output:
        "정제 기준 / 오류값 확인 / 공정별 집계 / 최종 출력 형식 / 예외사항",
      caution:
        "ERP 업로드 기준과 공정 매핑 기준은 실제 담당자 검증 후 반영해야 합니다."
    },
    {
      title: "품질 이슈 분석 보고",
      department: "품질",
      situation:
        "불량 유형, 검사 결과, 발생 현황을 정리하고 원인 후보와 조치 방향을 보고해야 하는 경우",
      workflow: [
        "Inspection Data",
        "Defect Classification",
        "Cause Candidates",
        "Action Plan",
        "Quality Report"
      ],
      recommendedModels: [
        "Reasoning Model: 원인 후보 및 조치 방향 분석",
        "Fast Model: 보고서 형식 정리"
      ],
      recommendedAgent: "Quality Issue Assistant",
      output:
        "이슈 개요 / 발생 현황 / 불량 유형 / 원인 후보 / 확인 필요 데이터 / 조치 방향",
      caution:
        "AI의 원인 분석은 참고용이며 실제 품질 판정은 검사 데이터와 담당 부서 기준을 따라야 합니다."
    },
    {
      title: "사내 공지문 작성",
      department: "IT / 경영지원 / 인사",
      situation:
        "시스템 변경, 교육 안내, 보안 주의사항, 정책 안내 등을 직원에게 쉽게 전달해야 하는 경우",
      workflow: [
        "Notice Purpose",
        "Target Audience",
        "Required Action",
        "Tone Review",
        "Final Notice"
      ],
      recommendedModels: [
        "Fast Model: 초안 작성",
        "Creative Model: 사용자 친화적 문장 개선",
        "Fast Model: 최종 형식 정리"
      ],
      recommendedAgent: "Email Communication Assistant",
      output:
        "제목 / 공지 내용 / 사용자 조치사항 / 적용 일시 / 문의처",
      caution:
        "일정, 대상자, 적용 범위, 사용자 조치사항은 반드시 확인 후 배포해야 합니다."
    },
    {
      title: "AI 교육자료 작성",
      department: "IT / 교육 담당",
      situation:
        "직원들이 웍스AI를 올바르게 사용할 수 있도록 교육자료나 사용 가이드를 만들어야 하는 경우",
      workflow: [
        "Training Topic",
        "Outline",
        "Examples",
        "Common Mistakes",
        "Final Guide"
      ],
      recommendedModels: [
        "Reasoning Model: 교육 구조와 흐름 설계",
        "Creative Model: 쉬운 설명과 예시 작성",
        "Fast Model: 최종 문장 정리"
      ],
      recommendedAgent: "AI Training Assistant",
      output:
        "교육 주제 / 핵심 개념 / 실무 예시 / 주의사항 / 추천 프롬프트",
      caution:
        "교육 내용은 회사 정책, 보안 기준, 실제 사용 가능한 기능에 맞게 검토해야 합니다."
    }
  ],

  implementationSteps: [
    {
      step: "1",
      title: "반복 업무를 찾습니다",
      body: "매일 또는 매주 반복되는 정리, 보고, 요약, 데이터 변환 업무를 우선 대상으로 선정합니다."
    },
    {
      step: "2",
      title: "현재 업무 흐름을 분해합니다",
      body: "입력 자료, 처리 단계, 검토 기준, 최종 산출물을 나눠서 정리합니다."
    },
    {
      step: "3",
      title: "AI Workflow Chain으로 변환합니다",
      body: "각 단계별로 AI가 도와줄 수 있는 작업과 사람이 검토해야 하는 작업을 구분합니다."
    },
    {
      step: "4",
      title: "모델과 에이전트를 배치합니다",
      body: "단순 정리는 Fast Model, 분석은 Reasoning Model, 반복 업무는 Agent로 연결합니다."
    },
    {
      step: "5",
      title: "검증 후 표준화합니다",
      body: "실제 업무 예시로 테스트한 뒤 반복 사용할 수 있는 템플릿이나 에이전트로 만듭니다."
    }
  ],

  valueMatrix: [
    {
      example: "IT 장애 대응 보고서",
      timeSaving: "중간",
      qualityImpact: "높음",
      recommendedPriority: "높음"
    },
    {
      example: "회의록 실행 항목 정리",
      timeSaving: "높음",
      qualityImpact: "높음",
      recommendedPriority: "높음"
    },
    {
      example: "생산 RAW 데이터 정리",
      timeSaving: "높음",
      qualityImpact: "높음",
      recommendedPriority: "매우 높음"
    },
    {
      example: "품질 이슈 보고",
      timeSaving: "중간",
      qualityImpact: "높음",
      recommendedPriority: "높음"
    },
    {
      example: "사내 공지문 작성",
      timeSaving: "중간",
      qualityImpact: "중간",
      recommendedPriority: "중간"
    },
    {
      example: "AI 교육자료 작성",
      timeSaving: "중간",
      qualityImpact: "높음",
      recommendedPriority: "높음"
    }
  ],

  promptPatterns: [
    {
      title: "업무 사례를 AI Workflow로 변환",
      prompt:
        "아래 업무 사례를 AI Workflow Chain으로 변환해줘. 입력 자료, 처리 단계, 추천 모델 유형, 추천 에이전트, 최종 산출물, 사람이 검토해야 할 항목으로 정리해줘."
    },
    {
      title: "AI 적용 우선순위 평가",
      prompt:
        "아래 업무 목록을 기준으로 AI 적용 우선순위를 평가해줘. 기준은 반복 빈도, 시간 절감 가능성, 오류 감소 효과, 보안 리스크, 적용 난이도로 정리해줘."
    },
    {
      title: "Enterprise Example 작성",
      prompt:
        "아래 업무를 사내 AI 활용 예시로 작성해줘. 상황, 기존 문제점, AI Workflow, 추천 모델, 추천 Agent, 기대 효과, 주의사항 형식으로 정리해줘."
    }
  ],

  mistakes: [
    "AI 활용 예시를 단순 프롬프트 예시로만 작성하는 것",
    "실제 부서 업무 흐름과 연결하지 않는 것",
    "사람이 검토해야 할 단계를 생략하는 것",
    "모델 선택, Agent, Workflow Chain을 따로따로 설명하는 것",
    "기대 효과만 강조하고 보안/검증 주의사항을 작성하지 않는 것"
  ],

  quickRules: [
    {
      rule: "실제 업무 흐름 기준",
      detail: "Enterprise Example은 실제 입력 자료와 최종 산출물을 기준으로 작성해야 합니다."
    },
    {
      rule: "모델 + Agent + Workflow 연결",
      detail: "각 사례마다 추천 모델, 추천 에이전트, Workflow Chain을 함께 보여주는 것이 좋습니다."
    },
    {
      rule: "사람 검토 단계 포함",
      detail: "AI가 처리하는 단계와 사람이 확인해야 하는 단계를 구분해야 합니다."
    },
    {
      rule: "효과와 주의사항 함께 작성",
      detail: "시간 절감 효과뿐 아니라 보안, 검증, 데이터 기준도 함께 안내해야 합니다."
    }
  ]
};