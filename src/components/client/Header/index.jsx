import { useState } from "react";
import { useTranslation } from "react-i18next";
import { WrapperContainer } from "../../../App-styled";
import Logo from "../../../assets/client/header/Logo.svg";
import { Wrapper, Nav, Menu , Number } from "./styled-index";
import Modal from "../modal";

function Header() {
  const [modal, setModal] = useState(false);
  const { t, i18n } = useTranslation();
  const HendelChange = (e) => {
    e.preventDefault();
    const LanVal = e.target.value;
    window.localStorage.setItem("i18nextLng", LanVal);
    window.location.reload();
  };
  const ValLang = () => {
    return window.localStorage.getItem("i18nextLng");
  };
  const HendelClick = () => {
    setModal(true);
  };
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
          <Menu>
            <button onClick={HendelClick}>
              <i class="bx bx-menu"></i>
            </button>
          </Menu>
        </Nav>
        <Number>
          <a href="#">+998 99 999 99 99</a>
          <a href="#">+998 99 999 99 99</a>
        </Number>
        {modal ? (
          <>
            <Modal
              HendelChange={HendelChange}
              ValLang={ValLang}
              set={setModal}
            />
          </>
        ) : null}
      </WrapperContainer>
    </Wrapper>
  );
}
export default Header;
