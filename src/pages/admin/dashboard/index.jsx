import { WrapperContainer } from "../../../App-styled"
import { Dashboar, Ul ,UL } from "./styled-index"
import Logo from "../../../assets/client/header/Logo.svg"

function Dashboard() {
    if (!window.localStorage.getItem("authToken")) {
        window.location = "/admin"
    }
    return (
            <WrapperContainer>
                <Dashboar>
                    <ul>
                        <li>
                            <UL>
                                <li>
                                    <img src={Logo} alt="logo" />
                                </li>
                            </UL>
                        </li>
                        <li>
                            <Ul>
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
                            </Ul>
                        </li>
                    </ul>
                </Dashboar>
            </WrapperContainer>
    )
}
export default Dashboard;