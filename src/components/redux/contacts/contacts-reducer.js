// import { combineReducers } from 'redux';
import { createReducer, combineReducers, createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './contacts-operations';
// import * as contactsActions from '../contacts/contacts-actions';

// const items = createReducer(
//   [
//     { id: 'id-1', name: 'Anastasia', number: '161-69-55' },
//     { id: 'id-2', name: 'Svetlana Divnaya', number: '443-89-12' },
//     { id: 'id-3', name: 'Illya Chantsov', number: '645-17-79' },
//     { id: 'id-4', name: 'Tatiana Zhelezina', number: '227-91-26' },
//   ],
//   {
//     [contactsActions.addContact]: (state, { payload }) => [...state, payload],
//     [contactsActions.deleteContact]: (state, { payload }) =>
//       state.filter(({ id }) => id !== payload),
//   },
// );

// const filter = createReducer('', {
//   [contactsActions.changeFilter]: (state, { payload }) => payload,
// });

// export default combineReducers({
//   items,
//   filter,
// });

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [fetchContacts.pending]: () => null
});

export default combineReducers({
  items,
  isLoading,
  error
});

//Immer for copy state mutation
// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: { items: [], isLoading: false, error: null },
//   extraReducers: {
//     [fetchContacts.fulfilled]: (state, {payload}) => {
//       state.items = payload;
//     },
//     [fetchContacts.pending]: (state) => {
//       state.isLoading = true;
//     },
//     [fetchContacts.rejected]: (_, { payload }) => payload,
//   }
// });
// export default contactsSlice.reducer;