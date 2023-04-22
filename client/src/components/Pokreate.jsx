import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../redux/actions';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const initialBodyState = {
  name: '',
  health: 0,
  attack: 0,
  defense: 0,
  speed: 0,
  height: 0,
  weight: 0,
  types: []
};

const Pokreate = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const types = useSelector(state => state.types);
  const [body, setBody] = useState(initialBodyState);

  useEffect(() => {
    console.log(body);
  }, [body]);

  const handleChange = (e) => {
    setBody({
      ...body,
      [e.target.name]: e.target.value
    });
  };

  const handleType = (e) => {
    setBody({
      ...body,
      types: body.types.includes(e.target.name)
        ? [...body.types.filter(t => t !== e.target.name)]
        : [...body.types, e.target.name]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/pokemons', body)
      .then(r => {
        dispatch(getPokemons());
        history.push(`/details/${r.data.new_pokemon.id}`);
      })
      .catch(error => console.log(error));
    setBody(initialBodyState);
  };

  return (
    <StyledPokreate>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <h3>POKREATE</h3>
          <p>Name:</p>
          <input onChange={handleChange} name='name' value={body.name} type='text' placeholder='type a name...' />
          <p>Health:</p>
          <input onChange={handleChange} name='health' value={body.health} type='number' placeholder='set value...' />
          <p>Attack:</p>
          <input onChange={handleChange} name='attack' value={body.attack} type='number' placeholder='set value...' />
          <p>Defense:</p>
          <input onChange={handleChange} name='defense' value={body.defense} type='number' placeholder='set value...' />
          <p>Speed:</p>
          <input onChange={handleChange} name='speed' value={body.speed} type='number' placeholder='set value...' />
          <p>Height:</p>
          <input onChange={handleChange} name='height' value={body.height} type='number' placeholder='set value...' />
          <p>Weight:</p>
          <input onChange={handleChange} name='weight' value={body.weight} type='number' placeholder='set value...' />
          <br />
          <br />
          <button type='submit'>KREATE!</button>
        </form>
        <br />
        <div className='types'>
          {types?.map((t, i) => <img className={body.types.includes(`${i + 1}`) ? 'activeType' : null} onClick={handleType} name={i + 1} key={i} src={`https://res.cloudinary.com/dkc8xrlg8/image/upload/v1682125225/Pokemon/types/${t.name}.png`} alt={t.name} />)}
        </div>
      </div>
    </StyledPokreate>
  );
};

export default Pokreate;

const StyledPokreate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  .container {
    border: 4px solid white;
    border-style: groove;
    border-radius: 20px;
    background-color: #c42424;
    padding: 40px 70px;
  }
  .container button{
    width: 100%;
    border: none;
    border-radius: 20px;
    background-color: #eee;
    box-shadow: 0 3px 0 #aaa;
    font-family: inherit;
    font-weight: 800;
    color: red;
    cursor: pointer;
  }
  .container button:hover {
    color: #c42424;
    background-color: #ccc;
  }
  .container button:active {
    transform: translateY(2px);
    box-shadow: 0 1px 0 #888;
  }
  .container h3 {
    text-align: center;
    margin: 0;
  }
  .container p {
    margin-bottom: 0;
  }
  .types {
    width: 200px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5px;
  }
  .types img {
    box-sizing: border-box;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
  .activeType {
    border: 2px solid white;    
  }
`;
