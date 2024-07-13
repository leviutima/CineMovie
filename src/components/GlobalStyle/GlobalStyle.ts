import { Link } from "react-router-dom";
import styled from "styled-components";

interface propsGlobalCss {
    to: string;
}

export const LinkStyle = styled(Link)<propsGlobalCss> `
    text-decoration: none;
    color: var(--branco);
`

export const LinkStyleButton = styled(Link) <propsGlobalCss>`
    text-decoration: none;
    color: var(--branco);
    & :hover {
        background-color: #750E21;
    }
`

export const InputStyle = styled.input `
    width: 20vw;
    height: 4vh;
`

export const InputContainer = styled.label`
    display: flex;
    flex-direction: column;
`

export const FormContainer = styled.form `
    display: grid;
    color: var(--branco);
    gap: 19px;
`