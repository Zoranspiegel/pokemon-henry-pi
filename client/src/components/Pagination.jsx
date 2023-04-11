import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Pagination = ({ handlePagination, perPage }) => {
  const pages = useSelector((state) => {
    const pagesNum = state.pokemons.length % perPage !== 0
      ? Math.floor(state.pokemons.length / perPage)
      : (state.pokemons.length / perPage) - 1;

    const pagesArray = [];
    for (let i = 0; i <= pagesNum; i++) {
      pagesArray.push(i);
    }
    return pagesArray;
  });
  const [page, setPage] = useState(0);

  useEffect(() => {
    handlePagination(page);
  }, [page]);

  return (
    <div>
      {page > 0 && <button onClick={() => setPage(page - 1)}>prev</button>}
      {pages?.map((p) => (<button key={p} onClick={() => setPage(p)}>{p + 1}</button>))}
      {page < pages.length - 1 && <button onClick={() => setPage(page + 1)}>next</button>}
    </div>
  );
};

export default Pagination;
