import styled from 'styled-components';

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

export default StyledNavbar;
