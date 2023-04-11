import StyledCard from './StyledCard';

const Card = ({ pokemon }) => {
  return (
    <StyledCard>
      <div className='title'>
        <h2>{`${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}`}</h2>
      </div>
      <img src={pokemon.img} alt={`${pokemon.name} sprite`} />
      <div className='types'>
        {pokemon.types.map((t, i) => <p key={i}>{`${t.name[0].toUpperCase()}${t.name.slice(1)}`}</p>)}
      </div>
    </StyledCard>
  );
};

export default Card;
