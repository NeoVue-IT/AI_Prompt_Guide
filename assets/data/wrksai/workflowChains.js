export const workflowChains = {
  eyebrow: "웍스AI Guide",
  title: "Workflow Chains",
  description:
    "AI를 단발성 질문 도구로 사용하는 것이 아니라, 업무 흐름에 맞게 여러 단계로 연결하여 최종 산출물의 품질과 재사용성을 높이는 방법입니다.",

  coreMessage: {
    title: "핵심 원칙",
    body: "좋은 AI 활용은 한 번의 질문이 아니라, 입력 → 정리 → 분석 → 검토 → 최종 산출물로 이어지는 업무 체인을 설계하는 것입니다."
  },

  visualGuides: [
  {
    title: "Workflow Chain 전체 흐름",
    description: "입력 → 정리 → 검토 → 최종 결과 생성까지의 업무 흐름 예시입니다.",
    filename: "workflow-chain-overview.png"
  },
  {
    title: "회의록 Workflow 예시",
    description: "회의 녹취 → 요약 → 액션 아이템 정리 → 보고서 생성 흐름 예시입니다.",
    filename: "meeting-workflow-example.png"
  },
  {
    title: "데이터 처리 Workflow 예시",
    description: "RAW 데이터 → 정리 → 분석 → ERP 업로드용 결과 생성 흐름 예시입니다.",
    filename: "data-processing-workflow.png"
  }
],

expectedResults: [
  "반복 업무를 단계별 Workflow로 표준화 가능",
  "업무 누락 및 중복 감소",
  "중간 검토 단계를 통한 결과 품질 향상",
  "AI를 단발성 질문이 아닌 업무 프로세스로 활용 가능",
  "회의록, 보고서, 데이터 정리 업무 자동화 가능"
],

  principles: [
    {
      title: "업무를 단계로 나눕니다",
      body: "회의록, 보고서, 데이터 정리, 오류 분석처럼 복잡한 업무는 한 번에 요청하지 않고 단계별로 나눕니다."
    },
    {
      title: "각 단계의 목적을 분명히 합니다",
      body: "요약 단계, 분석 단계, 검토 단계, 최종 작성 단계를 구분해야 결과 품질이 안정됩니다."
    },
    {
      title: "중간 결과를 검토합니다",
      body: "AI가 만든 초안이나 분석 결과를 바로 최종본으로 쓰지 않고, 중간 점검 단계를 둡니다."
    },
    {
      title: "반복 가능한 흐름으로 만듭니다",
      body: "자주 하는 업무는 동일한 체인으로 재사용할 수 있도록 표준화합니다."
    }
  ],

  chainPatterns: [
    {
      title: "Meeting → Report Chain",
      useCase: "회의록, 교육 내용, 인터뷰 메모 정리",
      flow: ["Transcript", "Summary", "Action Items", "Risk Check", "Report"],
      explanation:
        "회의 내용을 먼저 요약하고, 결정사항과 실행항목을 추출한 뒤, 누락/리스크를 검토하고 보고서 형식으로 정리합니다."
    },
    {
      title: "Document → Decision Chain",
      useCase: "정책 문서, 제안서, 매뉴얼 검토",
      flow: ["Document", "Key Points", "Comparison", "Decision Criteria", "Recommendation"],
      explanation:
        "긴 문서에서 핵심 내용을 추출하고, 비교 기준을 세운 뒤 의사결정에 필요한 추천안으로 정리합니다."
    },
    {
      title: "Data → Output Chain",
      useCase: "Excel, CSV, 생산 데이터, 집계 자료",
      flow: ["Raw Data", "Cleanup Rules", "Validation", "Aggregation", "Final File"],
      explanation:
        "원본 데이터를 정리 기준에 맞게 정제하고, 오류를 검토한 뒤 집계 및 최종 산출물 형태로 변환합니다."
    },
    {
      title: "Issue → Root Cause Chain",
      useCase: "장애 대응, ERP 오류, 시스템 문제 분석",
      flow: ["Issue", "Symptoms", "Possible Causes", "Verification", "Action Plan"],
      explanation:
        "문제 현상을 정리하고 가능한 원인을 분류한 뒤, 확인 방법과 조치 계획으로 연결합니다."
    },
    {
      title: "Idea → Training Material Chain",
      useCase: "교육자료, 가이드, 사용자 안내문 작성",
      flow: ["Idea", "Outline", "Examples", "User-Friendly Explanation", "Final Guide"],
      explanation:
        "초기 아이디어를 목차로 만들고, 예시와 쉬운 설명을 추가하여 실제 교육자료로 발전시킵니다."
    }
  ],

  workflowSteps: [
    {
      step: "1",
      title: "최종 산출물을 먼저 정의합니다",
      body: "보고서, 표, 메일, 코드, 교육자료 등 최종 결과물이 무엇인지 먼저 정합니다."
    },
    {
      step: "2",
      title: "입력 자료를 정리합니다",
      body: "회의록, 원본 데이터, 오류 메시지, 캡처 이미지 등 AI가 처리할 자료를 업무 목적에 맞게 준비합니다."
    },
    {
      step: "3",
      title: "초기 정리 단계를 만듭니다",
      body: "먼저 요약, 분류, 항목 추출 등 가벼운 작업으로 자료를 구조화합니다."
    },
    {
      step: "4",
      title: "분석 또는 판단 단계를 추가합니다",
      body: "원인 분석, 비교, 리스크 검토, 의사결정 기준 정리 등 깊은 판단이 필요한 작업을 수행합니다."
    },
    {
      step: "5",
      title: "최종 출력 형식을 지정합니다",
      body: "표, 보고서, 메일, 체크리스트, 실행계획 등 실제 업무에 사용할 형태로 변환합니다."
    },
    {
      step: "6",
      title: "검증 및 수정 단계를 둡니다",
      body: "누락된 내용, 과장된 표현, 잘못된 판단, 보안상 민감한 정보가 없는지 확인합니다."
    }
  ],

  examples: [
    {
      title: "회의록을 보고서로 전환",
      bad: "회의록 전체를 붙여넣고 '보고서로 만들어줘'라고 한 번에 요청",
      good:
        "회의록 요약 → 결정사항 추출 → 실행 항목 정리 → 리스크 검토 → 보고서 형식 변환"
    },
    {
      title: "생산 데이터 정리",
      bad: "원본 엑셀 파일을 업로드하고 '정리해줘'라고 요청",
      good:
        "컬럼 구조 확인 → 정리 규칙 정의 → 오류값 확인 → 공정별 집계 → ERP 업로드용 형식 생성"
    },
    {
      title: "시스템 장애 분석",
      bad: "오류 메시지만 입력하고 바로 해결 방법 요청",
      good:
        "증상 정리 → 발생 시점 확인 → 원인 후보 분류 → 확인 명령어/로그 위치 정리 → 조치계획 작성"
    },
    {
      title: "교육자료 작성",
      bad: "처음부터 완성된 교육자료를 요청",
      good:
        "교육 대상 정의 → 목차 생성 → 실무 예시 추가 → 쉬운 설명으로 변환 → 최종 배포용 문서 정리"
    }
  ],

  recommendedChains: [
    {
      department: "IT",
      chain: "Issue → Root Cause → Verification → Action Plan",
      output: "장애 분석 보고서, 조치 이력, 사용자 안내문"
    },
    {
      department: "생산",
      chain: "Raw Data → Cleanup → Validation → Aggregation → ERP Format",
      output: "정제 파일, 집계 파일, ERP 업로드 자료"
    },
    {
      department: "품질",
      chain: "Inspection Data → Defect Classification → Trend Check → Report",
      output: "불량 유형 분석, 품질 이슈 보고서"
    },
    {
      department: "영업",
      chain: "Customer Request → Summary → Response Draft → Tone Review",
      output: "고객 응대 메일, 제안 답변, 내부 공유 메모"
    },
    {
      department: "R&D",
      chain: "Research Notes → Key Findings → Comparison → Technical Summary",
      output: "기술 검토 보고서, 비교표, 요약 자료"
    }
  ],

  promptPatterns: [
    {
      title: "Workflow 설계 요청",
      prompt:
        "아래 업무를 AI로 처리하기 위한 단계별 Workflow Chain을 설계해줘. 각 단계의 목적, 입력 자료, 출력 결과, 사용하기 좋은 모델 유형을 표로 정리해줘."
    },
    {
      title: "중간 결과 검토 요청",
      prompt:
        "아래 중간 결과물을 검토해줘. 누락된 항목, 논리적으로 약한 부분, 추가 확인이 필요한 부분을 구분해서 정리해줘."
    },
    {
      title: "최종 산출물 변환 요청",
      prompt:
        "아래 내용을 실제 업무 보고서 형식으로 변환해줘. 제목, 핵심 요약, 세부 내용, 조치 계획, 참고사항 순서로 정리해줘."
    },
    {
      title: "반복 업무 표준화 요청",
      prompt:
        "이 업무를 반복적으로 사용할 수 있도록 표준 AI 작업 절차로 만들어줘. 단계, 입력값, 주의사항, 최종 출력 형식을 포함해줘."
    }
  ],

  mistakes: [
    "처음부터 최종 결과물을 한 번에 요구하는 것",
    "요약, 분석, 검토, 최종 정리를 구분하지 않는 것",
    "중간 결과를 확인하지 않고 바로 최종본으로 사용하는 것",
    "업무 목적 없이 자료만 많이 업로드하는 것",
    "각 단계에서 사용할 모델 유형을 구분하지 않는 것",
    "최종 출력 형식을 명확히 지정하지 않는 것"
  ],

  quickRules: [
    {
      rule: "복잡한 업무는 체인으로 나눕니다",
      detail: "한 번에 처리하지 말고 정리, 분석, 검토, 최종 작성 단계로 분리합니다."
    },
    {
      rule: "중간 결과를 반드시 확인합니다",
      detail: "AI가 만든 요약이나 분석을 검토한 뒤 다음 단계로 진행합니다."
    },
    {
      rule: "각 단계마다 목적을 둡니다",
      detail: "요약 단계인지, 판단 단계인지, 문장 정리 단계인지 명확히 해야 합니다."
    },
    {
      rule: "반복 업무는 표준 체인으로 만듭니다",
      detail: "매번 새로 요청하지 않고 같은 구조를 재사용합니다."
    }
  ]
};