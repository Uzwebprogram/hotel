import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Caroulse, GalWrapper, SliderItem, Buttons } from "./styled-index";
import Slider from "react-slick";
import './slider.css'

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

function Gallery() {
  const carousel = useRef();
  const { t, i18n } = useTranslation();

  const HendelLeft = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };
  const HendelRight = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  return (
    <GalWrapper>
      <h2>{t("Galery.0")}</h2>
      {/* <Caroulse ref={carousel}>
        <img src="https://picsum.photos/650" alt="" />
        <img src="https://picsum.photos/650" alt="" />
        <img src="https://picsum.photos/650" alt="" />
        <img src="https://picsum.photos/650" alt="" />
        <img src="https://picsum.photos/650" alt="" />
        <img src="https://picsum.photos/650" alt="" />
        <img src="https://picsum.photos/650" alt="" />
        <img src="https://picsum.photos/650" alt="" />
        <img src="https://picsum.photos/650" alt="" />
        <img src="https://picsum.photos/650" alt="" />
        <img src="https://picsum.photos/650" alt="" />
        <img src="https://picsum.photos/650" alt="" />
        <img src="https://picsum.photos/650" alt="" />
        <img src="https://picsum.photos/650" alt="" />
        <img src="https://picsum.photos/650" alt="" />
        <img src="https://picsum.photos/650" alt="" />
        <img src="https://picsum.photos/650" alt="" />
        <img src="https://picsum.photos/650" alt="" />
        <img src="https://picsum.photos/650" alt="" />
        <img src="https://picsum.photos/650" alt="" />
        <img src="https://picsum.photos/650" alt="" />
        <img src="https://picsum.photos/650" alt="" />
        <img src="https://picsum.photos/650" alt="" />
        <img src="https://picsum.photos/650" alt="" />
        <img src="https://picsum.photos/650" alt="" />
        <img src="https://picsum.photos/650" alt="" />
        <img src="https://picsum.photos/650" alt="" />
      </Caroulse>
      <Buttons>
        <button onClick={HendelRight}><i class='bx bx-left-arrow-alt' ></i></button>
        <button onClick={HendelLeft}><i className='bx bx-right-arrow-alt' ></i></button>
      </Buttons> */}
      <Slider {...settings}>
        <SliderItem>
          <img src="https://picsum.photos/550/380" alt="" />
        </SliderItem>
        <SliderItem>
          <img src="https://picsum.photos/550/380" alt="" />
        </SliderItem>
        <SliderItem>
          <img src="https://picsum.photos/550/380" alt="" />
        </SliderItem>
        <SliderItem>
          <img src="https://picsum.photos/550/380" alt="" />
        </SliderItem>
        <SliderItem>
          <img src="https://picsum.photos/550/380" alt="" />
        </SliderItem>
        <SliderItem>
          <img src="https://picsum.photos/550/380" alt="" />
        </SliderItem>
        <SliderItem>
          <img src="https://picsum.photos/550/380" alt="" />
        </SliderItem>
        <SliderItem>
          <img src="https://picsum.photos/550/380" alt="" />
        </SliderItem>
      </Slider>
    </GalWrapper>
  );
}

export default Gallery;
