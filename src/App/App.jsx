import { useEffect } from 'react';
import { lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/PublicRoute';
import { Layout } from '../components/Layout/Layout';
import { selectIsFetchingCurrentUser } from 'redux/auth/authSelectors';
import { authOperations } from 'redux/auth';

const PhoneBookView = lazy(() => import('views/PhoneBookView/PhoneBookView'));
const RegisterView = lazy(() => import('views/RegisterView/RegisterView'));
const LoginView = lazy(() => import('views/LoginView/LoginView'));
const ContactsView = lazy(() => import('views/ContactsView/ContactsView'));

export function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PhoneBookView />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={RegisterView}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={LoginView} redirectTo="/contacts" />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={ContactsView} redirectTo="/login" />
            }
          />
        </Route>
      </Routes>
    )
  );
}
