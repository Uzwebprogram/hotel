import { WrapperContainer } from "../../../App-styled";
import {
  Wrapper,
  WrapperLeft,
  Div,
  H1,
  Bigdiv,
  Firstdiv,
  SecondDiv,
  WrapperRight,
  BigWrapper
} from "./styled-index";
import { useTranslation } from "react-i18next";

function Contacts() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <WrapperContainer>
        <BigWrapper>
          <h1>{t("Contacts.0")}</h1>
          <Wrapper>
            <WrapperLeft>
              <Div>
                <H1>{t("Contacts.1")}</H1>
                <input type="email" placeholder={t("Contacts.2")} />
                <h2>{t("Contacts.3")}</h2>
                <input type="text" />
                <button>{t("Contacts.4")}</button>
                <h3>{t("Contacts.5")}</h3>
                <Bigdiv>
                  <Firstdiv>
                    <h3>{t("Contacts.6")}</h3>
                    <p>{t("Contacts.7")}</p>
                    <h3>{t("Contacts.8")}</h3>
                    <p>revel@mail.ru</p>
                  </Firstdiv>
                  <SecondDiv>
                    <h4>{t("Contacts.9")}</h4>
                    <p>+99893453455</p>
                    <p>+99898345345</p>
                    <p>{t("Contacts.10")}</p>
                    <i class="bx bxl-instagram-alt"></i>
                    <i class="bx bxl-telegram"></i>
                    <i class="bx bxl-facebook-circle"></i>
                  </SecondDiv>
                </Bigdiv>
              </Div>
            </WrapperLeft>
            <WrapperRight>
              <iframe
                class="gmap_iframe"
                width="100%"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=650&amp;height=500&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </WrapperRight>
          </Wrapper>
        </BigWrapper>
      </WrapperContainer>
    </>
  );
}
export default Contacts;
