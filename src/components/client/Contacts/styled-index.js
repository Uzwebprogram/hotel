import styled from "styled-components";

export const Wrapper = styled.div`
  color: white;
  display: flex;
  align-items: top;
  justify-content: space-between;
  h1 {
    border-bottom: 1px solid #7c7c7c;
    padding-bottom: 20px;
  }
`;
export const BigWrapper = styled.div`
  color: white;
  padding: 50px 0;
  h1 {
    border-bottom: 1px solid #7c7c7c;
    padding-bottom: 20px;
  }
`;
export const WrapperLeft = styled.div`
  background-color: #1b1b1c;
  border-radius: 10px;
  width: 48%;
  height: 670px;
`;
export const WrapperRight = styled.div`
  width: 48%;

  iframe{
    height: 500px;
    width: 100%;
  }
`;
export const Div = styled.div`
  input {
    margin-left: 50px;
    background-color: #1b1b1c;
    padding: 15px 250px;
    padding-left: 10px;
    border: 1px solid white;
    border-radius: 5px;
  }
  h2 {
    font-size: 20px;
    font-weight: 400;
    margin-left: 50px;
  }
  button {
    margin-top: 30px;
    margin-left: 50px;
    padding: 10px 50px;
    background: none;
    border: 1px solid white;
    color: white;
    border-radius: 2px;
    cursor: pointer;
    transition: 0.65s;
  }
  button:hover {
    background-color: white;
    color: black;
  }
  h3 {
    padding-top: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    margin-left: 50px;
  }
`;
export const H1 = styled.div`
  padding-bottom: 30px;
  font-size: 20px;
  padding-top: 30px;
  margin-left: 50px;
`;
export const Bigdiv = styled.div`
  display: flex;
`;
export const Firstdiv = styled.div`
  p {
    margin-left: 50px;
    width: 80%;
  }
  h3 {
    font-weight: 500;
    font-size: 20px;
  }
`;
export const SecondDiv = styled.div`
  margin-left: -5%;
  h4 {
    padding-top: 20px;
    width: 100%;
    font-weight: 500;
    font-size: 20px;
  }
  i {
    margin-left: 5%;
  }
`;
