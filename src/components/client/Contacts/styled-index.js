import styled from "styled-components"

export const Wrapper = styled.div`
color: white;
h1{
    border-bottom: 1px solid #5a5a5a;
    font-size: 35px;
    padding-bottom: 3%;
}
@media screen and (max-width: 860px) {
    padding-bottom: 30%;
}
`
export const WrapperLeft = styled.div`
background-color: #1B1B1C;
border-radius: 10px;
width: 565px;
height: 670px;
@media screen and (max-width: 932px) {
    background: none;
}

`
export const Div = styled.div`
input{
    margin-left: 50px;
    background-color: #1B1B1C;
    padding: 15px 250px;
    padding-left: 10%;
    border: 1px solid white;
    border-radius: 5px;
    @media screen and (max-width: 860px) {
       width: 15%;
}
}
h2{
    font-size: 20px;
    font-weight: 400;
    margin-left: 50px;
}
button{
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
h3{
    padding-top: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    margin-left: 50px;
}
`
export const H1 = styled.div`
    padding-bottom: 30px;
    font-size: 20px;
    padding-top: 30px;
    margin-left: 50px;
`
export const Bigdiv = styled.div`
display: flex;
@media screen and (max-width: 860px) {
    flex-wrap:wrap ;
}
`
export const Firstdiv = styled.div`
p{
    margin-left: 50px;
    width: 80%;
}
h3{
    font-weight: 500;
    font-size: 20px;
}
`
export const SecondDiv = styled.div`
margin-left: -5%;
h4{
    padding-top: 20px;
    width: 100%;
    font-weight: 500;
    font-size: 20px;
}
i{
    margin-left: 5%;
}
@media screen and (max-width: 860px) {
    padding-left: 15%;
}
`