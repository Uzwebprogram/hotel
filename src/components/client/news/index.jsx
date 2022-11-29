import { useRef } from "react";
import Imgnew from "../../../assets/client/home/new.png";
import { CarouselDiv, Buttons, Wrapper, SliderItem, Carousel, H2 } from "./styled-index";
import Slider from "react-slick";

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
        <H2>Новости</H2>
        <CarouselDiv>
          <Slider {...settings}>
            <SliderItem>
              <div>
                <img src={Imgnew} alt="photo" />
                <h3>В Ташкенте открылся роскошный отель</h3>
                <p>
                  Правила проживания в отеле являются общими и могут меняться в
                  зависимости от выбранного типа размещения... Подробнее
                </p>

                <button>Читать подробнее</button>
              </div>
            </SliderItem>
            <SliderItem>
              <div>
                <img src={Imgnew} alt="photo" />
                <h3>В Ташкенте открылся роскошный отель</h3>
                <p>
                  Правила проживания в отеле являются общими и могут меняться в
                  зависимости от выбранного типа размещения... Подробнее
                </p>

                <button>Читать подробнее</button>
              </div>
            </SliderItem>
            <SliderItem>
              <div>
                <img src={Imgnew} alt="photo" />
                <h3>В Ташкенте открылся роскошный отель</h3>
                <p>
                  Правила проживания в отеле являются общими и могут меняться в
                  зависимости от выбранного типа размещения... Подробнее
                </p>

                <button>Читать подробнее</button>
              </div>
            </SliderItem>
            <SliderItem>
              <div>
                <img src={Imgnew} alt="photo" />
                <h3>В Ташкенте открылся роскошный отель</h3>
                <p>
                  Правила проживания в отеле являются общими и могут меняться в
                  зависимости от выбранного типа размещения... Подробнее
                </p>

                <button>Читать подробнее</button>
              </div>
            </SliderItem>
            <SliderItem>
              <div>
                <img src={Imgnew} alt="photo" />
                <h3>В Ташкенте открылся роскошный отель</h3>
                <p>
                  Правила проживания в отеле являются общими и могут меняться в
                  зависимости от выбранного типа размещения... Подробнее
                </p>

                <button>Читать подробнее</button>
              </div>
            </SliderItem>
            <SliderItem>
              <div>
                <img src={Imgnew} alt="photo" />
                <h3>В Ташкенте открылся роскошный отель</h3>
                <p>
                  Правила проживания в отеле являются общими и могут меняться в
                  зависимости от выбранного типа размещения... Подробнее
                </p>

                <button>Читать подробнее</button>
              </div>
            </SliderItem>
            <SliderItem>
              <div>
                <img src={Imgnew} alt="photo" />
                <h3>В Ташкенте открылся роскошный отель</h3>
                <p>
                  Правила проживания в отеле являются общими и могут меняться в
                  зависимости от выбранного типа размещения... Подробнее
                </p>

                <button>Читать подробнее</button>
              </div>
            </SliderItem>
            <SliderItem>
              <div>
                <img src={Imgnew} alt="photo" />
                <h3>В Ташкенте открылся роскошный отель</h3>
                <p>
                  Правила проживания в отеле являются общими и могут меняться в
                  зависимости от выбранного типа размещения... Подробнее
                </p>

                <button>Читать подробнее</button>
              </div>
            </SliderItem>
          </Slider>
        </CarouselDiv>
      </Wrapper>
    </>
  );
}

export default News;
