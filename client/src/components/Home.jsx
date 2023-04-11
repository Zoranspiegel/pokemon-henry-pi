import Card from './Card';
import { useSelector } from 'react-redux';

const Home = () => {
  const pokemons = useSelector(state => state.pokemons);

  return (
    <div>
      {pokemons?.map(p => <Card key={p.id} pokemon={p} />)}
    </div>
  );
};

export default Home;
