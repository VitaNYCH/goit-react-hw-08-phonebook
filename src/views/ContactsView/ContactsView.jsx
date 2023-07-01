import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
// import { Container } from 'components/App/App.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import { selectIsLoading } from 'redux/contacts/contactsSelectors';

export function ContactsView() {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(selectIsLoading);

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <>
      <div>
        <Filter />
        {isLoadingContacts && <h1>Loading...</h1>}
      </div>
      <ContactList />
    </>
  );
}
