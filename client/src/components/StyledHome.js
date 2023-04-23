import styled from 'styled-components';

const StyledHome = styled.div`
  margin: 30px 0 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  .typeBtns {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    margin: 20px 0;
  }

  .typeBtns button {
    border: none;
    border-radius: 6px;
    padding: 5px 10px;
    color: #c42424;
    font-family: inherit;
    font-weight: 600;
    box-shadow: 0 3px 0 #bbb;
    user-select: none;
    cursor: pointer;
  }
  
  .typeBtns button:hover {
    color: red;
  }
  
  .typeBtns button:active {
    transform: translateY(2px);
    box-shadow: 0 1px 0 #999;    
  }

  .typeBtns .activeFilter {
    color: white;
    background-color: #c42424;
    box-shadow: 0 1px 0 #a00;
    transform: translateY(2px);
  }

  .typeBtns .activeFilter:hover {
    color: #353535;
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px;
    gap: 20px;
  }
  `;

export default StyledHome;
