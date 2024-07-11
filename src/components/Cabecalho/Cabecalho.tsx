import logo from '../../assets/images/logoSite-removebg-preview.png'
import Botao from '../Botao/Botao'
import { LinkStyle } from '../GlobalStyle/GlobalStyle'
import Menu from '../Menu/Menu'
import { ContainerNav, HeaderStyle, ImgLogo } from './Cabecalho.styled'

const Cabecalho = () => {
    return(
        <>
        <HeaderStyle>
            <ContainerNav>
                <LinkStyle to='*'>
                    <ImgLogo src={logo}></ImgLogo>
                </LinkStyle>
                <Menu/>
                <div>
                    <Botao path='*'>Perfil</Botao>
                </div>
            </ContainerNav>
        </HeaderStyle>
        </>
    )
}

export default Cabecalho