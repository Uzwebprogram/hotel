import { GlobalStyle, WrapperContainer } from "../../App-styled";
import HomeHero from "../../components/client/Home/home-hero/index";
import Gallery from "../../components/client/Galery/index";
import ReservHome from "../../components/client/reserv";
import AboutHotel from "../../components/client/AboutHotel";
import Terms from "../../components/client/Terms";
function Client() {
  return (
    <>
      <GlobalStyle />
      <WrapperContainer>
        <HomeHero />
        <ReservHome />
        <Gallery />
        <AboutHotel />
        <Terms />
      </WrapperContainer>
    </>
  );
}
export default Client;
