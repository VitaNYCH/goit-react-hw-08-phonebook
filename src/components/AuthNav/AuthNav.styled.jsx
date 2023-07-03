import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthNavLink = styled(NavLink)`
  margin: 0;
  margin-left: 28px;
  padding: 10px;
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  border: 1px solid rgb(255, 0, 255);
  border-radius: 6px;
  :last-child {
    margin-right: 28px;
  }

  color: #8b008b;
  background: linear-gradient(90deg, #faf0cd, #fab397);

  :hover,
  :focus {
    color: #ff00ff;
  }
`;
