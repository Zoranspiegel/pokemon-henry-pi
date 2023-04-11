import StyledHome from './StyledHome';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import Pagination from './Pagination';

const Home = () => {
  const PER_PAGE = 10;
  const pokemons = useSelector(state => state.pokemons);
  const [homePokemons, setHomePokemons] = useState([]);

  useEffect(() => {
    setHomePokemons(pokemons.slice(0, PER_PAGE));
  }, [pokemons]);

  const handlePagination = (page) => {
    setHomePokemons(pokemons.slice((page * PER_PAGE), (page * PER_PAGE) + PER_PAGE));
  };

  return (
    <StyledHome>
      <Pagination handlePagination={handlePagination} perPage={PER_PAGE} />
      <div className='cards'>
        {homePokemons?.map(p => <Card key={p.id} pokemon={p} />)}
      </div>
      <Pagination handlePagination={handlePagination} />
    </StyledHome>
  );
};

export default Home;
