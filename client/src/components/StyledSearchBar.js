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
    margin-left: 5px;
    border: none;
    border-radius: 2px 10px 10px 2px;
    background-color: #c42424;
    box-shadow: 0 4px 0 #500;
    color: #500;
    height: 22px;
    font-family: inherit;
    font-weight: 600;
    transition: all 0.05s ease-in-out;
    cursor: pointer;
  }

  button:hover {
    color: white;
  }

  button:active {
    transform: translateY(3px);
    box-shadow: 0 1px 0 #300;
  }
  
  button:disabled {
    background-color: #ddd;
    transform: translateY(3px);
    color: #aaa;
    box-shadow: 0 1px 0 #aaa;
    cursor: auto;
  }
`;

export default StyledSearchBar;
