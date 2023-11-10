import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import variables from '../../common/Variables';

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 60px;
  justify-content: space-between;
  gap: 90px;
  padding: 40px 0;
  `

export const HeaderTitle = styled(NavLink)`
color: ${variables.blackText};
  text-decoration: none;
  font-size: 36px;
  font-weight: 600;
`;