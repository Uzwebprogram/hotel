import styled from "styled-components";

export const LoginDiv = styled.div`
display: flex;
align-items: center;
width: 70%;
margin: 0 auto;
text-align: center;
background-color: #0F0F11;
color: white;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
form {
    display: flex;
    flex-direction: column;
    width: 50%;
    padding-left: 24%;
    text-align: start;

    label{
        margin: 5% 0 3%;
    }
    input {
        padding: 10px 30px 10px 20px;
        background-color: white;
        border-radius: 10px;
        outline: none;
        border: 1px solid black;
    }
    button {
        margin-top: 5%;
        padding: 10px 0;
        border-radius: 10px;
        border: 1px solid black;
        cursor: pointer;
        transition: .65s;

        &:hover {
            background-color: #0F0F11;
            color: white;
            border: 1px solid white;
        }
    }
}
`

export const ImgDiv = styled.div`
width: 40%;
img {
    width: 100%;
}
`

export const Div = styled.div`
width: 60%;
`