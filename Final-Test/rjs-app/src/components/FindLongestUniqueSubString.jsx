/* eslint-disable no-unused-vars */
import { useState } from "react";

export default function FindLongestUniqueSubstring() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState({ substring: "", length: 0 });

  function findLongestUniqueSubstring(str) {
    let start = 0;
    let maxLength = 0;
    let maxSubstring = "";
    const seen = new Map();

    for (let end = 0; end < str.length; end++) {
    
      // TODO: 2
      // Lưu vị trí mới nhất của ký tự hiện tại vào Map
      const index = str.slice(start, end).indexOf(str[end]);
      if (index !== -1) {
        start = start + index + 1;
      }
      // TODO: 3
      // Nếu độ dài window hiện tại lớn hơn maxLength
      // thì cập nhật maxLength và maxSubstring
      const windowLength = end - start + 1;

      if (windowLength > maxLength) {
        maxLength = windowLength;
        maxSubstring = str.slice(start, end + 1);
      }
    }

    return {
      substring: maxSubstring,
      length: maxLength,
    };
  }

  function handleAnalyze() {
    // TODO: 4
    // Gọi hàm findLongestUniqueSubstring với input
    // rồi cập nhật state result
    const res = findLongestUniqueSubstring(input);
    setResult(res);
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Analyze Text String</h1>

      <input
        type="text"
        value={input}
        onChange={
          // TODO: 5
          (e) => setInput(e.target.value)
        }
        placeholder="Input..."
      />

      <button onClick={handleAnalyze}>Analyze</button>

      {result.length > 0 && (
        <div>
          <p>The longest sub-string: {result.substring}</p>
          <p>Length: {result.length}</p>
        </div>
      )}
    </div>
  );
}
