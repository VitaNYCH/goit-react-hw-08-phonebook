import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import {
  LoginPage,
  LoginForm,
  LoginLabel,
  LoginInput,
  LoginButton,
} from './LoginView.styled';

function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    reset();
    dispatch(authOperations.logIn({ email, password }));
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };
  return (
    <LoginPage>
      <h1>Login</h1>
      <LoginForm onSubmit={handleOnSubmit} autoComplete="off">
        <LoginLabel>
          Email address
          <LoginInput
            type="email"
            name="email"
            value={email}
            pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/."
            title="Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix. For example Taras@ukr.ua, adrian@gmail.com, JacobM3rcer@hotmail.com"
            placeholder="Enter your email ..."
            required
            onChange={handleChange}
          />
        </LoginLabel>

        <LoginLabel>
          Password
          <LoginInput
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
            title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters. For example TgeV23592, 3Greioct."
            placeholder="Enter your password ..."
            required
          />
        </LoginLabel>
        <LoginButton type="submit">Submit</LoginButton>
      </LoginForm>
    </LoginPage>
  );
}

export default LoginView;
