import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <StyledNavbar>
      <NavLink exact activeClassName='aLink' className='link' to='/'>PoKeMock</NavLink>
      <NavLink exact activeClassName='aLink' className='link' to='/create'>Create your own Pokemon!</NavLink>
    </StyledNavbar>
  );
};

export default Navbar;

const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #c42424;
  padding: 20px;

  .link {
    text-decoration: none;
    color: white;
    font-weight: 800;
  }
  .link:hover {
    color: yellow;
  }
  .aLink {
    color: white;
    font-size: 20px;
  }
`;
