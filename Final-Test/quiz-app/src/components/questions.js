const questions = [
  {
    id: 1,
    question: "ReactJS được phát triển bởi công ty nào?",
    options: ["Google", "Facebook", "Microsoft", "Apple"],
    answer: "Facebook",
  },
  {
    id: 2,
    question: "Hook nào dùng để quản lý state trong functional component?",
    options: ["useEffect", "useState", "useRef", "useContext"],
    answer: "useState",
  },
  {
    id: 3,
    question: "JSX là gì?",
    options: [
      "Ngôn ngữ lập trình mới",
      "Cú pháp mở rộng của JavaScript",
      "Thư viện của React",
      "Framework cho React",
    ],
    answer: "Cú pháp mở rộng của JavaScript",
  },
  {
    id: 4,
    question: "Prop drilling là gì?",
    options: [
      "Kỹ thuật tối ưu re-render",
      "Truyền props qua nhiều tầng component không cần thiết",
      "Thay thế Redux",
      "Cách viết CSS trong JS",
    ],
    answer: "Truyền props qua nhiều tầng component không cần thiết",
  },
  {
    id: 5,
    question: "Hook nào để chạy side effects?",
    options: ["useMemo", "useEffect", "useCallback", "useReducer"],
    answer: "useEffect",
  },
];

export default questions;