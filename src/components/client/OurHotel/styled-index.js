import styled from "styled-components"
import blue from "../../../assets/client/OurHotel/blue2.png"
import redcolor from "../../../assets/client/OurHotel/redcolor.png"

export const Wrapper = styled.div`
h1{
    padding-top: 60px;
}
color: white;
background-image: url(${blue});
background-repeat: no-repeat;
background-position-x: 1000px;
background-position-y: 40px;

`
export const Ul1 = styled.div`
background-image: url(${redcolor});
background-repeat: no-repeat;
background-position-x: 1000px;
background-position-y: 1250px;
 padding-top: 20px;
ul{
    list-style: none;
}
li{

    padding-bottom: 50px;
    img{
        width: 300px;
        height: 380px;
    }
    p{
        padding-bottom: 20px;
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

}
`
export const Ul = styled.ul`

   /* width: 100%; */
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px 20px;

`