import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import {
  RegisterPage,
  RegisterForm,
  RegisterLabel,
  RegisterInput,
  RegisterButton,
} from './RegisterView.styled';

function RegisterView() {
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
    dispatch(authOperations.register({ name, email, password }));
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <RegisterPage>
      <h1>Register Here</h1>

      <RegisterForm onSubmit={handleOnSubmit} autoComplete="off">
        <RegisterLabel>
          Create Username
          <RegisterInput
            type="name"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Enter username ..."
            required
            onChange={handleChange}
          />
        </RegisterLabel>
        <RegisterLabel>
          Email address
          <RegisterInput
            type="email"
            name="email"
            value={email}
            pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/."
            title="Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix. For example Taras@ukr.ua, adrian@gmail.com, JacobM3rcer@hotmail.com"
            placeholder="Enter your email ..."
            required
            onChange={handleChange}
          />
        </RegisterLabel>

        <RegisterLabel>
          Create password
          <RegisterInput
            type="password"
            name="password"
            value={password}
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
            title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters. For example TgeV23592, 3Greioct."
            placeholder="Enter password ..."
            required
            onChange={handleChange}
          />
        </RegisterLabel>
        <RegisterButton type="submit">Submit</RegisterButton>
      </RegisterForm>
    </RegisterPage>
  );
}

export default RegisterView;
