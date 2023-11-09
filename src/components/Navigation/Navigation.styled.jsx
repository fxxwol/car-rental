import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

export const Navigations = styled.nav`
  display: flex;
  gap: 30px;
  justify-content: center;

`;
export const NavigationLink = styled(NavLink)`
  color: #ffffff;

  font-size: 18px;
  transition: all 250ms ease-in-out 0ms;
  text-decoration: none;

  
  &:hover {
    transform: scale(1.1);
  }
`;