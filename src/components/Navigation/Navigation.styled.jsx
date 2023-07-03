import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MainNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const MainNavLink = styled(NavLink)`
  margin: 0px;
  margin-left: 28px;
  padding: 5px;
  text-decoration: none;
  font-weight: 800;
  font-size: 24px;
  color: #4b0082;
  text-shadow: 3px 5px 6px #6c9, -6px -7px 6px #d9ffa7;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #8b008b;
  }
`;
