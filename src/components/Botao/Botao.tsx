import React, { FormEvent } from "react";
import { BotaoStyle } from "./Botao.styled";
import { LinkStyleButton } from "../GlobalStyle/GlobalStyle";

interface propsButton {
    children?: React.ReactNode;
    path?: string;
    width?: string;
    height?: string;
    type?: "button" | "submit" | "reset";
    onClick?: (event: FormEvent<HTMLButtonElement>) => void;

    
}

const Botao: React.FC<propsButton> = ({ children, onClick, path, width, height, type = "button" }) => {
    const button = (
        <BotaoStyle $width={width as string} $height={height as string} as="button" type={type} onClick={onClick}>
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
