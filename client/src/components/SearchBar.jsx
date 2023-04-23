import StyledSearchBar from './StyledSearchBar';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchName, clearSearch } from '../redux/actions';

const SearchBar = () => {
  const [searchState, setSearchState] = useState('');
  const search = useSelector(state => state.search);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearchState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchName(searchState));
    setSearchState('');
  };

  return (
    <StyledSearchBar>
      <form onSubmit={handleSubmit}>
        <input value={searchState} onChange={handleChange} type='text' placeholder='Search...' />
      </form>
      <button disabled={!search.length} onClick={() => dispatch(clearSearch())}>CLEAR</button>
    </StyledSearchBar>
  );
};

export default SearchBar;
