import { WrapperContainer } from "../../../App-styled"
import Navbar from "../navbar"
import { Wrapper } from "./styled-index"


function Header() {
    return (
        <Wrapper>
            <WrapperContainer>
                <Navbar/>
            </WrapperContainer>
        </Wrapper>
    )
}
export default Header;