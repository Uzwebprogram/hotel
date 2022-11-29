import { WrapperContainer } from "../../../App-styled";
import {
  Wrapper,
  Ul,
  About,
  Name,
  Star,
  Carusel,
  Buttons,
  Infor,
  User,
  ULWrapper,
  LIItem,
  Item,
  HiddenDiv
} from "./styled-index";
import '../Galery/slider.css'
import Slider from "react-slick";
import { SliderItem } from "../news/styled-index";
import maksim from "../../../assets/client/comments/maksim.png";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { Row, Col, Hidden } from "react-grid-system";

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
        slidesToScroll:2,
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

function Comments() {
  const { t, i18n } = useTranslation();

  const carousel = useRef();
  const commentArr = [1, 2, 3, 4, 5, 6];

  const HendelLeft = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };
  const HendelRight = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };
  return (
    <>
      {/* <WrapperContainer> */}
        <Wrapper>
          <h1>{t("Comments.0")}</h1>

          {/* <Hidden sm> */}
            <Row component={ULWrapper}>
              {commentArr.map(() => (
                <Col component={LIItem} lg={4} md={6} sx={6} sm={12}>
                  <Item>
                    <About>
                      <Name>
                        <img src={maksim} alt="" />
                        <h3>{t("Comments.1")}</h3>
                        <p>26.09.2022</p>
                      </Name>
                    </About>
                    <Star>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                      <i class="bx bxs-star"></i>
                    </Star>
                    <p>{t("Comments.2")}</p>
                  </Item>
                </Col>
              ))}
            </Row>
          {/* </Hidden> */}
          <Hidden component={HiddenDiv} xxxl xl lg md>
            <Slider {...settings}>
              <SliderItem>
                <Item>
                  <About>
                    <Name>
                      <img src={maksim} alt="" />
                      <h3>{t("Comments.1")}</h3>
                      <p>26.09.2022</p>
                    </Name>
                  </About>
                  <Star>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                  </Star>
                  <p>{t("Comments.2")}</p>
                </Item>
              </SliderItem>
              <SliderItem>
                <Item>
                  <About>
                    <Name>
                      <img src={maksim} alt="" />
                      <h3>{t("Comments.1")}</h3>
                      <p>26.09.2022</p>
                    </Name>
                  </About>
                  <Star>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                  </Star>
                  <p>{t("Comments.2")}</p>
                </Item>
              </SliderItem>
              <SliderItem>
                <Item>
                  <About>
                    <Name>
                      <img src={maksim} alt="" />
                      <h3>{t("Comments.1")}</h3>
                      <p>26.09.2022</p>
                    </Name>
                  </About>
                  <Star>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                  </Star>
                  <p>{t("Comments.2")}</p>
                </Item>
              </SliderItem>
              <SliderItem>
                <Item>
                  <About>
                    <Name>
                      <img src={maksim} alt="" />
                      <h3>{t("Comments.1")}</h3>
                      <p>26.09.2022</p>
                    </Name>
                  </About>
                  <Star>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                  </Star>
                  <p>{t("Comments.2")}</p>
                </Item>
              </SliderItem>
              <SliderItem>
                <Item>
                  <About>
                    <Name>
                      <img src={maksim} alt="" />
                      <h3>{t("Comments.1")}</h3>
                      <p>26.09.2022</p>
                    </Name>
                  </About>
                  <Star>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                  </Star>
                  <p>{t("Comments.2")}</p>
                </Item>
              </SliderItem>
              <SliderItem>
                <Item>
                  <About>
                    <Name>
                      <img src={maksim} alt="" />
                      <h3>{t("Comments.1")}</h3>
                      <p>26.09.2022</p>
                    </Name>
                  </About>
                  <Star>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                  </Star>
                  <p>{t("Comments.2")}</p>
                </Item>
              </SliderItem>
            </Slider>
          </Hidden>
        </Wrapper>
      {/* </WrapperContainer> */}
    </>
  );
}
export default Comments;
