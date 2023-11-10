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
    transition: background-color 280ms cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover{
        background-color: ${variables.accentColor};
    }
`

export const StyledLink = styled(Button).attrs({ as: 'a' })`
    text-decoration: none;
`