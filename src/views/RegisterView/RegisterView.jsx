import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

export function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    dispatch(authOperations.register({ name, email, password }));
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <div>
      <h1 onSubmit={handleOnSubmit} autoComplete="off">
        Register Here
      </h1>
      <form>
        <label>
          Full Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
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
