import { useState } from "react";

const App = () => {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick = () => {
    setPizza({
      name: pizza.name,
      toppings: pizza.toppings.concat("Tomato"),
    });
  };

  return (
    <div>
      {
        <div>
          <h2>{pizza.name}</h2>
          <ul>
            {pizza.toppings.map((topping, index) => (
              <li key={index}>{topping}</li>
            ))}
          </ul>
          <button onClick={handleClick}>Add Topping</button>
        </div>
      }
      ;
    </div>
)}

export default App;
