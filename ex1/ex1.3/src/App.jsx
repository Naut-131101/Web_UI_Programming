import { useState } from "react";

const App = () => {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "T-Shirt", quantity: 1 },
      { id: 2, title: "Jeans", quantity: 1 },
    ],
  });
  
  const handleClick = (id) => {
    const updatedItems = cart.items.map((item) => {
      if (item.id === id) {
        return {
          id: item.id,
          title: item.title,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });

    setCart({
      discount: cart.discount,
      items: updatedItems,
    });
  };
  return (
    <div>
      <h2>Discount: {cart.discount}</h2>

      <ul>
        {cart.items.map((item) => (
          <li key={item.id}>
            {item.title} - Quantity: {item.quantity}
            <button onClick={() => handleClick(item.id)}>
              Increase Quantity
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default App;
