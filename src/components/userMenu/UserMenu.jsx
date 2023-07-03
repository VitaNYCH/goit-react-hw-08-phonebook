import { useDispatch, useSelector } from 'react-redux';
import { UserLoggedIn, Greeting, UserButton } from './UserMenu.styled';
import { authOperations } from 'redux/auth';
import { selectUserName } from 'redux/auth/authSelectors';
export const UserMenu = () => {
  const user = useSelector(selectUserName);
  const dispatch = useDispatch();
  return (
    <UserLoggedIn>
      <Greeting> ☎️ Welcome back, {user}</Greeting>
      <UserButton
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </UserButton>
    </UserLoggedIn>
  );
};
