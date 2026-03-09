import { useState } from "react";

let nextId = 1;

const List = () => {
  const [name, setName] = useState("");
  const [content, setContent] = useState([]);
  const [update, setUpdate] = useState(null);

  return (
    <>
      <h1>List:</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nhập nội dung ở đây..."
      />
      <button
        onClick={() => {
          if (update !== null) {
            setContent(
              content.map((item) =>
                item.id === update ? { ...item, name: name } : item,
              ),
            );
            setUpdate(null);
          } else {
            setContent([{ id: nextId++, name: name }, ...content]);
          }
          setName("");
        }}
      >
        {update !== null ? "UPDATE" : "ADD"}
      </button>
      <ul>
        {content.map((a) => (
          <li key={a.id}>
            {a.name}
            <button
              onClick={() => setContent(content.filter((ic) => ic.id !== a.id))}
            >
              DELETE
            </button>
            <button
              onClick={() => {
                setName(a.name);
                setUpdate(a.id);
              }}
            >
              UPDATE
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
