import { createAsyncThunk } from '@reduxjs/toolkit';
import * as phonebookAPI from '../../services/phonebookAPI';

export const fetchContacts = createAsyncThunk(
  'items/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await phonebookAPI.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue('No contacts');
    }
  },
);