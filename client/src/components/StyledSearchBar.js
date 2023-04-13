import styled from 'styled-components';

const StyledSearchBar = styled.div`
  display: flex;
  input {
    height: 20px;
    border-radius: 10px 0 0 10px;
    background-color: white;
    padding-left: 10px;
  }

  button {
    margin-left: 2px;
    border: none;
    border-radius: 0 10px 10px 0;
    background-color: #c42424;
    box-shadow: 0 3px 0 #500;
    color: #500;
    font-weight: 600;
    width: 30px;
    cursor: pointer;
  }

  button:active {
    transform: translateY(2px);
    box-shadow: 0 1px 0 #300;
  }
`;

export default StyledSearchBar;
