import styled from 'styled-components';
import Card from './Card';
import { useSelector } from 'react-redux';

const Home = () => {
  const pokemons = useSelector(state => state.pokemons);

  return (
    <StyledHome>
      {pokemons?.map(p => <Card key={p.id} pokemon={p} />)}
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
  gap: 10px
`;
