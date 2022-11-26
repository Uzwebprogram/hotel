import { GlobalStyle, WrapperContainer } from "../../../App-styled";
import { Wrapper, Bigdiv, First, Second, Small, Ul } from "./styled-index";
import studio2 from "../../../assets/client/AboutHotel/studio2.png";
import clean from "../../../assets/client/AboutHotel/clean.png";
import bestprice from "../../../assets/client/AboutHotel/bestprice.png";
import location from "../../../assets/client/AboutHotel/location.png";
import { useTranslation } from "react-i18next";

function AboutHotel() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Wrapper>
        <WrapperContainer>
          <h3>Об отеле</h3>
          <Bigdiv>
            <First>
              <p>
                Рады приветствовать вас в отеле "Узбекистан", который славится
                своим восточным гостеприимством и находится в самом центре
                Ташкента! К вашим услугам тренажерный зал, сауна, а также уютные
                номера с кондиционером и телевизором с плоским экраном - все для
                вашего комфортного проживания. В отеле "Узбекистан" можно
                остановиться в классически меблированных номерах и люксах с
                мини-баром. Интерьеры оформлены при помощи темной деревянной
                мебели и элегантных тканей. Блюда европейской и местной кухни
                подаются в элегантном ресторане с роялем. В кафе-бар "Вена"
                представлен широкий выбор горячих и холодных напитков. Также на
                территории работает снэк-бар. Совсем рядом с отелем находится
                множество достопримечательностей, магазинов и кафе. Станция
                метро «Амир Темур» находится в 5 минутах пешей доступности.
                Сотрудники круглосуточной стойки регистрации могут организовать
                трансфер до аэропорта Ташкента, который расположен в 10 км.
                Добро пожаловать в отель "Узбекистан"!
              </p>
            </First>
            <Second>
              <img src={studio2} alt="studio2" />
            </Second>
          </Bigdiv>
          <Small>
            <h2>Почему именно мы?</h2>
            <Ul>
              <ul>
                <li>
                  <img src={clean} alt="clean" />
                  <p>Чистота и безопасность</p>
                </li>
                <li>
                  <img src={bestprice} alt="bestprice" />
                  <p>Доступные цены</p>
                </li>
                <li>
                  <img src={location} alt="location" />
                  <p>Удобное местоположение</p>
                </li>
              </ul>
            </Ul>
          </Small>
        </WrapperContainer>
      </Wrapper>
    </>
  );
}
export default AboutHotel;
