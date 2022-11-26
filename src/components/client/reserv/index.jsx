import { useState } from "react";
import { useTranslation } from "react-i18next";
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
    const [count , setCount] = useState(0)
    const [countBaby , setCountBaby] = useState(0)
    const {t , i18n} = useTranslation()

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
            <input type="date" placeholder="dd/mm/yy" />
          </Card>
          <Card>
            <TimeDiv>
              <p>{t("Reserv.2")}</p>
              <i className="bx bxs-calendar-edit"></i>
            </TimeDiv>
            <input type="date" placeholder="dd/mm/yy" />
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
                  <button onClick={Icrement}>+</button>
                  <p>{count}</p>
                  <button onClick={Dicrement}>-</button>
                </div>
              </Countdiv>
              <Countdiv>
                <p>{t("Reserv.8")}</p>
                <div>
                  <button onClick={Icrement2}>+</button>
                  <p>{countBaby}</p>
                  <button onClick={Dicrement2}>-</button>
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
            <select>
              <option>select</option>
            </select>
          </CaRd>
          <CaRD>
            <p>{t("Reserv.5")}</p>
            <input type="tel" placeholder="+998 (__) ___ __ __" />
          </CaRD>
        </DivCard>
      </CardWrap>
      <Button>{t("Reserv.6")}</Button>
    </Wrapper>
  );
}

export default ReservHome;
