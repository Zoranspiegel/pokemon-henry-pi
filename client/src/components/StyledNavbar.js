import styled from 'styled-components';

const StyledNavbar = styled.div`
  user-select: none;
  z-index: 1000;
  display: flex;
  position: fixed;
  top:-4px;
  width: 100%;
  border-bottom: 4px ridge white;
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
