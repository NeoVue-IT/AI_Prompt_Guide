export const FRAMEWORKS = [
  {
    id: "rtf",
    name: "RTF",
    title: "RTF (Role · Task · Format)",
    shortDesc: "역할, 해야 할 일, 출력 형식을 명확히 지정하는 기본 프레임워크",
    useWhen: "보고서 초안, 이메일, 정리 문서, 표 형식 결과가 필요할 때",
    quickExample: "너는 IT 운영 담당자야. 사내 AI 도입 파일럿 결과 보고서를 1페이지 요약 형식으로 작성해줘.",
    prompt: "너는 [역할]이다. [작업]을 수행하고, 결과는 [형식]으로 작성해줘.",
    expectedOutput: "역할에 맞는 어조와 구조를 갖춘 정돈된 결과물",
    image: "./assets/images/frameworks/RTF.webp",
    imageDesc: "RTF framework illustration"
  },
  {
    id: "tag",
    name: "TAG",
    title: "TAG (Task · Action · Goal)",
    shortDesc: "해야 할 일, 수행 방식, 최종 목표를 분리해서 지시하는 방식",
    useWhen: "실무형 요청, 문제 해결, 실행 단계가 중요한 업무",
    quickExample: "회의록 내용을 정리하고 핵심 액션 아이템만 뽑아 팀장 보고용으로 만들어줘.",
    prompt: "Task는 [무엇], Action은 [어떻게], Goal은 [왜/무엇을 위해]인지 반영해서 작성해줘.",
    expectedOutput: "목적 중심의 실행 가능한 결과물",
    image: "./assets/images/frameworks/TAG.webp",
    imageDesc: "TAG framework illustration"
  }
];