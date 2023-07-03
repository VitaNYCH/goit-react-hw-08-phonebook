import { useSelector } from 'react-redux';
import AuthNav from '../AuthNav/AuthNav';
import { UserMenu } from '../userMenu/UserMenu';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import Navigation from 'components/Navigation/Navigation';
import { NavHeader } from './AppBar.styled';

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <NavHeader>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </NavHeader>
  );
}
