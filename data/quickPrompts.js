export const QUICK_PROMPTS = [
  {
    id: "email-rewrite",
    title: "이메일 문장 다듬기",
    shortDesc: "사내 메일을 더 자연스럽고 정중하게 수정",
    useWhen: "보고 메일, 협조 요청, 일정 안내",
    quickExample: "이 문장을 더 자연스럽고 정중하게 바꿔줘",
    prompt: "아래 문장을 사내 비즈니스 메일 톤으로 자연스럽게 다듬어줘. 너무 딱딱하지 않게 해줘.",
    expectedOutput: "실제 업무에 바로 붙여 넣을 수 있는 메일 문장",
    image: "./assets/images/quick/email.png",
    imageDesc: "Business email prompt card"
  },
  {
    id: "meeting-summary",
    title: "회의 내용 요약",
    shortDesc: "긴 회의 내용을 핵심 위주로 정리",
    useWhen: "회의 후 보고, 공유용 정리",
    quickExample: "회의 내용을 5줄로 요약하고 action item을 정리해줘",
    prompt: "아래 회의 내용을 핵심 요약, 결정 사항, 후속 조치 항목으로 나눠 정리해줘.",
    expectedOutput: "핵심 위주의 간결한 회의 요약",
    image: "./assets/images/quick/meeting.png",
    imageDesc: "Meeting summary prompt card"
  }
];