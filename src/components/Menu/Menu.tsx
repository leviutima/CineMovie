import { LinkStyle } from "../GlobalStyle/GlobalStyle"
import { MenuContainer } from "./Menu.styled"


const Menu = () => {
    return(
        <>
        <MenuContainer>
        <LinkStyle to="*">
            <li>Filmes</li>
        </LinkStyle>
        <LinkStyle to="*">
            <li>Séries</li>
        </LinkStyle>
        <LinkStyle to="*">
            <li>Documentários</li>
        </LinkStyle>
        </MenuContainer>
        </>
    )
}

export default Menu