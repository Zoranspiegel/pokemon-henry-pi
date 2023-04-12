import styled from 'styled-components';

const StyledCard = styled.div`
  .link {
    text-decoration: none;
    color: white;
  }

  .link:hover {
    color: #ee4;
  }

  .shell {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: 3px #fff;
    border-style: outset;
    /* border: 3px solid #c42424; */
    border-radius: 10px;
    background-color: #521414;
    width: 300px;
    height: 300px;
  }
  
  .shell:hover{
    position: relative;
    transition: all 0.1s ease-in;
    transform: translateY(-5px);
  }

  .title {
    border-radius: 8px 8px 0 0;
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
    border-radius: 0 0 8px 8px;
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
