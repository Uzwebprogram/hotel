import axios from "axios";
import { useContext, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { HotelOurContext } from "../../../context/our-hotel";
import {
  Wrapper,
  Card,
  CardDiv,
  CardWrap,
  CaRd,
  Button,
  Count,
  Countdiv,
  DivCard,
  CardDiV,
  CaRD,
  TimeDiv
} from "./styled-index";

function ReservHome() {
  const [count, setCount] = useState(0)
  const [countBaby, setCountBaby] = useState(0)
  const [modal, setModal] = useState(false)
  const checkin = useRef()
  const checkout = useRef()
  const number = useRef()
  const { t, i18n } = useTranslation()

  const HendelChange = (e) => {
    const selectVal = e.target.value
    window.localStorage.setItem("roomVal", selectVal)
  }


  const { HotelOurMap } = useContext(HotelOurContext)
  const Icrement = () => {
    setCount(count => count += 1)
  }
  const Dicrement = () => {
    setCount(count => count -= 1)
  }
  const Icrement2 = () => {
    setCountBaby(count => count += 1)
  }
  const Dicrement2 = () => {
    setCountBaby(count => count -= 1)
  }

  const HendelCheck = async (e) => {
    e.preventDefault()
    try {
      const body = {
        check_in: checkin.current.value,
        departure: checkout.current.value,
        kids: countBaby,
        adults: count,
        phone_number: number.current.value,
        room: window.localStorage.getItem("roomVal")
      }
      const response = await axios.post("http://62.217.179.24:5000/contacts", body)
      if (response.data) {
        setModal(true)

        setTimeout(setCount(false) , 2000)
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Wrapper>
      <h2>{t("Reserv.0")}</h2>
      <CardWrap>
        <CardDiv>
          <Card>
            <TimeDiv>
              <p>{t("Reserv.1")}</p>
              <i className="bx bxs-calendar-edit"></i>
            </TimeDiv>
            <input type="date" placeholder="dd/mm/yy" ref={checkin} />
          </Card>
          <Card>
            <TimeDiv>
              <p>{t("Reserv.2")}</p>
              <i className="bx bxs-calendar-edit"></i>
            </TimeDiv>
            <input type="date" placeholder="dd/mm/yy" ref={checkout} />
          </Card>
          <Card>
            <CardDiV>
              <p>{t("Reserv.3")}</p>
              <i class='bx bxs-user-check' ></i>
            </CardDiV>
            <Count>
              <Countdiv>
                <p>{t("Reserv.7")}</p>
                <div>
                  <button onClick={Dicrement}>-</button>
                  <p>{count}</p>
                  <button onClick={Icrement}>+</button>
                </div>
              </Countdiv>
              <Countdiv>
                <p>{t("Reserv.8")}</p>
                <div>
                  <button onClick={Dicrement2}>-</button>
                  <p>{countBaby}</p>
                  <button onClick={Icrement2}>+</button>
                </div>
              </Countdiv>
            </Count>
          </Card>
        </CardDiv>
        <DivCard>
          <CaRd>
            <div>
              <p>{t("Reserv.4")}</p>
              <i class="bx bxs-hotel"></i>
            </div>
            <select onChange={HendelChange}>
              {/* {HotelOurMap.map((elem, index) =>
                <option key={index} value={elem.title_room}>{elem.title_room}</option>
              )} */}
              <option>Lux</option>
            </select>
          </CaRd>
          <CaRD>
            <p>{t("Reserv.5")}</p>
            <input type="tel" placeholder="+998 (__) ___ __ __" ref={number} />
          </CaRD>
        </DivCard>
      </CardWrap>
      <Button onClick={HendelCheck}>{t("Reserv.6")}</Button>
    </Wrapper>
  );
}
export default ReservHome;