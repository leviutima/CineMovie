import { Link } from "react-router-dom";
import styled from "styled-components";

interface propsGlobalCss {
    to: string;
}

export const SectionContainer = styled.section `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 22px;

    flex-direction: column;
    margin-top: 5%;
`

export const LinkStyle = styled(Link)<propsGlobalCss> `
    text-decoration: none;
    color: var(--branco);
    cursor: pointer;
`

export const LinkStyleButton = styled(Link) <propsGlobalCss>`
    text-decoration: none;
    color: var(--branco);
    & :hover {
        background-color: #750E21;
    }
`

export const InputStyle = styled.input `
    width: 25vw;
    height: 6vh;
    padding-left: 10px;

    border-radius: 10px;
    border: none;
`

export const InputContainer = styled.label`
    display: flex;
    flex-direction: column;
`

export const FormContainer = styled.div `
    display: grid;
    color: var(--branco);
    gap: 19px;
    
`

export const ImgContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    
`

export const ContainerForm = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 22px;
`

export const SectionMain = styled.section `
    display: flex;
    margin-left: 10%;

    & h2 {
        color: var(--branco);
        font-size: 42px;
        font-weight: 500;
    }
`

export const DivColumn = styled.div `

`