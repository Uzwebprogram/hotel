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
  padding: 40px;

  @media only screen and (max-width: 732px) {
   margin-bottom: 20px;
  }

  @media only screen and (max-width: 425px) {
    padding: 20px;
    background: none;
  }
`;
export const WrapperRight = styled.div`
  iframe {
    height: 500px;
    width: 100%;
  }
`;

export const Form = styled.form``;

export const InputGroup = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  margin: 0 0 30px 0;

  label {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 120%;
    letter-spacing: 0.01em;
    color: #ffffff;
    margin-bottom: 15px;
  }

  input {
    background: #2f2f2f;
    border-radius: 7px;
    color: #fff;
    padding: 16px 20px;
    outline: none;
    border: 1px solid transparent;
    width: 90%;

    :focus {
      background: #1b1b1c;
      border: 1px solid #cccccc;
    }

    ::placeholder {
      color: #fff;
    }
  }
`;

export const Button = styled.button`
  background: #1b1b1c;
  border: 1px solid #cccccc;
  border-radius: 7px;
  padding: 16px 50px;
  /* font-family: "Gilroy"; */
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  letter-spacing: 0.01em;
  color: #ffffff;
  transition: .5s;
  :hover {
    background-color: white;
    color: black;
  }
`;

export const ColDiv = styled.div`
  padding: 0 !important;

  h4 {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 120%;
    letter-spacing: 0.01em;
    color: #ffffff;
  }

  a {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    /* or 19px */
    text-decoration: none;
    letter-spacing: 0.01em;
    color: #ffffff;

    i {
      font-size: 25px;
      margin: 0 7px 0 0;
    }
  }
`;

export const HiddenText = styled.div`
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    /* or 19px */
    letter-spacing: 0.01em;
    color: #ffffff;
  }
`;
