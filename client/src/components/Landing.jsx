import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import pokeBg from '../assets/poke_bg.png';

const Landing = () => {
  const history = useHistory();

  return (
    <StyledLanding>
      <div className='container'>
        <img src={pokeBg} alt='landing_bg' />
        <button onClick={() => history.push('/home')}>X</button>
      </div>
    </StyledLanding>
  );
};

export default Landing;

const StyledLanding = styled.div` 
  .container {
    position: relative;
    overflow: hidden;
    height: 90.4vh;
  }
  .container img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);
    width: 1900px;
  }
  .container button {
    display: inline;
    position: absolute;
    top: 56.6%;
    left: 49.15vw;
    border-radius: 50%;
    width: 33px;
    height: 33px;
    color: white;
    border: none;
    background-color: white;
    box-shadow: 0 5px 0 #aaa;
    user-select: none;
    cursor: pointer;
  }
  .container button:active {
    transform: translateY(4px);
    box-shadow: 0 1px 0 #555;
  }
`;
