import styled, { createGlobalStyle } from "styled-components";

export const WrapperContainer = styled.div`
    max-width: 1210px;
    width: 100%;
    padding: 0 10px;
    margin: 0 auto;
`

export const GlobalStyle = createGlobalStyle`
/* html {
    scroll-behavior: smooth;
} */
body{
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`