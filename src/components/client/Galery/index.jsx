import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Caroulse  , GalWrapper , Buttons} from "./styled-index";

function Gallery() {
  const carousel = useRef();
  const {t, i18n} = useTranslation()

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
      <Caroulse ref={carousel}>
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
      </Buttons>
    </GalWrapper>
  );
}

export default Gallery;
