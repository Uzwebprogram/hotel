import styled from "styled-components";
import Img from "../../../assets/client/home/Frame1684.png"

export const CarouselDiv = styled.div`
  color: white;
  background-image: url(${Img});
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const Carousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  overflow-x: scroll;
  scroll-behavior: smooth;
  &::-webkit-scrollbar{
    display: none;
  }
  button {
    border: 1px solid white;
    background-color: transparent;
    border-radius: 5px;
    padding: 10px 20px;
    color: white;
    transition: 0.65s;
    cursor: pointer;

    &:hover {
      background-color: white;
      color: black;
    }
  }
  div {
    margin-right: 5%;
  }
`;

export const Card = styled.div`
  width: 300px !important;
`;

export const Buttons = styled.div`
  text-align: end;
  padding-bottom: 3%;
  button {
    border: 1px solid #9f9b9b;
    background-color: transparent;
    color: #9f9b9b;
    border-radius: 50%;
    padding: 14px 14px 10px 12px;
    font-size: 30px;
    cursor: pointer;
    transition: 0.65s;

    &:hover {
      border: 1px solid white;
      color: white;
    }
  }
  button:nth-child(1) {
    margin-right: 3%;
  }
`;

export const H2 = styled.div`
  font-size: 30px;
  color: white;
  margin-top: 10%;
  margin-bottom: 5%;
`;