import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 3px solid #c42424;
  border-radius: 10px;
  background-color: #521414;
  width: 300px;
  height: 300px;

  .title {
    border-radius: 5px 5px 0 0;
    background-color: #c42424;
    width: 100%;
    text-align: center;
  }

  img {
    width: 50%;
    height: 50%;
  }

  .types {
    display: flex;
    border-radius: 0 0 5px 5px;
    background-color: #c42424;
    justify-content: space-evenly;
    width: 100%;
  }

  .types p {
    color: #c42424;
    font-weight: 600;
    border-radius: 20px;
    background-color: #eee;
    padding: 5px 10px;
  }
`;

export default StyledCard;
