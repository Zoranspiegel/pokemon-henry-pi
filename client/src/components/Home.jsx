import StyledHome from './StyledHome';
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
