// import { combineReducers } from 'redux';
// import { createReducer } from '@reduxjs/toolkit';
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
