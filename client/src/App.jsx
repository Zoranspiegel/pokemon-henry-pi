import { Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemons, getTypes } from './redux/actions';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Details from './components/Details';
import Landing from './components/Landing';
import Pokreate from './components/Pokreate';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('App mounted');
    dispatch(getPokemons());
    dispatch(getTypes());
  }, []);

  return (
    <div className='app'>
      <Navbar />
      <Route exact path='/'>
        <Landing />
      </Route>
      <Route exact path='/home'>
        <Home />
      </Route>
      <Route exact path='/create'>
        <Pokreate />
      </Route>
      <Route exact path='/details/:id'>
        <Details />
      </Route>
    </div>
  );
};

export default App;
