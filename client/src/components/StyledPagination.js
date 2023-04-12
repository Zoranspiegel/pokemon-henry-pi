import styled from 'styled-components';

const StyledPagination = styled.div`
  display: flex;
  gap: 10px;

  button {
    border: none;
    border-radius: 5px;
    background-color: yellow;
    box-shadow: 0 2px 0 #770;
    cursor: pointer;
    user-select: none;
  }

  button:active {
    transform: translateY(1px);
    box-shadow: 0 1px 0 #770;
  }
  
  .activeBtn {
    background-color: red;
    box-shadow: 0 2px 0 #700;
  }

  .activeBtn:active {
    transform: translateY(1px);
    box-shadow: 0 1px 0 #700;
  }
`;

export default StyledPagination;
