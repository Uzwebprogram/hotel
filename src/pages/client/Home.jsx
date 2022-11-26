import { GlobalStyle, WrapperContainer } from "../../App-styled"
import HomeHero from "../../components/client/Home/home-hero";
function Client() {
    return (
           <GlobalStyle>
            <WrapperContainer>
                <HomeHero/>
            </WrapperContainer>
            </GlobalStyle>
    )
}
export default Client;