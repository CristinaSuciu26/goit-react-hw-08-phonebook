import ContactForm from 'components/contact-form/ContactForm';
import ContactList from 'components/contact-list/ContactList';
import Filter from 'components/filter/Filter';
import { fetchContacts } from 'components/redux/contacts/operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Contacts.module.css';



export const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.phonebookContainer}>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
      <div className={styles.contactsContainer}>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>

   
    </div>
  );
};

export default Contacts;
