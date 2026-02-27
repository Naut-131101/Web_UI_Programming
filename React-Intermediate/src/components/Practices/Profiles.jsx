import data from "./scientist.json";

const Profiles = () => {
  return (
    <div>
      <h1>Scientist List</h1>
      {data.scientists.map((value, index) => (
        <section key={index}>
          <article>
              <h2>{value.name}</h2>
              <p>{value.title}</p>
              <img src={value.avatar} alt={value.name} />
              <p>{value.description}</p>
          </article>
        </section>
      ))}
    </div>
  );
};

export default Profiles;
