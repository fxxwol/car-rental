import styled from "styled-components";
import variables from "../../common/Variables";
import { FiChevronUp } from "react-icons/fi";

export const TopBtn = styled.button`
  height: 60px;
  border-radius: 12px;
  background-color: #3470ffd6;
  width: 60px;
  position: fixed;
  bottom: 50px;
  right: 40px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  transition: all 280ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover,
  &:focus {
    background-color: #0b44cdc2;
  }
`;

export const ScrollArrow = styled(FiChevronUp)`
  width: 50px;
  height: 50px;
  margin: 0;
  color: ${variables.whiteText};
`;
