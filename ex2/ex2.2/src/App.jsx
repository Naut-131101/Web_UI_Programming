import { useState } from "react";
import "./App.css";
import ProfileVisibility from "./components/ProfileVisibility/ProfileVisibility";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  /*
   NOTE: Sử dụng "const [isVisible, setIsVisible] = useState(false);" để quản lý trạng thái hiển thị, và yêu cầu phải khởi tạo giá trị boolean ban đầu là false. Để ẩn/hiện nội dung profile ta có thể áp dụng if/else hoặc boolean expression.  
  */

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <h2>Profile</h2>

      <button onClick={handleClick}>
        {isVisible ? "Hide Profile" : "Show Profile"}
      </button>

      {/* Này dùng để ẩn hiện nút và profile ở mỗi trạng thái hide và show */}
      {isVisible && <ProfileVisibility />}
    </>
  );
}

export default App;
