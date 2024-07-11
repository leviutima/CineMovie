import React from "react"
import { BotaoStyle, ImgProfile } from "./Botao.styled";
import { LinkStyle } from "../GlobalStyle/GlobalStyle";
import user from '../../assets/images/userNoPhoto.png'

interface propsButton {
    children?: React.ReactNode;
    path:string
}

const Botao = ({children, path}: propsButton) => {
    return(
        <>
        <LinkStyle to={path}>
            <BotaoStyle>
                <ImgProfile src={user}></ImgProfile>
                <span>{children}</span>
            </BotaoStyle>
        </LinkStyle>
        </>
    )
}

export default Botao