import styled from "styled-components";

interface propsButton {
    $width: string;
    $height: string;
}

export const BotaoStyle = styled.div<propsButton> `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    width: ${props => props.$width ||'5vw'};
    height: ${props => props.$height ||'5vh'};
    border-radius: 6px;

    background-color: var(--vermelho);
    color: var(--branco);
    font-weight: 500;

    
`

export const ImgProfile = styled.img`
    width: 2vw;
`