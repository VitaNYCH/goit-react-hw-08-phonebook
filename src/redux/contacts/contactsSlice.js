import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contactsOperations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: {
    [contactsOperations.fetchContacts.pending]: handlePending,
    [contactsOperations.fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [contactsOperations.fetchContacts.rejected]: handleRejected,

    [contactsOperations.addContacts.pending]: handlePending,
    [contactsOperations.addContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [contactsOperations.addContacts.rejected]: handleRejected,

    [contactsOperations.removeContacts.pending]: handlePending,
    [contactsOperations.removeContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [contactsOperations.removeContacts.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;
