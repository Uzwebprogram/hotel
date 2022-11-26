import styled from "styled-components"
import bgcolors from "../../../../assets/client/home/bgcolors.png"

export const Wrapper = styled.div`
background-image: url(${bgcolors});
background-size: 100%;
background-repeat: no-repeat;
/* padding-top: 50px;
padding-bottom: 50px; */
color: white;

`
export const Container = styled.div`
display: flex;
`
export const LeftDiv = styled.div`
padding-top: 30px;
h1{
  padding-top: 50px;
  font-style: normal;
  font-weight: 600;
  font-size: 55px;
   width: 355px;
}
p{
  width: 140%;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  padding-bottom: 25px;

}
button{
  padding: 10px 30px;
  background: none;
  border: 1px solid white;
  color: white;
  border-radius: 2px;
  transition: .65s;
}
button:hover{
  background-color: white;
  color: black;
}

`
export const RightDiv = styled.div`
img{
  padding-left: 290px;
  @media screen and (max-width: 900px){
  img{
    width: 428px;
  } 

  }
}
`
export const Bigdiv = styled.div`
  display: flex;
  padding-top: 270px;
  img{
  width: 15px;
  height: 21px;
  padding-top: 20px;
  
}
@media screen and (max-width: 900px){
display: none;

  }
`

export const Smallestdiv = styled.div`
  margin-left: 20px;
  width: 100%;
`
export const Smalldiv = styled.div`
width: 200%;
margin-left: 90px;
`