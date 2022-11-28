import styled from "styled-components";

export const Wrapper = styled.div`
  color: white;
  padding: 20px 10px 0 10px;

  h1 {
    border-bottom: 1px solid #7c7c7c;
    padding-bottom: 5%;
    margin-bottom: 85px;
    @media screen and (max-width: 375px) {
      font-size: 20px;
    }
  }
`;
export const Ul = styled.ul`
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  li {
    margin-top: 20px;
    list-style: none;
    background-color: #1b1b1c;
    padding: 20px;
    width: 330px;
  }
  @media screen and (max-width: 780px) {
    display: none;
  }
`;
export const About = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 780px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const Star = styled.div`
  i {
    margin-right: 5px;
    color: #e4b50c;
  }
`;
export const Name = styled.div`
  display: flex;
  border-radius: 3px;
  img {
    margin-top: 10px;
    border-radius: 50px;
    width: 40px;
    height: 40px;
  }
  h3 {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-left: 20px;
  }
  p {
    margin-left: 40px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.01em;
    color: #aaaaaa;
  }
  i {
    padding-top: 60px;
  }
`;
// e3drtfyguhij
export const Carusel = styled.div`
  display: flex;
  display: none;
  overflow-x: scroll;

  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
  @media screen and (max-width: 780px) {
    display: block;
  }

  div {
    list-style: none;
    background-color: #1b1b1c;
    padding: 1%;
    width: 300px !important;
    margin-right: 5%;
    p {
      color: white;
    }
  }
`;

export const Buttons = styled.div`
  display: none;
  padding: 3% 0%;
  text-align: end;
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
    margin-right: 2%;
  }
`;
export const User = styled.div`
  width: 100%;
  img {
    border-radius: 50%;
  }
  h3 {
    font-size: 20px;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;
export const Infor = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;

export const ULWrapper = styled.div`
  list-style: none;
  margin: 0 !important;
  @media only screen and (max-width: 375px) {
   display: none !important;
  }
  @media only screen and (max-width: 320px) {
   display: none !important;
  }
`;
export const LIItem = styled.li`
  margin: 15px 0;

 
  /* div {
    padding: 5px 10px;

    background: #1b1b1c;
    border-radius: 3px;
  } */
`;

export const Item = styled.div`
  padding: 10px 20px;

  background: #1b1b1c;
  border-radius: 3px;
`;

export const HiddenDiv = styled.div`
  margin-top: 50px !important;
`;

// export const HiddenDivs = styled.div`
//  display: none;
//  @media only screen and (max-width: 375px) {
//    display: block !important;
//   }
// `
