import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';

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
    dispatch(logIn({ email, password }));
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };
  return (
    <div>
      <h1 onSubmit={handleOnSubmit} autoComplete="off">
        Login
      </h1>
      <form>
        <label>
          Email address
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LoginView;
