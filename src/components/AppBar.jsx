import { useSelector } from 'react-redux';
import AuthNav from './AuthNav';
import { UserMenu } from './userMenu/UserMenu';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import Navigation from 'components/Navigation/Navigation';

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
