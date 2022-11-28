import { WrapperContainer} from "../../../App-styled"
import {Wrapper,Ul1,Ul} from "./styled-index"
import img1 from "../../../assets/client/OurHotel/img1.png"
import { useTranslation } from "react-i18next"

function OurHotel(){
    const { t, i18n } = useTranslation()
    return(
        <>
        {/* <WrapperContainer> */}
            <Wrapper>
                <h1>{t("OurHotel.0")}</h1>
                <Ul1>
                    <Ul>
                        <li>
                          <img src={img1} alt="room" />
                          <h3>{t("OurHotel.1")}</h3>
                          <p>{t("OurHotel.2")}</p>
                          <p>{t("OurHotel.3")}</p>
                          <p>{t("OurHotel.4")}</p>
                          <button>{t("OurHotel.5")}</button>
                        </li>
                        <li>
                          <img src={img1} alt="room" />
                          <h3>{t("OurHotel.6")}</h3>
                          <p>{t("OurHotel.7")}</p>
                          <p>{t("OurHotel.3")}</p>
                          <p>{t("OurHotel.8")}</p>
                          <button>{t("OurHotel.5")}</button>
                        </li>
                        <li>
                          <img src={img1} alt="room" />
                          <h3>{t("OurHotel.9")}</h3>
                          <p>{t("OurHotel.10")}</p>
                          <p>{t("OurHotel.11")}</p>
                          <p>{t("OurHotel.12")}</p>
                          <button>{t("OurHotel.5")}</button>
                        </li>
                        <li>
                          <img src={img1} alt="room" />
                          <h3>{t("OurHotel.13")}</h3>
                          <p>{t("OurHotel.14")}</p>
                          <p>{t("OurHotel.11")}</p>
                          <p>{t("OurHotel.15")}</p>
                          <button>{t("OurHotel.5")}</button>
                        </li>
                        <li>
                          <img src={img1} alt="room" />
                          <h3>{t("OurHotel.16")}</h3>
                          <p>{t("OurHotel.17")}</p>
                          <p>{t("OurHotel.18")}</p>
                          <p>{t("OurHotel.19")}</p>
                          <button>{t("OurHotel.5")}</button>
                        </li>
                        <li>
                          <img src={img1} alt="room" />
                          <h3>{t("OurHotel.20")}</h3>
                          <p>{t("OurHotel.21")}</p>
                          <p>{t("OurHotel.18")}</p>
                          <p>{t("OurHotel.22")}</p>
                          <button>{t("OurHotel.5")}</button>
                        </li>
                        
                    </Ul>
                </Ul1>
            </Wrapper>
        {/* </WrapperContainer> */}
        </>
    )
}
export default OurHotel