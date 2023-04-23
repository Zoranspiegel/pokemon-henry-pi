import StyledHome from './StyledHome';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { typeFilter, setSort } from '../redux/actions';
import Card from './Card';
import Pagination from './Pagination';
import SearchBar from './SearchBar';

const Home = () => {
  const dispatch = useDispatch();
  const PER_PAGE = 20;
  const [page, setPage] = useState(0);
  const types = useSelector((state) => state.types);
  const sort = useSelector((state) => state.sort);
  const pokemons = useSelector((state) => {
    if (state.search.length) {
      return state.search;
    } else {
      switch (sort) {
        case 'xy':
          return [...state.pokemons].sort((a, b) => a.attack - b.attack).slice((page * PER_PAGE), (page * PER_PAGE) + PER_PAGE);
        case 'yx':
          return [...state.pokemons].sort((a, b) => b.attack - a.attack).slice((page * PER_PAGE), (page * PER_PAGE) + PER_PAGE);
        case 'az':
          return [...state.pokemons].sort((a, b) => a.name.localeCompare(b.name)).slice((page * PER_PAGE), (page * PER_PAGE) + PER_PAGE);
        case 'za':
          return [...state.pokemons].sort((a, b) => a.name.localeCompare(b.name)).reverse().slice((page * PER_PAGE), (page * PER_PAGE) + PER_PAGE);
        default:
          return [...state.pokemons].slice((page * PER_PAGE), (page * PER_PAGE) + PER_PAGE);
      }
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

  const handleSort = (e) => {
    if (sort === e.target.name) {
      dispatch(setSort('default'));
    } else {
      dispatch(setSort(e.target.name));
    }
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
      <div className='sortBtns'>
        <button onClick={handleSort} name='za' className={sort === 'za' ? 'activeSort' : null}>Z-A</button>
        <button onClick={handleSort} name='az' className={sort === 'az' ? 'activeSort' : null}>A-Z</button>
        <button onClick={handleSort} name='xy' className={sort === 'xy' ? 'activeSort' : null}>&#9876;-</button>
        <button onClick={handleSort} name='yx' className={sort === 'yx' ? 'activeSort' : null}>&#9876;+</button>
      </div>
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
