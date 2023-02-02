import styled from "styled-components";
import Fram from "../../../assets/client/home/Frame1.png";

export const Wrapper = styled.div`
  /* padding: 10px 10px 0 10px; */
  background-color: #0f0f11;
  color: white;
  h3 {
    border-bottom: 1px solid #5a5a5a;
    padding-bottom: 3%;
    font-size: 35px;
    @media screen and (max-width: 375px) {
      font-size: 20px;
    }
  }
`;
export const Bigdiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 815px) {
    display: flex;
    flex-direction: column;
  }
`;

export const First = styled.div`
  p {
    width: 95%;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
  }
`;
export const Second = styled.div``;
export const Smaller = styled.div`
  h5 {
    padding: 0;
    margin: 0;
  }
  h6{
  font-size: 20px;
  margin: 20px 0 20px 0;
  }
`;
export const Smallest = styled.div`
  h5 {
    padding: 0;
    margin: 0;
  }
  h6{
  font-size: 20px;
  margin: 20px 0 20px 0;
  }
`;
export const Text = styled.div`
  @media screen and (max-width: 400px) {
    background-image: url(${Fram});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position-y: bottom;
  }
`;

export const DfDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 400px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  h5 {
    font-size: 20px;
  }
`;
