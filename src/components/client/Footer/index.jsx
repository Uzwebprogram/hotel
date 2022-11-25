import { GlobalStyle, WrapperContainer} from "../../../App-styled"
import img from "../../../assets/client/header/Logo.svg"
import up from "../../../assets/footer/up.png"
import {Wrapper,Container, Title, Heading,Li, Li1} from "./styled-index"
import { useTranslation } from "react-i18next"


function Footer() {
    const { t, i18n } = useTranslation()
        return(
            <>
             <Wrapper>
                <WrapperContainer>
                    <Container>
                    <Title>
                       
                        <Heading>
                        <img src={img} alt="logo" />
                            <ul>
                                <li>
                                <a href="#">{t("Footer.0")}</a>
                                </li>
                                <li>
                                    <a href="#">{t("Footer.1")}</a>
                                </li>
                                <li>
                                    <a href="#">{t("Footer.2")}</a>
                                </li>
                                <li>
                                    <a href="#">{t("Footer.3")}</a>
                                </li>
                                <li>
                                    <a href="#">{t("Footer.4")}</a>
                                </li>
                                <li>
                                    <a href="#">{t("Footer.5")}</a>
                                </li>
                            </ul>

                            <ul>
                                <li>
                                <a href="#">{t("Footer.6")}</a>
                                </li>
                                <li>
                                    <a href="#">{t("Footer.7")}</a>
                                </li>
                                <li>
                                    <a href="#">{t("Footer.8")}</a>
                                </li>
                                <li>
                                    <a href="#">{t("Footer.9")}</a>
                                </li>
                                <li>
                                    <a href="#">{t("Footer.10")}</a>
                                </li>
                                <li>
                                    <a href="#">{t("Footer.11")}</a>
                                </li>
                            </ul>

                            
                           <ul>
                            <li>
                               <a href="#">{t("Footer.12")}</a>
                            </li>
                            <li>
                                <a href="#">+99893453455</a>
                            </li>
                            <li>
                                <a href="#">+99898345345</a>
                            </li>
                            <li>
                                <a href="#">revel@mail.ru</a>
                            </li>
                            <Li1>
                                <i class='bx bxl-instagram-alt' ></i>
                                <i class='bx bxl-telegram' ></i>
                                <i class='bx bxl-facebook-circle'></i>
                            </Li1>
                            <Li>
                            <img src={up} alt="up" />
                            </Li>
                            </ul>
                            
                        </Heading>

                        
                    </Title>
                    </Container>
                </WrapperContainer>
            </Wrapper>
            </>
        )
}
export default Footer