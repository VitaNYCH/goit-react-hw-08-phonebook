import React from 'react';
import contactsOperations from '../../redux/contacts/contactsOperations';
import * as contactsSelectors from 'redux/contacts/contactsSelectors';
import { selectFilter } from 'redux/filter/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

import { NameList, ListItem, DeleteButton } from './ContactList.styled';
export const ContactList = () => {
  const data = useSelector(contactsSelectors.selectContacts);
  const filtered = useSelector(selectFilter);

  const getVisibleContacts = () => {
    const normalizedFilter = filtered.toLowerCase();
    if (!data) {
      return;
    }
    return data.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContact = getVisibleContacts();

  const dispatch = useDispatch();
  return (
    <NameList>
      {data &&
        filteredContact.map(({ id, name, number }) => (
          <ListItem key={id}>
            {name}: {number}
            <DeleteButton
              type="button"
              onClick={() => dispatch(contactsOperations.removeContacts(id))}
            >
              Delete
            </DeleteButton>
          </ListItem>
        ))}
    </NameList>
  );
};
