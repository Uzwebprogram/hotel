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
} from "./styled-index";
import maksim from "../../../assets/client/comments/maksim.png";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

function Comments() {
  const { t, i18n } = useTranslation();

  const carousel = useRef();

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
      <WrapperContainer>
        <Wrapper>
          <h1>{t("Comments.0")}</h1>
          <Ul>
            <li>
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
            </li>
            <li>
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
            </li>
            <li>
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
            </li>
            <li>
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
            </li>
            <li>
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
            </li>
            <li>
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
            </li>
          </Ul>
        </Wrapper>
        <Buttons>
          <button onClick={HendelRight}>
            <i class="bx bx-left-arrow-alt"></i>
          </button>
          <button onClick={HendelLeft}>
            <i className="bx bx-right-arrow-alt"></i>
          </button>
        </Buttons>
        <Carusel ref={carousel}>
          <div>
            <Infor>
              <User>
                <img src={maksim} alt="" />
                <h3>{t("Comments.1")}</h3>
              </User>
              <p>26.09.2022</p>
            </Infor>
            <Star>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
            </Star>
            <p>{t("Comments.2")}</p>
          </div>
          <div>
            <Infor>
              <User>
                <img src={maksim} alt="" />
                <h3>{t("Comments.1")}</h3>
              </User>
              <p>26.09.2022</p>
            </Infor>
            <Star>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
            </Star>
            <p>{t("Comments.2")}</p>
          </div>
          <div>
            <Infor>
              <User>
                <img src={maksim} alt="" />
                <h3>{t("Comments.1")}</h3>
              </User>
              <p>26.09.2022</p>
            </Infor>
            <Star>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
            </Star>
            <p>{t("Comments.2")}</p>
          </div>
          <div>
            <Infor>
              <User>
                <img src={maksim} alt="" />
                <h3>{t("Comments.1")}</h3>
              </User>
              <p>26.09.2022</p>
            </Infor>
            <Star>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
            </Star>
            <p>{t("Comments.2")}</p>
          </div>
          <div>
            <Infor>
              <User>
                <img src={maksim} alt="" />
                <h3>{t("Comments.1")}</h3>
              </User>
              <p>26.09.2022</p>
            </Infor>
            <Star>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
            </Star>
            <p>{t("Comments.2")}</p>
          </div>
          <div>
            <Infor>
              <User>
                <img src={maksim} alt="" />
                <h3>{t("Comments.1")}</h3>
              </User>
              <p>26.09.2022</p>
            </Infor>
            <Star>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
            </Star>
            <p>{t("Comments.2")}</p>
          </div>
          <div>
            <Infor>
              <User>
                <img src={maksim} alt="" />
                <h3>{t("Comments.1")}</h3>
              </User>
              <p>26.09.2022</p>
            </Infor>
            <Star>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
            </Star>
            <p>{t("Comments.2")}</p>
          </div>
        </Carusel>
      </WrapperContainer>
    </>
  );
}
export default Comments;
