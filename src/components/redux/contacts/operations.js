import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      setAuthHeader(token);

      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch contacts: ' + error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contactData, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      setAuthHeader(token);

      const response = await axios.post('/contacts', contactData);
      return response.data;
    } catch (error) {
      throw new Error('Failed to add contact: ' + error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      setAuthHeader(token);

      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      throw new Error('Failed to delete contact: ' + error.message);
    }
  }
);
