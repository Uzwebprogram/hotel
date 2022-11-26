import { useRef } from "react";
import Imgnew from "../../../assets/client/home/new.png";
import { CarouselDiv, Buttons, Carousel, H2 } from "./styled-index";

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
      <H2>Новости</H2>
      <CarouselDiv>
        <Buttons>
          <button onClick={HendelRight}>
            <i class="bx bx-left-arrow-alt"></i>
          </button>
          <button onClick={HendelLeft}>
            <i className="bx bx-right-arrow-alt"></i>
          </button>
        </Buttons>
        <Carousel ref={caro}>
          <div>
            <img src={Imgnew} alt="photo" />
            <h3>В Ташкенте открылся роскошный отель</h3>
            <p>
              Правила проживания в отеле являются общими и могут меняться в
              зависимости от выбранного типа размещения... Подробнее
            </p>

            <button>Читать подробнее</button>
          </div>
          <div>
            <img src={Imgnew} alt="photo" />
            <h3>В Ташкенте открылся роскошный отель</h3>
            <p>
              Правила проживания в отеле являются общими и могут меняться в
              зависимости от выбранного типа размещения... Подробнее
            </p>

            <button>Читать подробнее</button>
          </div>
          <div>
            <img src={Imgnew} alt="photo" />
            <h3>В Ташкенте открылся роскошный отель</h3>
            <p>
              Правила проживания в отеле являются общими и могут меняться в
              зависимости от выбранного типа размещения... Подробнее
            </p>

            <button>Читать подробнее</button>
          </div>
          <div>
            <img src={Imgnew} alt="photo" />
            <h3>В Ташкенте открылся роскошный отель</h3>
            <p>
              Правила проживания в отеле являются общими и могут меняться в
              зависимости от выбранного типа размещения... Подробнее
            </p>

            <button>Читать подробнее</button>
          </div>
          <div>
            <img src={Imgnew} alt="photo" />
            <h3>В Ташкенте открылся роскошный отель</h3>
            <p>
              Правила проживания в отеле являются общими и могут меняться в
              зависимости от выбранного типа размещения... Подробнее
            </p>

            <button>Читать подробнее</button>
          </div>
          <div>
            <img src={Imgnew} alt="photo" />
            <h3>В Ташкенте открылся роскошный отель</h3>
            <p>
              Правила проживания в отеле являются общими и могут меняться в
              зависимости от выбранного типа размещения... Подробнее
            </p>

            <button>Читать подробнее</button>
          </div>
        </Carousel>
      </CarouselDiv>
    </>
  );
}

export default News;
