import styled from "styled-components";
import bgcolors from "../../../../assets/client/home/bgcolors.png";
export const Container = styled.div`
  display: flex;
  /* align-items: center; */
  color: white;
`;
export const LeftDiv = styled.div`
  background-image: url(${bgcolors});
  background-position-y: bottom;
  background-size: 100%; 
  background-repeat: no-repeat;
  border: 1px solid white;
  height: 100%;
  h1 {
    padding-top: 50px;
    font-style: normal;
    font-weight: 600;
    font-size: 55px;
  }
  p {
    width: 80%;
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
`
export const RightDiv = styled.div`
  img {
    width: 100%;
  }
`;
export const Bigdiv = styled.div`
border: 1px solid wheat;
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
`;

export const Smallestdiv = styled.div`
width: 100%;
`;
export const Smalldiv = styled.div`
  width: 90%;
`