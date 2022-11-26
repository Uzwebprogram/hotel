import { GlobalStyle, WrapperContainer } from "../../App-styled";
import Home from "../../components/client/Home/home-hero/index";
import AboutHotel from "../../components/client/AboutHotel/index";
import Terms from "../../components/client/Terms/index";

function Client() {
  return (
    <>
      <GlobalStyle />
      <WrapperContainer>
        <Home />
        <AboutHotel />
        <Terms />
      </WrapperContainer>
    </>
  );
}
export default Client;
