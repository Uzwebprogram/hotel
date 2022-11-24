import styled from "styled-components"


export const Modals = styled.div`
display: none;
background-color: #0F0F11;
position: absolute;
height: 100%;
padding: 0 40px 0 0px;
top: 0;
left: 0;
p {
    text-align: end;
    color: white;
}

@media screen and (max-width: 900px) {
    display: block;    
}
ul {
    list-style: none;
    li{
        margin-top: 10%;
        padding-bottom: 3%;
        border-bottom: 1px solid white;
        a{
            text-decoration: none;
            color: white;
        }
        select {
            border: none;
            background-color: #0F0F11;
            color: white;
        }
    }
    li:nth-child(6) {
        display: flex;
        flex-direction: column;
    }
}
`