export const EXCEL_PROMPTS = [
  {
    category: "데이터 분석",
    prompts: [
      {
        id: "excel-analysis-basic",
        title: "기본 데이터 분석",
        shortDesc: "데이터를 빠르게 요약하고 핵심 인사이트를 도출",
        useCase: "데이터에서 중요한 포인트를 빠르게 파악하고 싶을 때",
        quickQuestion: "이 데이터에서 중요한 포인트 뭐야?",
        prompt: "엑셀 데이터 분석가 역할로 아래 데이터를 분석하고 핵심 인사이트 3가지를 요약해줘. 필요하면 피벗테이블 기준도 제안해줘.",
        expectedOutput: "핵심 지표, 이상치 여부, 주요 패턴 요약",
        example: "매출 상위 품목, 특정 월 급감 구간, 특정 거래처 집중도",
        tip: "열 이름(컬럼명)이 명확해야 정확도가 높아집니다."
      },
      {
        id: "excel-analysis-trend",
        title: "트렌드 분석",
        shortDesc: "증가/감소 흐름 및 변화 시점 분석",
        useCase: "시간 흐름에 따른 변화 패턴을 보고 싶을 때",
        quickQuestion: "이거 증가하는 추세야?",
        prompt: "이 데이터를 기준으로 트렌드(증가/감소), 이상치, 변화 시점을 분석해줘.",
        expectedOutput: "증감 흐름, 급변 시점, 이상 구간",
        example: "3월 급증, 6월 이후 지속 감소",
        tip: "날짜 컬럼 정렬이 되어 있으면 더 정확합니다."
      }
    ]
  },
  {
    category: "함수 생성",
    prompts: [
      {
        id: "excel-function-create",
        title: "함수 생성",
        shortDesc: "원하는 결과를 위한 함수 자동 생성",
        useCase: "어떤 함수를 써야 할지 모를 때",
        quickQuestion: "이거 함수 어떻게 써?",
        prompt: "엑셀 전문가처럼 아래 상황에 맞는 함수를 만들어줘. 함수 설명도 같이 알려줘.",
        expectedOutput: "정확한 함수 + 설명",
        example: "IF + VLOOKUP 조합",
        tip: "원하는 결과를 명확히 설명해야 정확한 함수 생성이 가능합니다."
      },
      {
        id: "excel-function-fix",
        title: "함수 오류 수정",
        shortDesc: "오류 나는 함수 디버깅",
        useCase: "수식이 안 될 때",
        quickQuestion: "이거 왜 안돼?",
        prompt: "이 엑셀 함수가 왜 오류가 나는지 설명하고 수정해줘.",
        expectedOutput: "오류 원인 + 수정된 함수",
        example: "#N/A → 참조 범위 문제",
        tip: "에러 메시지도 같이 주면 더 정확합니다."
      }
    ]
  },
  {
    category: "자동화",
    prompts: [
      {
        id: "excel-automation-process",
        title: "업무 자동화",
        shortDesc: "반복 작업 자동화 방법 제안",
        useCase: "반복 업무를 줄이고 싶을 때",
        quickQuestion: "이거 자동화 가능해?",
        prompt: "이 엑셀 작업을 자동화하는 방법을 단계별로 설명해줘. (함수, 매크로, 파워쿼리 포함)",
        expectedOutput: "자동화 방법 2~3가지",
        example: "매크로 vs 파워쿼리 비교",
        tip: "업무 흐름을 같이 설명하면 더 정확합니다."
      },
      {
        id: "excel-macro",
        title: "매크로 생성",
        shortDesc: "VBA 코드 생성",
        useCase: "자동 반복 작업을 구현할 때",
        quickQuestion: "매크로 만들어줘",
        prompt: "이 작업을 자동으로 처리하는 VBA 매크로 코드를 작성해줘.",
        expectedOutput: "VBA 코드",
        example: "버튼 클릭 시 데이터 정리",
        tip: "입력/출력 구조를 설명하면 완성도가 높아집니다."
      }
    ]
  },
  {
    category: "데이터 정리",
    prompts: [
      {
        id: "excel-cleaning",
        title: "데이터 정리",
        shortDesc: "데이터 구조 정리",
        useCase: "데이터가 지저분할 때",
        quickQuestion: "이거 정리해줘",
        prompt: "이 데이터를 분석하기 좋게 정리하는 방법을 알려줘.",
        expectedOutput: "정리 단계 (중복 제거, 정렬 등)",
        example: "공백 제거, 형식 통일",
        tip: "데이터 샘플이 있으면 정확도가 올라갑니다."
      },
      {
        id: "excel-duplicate",
        title: "중복 제거",
        shortDesc: "중복 데이터 처리",
        useCase: "중복 데이터가 많을 때",
        quickQuestion: "중복 제거 어떻게 해?",
        prompt: "이 데이터에서 중복을 제거하는 방법을 설명해줘.",
        expectedOutput: "방법 + 함수 또는 기능",
        example: "Remove Duplicates / COUNTIF",
        tip: "기준 컬럼을 명확히 하면 좋습니다."
      }
    ]
  },
  {
    category: "보고서",
    prompts: [
      {
        id: "excel-report-summary",
        title: "보고서 요약",
        shortDesc: "데이터 기반 요약 보고서 생성",
        useCase: "보고서를 작성할 때",
        quickQuestion: "요약해줘",
        prompt: "이 데이터를 기반으로 보고서용 요약을 작성해줘.",
        expectedOutput: "문장형 요약",
        example: "매출 증가, 주요 원인",
        tip: "대상(임원/팀장)을 명시하면 더 적절합니다."
      },
      {
        id: "excel-report-kpi",
        title: "KPI 분석",
        shortDesc: "핵심 지표 분석",
        useCase: "성과를 분석할 때",
        quickQuestion: "성과 어때?",
        prompt: "이 데이터를 기반으로 KPI를 분석하고 문제점을 도출해줘.",
        expectedOutput: "성과 + 문제 + 개선점",
        example: "목표 대비 80%",
        tip: "목표값도 같이 주면 더 정확합니다."
      }
    ]
  },
  {
    category: "시각화",
    prompts: [
      {
        id: "excel-chart",
        title: "차트 추천",
        shortDesc: "적절한 차트 추천",
        useCase: "그래프를 만들 때",
        quickQuestion: "어떤 차트 써?",
        prompt: "이 데이터에 가장 적합한 차트 유형과 이유를 설명해줘.",
        expectedOutput: "차트 유형 + 이유",
        example: "라인차트 → 추세",
        tip: "데이터 목적을 설명하면 더 적절한 추천이 나옵니다."
      },
      {
        id: "excel-dashboard",
        title: "대시보드 구성",
        shortDesc: "대시보드 설계",
        useCase: "보고용 화면을 만들 때",
        quickQuestion: "대시보드 어떻게 만들어?",
        prompt: "이 데이터를 기반으로 엑셀 대시보드 구성을 설계해줘.",
        expectedOutput: "구성안 + 요소",
        example: "KPI 카드 + 차트",
        tip: "사용자(임원/실무자)를 구분하면 더 좋아집니다."
      }
    ]
  }
];