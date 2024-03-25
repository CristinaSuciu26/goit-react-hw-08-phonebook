import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      const response = await fetch('/contacts');
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Failed to fetch contacts');
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contactData => {
    const response = await axios.post('/contacts', contactData);
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    await axios.delete(`/contacts/${contactId}`);
    return contactId;
  }
);
