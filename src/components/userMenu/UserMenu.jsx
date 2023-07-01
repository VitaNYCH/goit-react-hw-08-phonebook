import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { selectUserName } from 'redux/auth/authSelectors';
// import defaultAvatar from './Mouse.png';
import { UserLoggedIn, Greeting, UserButton } from './UserMenu.styled';
import(useDispatch);
export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);
  // const avatar = defaultAvatar;
  return (
    <UserLoggedIn>
      {/* <Img scr={avatar} alt="" width="32" height="32" /> */}
      <Greeting>Welcome back, {name}</Greeting>
      <UserButton type="button" onClick={() => dispatch(logOut())}>
        Log out
      </UserButton>
    </UserLoggedIn>
  );
};

//
