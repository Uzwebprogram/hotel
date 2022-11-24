import { useTranslation } from "react-i18next"
import { WrapperContainer } from "../../../App-styled"
import Logo from "../../../assets/client/header/Logo.svg"
import { Wrapper, Nav } from "./styled-index"


function Header() {
    const { t, i18n } = useTranslation()
    const HendelChange = (e) => {
        e.preventDefault()
        const LanVal = e.target.value;
        window.localStorage.setItem("i18nextLng", LanVal)
        window.location.reload()
    }
    const ValLang = () => {
        return window.localStorage.getItem("i18nextLng")
    }
    return (
        <Wrapper>
            <WrapperContainer>
                <Nav>
                    <img src={Logo} alt="logo" />
                    <ul>
                        <li>
                            <a href="#">{t("Navbar.0")}</a>
                        </li>
                        <li>
                            <a href="#">{t("Navbar.1")}</a>
                        </li>
                        <li>
                            <a href="#">{t("Navbar.2")}</a>
                        </li>
                        <li>
                            <a href="#">{t("Navbar.3")}</a>
                        </li>
                        <li>
                            <a href="#">{t("Navbar.4")}</a>
                        </li>
                        <li>
                            <a href="#">+998 99 999 99 99</a>
                            <a href="#">+998 99 999 99 99</a>
                        </li>
                        <li>
                            <select onChange={HendelChange}>
                                {ValLang() === "uz" ? (
                                    <>
                                        <option value="uz">UZ</option>
                                        <option value="ru">RU</option>
                                        <option value="en">EN</option>
                                    </>
                                ) : ValLang() === "ru" ? (
                                    <>
                                        <option value="ru">RU</option>
                                        <option value="uz">UZ</option>
                                        <option value="en">EN</option>
                                    </>
                                ) : ValLang() === "en" ? (
                                    <>
                                        <option value="en">EN</option>
                                        <option value="uz">UZ</option>
                                        <option value="ru">RU</option>
                                    </>
                                ) : (
                                    <>
                                        <option value="uz">UZ</option>
                                        <option value="ru">RU</option>
                                        <option value="en">EN</option>
                                    </>
                                )}
                            </select>
                        </li>
                    </ul>
                    <button><i class='bx bx-menu'></i></button>
                </Nav>
            </WrapperContainer>
        </Wrapper>
    )
}
export default Header;