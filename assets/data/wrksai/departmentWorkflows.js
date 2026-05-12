export const departmentWorkflows = {
  eyebrow: "웍스AI Guide",
  title: "Department Workflows",
  description:
    "부서별 업무 특성에 맞게 웍스AI를 적용하는 방법입니다. 같은 AI라도 IT, 생산, 품질, 영업, R&D 등 부서별로 적합한 사용 방식과 출력 형식이 달라져야 합니다.",

  coreMessage: {
    title: "핵심 원칙",
    body: "부서별 AI 활용은 단순히 프롬프트를 나누는 것이 아니라, 각 부서의 반복 업무와 산출물 기준에 맞게 Workflow Chain과 Agent를 연결하는 것입니다."
  },

  departments: [
    {
      name: "IT",
      purpose: "장애 대응, 시스템 운영, 사용자 지원, 업무 보고 정리",
      commonTasks: [
        "일일/주간 업무보고 정리",
        "장애 원인 분석",
        "사용자 공지 작성",
        "O365/ERP/보안 시스템 문의 정리",
        "반복 지원 이력 요약"
      ],
      recommendedWorkflow:
        "Issue → Symptoms → Root Cause → Action Plan → User Notice",
      recommendedAgents: [
        "IT Report Assistant",
        "Email Communication Assistant",
        "Prompt Refinement Assistant"
      ],
      outputExamples: [
        "장애 조치 보고서",
        "사용자 안내문",
        "주간 업무보고",
        "이슈 분석 메모"
      ],
      caution:
        "계정정보, 비밀번호, 보안 설정값, 내부 시스템 세부 정보는 AI에 입력하지 않도록 주의해야 합니다."
    },
    {
      name: "생산",
      purpose: "생산 데이터 정리, 공정별 현황 요약, 반복 집계 업무 지원",
      commonTasks: [
        "RAW 데이터 정리",
        "공정별 생산량 집계",
        "양품/불량 구분",
        "일일 생산 실적 요약",
        "ERP 업로드용 형식 정리"
      ],
      recommendedWorkflow:
        "Raw Data → Cleanup Rules → Validation → Aggregation → ERP Format",
      recommendedAgents: [
        "Production Data Assistant",
        "Workflow Chain Assistant"
      ],
      outputExamples: [
        "정제 파일 기준",
        "공정별 집계표",
        "ERP 업로드용 데이터",
        "생산 실적 요약"
      ],
      caution:
        "AI가 만든 집계 기준은 실제 생산/ERP 담당자가 검증한 후 사용해야 합니다."
    },
    {
      name: "품질",
      purpose: "불량 유형 정리, 검사 결과 요약, 품질 이슈 보고 지원",
      commonTasks: [
        "불량 유형 분류",
        "검사 결과 요약",
        "품질 이슈 보고서 작성",
        "원인 후보 정리",
        "재발 방지 대책 초안 작성"
      ],
      recommendedWorkflow:
        "Inspection Data → Defect Classification → Cause Candidates → Action Plan → Report",
      recommendedAgents: [
        "Quality Issue Assistant",
        "Report Assistant"
      ],
      outputExamples: [
        "품질 이슈 보고서",
        "불량 유형 분석표",
        "재발 방지 대책 초안",
        "검사 결과 요약"
      ],
      caution:
        "AI의 원인 후보는 참고용이며, 실제 품질 판정은 담당 부서 기준과 검사 데이터에 따라 결정해야 합니다."
    },
    {
      name: "영업",
      purpose: "고객 요청 정리, 회신 메일 작성, 제안서 초안 및 내부 공유 자료 작성",
      commonTasks: [
        "고객 문의 요약",
        "메일 회신 초안 작성",
        "제안 내용 정리",
        "회의 후속 조치 정리",
        "내부 공유 메모 작성"
      ],
      recommendedWorkflow:
        "Customer Request → Summary → Response Draft → Tone Review → Final Mail",
      recommendedAgents: [
        "Email Communication Assistant",
        "Meeting Summary Assistant"
      ],
      outputExamples: [
        "고객 회신 메일",
        "제안서 초안",
        "고객 요청 요약",
        "내부 공유 메모"
      ],
      caution:
        "가격, 납기, 계약 조건 등은 AI가 임의로 작성하지 않도록 하고, 담당자가 반드시 확인해야 합니다."
    },
    {
      name: "R&D",
      purpose: "기술 자료 요약, 비교 분석, 검토 보고서 및 아이디어 정리",
      commonTasks: [
        "기술 문서 요약",
        "제품/기술 비교",
        "논문 또는 자료 핵심 정리",
        "검토 보고서 초안 작성",
        "추가 확인 질문 도출"
      ],
      recommendedWorkflow:
        "Research Material → Key Findings → Comparison → Risk / Limitation Check → Technical Summary",
      recommendedAgents: [
        "R&D Research Assistant",
        "Prompt Refinement Assistant"
      ],
      outputExamples: [
        "기술 검토 보고서",
        "비교표",
        "핵심 요약 자료",
        "추가 검토 항목"
      ],
      caution:
        "외부 기술 자료는 최신성, 출처, 실제 적용 가능성을 별도로 검증해야 합니다."
    },
    {
      name: "경영지원 / 인사",
      purpose: "공지, 교육자료, 내부 안내문, 문서 정리 업무 지원",
      commonTasks: [
        "내부 공지 작성",
        "교육자료 정리",
        "설문/피드백 요약",
        "정책 안내문 초안 작성",
        "문서 문장 다듬기"
      ],
      recommendedWorkflow:
        "Source Material → Summary → Audience-Friendly Explanation → Notice / Guide",
      recommendedAgents: [
        "AI Training Assistant",
        "Email Communication Assistant",
        "Meeting Summary Assistant"
      ],
      outputExamples: [
        "내부 공지문",
        "교육자료 초안",
        "사용자 안내문",
        "피드백 요약"
      ],
      caution:
        "인사정보, 개인정보, 평가 관련 내용은 AI 입력 전에 반드시 비식별화해야 합니다."
    }
  ],

  workflowMatrix: [
    {
      department: "IT",
      bestUse: "장애 분석, 업무보고, 사용자 공지",
      modelType: "Reasoning Model / Fast Model",
      agent: "IT Report Assistant"
    },
    {
      department: "생산",
      bestUse: "RAW 데이터 정리, 공정별 집계",
      modelType: "Coding / Data Model",
      agent: "Production Data Assistant"
    },
    {
      department: "품질",
      bestUse: "불량 유형 분석, 품질 이슈 보고",
      modelType: "Reasoning Model",
      agent: "Quality Issue Assistant"
    },
    {
      department: "영업",
      bestUse: "고객 요청 요약, 메일 회신",
      modelType: "Fast Model / Creative Model",
      agent: "Email Communication Assistant"
    },
    {
      department: "R&D",
      bestUse: "기술 자료 요약, 비교 분석",
      modelType: "Large Context Model / Reasoning Model",
      agent: "R&D Research Assistant"
    },
    {
      department: "경영지원 / 인사",
      bestUse: "공지, 교육자료, 내부 안내문",
      modelType: "Fast Model / Creative Model",
      agent: "AI Training Assistant"
    }
  ],

  promptPatterns: [
    {
      title: "부서별 Workflow 설계",
      prompt:
        "아래 부서 업무를 AI로 지원하기 위한 Workflow Chain을 설계해줘. 반복 업무, 입력 자료, 추천 모델 유형, 추천 에이전트, 최종 산출물 형식으로 정리해줘."
    },
    {
      title: "부서별 에이전트 추천",
      prompt:
        "아래 부서의 반복 업무를 기준으로 만들면 좋은 AI 에이전트 3개를 추천해줘. 각 에이전트의 역할, 입력값, 출력 형식, 주의사항을 표로 정리해줘."
    },
    {
      title: "업무별 AI 적용 가능성 검토",
      prompt:
        "아래 업무 목록 중 AI로 효율화할 수 있는 업무와 그렇지 않은 업무를 구분해줘. 가능 업무는 추천 Workflow Chain과 주의사항을 함께 작성해줘."
    }
  ],

  mistakes: [
    "모든 부서에 같은 프롬프트와 같은 에이전트를 적용하는 것",
    "부서별 최종 산출물 형식을 고려하지 않는 것",
    "보안/개인정보/계약정보 같은 민감정보 기준을 분리하지 않는 것",
    "부서 업무를 이해하지 않고 단순히 AI 사용 예시만 제공하는 것",
    "반복 업무가 아닌 일회성 업무까지 모두 에이전트화하려는 것",
    "AI 결과를 담당자 검토 없이 바로 업무 산출물로 사용하는 것"
  ],

  quickRules: [
    {
      rule: "부서별 반복 업무부터 찾기",
      detail: "AI 적용은 반복되는 정리, 요약, 보고, 변환 업무부터 시작하는 것이 좋습니다."
    },
    {
      rule: "산출물 형식을 먼저 정하기",
      detail: "보고서, 표, 메일, 체크리스트 등 최종 형태를 정해야 AI 결과가 안정됩니다."
    },
    {
      rule: "부서별 보안 기준 구분",
      detail: "IT, 인사, 영업, 품질 등 부서마다 입력하면 안 되는 정보가 다릅니다."
    },
    {
      rule: "Workflow와 Agent를 연결",
      detail: "자주 쓰는 Workflow Chain은 Agent로 전환하면 반복 사용성이 높아집니다."
    }
  ]
};