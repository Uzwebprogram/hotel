import { GlobalStyle, WrapperContainer } from "../../App-styled";
import Home from "../../components/client/Home/home-hero/index";
import AboutHotel from "../../components/client/AboutHotel/index";
import Terms from "../../components/client/Terms/index";
import ReservHome from "../../components/client/reserv";
import Gallery from "../../components/client/Galery";

function Client() {
  return (
    <>
      <GlobalStyle />
      <WrapperContainer>
        <Home />
        <ReservHome/>
        <Gallery/>
         <AboutHotel/> 
        <Terms /> 
      </WrapperContainer>
    </>
  );
}
export default Client;
