import { WrapperContainer } from "../../../App-styled"
import { LoginDiv , ImgDiv , Div} from "./styled-index"
import Img1 from "../../../assets/client/login/1.png"

function Login() {
    return (
        <WrapperContainer>
            <LoginDiv>
                <ImgDiv>
                    <img src={Img1} alt="loginPhoto" />
                </ImgDiv>
                <Div>
                    <h2>Connectez -vous</h2>
                    <p>Connectez-vous pour accéder à votre espace</p>
                    <form>
                        <label>Email</label>
                        <input type="email" placeholder="email..." />

                        <label>Password</label>
                        <input type="password..." placeholder="password..." />

                        <button>Enter</button>
                    </form>
                </Div>
            </LoginDiv>
        </WrapperContainer>
    )
}
export default Login