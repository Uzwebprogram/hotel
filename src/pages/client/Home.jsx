import { GlobalStyle, WrapperContainer } from "../../App-styled";
import Home from "../../components/client/Home/home-hero/index";
import AboutHotel from "../../components/client/AboutHotel/index";
import Terms from "../../components/client/Terms/index";
import OurHotel from "../../components/client/OurHotel";
import Comments from "../../components/client/Comments";
import Contacts from "../../components/client/Contacts";

function Client() {
  return (
    <>
      <GlobalStyle />
      <WrapperContainer>
        <Home />
        <AboutHotel />
        <Terms />
        <OurHotel/>
        <Comments/>
        <Contacts/>
      </WrapperContainer>
    </>
  );
}
export default Client;
