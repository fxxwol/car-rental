import styled from "styled-components";
import variables from "./Variables";

export const Button = styled.button`
    background-color: ${variables.blueText};
    color: ${variables.whiteText};
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    line-height: 142.857%;
    width: ${(props) => (props.width || 136)}px;
    height: ${(props) => (props.height || 48)}px;
`

export const StyledLink = styled(Button).attrs({ as: 'a' })`
    text-decoration: none;
`