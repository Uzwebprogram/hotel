import styled from "styled-components";


export const Wrapper = styled.div`
background: #0F0F11;
`


export const Nav = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 0;
ul{
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    width: 65%;

    li{
        a{
            text-decoration: none;
            color: white;
        }
        select {
            color: white;
            background-color: #0F0F11;
            border: none;
        }
    }
    li:nth-child(6) {
        display: flex;
        flex-direction: column;
    }
}
button {
    border: none;
    outline: none;
    background-color: transparent;
    color: white;
    font-size: 20px;
    display: none;
    cursor: pointer;
}

@media screen and (max-width: 900px){
    ul {
        display: none;
    }
    button{
        display: block;
    }

}
`

