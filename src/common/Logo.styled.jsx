import { NavLink } from "react-router-dom";
import variables from "./Variables";
import styled from "styled-components";

export const Logo = styled(NavLink)`
  color: ${variables.blackText};
  text-decoration: none;
  font-size: 36px;
  font-weight: 600;
`;