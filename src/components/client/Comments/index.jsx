import { WrapperContainer } from "../../../App-styled";
import { Wrapper, Ul, About, Name, Star } from "./styled-index";
import maksim from "../../../assets/client/comments/maksim.png";
import { useTranslation } from "react-i18next";

function Comments() {
  const { t, i18n } = useTranslation();
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
                <p>
                {t("Comments.2")}
                </p>
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
                <p>
                {t("Comments.2")}
                </p>
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
                <p>
                {t("Comments.2")}
                </p>
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
                <p>
                {t("Comments.2")}
                </p>
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
                <p>
                {t("Comments.2")}
                </p>
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
                <p>
                {t("Comments.2")}
                </p>
              </li>
          </Ul>
        </Wrapper>
      </WrapperContainer>
    </>
  );
}
export default Comments;
