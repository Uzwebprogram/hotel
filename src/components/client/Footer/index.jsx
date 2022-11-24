import img from "../../../assets/client/header/Logo.svg"
import up from "../../../assets/footer/up.png"
import {Wrapper, WrapperContainer, Title, Heading,Li, Li1} from "./styled-index"

function Footer() {
        return(
            <>
             <Wrapper>
                <WrapperContainer>
                    <Title>
                       
                        <Heading>
                        <img src={img} alt="logo" />
                            <ul>
                                <li>
                                <a href="#">Галерея</a>
                                </li>
                                <li>
                                    <a href="#">Об отеле</a>
                                </li>
                                <li>
                                    <a href="#">Номера</a>
                                </li>
                                <li>
                                    <a href="#">Отзывы</a>
                                </li>
                                <li>
                                    <a href="#">Правила и условия</a>
                                </li>
                                <li>
                                    <a href="#">Контакты</a>
                                </li>
                            </ul>

                            <ul>
                                <li>
                                <a href="#">Однокомнатный номер</a>
                                </li>
                                <li>
                                    <a href="#">Однокомнатный люкс</a>
                                </li>
                                <li>
                                    <a href="#">Двухкомнатный номер</a>
                                </li>
                                <li>
                                    <a href="#">Двухкомнатный люкс</a>
                                </li>
                                <li>
                                    <a href="#">Семейный номер</a>
                                </li>
                                <li>
                                    <a href="#">Семейный люкс</a>
                                </li>
                            </ul>

                            
                           <ul>
                            <li>
                               <a href="#">г.Ташкент Чиланзарский район ул.Бунёдкор д99</a>
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
               
                </WrapperContainer>
            </Wrapper>
            </>
        )
}
export default Footer