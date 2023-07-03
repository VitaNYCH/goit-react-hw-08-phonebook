import styled from '@emotion/styled';
export const UserLoggedIn = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Greeting = styled.span`
  margin-left: 10px;
  font-weight: 600;
  font-size: 18px;
`;

export const UserButton = styled.button`
  margin-left: 20px;
  width: 80px;
  height: 40px;

  font-weight: 600;
  border: 1px solid pink;
  border-radius: 6px;
  color: #8b008b;
  background: linear-gradient(90deg, #faf0cd, #fab397);

  :hover,
  :focus {
    color: #ff00ff;
  }
`;
