import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  function inCrease() {
    setValue(value + 1);
    if (value > 10) {
      console.log("High value");
    }
  }
  function deCrease() {
    setValue(value - 1);
  }
  function inCreaseBy5() {
    setValue(value + 5);
  }
  function reSet() {
    setValue(0);
  }

  return (
    <div>
      <h2>Counter</h2>
      <p style={{ color: value < 0 ? "red" : "white" }}>{value}</p>
      <p style={{ color: value > 0 ? "red" : "white" }}>{value > 10 ? "High" : ""}</p>
      <div style={{ display: "flex", gap: "15px" }} >
          <button onClick={inCrease}>Increase (+1)</button>
          <button onClick={deCrease}>Decrease (-1)</button>
          <button onClick={inCreaseBy5}>Increase by 5</button>
          <button onClick={reSet}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
