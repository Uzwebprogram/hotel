import styled from "styled-components"
import backgroundimg from "../../../assets/footer/frame.png"
import blue from "../../../assets/footer/blue.png"

export const Wrapper = styled.div`
padding-top: 20px;
 background-image: url(${backgroundimg});
 background-repeat: no-repeat;
 background-size: cover;
 padding-bottom: 50px;
 @media only screen and (max-width: 922px) {
    background-color: #0F0F11;
    background-image: url(${blue});
    background-size: auto;
    background-position-y: 95%;
    background-position-x: 100%;
}
`

export const WrapperContainer = styled.div`
a{
    color: #FFFFFF;
    text-decoration: none;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    letter-spacing: 0.01em;
}
ul{
    list-style: none;
}
li{
    padding-top: 15px;
    color: #FFFFFF;
}
`

export const Title = styled.div`

`

export const Heading = styled.div`
img{
 width: 200px;
 margin-bottom: 30px;
 @media only screen and (max-width: 622px) {
    margin-right: 236px;

}
}
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
@media only screen and (max-width: 940px) {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
}
`

export const Li = styled.div`
 img{
    width: 60px;
    display: flex;
    margin-left: auto;
    @media only screen and (max-width: 940px) {
    margin-left: 260px;
    width: 60px;
    margin-bottom: -20px;
}
 }
`

export const Li1 = styled.div`
    color: #FFFFFF;
    padding-top: 10px;
    letter-spacing: 20px;
`