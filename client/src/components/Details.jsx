import styled from 'styled-components';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cleanDetails } from '../redux/actions';

const Details = () => {
  const dispatch = useDispatch();
  const details = useSelector(state => state.details);

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

const StyledDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 85vh;
  .shell {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    border: 5px ridge white;
    border-radius: 20px;
    background-color: #521414;
  }

  .shell img{
    margin: 50px 0;
  }

  .title {
    text-align: center;
    width: 100%;
    background-color: #c42424;
    border-radius: 16px 16px 0 0;
  }
  .types {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .types p {
    color: #c42424;
    font-weight: 600;
    border-radius: 20px;
    background-color: #eee;
    padding: 5px 10px;
  }

  .stats {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 0 20px 0px 20px;
    justify-content: center;
    gap: 40px;
    background-color: #c42424;
    border-radius: 0 0 16px 16px;
  }
`;
