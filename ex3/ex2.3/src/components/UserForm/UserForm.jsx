import { useState } from "react";

const UserForm = () => {
  const [name, setName] = useState(""); // luu tru name va set name
  const [email, setEmail] = useState(""); // luu tru email va set email
  const [errors, setErrors] = useState({});
  const [submitData, setSubmitData] = useState(null);

  function handleClick(event) {
    event.preventDefault(); // Phải sử dụng để ngăn hành vi mặc định của form.

    const newError = {}; // 1 doi tuong rong, nay em dung giong php

    if (name.trim() === "") {
      newError.name = "Chưa ghi tên";
    }

    if (!email.includes("@")) {
      // kiem tra ky tu @
      newError.email = "Email không hợp lệ";
    }

    if (
      !email.includes("@") ||
      email.startsWith("@") ||
      email.endsWith("@") ||
      !email.includes(".") ||
      email.indexOf("@") > email.lastIndexOf(".")
    ) {
      newError.email = "Email không hợp lệ";
    }

    setErrors(newError); 

    if (newError === 0) {
      setSubmitData({ name, email });
    } else {
      setSubmitData(null);
    }
  }

  return (
    <div>
      <h3>User Form</h3>

      <form
        onClick={handleClick}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }} // Này em lấy bên bài list đổi màu qua
      >
        {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
        <div style={{ display: "flex", gap: "15px" }}>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter your name"
          />
        </div>

        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        <div style={{ display: "flex", gap: "15px" }}>
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {submitData && (
        <div>
          <h4>Submitted</h4>
          <p>
            <strong>Name:</strong> {submitData.name}
          </p>
          <p>
            <strong>Email:</strong> {submitData.email}
          </p>
        </div>
      )}
    </div>
  );
};

export default UserForm;
