import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import { addContact } from '../redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../redux/contacts/selectors';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoPersonSharp } from 'react-icons/io5';
import Modal from 'react-modal';
import { GrAdd } from 'react-icons/gr';
Modal.setAppElement('#root');

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const modalStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
      backgroundColor: '#98391C',
      paddingTop: '95px',
      paddingBottom: '95px',
      // paddingRight: '35px',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '6px',
    },
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    const inputNumber = event.target.value;
    if (isNaN(inputNumber)) {
      alert('Please enter only numbers in this field');
      resetForm();
      return;
    }

    setNumber(inputNumber);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    resetForm();
  };

  const handleSubmit = () => {
    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${name} is already in contacts!`);
      resetForm();
      return;
    }

    dispatch(addContact({ name: name, number: number }));
    resetForm();
    closeModal();
  };

  return (
    <div>
      <div className={styles.btnContainer}>
        <GrAdd className={styles.addIcon} style={{ color: 'white' }} />
        <button className={styles.addContactBtn} onClick={openModal}>
          Add Contact
        </button>
      </div>
      <Modal
        style={modalStyles}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add Contact"
        overlayClassName={styles.overlay}
      >
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

          <button className={styles.addContactBtnModal} onClick={handleSubmit}>
            Add Contact
          </button>
          <button className={styles.addContactBtnModal} onClick={closeModal}>
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ContactForm;
