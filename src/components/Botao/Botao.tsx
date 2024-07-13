import React from "react";
import { BotaoStyle } from "./Botao.styled";
import { LinkStyleButton } from "../GlobalStyle/GlobalStyle";

interface propsButton {
    children?: React.ReactNode;
    path?: string;
    width?: string;
    height?: string;
    type?: "button" | "submit" | "reset";
}

const Botao: React.FC<propsButton> = ({ children, path, width, height, type = "button" }) => {
    const button = (
        <BotaoStyle $width={width as string} $height={height as string} as="button" type={type}>
            <span>{children}</span>
        </BotaoStyle>
    );

    return path ? (
        <LinkStyleButton to={path}>
            {button}
        </LinkStyleButton>
    ) : (
        button
    );
};

export default Botao;
