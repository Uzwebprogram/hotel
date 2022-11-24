import { useTranslation } from "react-i18next";
import { Modals } from "./styled-index"


function Modal({HendelChange , ValLang , set}) {
    const { t, i18n } = useTranslation()
    const HendelClose = () => {
        set(false)
    }
    return (
        <Modals>
            <p onClick={HendelClose}>X</p>
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
        </Modals>
    );
}

export default Modal;