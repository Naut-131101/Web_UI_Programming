import Question from "./Question";
import questions from "./questions";

export default function Result({ score, total, onRestart }) {
  return (
    <div className="result">
      <h2>Kết quả</h2>
      <p>
        Bạn đạt <strong>{score}</strong>/<strong>{total}</strong> điểm
      </p>
      <h1>{(20*questions.length)-(20*(total-score))}</h1><br />
      <button className="btn restart" onClick={onRestart}>
        Làm lại
      </button>
    </div>
  );
}