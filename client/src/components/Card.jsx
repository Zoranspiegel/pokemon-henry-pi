import styled from 'styled-components';

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

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 3px solid #c42424;
  border-radius: 10px;
  background-color: #521414;
  width: 300px;
  height: 300px;

  .title {
    border-radius: 5px 5px 0 0;
    background-color: #c42424;
    width: 100%;
    text-align: center;
  }

  img {
    width: 50%;
    height: 50%;
  }

  .types {
    display: flex;
    border-radius: 0 0 5px 5px;
    background-color: #c42424;
    justify-content: space-evenly;
    width: 100%;
  }

  .types p {
    color: #c42424;
    font-weight: 600;
    border-radius: 20px;
    background-color: #eee;
    padding: 5px 10px;
  }
`;
