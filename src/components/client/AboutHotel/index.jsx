import { GlobalStyle, WrapperContainer } from "../../../App-styled";
import { Wrapper, Bigdiv, First, Second, Small, Ul } from "./styled-index";
import studio2 from "../../../assets/client/AboutHotel/home.jpg";
import clean from "../../../assets/client/AboutHotel/clean.png";
import bestprice from "../../../assets/client/AboutHotel/bestprice.png";
import location from "../../../assets/client/AboutHotel/location.png";
import wifi from "../../../assets/client/AboutHotel/wifi.jpg";
import trn from "../../../assets/client/AboutHotel/airport.jpg";
import brak from "../../../assets/client/AboutHotel/break.jpg";

import { useTranslation } from "react-i18next";

function AboutHotel() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Wrapper id="About">
        <h2>{t("AboutHotel.0")}</h2>
        <Bigdiv>
          <First>
            <p className="p_sub">{t("AboutHotel.1")}</p>
            <p className="p_sub">{t("AboutHotel.9")}</p>
            <p className="p_sub">{t("AboutHotel.10")}</p>
            <p className="p_sub">{t("AboutHotel.11")}</p>
            <p className="p_sub">{t("AboutHotel.12")}</p>
            <p className="p_sub">{t("AboutHotel.13")}</p>
            <p className="p_sub">{t("AboutHotel.14")}</p>
          </First>
          <Second>
            <img src={studio2} alt="studio2" />
          </Second>
        </Bigdiv>
        <Small>
          <p>{t("AboutHotel.2")}</p>
          <Ul>
            <ul>
              <li>
                <img src={clean} alt="clean" />
                <p>{t("AboutHotel.3")}</p>
              </li>
              <li>
                <img src={bestprice} alt="bestprice" />
                <p>{t("AboutHotel.4")}</p>
              </li>
              <li>
                <img src={location} alt="location" />
                <p>{t("AboutHotel.5")}</p>
              </li>
              <li>
                <img src={brak} alt="location" />
                <p>{t("AboutHotel.6")}</p>
              </li>
              <li>
                <img src={wifi} alt="location" />
                <p>{t("AboutHotel.7")}</p>
              </li>
              <li>
                <img src={trn} alt="location" />
                <p>{t("AboutHotel.8")}</p>
              </li>
            </ul>
          </Ul>
        </Small>
      </Wrapper>
    </>
  );
}
export default AboutHotel;
