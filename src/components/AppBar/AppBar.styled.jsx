import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: #0f3eac;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  height: 60px;
`;

export const NavDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 90px;
`;
export const HeaderTitle = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;
  font-size: 36px;
  font-weight: 600;
`;