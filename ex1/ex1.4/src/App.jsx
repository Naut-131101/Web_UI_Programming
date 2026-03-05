import { useState } from "react";

const App = () => {
  const [expanded, setExpanded] = useState(false);

  const text =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, maiores consequatur. Itaque accusamus iste necessitatibus odio enim illum, blanditiis ratione optio corrupti dolorem quae harum consequuntur fuga officiis ducimus. Facere cupiditate reiciendis optio, magnam modi voluptatum quo consequuntur delectus in natus officia explicabo ullam ducimus, consequatur enim. Repudiandae dolore corporis reprehenderit modi, iste, iusto assumenda similique nobis molestias atque ab quis saepe, non libero nesciunt! Fuga cupiditate harum voluptate nesciunt voluptatibus dolore iure, hic quas? Neque, obcaecati. Nulla perspiciatis fugiat nesciunt at fugit iusto animi alias deserunt cupiditate quisquam, facere, nam tempora? Voluptates animi iure nemo placeat aut ex asperiores.";

  const limit = 20;

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <p>
        {expanded ? text : text.substring(0, limit)}
        <button onClick={handleToggle}>{expanded ? "Less" : "More"}</button>
      </p>
    </div>
  );
};

export default App;
