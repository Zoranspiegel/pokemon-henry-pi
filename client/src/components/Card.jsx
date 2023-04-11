const Card = ({ pokemon }) => {
  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.img} alt={`${pokemon.name} sprite`} />
      {pokemon.types.map((t, i) => <p key={i}>{t.name}</p>)}
    </div>
  );
};

export default Card;
