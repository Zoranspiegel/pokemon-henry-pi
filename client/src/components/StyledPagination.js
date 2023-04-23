import styled from 'styled-components';

const StyledPagination = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;

  button {
    border: none;
    padding: 0;
    text-align: center;
    min-width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: yellow;
    box-shadow: 0 3px 0 #770;
    font-family: inherit;
    cursor: pointer;
    user-select: none;
  }
  
  button:active {
    transform: translateY(2px);
    box-shadow: 0 1px 0 #770;
  }
  
  .activeBtn {
    background-color: #c42424;
    transform: translateY(2px);
    color: white;
    box-shadow: 0 1px 0 #700;
  }
  
  .activeBtn:active {
    transform: translateY(2px);
    box-shadow: 0 1px 0 #700;
  }
  
  .arrow {
    border-radius: 5px;
    background-color: #c42424;
    box-shadow: 0 3px 0 #500;
    color: white;
  }
  .arrow:active {
    box-shadow: 0 1px 0 #500;
  }
`;

export default StyledPagination;
