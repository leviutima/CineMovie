import React from "react"
import { BotaoStyle } from "./Botao.styled";
import { LinkStyleButton } from "../GlobalStyle/GlobalStyle";

interface propsButton {
    children?: React.ReactNode;
    path:string
}

const Botao = ({children, path}: propsButton) => {
    return(
        <>
        <LinkStyleButton to={path}>
            <BotaoStyle>
                <span>{children}</span>
            </BotaoStyle>
        </LinkStyleButton>
        </>
    )
}

export default Botao