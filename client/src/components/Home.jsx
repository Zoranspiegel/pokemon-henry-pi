import StyledHome from './StyledHome';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { typeFilter } from '../redux/actions';
import Card from './Card';
import Pagination from './Pagination';
import SearchBar from './SearchBar';

const Home = () => {
  const dispatch = useDispatch();
  const PER_PAGE = 20;
  const [page, setPage] = useState(0);
  const types = useSelector((state) => state.types);
  const pokemons = useSelector((state) => {
    if (state.search.length) {
      return state.search;
    } else {
      return state.pokemons.slice((page * PER_PAGE), (page * PER_PAGE) + PER_PAGE);
    }
  });
  const status = useSelector((state) => state.status);
  const filter = useSelector((state) => state.filter);

  const handlePage = (page) => {
    setPage(page);
    window.scrollTo(0, 0);
  };

  const handleFilter = (type) => {
    setPage(0);
    dispatch(typeFilter(type));
  };

  return (
    <StyledHome>
      <SearchBar />
      <div className='typeBtns'>
        {types?.map((t, i) =>
          <button
            key={i}
            onClick={() => filter === t.name ? handleFilter('all') : handleFilter(t.name)}
            className={filter === t.name ? 'activeFilter' : null}
          >
            {t.name.toUpperCase()}
          </button>)}
      </div>
      <Pagination handlePage={handlePage} page={page} perPage={PER_PAGE} />
      <div className='cards'>
        {status.loading === 'pending' && <h1>LOADING...</h1>}
        {status.loading === 'error' && <h1>{status.error}</h1>}
        {status.loading === 'succeded' && pokemons.map(p => <Card key={p.id} pokemon={p} />)}
      </div>
      <Pagination handlePage={handlePage} page={page} perPage={PER_PAGE} />
    </StyledHome>
  );
};

export default Home;
