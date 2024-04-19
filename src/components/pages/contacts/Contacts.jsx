import ContactForm from 'components/contact-form/ContactForm';
import ContactList from 'components/contact-list/ContactList';
import Filter from 'components/filter/Filter';
import { fetchContacts } from 'components/redux/contacts/operations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Contacts.module.css';
import { selectContacts } from 'components/redux/contacts/selectors';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.phonebookContainer}>
        <div>
          <ContactForm />
        </div>

        <div>
          <Filter />
        </div>
        <h2 className={styles.contactsTitle}>Contacts</h2>
      </div>
      <hr className={styles.hrContacts} />
      <div className={styles.contactsContainer}>
        {contacts.length === 0 ? (
          <div>
            <p className={styles.sorryMsg}>You don't have any contacts yet.</p>
          </div>
        ) : (
          <>
            <ContactList />
          </>
        )}
      </div>
    </div>
  );
};

export default Contacts;
