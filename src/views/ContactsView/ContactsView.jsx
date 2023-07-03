import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Container } from '../../App/App.styled';
import { Section } from '../../components/Section';
import { Form } from '../../components/Form';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import contactsOperations from '../../redux/contacts/contactsOperations';
import * as contactsSelectors from 'redux/contacts/contactsSelectors';

function ContactsView() {
  const dispatch = useDispatch();
  const isLoading = useSelector(contactsSelectors.selectIsLoading);
  const error = useSelector(contactsSelectors.selectError);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList />
      </Section>
    </Container>
  );
}

export default ContactsView;
