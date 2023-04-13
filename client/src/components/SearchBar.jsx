import StyledSearchBar from './StyledSearchBar';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchName, clearSearch } from '../redux/actions';

const SearchBar = () => {
  const [searchState, setSearchState] = useState('');
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
      <button onClick={() => dispatch(clearSearch())}>X</button>
    </StyledSearchBar>
  );
};

export default SearchBar;
