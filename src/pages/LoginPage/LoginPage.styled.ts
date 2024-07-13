import styled from "styled-components";

export const SectionLogin = styled.section `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin: 10%;
`

export const CardLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    width: 50vw;
    height: 50vh;

    background-color: #191919;
    border-radius: 20px;
    color: var(--branco);
    font-size: 22px;
`

export const TextDiv = styled.div `
    color: var(--branco);

    & h2 {
        font-size: 42px;
    }

`

export const CardForm = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

