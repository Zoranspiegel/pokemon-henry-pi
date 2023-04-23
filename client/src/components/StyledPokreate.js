import styled from 'styled-components';

const StyledPokreate = styled.div`
  user-select: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 4px solid #c42424;
    border-style: groove;
    border-radius: 20px;
    background-color: #e5e5e5;
    padding: 20px 40px;
    color: #111;
  }
  .container input {
    background-color: white;
    border-color: #eee;
    border-radius: 5px;
    padding: 1px 5px;
    outline: none;
  }
  .container .red {
    border-color: red;
  }
  .container .error {
    color: #c42424;
  }
  .container button{
    width: 100%;
    border: none;
    border-radius: 20px;
    background-color: #c42424;
    box-shadow: 0 4px 0 #500;
    font-family: inherit;
    font-weight: 800;
    color: #fff;
    transition: all 0.1s ease-in-out;
    cursor: pointer;
  }
  .container button:hover {
    color: #eee;
    background-color: #a00;
  }
  .container button:active {
    transform: translateY(3px);
    box-shadow: 0 1px 0 #300;
  }
  .container button:disabled {
    background-color: #888;
    transform: translateY(3px);
    box-shadow: 0 1px 0 #555;
    cursor: auto;
  }
  .container h3 {
    text-align: center;
    color: #c42424;
    margin: 0;
    margin-bottom: 20px;
  }
  .container p {
    font-size: 16px;
    color: black;
    margin: 0;
  }
  .container span {
    text-align: center;
    display: block;
    font-size: 13px;
  }
  .types {
    width: 300px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5px;
  }
  .types img {
    box-sizing: border-box;
    /* border-radius: 10px; */
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
  .activeType {
    border: 4px ridge red;
  }
`;

export default StyledPokreate;
