import styled from "styled-components"

export const Wrapper = styled.div`
color: white;
padding-top: 20px;

h1{
    border-bottom: 1px solid #7C7C7C;
    margin-left: -150px;
    padding: 40px 150px;
    width: 1210px;
}
`
export const Ul = styled.ul`
width: 100%;
padding-top: 20px;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
li{
margin-top: 20px;
    list-style: none;
    background-color: #1B1B1C;
    padding: 20px;
    width: 29%;
}

`
export const About = styled.div`
display: flex;
align-items: center;

`
export const Star = styled.div`

i{
    margin-left: 5px;
    margin-right: 5px;
    color: #E4B50C;
}
`
export const Name = styled.div`
    display: flex;
    border-radius: 3px;
img{
    margin-top: 10px;
    border-radius: 50px;
    margin-left: 20px;
    width: 40px;
    height: 40px;
}
h3{
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 120%;
    margin-left: 20px;
}
p{
    margin-left: 40px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    letter-spacing: 0.01em;
    color: #AAAAAA;
}
i{
    padding-top: 60px;
    margin-left: -330px;
}
`