import React from "react"
import { BotaoStyle } from "./Botao.styled";
import { LinkStyleButton } from "../GlobalStyle/GlobalStyle";

interface propsButton {
    children?: React.ReactNode;
    path:string;
    width?: string;
    height?: string;
}

const Botao:  React.FC<propsButton>  = ({children, path, width, height}) => {
    return(
        <>
        <LinkStyleButton to={path}>
            <BotaoStyle $width={width as string} $height={height as string}> 
                <span>{children}</span>
            </BotaoStyle>
        </LinkStyleButton>
        </>
    )
}

export default Botao