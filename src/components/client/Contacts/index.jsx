import { WrapperContainer } from "../../../App-styled";
import { Container, Row, Col, Hidden } from "react-grid-system";
import {
  Wrapper,
  WrapperLeft,
  Div,
  H1,
  Bigdiv,
  Firstdiv,
  SecondDiv,
  WrapperRight,
  BigWrapper,
  Form,
  InputGroup,
  Button,
  ColDiv,
  HiddenText,
  Rows,
} from "./styled-index";
import { useTranslation } from "react-i18next";

function Contacts() {
  const { t, i18n } = useTranslation();
  return (
    <>
      {/* <WrapperContainer> */}
      <BigWrapper id="contacts">
        <h1>{t("Contacts.0")}</h1>
        <Row component={Rows}>
          <Col lg={6} md={6} sm={12}>
            <WrapperLeft>
              <Form>
                <InputGroup>
                  <label htmlFor="email">{t("Contacts.1")}</label>
                  <input
                    type="email"
                    id="email"
                    placeholder={t("Contacts.2")}
                    required
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="phone">{t("Contacts.3")}</label>
                  <input type="number" id="phone" required />
                </InputGroup>
                <Button type="sumbit">{t("Contacts.4")}</Button>
              </Form>
              <Row style={{ padding: "10px 15px", margin: "0" }}>
                <Hidden component={HiddenText} xs sm>
                  <p>{t("Contacts.5")}</p>
                </Hidden>
                <Col
                  style={{ padding: "0" }}
                  component={ColDiv}
                  lg={6}
                  md={6}
                  sx={12}
                >
                  <h3>{t("Contacts.6")}</h3>
                  <p>{t("Contacts.7")}</p>
                </Col>
                <Col
                  style={{ padding: "0" }}
                  component={ColDiv}
                  lg={6}
                  md={6}
                  sx={6}
                  sm={6}
                >
                  <h3>{t("Contacts.9")}</h3>
                  <a href="tel:+99893453455">+99893453455</a>
                  <br />
                  <a href="tel:+99898345345">+99898345345</a>
                </Col>
                <Col
                  style={{ padding: "0" }}
                  component={ColDiv}
                  lg={6}
                  md={6}
                  sx={6}
                  sm={6}
                >
                  <h3>{t("Contacts.8")}</h3>
                  <a href="mailto:revel@mail.ru">revel@mail.ru</a>
                </Col>
                <Col style={{ padding: "0" }} component={ColDiv} lg={6} md={6}>
                  <Hidden xs sm>
                    <h4>{t("Contacts.10")}</h4>
                    <a href="#">
                      <i class="bx bxl-instagram"></i>
                    </a>
                    <a href="#">
                      <i class="bx bxl-telegram"></i>
                    </a>
                    <a href="#">
                      <i class="bx bxl-facebook-square"></i>
                    </a>
                  </Hidden>
                </Col>
              </Row>
            </WrapperLeft>
          </Col>
          <Col lg={6} md={6} sm={12}>
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
          </Col>
        </Row>
      </BigWrapper>
      {/* </WrapperContainer> */}
    </>
  );
}
export default Contacts;
