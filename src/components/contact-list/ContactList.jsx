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
    <table className={styles.contactsTable}>
      <tbody>
        {filteredContacts.map(
          contact =>
            contact.name &&
            contact.number && (
              <tr key={nanoid()}>
                <td>{contact.name}</td>
                <td>{contact.number}</td>
                <td>
                  <button
                    onClick={() => handleDelete(contact.id)}
                    className={styles.contactsListBtn}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
        )}
      </tbody>
    </table>
  );
};

export default ContactList;
