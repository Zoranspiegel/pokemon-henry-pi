import StyledHome from './StyledHome';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import Pagination from './Pagination';

const Home = () => {
  const PER_PAGE = 10;
  const [page, setPage] = useState(0);
  const pokemons = useSelector(state => state.pokemons.slice((page * PER_PAGE), (page * PER_PAGE) + PER_PAGE));

  const handlePage = (page) => {
    setPage(page);
  };

  return (
    <StyledHome>
      <Pagination handlePage={handlePage} page={page} perPage={PER_PAGE} />
      <div className='cards'>
        {pokemons?.map(p => <Card key={p.id} pokemon={p} />)}
      </div>
      <Pagination handlePage={handlePage} page={page} perPage={PER_PAGE} />
    </StyledHome>
  );
};

export default Home;
