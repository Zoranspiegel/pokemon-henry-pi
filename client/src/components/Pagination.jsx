import StyledPagination from './StyledPagination';
// import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Pagination = ({ handlePage, page, perPage }) => {
  const pages = useSelector(state => {
    if (state.search.length) {
      return [0];
    } else {
      const pagesNum = state.pokemons.length % perPage === 0
        ? (state.pokemons.length / perPage) - 1
        : Math.floor(state.pokemons.length / perPage);
      const pagesArray = [];
      for (let i = 0; i <= pagesNum; i++) {
        pagesArray.push(i);
      }
      return pagesArray;
    }
  });

  return (
    <StyledPagination>
      <button onClick={() => handlePage(page - 1)} style={{ visibility: page === 0 && 'hidden' }} className='arrow'>&#9664;</button>
      {pages?.map(p =>
        <button
          key={p}
          onClick={() => handlePage(p)}
          className={page === p ? 'activeBtn' : null}
        >
          {p + 1}
        </button>
      )}
      <button onClick={() => handlePage(page + 1)} style={{ visibility: page === pages.length - 1 && 'hidden' }} className='arrow'>&#9654;</button>
    </StyledPagination>
  );
};

export default Pagination;
