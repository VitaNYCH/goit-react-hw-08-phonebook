import styled from '@emotion/styled';

export const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid pink;
  border-radius: 6px;
  padding: 20px;
`;
export const LoginLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

export const LoginInput = styled.input`
  border-radius: 6px;

  margin-bottom: 10px;
  height: 24px;
  width: 240px;
`;

export const LoginButton = styled.button`
  cursor: pointer;
  border-radius: 6px;
  height: 32px;
  width: 180px;
  margin-top: 20px;

  font-size: 18px;
  font-weight: 600;
  border: 1px solid rgb(255, 0, 255);
  background: linear-gradient(90deg, #faf0cd, #fab397);
`;
