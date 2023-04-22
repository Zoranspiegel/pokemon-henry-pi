import StyledDetails from './StyledDetails';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cleanDetails, getDetails } from '../redux/actions';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const details = useSelector(state => state.details);

  useEffect(() => {
    dispatch(getDetails(id));
  }, []);

  useEffect(() => {
    return () => {
      dispatch(cleanDetails());
    };
  }, []);

  if (details.id) {
    return (
      <StyledDetails>
        <div className='shell'>
          <div className='title'>
            <h1>{`${details.name[0].toUpperCase()}${details.name.slice(1)}`}</h1>
          </div>
          <img src={details.img} alt={`${details.name} sprite`} />
          <div className='types'>
            {details.types?.map((t, i) => <p key={i}>{t.name}</p>)}
          </div>
          <div className='stats'>
            <p>Health: {details.health}</p>
            <p>Speed: {details.speed}</p>
            <p>Defense: {details.defense}</p>
            <p>Attack: {details.attack}</p>
            <p>Height: {details.height}</p>
            <p>Weight: {details.weight}</p>
          </div>
        </div>
      </StyledDetails>
    );
  } else {
    return (
      <h1>Loading...</h1>
    );
  }
};

export default Details;
