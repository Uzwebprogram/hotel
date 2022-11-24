import Logo from "../../../assets/client/header/Logo.png"


function Navbar() {
    return (
        <>
            <Nav>
                <img src={Logo} alt="logo" />
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
                        <a href="#">Контакты</a>
                    </li>
                    <li>
                        <a href="#">+998 99 999 99 99</a>
                        <a href="#">+998 99 999 99 99</a>
                    </li>
                    <li>
                        <select>
                            <option value="ru">uz</option>
                        </select>
                    </li>
                </ul>
            </Nav>
        </>
    );
}

export default Navbar;