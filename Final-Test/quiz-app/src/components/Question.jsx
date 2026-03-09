export default function Question({ question: q, selectedOption, onSelect }) {
  if (!q) return null;

  return (
    <div className="question-card">
      <h2 className="question-text">{q.question}</h2>

      <ul className="options">
        {(q.options ?? []).map((opt) => (
          <li key={opt}>
            <button
              type="button"
              className={`option ${selectedOption === opt ? "selected" : ""}`}
              onClick={
                // TODO: 1:
                // gọi hàm onSelect với đáp án đang được chọn
                () => onSelect(opt)
              }
            >
              {opt}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
