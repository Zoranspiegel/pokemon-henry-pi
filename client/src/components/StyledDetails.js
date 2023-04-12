import styled from 'styled-components';

const StyledDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 85vh;
  .shell {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    border: 5px ridge white;
    border-radius: 20px;
    background-color: #521414;
  }

  .shell img{
    margin: 50px 0;
  }

  .title {
    text-align: center;
    width: 100%;
    background-color: #c42424;
    border-radius: 16px 16px 0 0;
  }
  .types {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .types p {
    color: #c42424;
    font-weight: 600;
    border-radius: 20px;
    background-color: #eee;
    padding: 5px 10px;
  }

  .stats {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 0 20px 0px 20px;
    justify-content: center;
    gap: 40px;
    background-color: #c42424;
    border-radius: 0 0 16px 16px;
  }
`;

export default StyledDetails;
