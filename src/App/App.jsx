import { useEffect } from 'react';
import { lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { fetchCurrentUser } from 'redux/auth/authOperations';
// import PrivateRoute from 'components/PrivateRoute';
// import PublicRoute from 'components/PublicRoute';
import { Layout } from '../components/Layout';
import { selectIsFetchingCurrentUser } from 'redux/auth/authSelectors';

const PhoneBookView = lazy(() => import('views/PhoneBookView/PhoneBookView'));
const RegisterView = lazy(() => import('views/RegisterView/RegisterView'));
const LoginView = lazy(() => import('views/LoginView/LoginView'));
const ContactsView = lazy(() => import('views/ContactsView/ContactsView'));

export function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PhoneBookView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/contacts" element={<ContactsView />} />
        </Route>
      </Routes>
    )
  );
}
