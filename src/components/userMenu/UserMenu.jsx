import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import defaultAvatar from './Mouse.png';
import { UserLoggedIn, Greeting, UserButton, Img } from './UserMenu.styled';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const avatar = defaultAvatar;
  return (
    <UserLoggedIn>
      <Img scr={avatar} alt="" width="32" height="32" />
      <Greeting>Welcome back</Greeting>
      <UserButton type="button" onClick={() => dispatch(logOut())}>
        Log out
      </UserButton>
    </UserLoggedIn>
  );
};
