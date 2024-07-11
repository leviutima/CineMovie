import { Link } from "react-router-dom";
import styled from "styled-components";

interface propsGlobalCss {
    to: string;
}

export const LinkStyle = styled(Link) <propsGlobalCss>`
    text-decoration: none;
    color: var(--branco);
`