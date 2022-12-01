import { useRef } from "react";
import Imgnew from "../../../assets/client/home/new.png";
import { CarouselDiv, Buttons, Wrapper, SliderItem, Carousel, H2 } from "./styled-index";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

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

  const HendelLeft = (e) => {
    e.preventDefault();
    caro.current.scrollLeft += caro.current.offsetWidth;
  };
  const HendelRight = (e) => {
    e.preventDefault();
    caro.current.scrollLeft -= caro.current.offsetWidth;
  };

  return (
    <>
      <Wrapper>
        <H2>{t("News.0")}</H2>
        <CarouselDiv>
          <Slider {...settings}>
            <SliderItem>
              <div>
                <img src={Imgnew} alt="photo" />
                <h3>{t("News.1")}</h3>
                <p>
                  {t("News.2")}
                </p>

                <button>{t("News.3")}</button>
              </div>
            </SliderItem>
            <SliderItem>
              <div>
                <img src={Imgnew} alt="photo" />
                <h3>{t("News.1")}</h3>
                <p>
                  {t("News.2")}
                </p>

                <button>{t("News.3")}</button>
              </div>
            </SliderItem>
            <SliderItem>
              <div>
                <img src={Imgnew} alt="photo" />
                <h3>{t("News.1")}</h3>
                <p>
                  {t("News.2")}
                </p>

                <button>{t("News.3")}</button>
              </div>
            </SliderItem>
            <SliderItem>
              <div>
                <img src={Imgnew} alt="photo" />
                <h3>{t("News.1")}</h3>
                <p>
                  {t("News.2")}
                </p>

                <button>{t("News.3")}</button>
              </div>
            </SliderItem>
            <SliderItem>
              <div>
                <img src={Imgnew} alt="photo" />
                <h3>{t("News.1")}</h3>
                <p>
                  {t("News.2")}
                </p>

                <button>{t("News.3")}</button>
              </div>
            </SliderItem>
            <SliderItem>
              <div>
                <img src={Imgnew} alt="photo" />
                <h3>{t("News.1")}</h3>
                <p>
                  {t("News.2")}
                </p>

                <button>{t("News.3")}</button>
              </div>
            </SliderItem>
            <SliderItem>
              <div>
                <img src={Imgnew} alt="photo" />
                <h3>{t("News.1")}</h3>
                <p>
                  {t("News.2")}
                </p>

                <button>{t("News.3")}</button>
              </div>
            </SliderItem>
            <SliderItem>
              <div>
                <img src={Imgnew} alt="photo" />
                <h3>{t("News.1")}</h3>
                <p>
                  {t("News.2")}
                </p>

                <button>{t("News.3")}</button>
              </div>
            </SliderItem>
          </Slider>
        </CarouselDiv>
      </Wrapper>
    </>
  );
}

export default News;
