import { WrapperContainer} from "../../../App-styled"
import {Wrapper,Ul1,Ul} from "./styled-index"
import img1 from "../../../assets/client/OurHotel/img1.png"
import { useTranslation } from "react-i18next"
import { useContext } from "react"
import { HotelOurContext } from "../../../context/our-hotel"
import Img1 from "../../../assets/client/OurHotel/img1.png"

function OurHotel(){
    const { t, i18n } = useTranslation()
    const {HotelOurMap} = useContext(HotelOurContext)

    return(
        <>
            <Wrapper id="numbers">
                <h1>{t("OurHotel.0")}</h1>
                <Ul1>   
                    <Ul>
                        <li>
                          <img src={Img1} alt="image" />
                          <h3>{t("OurHotel.5")}</h3>
                          <p>{t("OurHotel.1")} kv.m</p>
                          <p>{t("OurHotel.2")}</p>
                          <p>{t("OurHotel.3")} 300 000 so'm</p>
                          <button>{t("OurHotel.4")}</button>
                        </li>
                        <li>
                          <img src={Img1} alt="image" />
                          <h3>{t("OurHotel.5")}</h3>
                          <p>{t("OurHotel.1")} kv.m</p>
                          <p>{t("OurHotel.2")}</p>
                          <p>{t("OurHotel.3")} 300 000 so'm</p>
                          <button>{t("OurHotel.4")}</button>
                        </li>
                        <li>
                          <img src={Img1} alt="image" />
                          <h3>{t("OurHotel.5")}</h3>
                          <p>{t("OurHotel.1")} kv.m</p>
                          <p>{t("OurHotel.2")}</p>
                          <p>{t("OurHotel.3")} 300 000 so'm</p>
                          <button>{t("OurHotel.4")}</button>
                        </li>
                        <li>
                          <img src={Img1} alt="image" />
                          <h3>{t("OurHotel.5")}</h3>
                          <p>{t("OurHotel.1")} kv.m</p>
                          <p>{t("OurHotel.2")}</p>
                          <p>{t("OurHotel.3")} 300 000 so'm</p>
                          <button>{t("OurHotel.4")}</button>
                        </li>
                        <li>
                          <img src={Img1} alt="image" />
                          <h3>{t("OurHotel.5")}</h3>
                          <p>{t("OurHotel.1")} kv.m</p>
                          <p>{t("OurHotel.2")}</p>
                          <p>{t("OurHotel.3")} 300 000 so'm</p>
                          <button>{t("OurHotel.4")}</button>
                        </li>   <li>
                          <img src={Img1} alt="image" />
                          <h3>{t("OurHotel.5")}</h3>
                          <p>{t("OurHotel.1")} kv.m</p>
                          <p>{t("OurHotel.2")}</p>
                          <p>{t("OurHotel.3")} 300 000 so'm</p>
                          <button>{t("OurHotel.4")}</button>
                        </li>   
                    </Ul>
                </Ul1>
            </Wrapper>
        </>
    )
}
export default OurHotel