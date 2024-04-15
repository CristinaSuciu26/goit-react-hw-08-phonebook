import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import { addContact } from '../redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../redux/contacts/selectors';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoPersonSharp } from 'react-icons/io5';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const handleAddContact = () => {
    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicate) {
      alert(` ${name} is already in contacts!`);
      resetForm();
      return;
    }
    dispatch(addContact({ name: name, number: number }));
    resetForm();
  };
  return (
    <div className={styles.form}>
      <label className={styles.inputs}>
        <div className={styles.contactsIconContainer}>
          <IoPersonSharp className={styles.contactsIconPerson} />
          <input
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces."
            required
            value={name}
            placeholder="Name"
            onChange={handleNameChange}
          />
        </div>
      </label>
      <label className={styles.inputs}>
        <div className={styles.contactsIconContainer}>
          <FaPhoneAlt className={styles.contactsIconPhone} />
          <input
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            placeholder="Number"
            onChange={handleNumberChange}
          />
        </div>
      </label>

      <button className={styles.addContactBtn} onClick={handleAddContact}>
        Add Contact
      </button>
    </div>
  );
};

export default ContactForm;
