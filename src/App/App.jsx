// import { Section } from './Section';
// import { Form } from './Form';
// import { Filter } from './Filter';
// import { ContactList } from './ContactList';
import { useEffect } from 'react';
// import { Container } from './App.styled';
import { lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from 'redux/contacts/contactsOperations';
// import * as contactsSelectors from 'redux/contacts/contactsSelectors';
// import AppBar from '../AppBar';
import { Routes, Route } from 'react-router-dom';
import { fetchCurrentUser } from 'redux/auth/authOperations';
// import PrivateRoute from 'components/PrivateRoute';
// import PublicRoute from 'components/PublicRoute';
import { Layout } from '../components/Layout';
import { selectIsFetchingCurrentUser } from 'redux/auth/authSelectors';

const HomeView = lazy(() => import('../views/HomeView'));
const RegisterView = lazy(() => import('../views/RegisterView'));
const LoginView = lazy(() => import('../views/LoginView'));
const ContactsView = lazy(() => import('../views/ContactsView'));

export function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);
  // const dispatch = useDispatch();
  // const isLoading = useSelector(contactsSelectors.selectIsLoading);
  // const error = useSelector(contactsSelectors.selectError);
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/contacts" element={<ContactsView />} />
        </Route>
      </Routes>
    )
  );
}

// <PublicRoute exact path="/">
// <HomeView />
// </PublicRoute>

/* <Suspense fallback={<p>Загружаем...</p>}></Suspense> */

/* <Section title="Phonebook">
<Form />
</Section>
<Section title="Contacts">
<Filter />
{isLoading && !error && <b>Request in progress...</b>}
<ContactList />
</Section> */
