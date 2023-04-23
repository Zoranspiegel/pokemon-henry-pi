import StyledPokreate from './StyledPokreate';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../redux/actions';
import { useHistory } from 'react-router-dom';
import validate from '../utils/validations';
import axios from 'axios';

const initialBodyState = {
  modified: false,
  name: '',
  health: '',
  attack: '',
  defense: '',
  speed: '',
  height: '',
  weight: '',
  types: []
};

const initialScope = {
  focus: [],
  blur: []
};

// //////////////////////
const Pokreate = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const types = useSelector((state) => state.types);
  const [body, setBody] = useState(initialBodyState);
  const [errors, setErrors] = useState({});
  const [scope, setScope] = useState(initialScope);

  useEffect(() => {
    console.log(scope);
  }, [scope]);

  const handleChange = (e) => {
    setBody({
      ...body,
      modified: true,
      [e.target.name]: e.target.value
    });
    setErrors(
      validate({
        ...body,
        [e.target.name]: e.target.value
      })
    );
  };

  const handleType = (e) => {
    setBody({
      ...body,
      types: body.types.includes(e.target.name)
        ? [...body.types.filter((t) => t !== e.target.name)]
        : [...body.types, e.target.name]
    });
  };

  const handleFocus = (e) => {
    if (!scope.focus.includes(e.target.name)) {
      setScope({
        ...scope,
        focus: [...scope.focus, e.target.name]
      });
    }
    if (scope.blur.includes(e.target.name)) {
      setScope({
        ...scope,
        blur: [...scope.blur.filter(el => el !== e.target.name)]
      });
    }
  };

  const handleBlur = (e) => {
    if (!scope.blur.includes(e.target.name)) {
      setScope({
        ...scope,
        blur: [...scope.blur, e.target.name]
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/pokemons', body)
      .then((r) => {
        dispatch(getPokemons());
        history.push(`/details/${r.data.new_pokemon.id}`);
      })
      .catch((error) => console.log(error));
    setBody(initialBodyState);
  };

  return (
    <StyledPokreate>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <h3>POKREATE</h3>
          <p>Name:</p>
          <input
            onChange={handleChange}
            name='name'
            value={body.name}
            type='text'
            placeholder='type a name...'
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={errors.name && scope.blur.includes('name') ? 'red' : null}
          />
          {errors.name && scope.focus.includes('name') ? <span className={scope.blur.includes('name') ? 'error' : null}>{errors.name}</span> : <span>&nbsp;</span>}
          <p>Health:</p>
          <input
            onChange={handleChange}
            name='health'
            value={body.health}
            type='number'
            placeholder='set value...'
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={errors.health && scope.blur.includes('health') ? 'red' : null}
          />
          {errors.health && scope.focus.includes('health') ? <span className={scope.blur.includes('health') ? 'error' : null}>{errors.health}</span> : <span>&nbsp;</span>}
          <p>Attack:</p>
          <input
            onChange={handleChange}
            name='attack'
            value={body.attack}
            type='number'
            placeholder='set value...'
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={errors.attack && scope.blur.includes('attack') ? 'red' : null}
          />
          {errors.attack && scope.focus.includes('attack') ? <span className={scope.blur.includes('attack') ? 'error' : null}>{errors.attack}</span> : <span>&nbsp;</span>}
          <p>Defense:</p>
          <input
            onChange={handleChange}
            name='defense'
            value={body.defense}
            type='number'
            placeholder='set value...'
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={errors.defense && scope.blur.includes('defense') ? 'red' : null}
          />
          {errors.defense && scope.focus.includes('defense') ? <span className={scope.blur.includes('defense') ? 'error' : null}>{errors.defense}</span> : <span>&nbsp;</span>}
          <p>Speed:</p>
          <input
            onChange={handleChange}
            name='speed'
            value={body.speed}
            type='number'
            placeholder='set value...'
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={errors.speed && scope.blur.includes('speed') ? 'red' : null}
          />
          {errors.speed && scope.focus.includes('speed') ? <span className={scope.blur.includes('speed') ? 'error' : null}>{errors.speed}</span> : <span>&nbsp;</span>}
          <p>Height:</p>
          <input
            onChange={handleChange}
            name='height'
            value={body.height}
            type='number'
            placeholder='set value...'
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={errors.height && scope.blur.includes('height') ? 'red' : null}
          />
          {errors.height && scope.focus.includes('height') ? <span className={scope.blur.includes('height') ? 'error' : null}>{errors.height}</span> : <span>&nbsp;</span>}
          <p>Weight:</p>
          <input
            onChange={handleChange}
            name='weight'
            value={body.weight}
            type='number'
            placeholder='set value...'
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={errors.weight && scope.blur.includes('weight') ? 'red' : null}
          />
          {errors.weight && scope.focus.includes('weight') ? <span className={scope.blur.includes('weight') ? 'error' : null}>{errors.weight}</span> : <span>&nbsp;</span>}
          <button
            disabled={!body.modified || Object.entries(errors).length || !body.types.length}
            type='submit'
          >
            KREATE!
          </button>
        </form>
        <br />
        <div className='types'>
          {types?.map((t, i) => (
            <img
              className={body.types.includes(`${i + 1}`) ? 'activeType' : null}
              onClick={handleType}
              name={i + 1}
              key={i}
              src={`https://res.cloudinary.com/dkc8xrlg8/image/upload/v1682125225/Pokemon/types/${t.name}.png`}
              alt={t.name}
            />
          ))}
        </div>
      </div>
    </StyledPokreate>
  );
};

export default Pokreate;
