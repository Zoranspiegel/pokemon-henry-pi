import StyledNavbar from './StyledNavbar';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <StyledNavbar>
      <NavLink exact activeClassName='aLink' className='link' to='/'>POKEMOCK</NavLink>
      <NavLink exact activeClassName='aLink' className='link' to='/create'>POKREATE!</NavLink>
    </StyledNavbar>
  );
};

export default Navbar;
