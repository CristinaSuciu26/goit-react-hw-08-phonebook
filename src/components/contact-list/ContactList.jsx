import React from 'react';
import styles from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../redux/contacts/operations';
import { selectFilteredContacts } from 'components/redux/contacts/selectors';
import { nanoid } from 'nanoid';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={styles.contactsList}>
      {filteredContacts.map(
        contact =>
          contact.name &&
          contact.number && (
            <li key={nanoid()}>
              {' '}
              {contact.name}: {contact.number}
              <button
                onClick={() => handleDelete(contact.id)}
                className={styles.contactsListBtn}
              >
                Delete
              </button>
            </li>
          )
      )}
    </ul>
  );
};

export default ContactList;
