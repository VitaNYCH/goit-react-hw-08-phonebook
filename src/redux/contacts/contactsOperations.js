import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// First, create the thunk
const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await axios.get('/contacts');
      return contacts.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const addContacts = createAsyncThunk(
  'contacts/addTask',
  async ({ id, name, number }, { rejectWithValue }) => {
    try {
      const response = await axios.post('/contacts', { id, name, number });
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const removeContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (contactId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
const operationsOfContacts = {
  fetchContacts,
  addContacts,
  removeContacts,
};
export default operationsOfContacts;
