import { useState } from "react";

const professions = ["Software Engineer", "Game Developer"];
const names = [
  {
    id: 1,
    name: "Dalary Powell",
    professions: professions[0],
    unEmployment: true,
  },
  {
    id: 2,
    name: "Bennett Lloyd",
    professions: professions[0],
    unEmployment: false,
  },
  {
    id: 3,
    name: "Emely Keller",
    professions: professions[0],
    unEmployment: true,
  },
  {
    id: 4,
    name: "Nico Navarro",
    professions: professions[0],
    unEmployment: false,
  },
  {
    id: 5,
    name: "Winter Larson",
    professions: professions[0],
    unEmployment: true,
  },
  {
    id: 6,
    name: "Rafael Bravo",
    professions: professions[1],
    unEmployment: false,
  },
  {
    id: 7,
    name: "Amoura Graham",
    professions: professions[1],
    unEmployment: true,
  },
  {
    id: 8,
    name: "Giovanni King",
    professions: professions[1],
    unEmployment: false,
  },
  {
    id: 9,
    name: "Victoria Hoover",
    professions: professions[1],
    unEmployment: true,
  },
  {
    id: 10,
    name: "Jaziel Raymond",
    professions: professions[1],
    unEmployment: false,
  },
  {
    id: 11,
    name: "Hadlee Brown",
    professions: professions[1],
    unEmployment: true,
  },
  {
    id: 12,
    name: "Elijah Hartman",
    professions: professions[1],
    unEmployment: false,
  },
];

const List = () => {
  const [selectedProf, setSelectedProf] = useState(professions[0]);

  const filteredPerson = names.filter((p) => p.professions === selectedProf);

  const listItems = filteredPerson.map((n) => (
    <li key={n.id} style={{color: n.unEmployment ? "red" : "green"}}>
      {n.name} - {n.professions} -{" "}
      {n.unEmployment ? "UnAvailable" : "Available"}
    </li>
  ));

  

  return (
    <>
      <select
        value={selectedProf}
        onChange={(e) => setSelectedProf(e.target.value)}
      >
        {professions.map((p) => (
          <option key={p} value={p}>
            {p}
          </option>
        ))}
      </select>
      <ol>
        {listItems}
      </ol>
    </>
  );
};

export default List;
