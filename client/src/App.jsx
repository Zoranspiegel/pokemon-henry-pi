// import { Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemons } from './redux/actions';
import Navbar from './components/Navbar';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <div>
      <Navbar />
    </div>
  );
};

export default App;
