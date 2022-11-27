import styled from "styled-components";
import bgcolors from "../../../../assets/client/home/bgcolors.png";
export const Container = styled.div`
  display: flex;
  color: white;
  background-image: url(${bgcolors});
  background-position-y: bottom;
  background-size: 100%;
  background-repeat: no-repeat;
  @media screen and (max-width: 823px) {
    display: flex;
    flex-direction: column;
  }
`;
export const LeftDiv = styled.div`
  h1 {
    padding-top: 7%;
    font-style: normal;
    font-weight: 600;
    font-size: 55px;
    @media screen and (max-width: 1088px) {
      padding-top: 0%;
    }
    @media screen and (max-width: 935px) {
      font-size: 30px;
    }
  }
  p {
    width: 80%;
    @media screen and (max-width: 823px) {
      width: 100%;
      font-size: 10px;
      width: 70%;
    }
  }
  button {
    padding: 10px 30px;
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
`;
export const RightDiv = styled.div`
  img {
    width: 100%;
    @media screen and (max-width: 823px) {
      margin-top: 5%;
    }
  }
`;
export const Bigdiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10%;
  @media screen and (max-width: 823px) {
    display: none;
  }
`;

export const Smallestdiv = styled.div`
  width: 100%;  
  p {
    padding-left: 5%;
  }
  @media screen and (max-width: 823px) {
    display: none;
  }
`;
export const Smalldiv = styled.div`
  width: 90%;
  @media screen and (max-width: 823px) {
    display: none;
  }
`;

export const Wrapper = styled.div``
