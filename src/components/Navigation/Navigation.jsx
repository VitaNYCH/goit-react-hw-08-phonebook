import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { MainNav, MainNavLink } from './Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <MainNav>
      <MainNavLink to="/">Phonebook</MainNavLink>
      {isLoggedIn && <MainNavLink to="/contacts">Contacts</MainNavLink>}
    </MainNav>
  );
};

export default Navigation;
