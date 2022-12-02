import { useContext, useRef } from "react";
import Imgnew from "../../../assets/client/home/new.png";
import { CarouselDiv, Buttons, Wrapper, SliderItem, Carousel, H2 } from "./styled-index";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import { NewsContext } from "../../../context/news";

const settings = {
  // dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        // dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function News() {
  const caro = useRef();
  const { t, i18n } = useTranslation()
  const { NewsMap } = useContext(NewsContext)

  const ValLang = () => {
    return window.localStorage.getItem("i18nextLng")
  }

  return (
    <>
      <Wrapper>
        <H2>{t("News.0")}</H2>
        <CarouselDiv>
          <Slider {...settings}>
            {NewsMap.map((elem, index) =>
              <SliderItem key={index}>
                <div>
                  <img src={elem.image_news} alt="photo" />
                  {ValLang() === "uz" ? (<><h3>{elem.news_title_uz}</h3></>) : ValLang() === "ru" ? (<><h3>{elem.news_title_ru}</h3></>) : ValLang() === "en" ? (<><h3>{elem.news_title_en}</h3></>) : null}
                  {ValLang() === "uz" ? (<><p>{elem.news_description_uz}</p></>) : ValLang() === "ru" ? (<><p>{elem.news_description_ru}</p></>) : ValLang() === "en" ? (<><p>{elem.news_description_en}</p></>) : null}
                  <button>{t("News.3")}</button>
                </div>
              </SliderItem>
            )}
          </Slider>
        </CarouselDiv>
      </Wrapper>
    </>
  );
}

export default News;
