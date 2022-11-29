import styled from "styled-components";

export const Wrapper = styled.div`
  background: #0f0f11;
`;
export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  img {
    width: 130px;
    height: 70px;
  }
  ul {
    @media screen and (max-width: 950px) {
      display: none;
    }
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    width: 65%;

    li {
      a {
        text-decoration: none;
        color: white;
      }
      select {
        color: white;
        background-color: #0f0f11;
        border: none;
      }
    }
    li:nth-child(6) {
      display: flex;
      flex-direction: column;
    }
  }
  button {
    border: none;
    outline: none;
    background-color: transparent;
    color: white;
    font-size: 20px;
    cursor: pointer;
  }
`;

export const Menu = styled.div`
  display: none;
  .bx {
    color: white;
    font-size: 35px;
  }
  a {
    color: white;
    text-decoration: none;
  }
  @media screen and (max-width: 950px) {
    display: block;
    display: flex;
    flex-direction: column;
  }
`;

export const Number = styled.div`
  display: none;
  padding: 0 10px;
  @media screen and (max-width: 950px) {
    display: block;
    display: flex;
    flex-direction: column;

    a{
        color: white;
        text-decoration: none;
        text-align: end;
    }
  }
`;
