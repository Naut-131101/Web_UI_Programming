import { useState } from "react";

const App = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Donald Trump",
    },
  });

  const handleClick = () => {
    setGame({
      id: game.id,
      player: {
        name: game.player.name === "Donald Trump" ? "Joe Biden" : "Donald Trump",
      },
    });
  };

  return (
    <div>
      {
        <div>
          <h2>Player: {game.player.name}</h2>
          <button onClick={handleClick}>Change Name</button>
        </div>
      }
    </div>
  );
};
export default App;
