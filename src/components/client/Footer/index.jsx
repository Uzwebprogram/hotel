import { GlobalStyle, WrapperContainer } from "../../../App-styled";
import img from "../../../assets/client/header/Logo.svg";
import up from "../../../assets/footer/up.png";
import {
  Wrapper,
  Container,
  UPWrapper,
  Title,
  Heading,
  Up,
  Li,
  Li1,
} from "./styled-index";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Wrapper>
        <WrapperContainer>
          <Container>
            <Title>
              <Heading>
                <img src={img} alt="logo" />
                <ul>
                  <li>
                    <a href="#Galery">{t("Footer.0")}</a>
                  </li>
                  <li>
                    <a href="#About">{t("Footer.1")}</a>
                  </li>
                  <li>
                    <a href="#numbers">{t("Footer.2")}</a>
                  </li>
                  <li>
                    <a href="#comments">{t("Footer.3")}</a>
                  </li>
                  <li>
                    <a href="#">{t("Footer.4")}</a>
                  </li>
                  <li>
                    <a href="#contacts">{t("Footer.5")}</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="#">{t("Footer.12")}</a>
                  </li>
                  <li>
                    <a href="tel:+998 95 169 69 69">
                      <button>{t("Footer.13")}</button>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:Info@reverhotel.uz">Info@reverhotel.uz</a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="bx bxl-instagram"></i>
                    </a>
                    <a href="#">
                      <i class="bx bxl-telegram"></i>
                    </a>
                    <a href="#">
                      <i class="bx bxl-facebook-square"></i>
                    </a>
                  </li>
                </ul>
                <UPWrapper>
                  <Up>
                    <a href="#">
                      <i class="bx bx-up-arrow-alt"></i>
                    </a>
                  </Up>
                </UPWrapper>
              </Heading>
            </Title>
          </Container>
        </WrapperContainer>
      </Wrapper>
    </>
  );
}
export default Footer;
