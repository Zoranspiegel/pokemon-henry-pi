import StyledCard from './StyledCard';
import { NavLink } from 'react-router-dom';

const Card = ({ pokemon }) => {
  return (
    <StyledCard>
      <NavLink className='link' to={`/details/${pokemon.id}`}>
        <div className='shell'>
          <div className='title'>
            <h2>{`${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}`}</h2>
          </div>
          <img src={pokemon.img} alt={`${pokemon.name} sprite`} />
          <div className='types'>
            {pokemon.types.map((t, i) => <p key={i}>{`${t.name[0].toUpperCase()}${t.name.slice(1)}`}</p>)}
          </div>
        </div>
      </NavLink>
    </StyledCard>
  );
};

export default Card;
