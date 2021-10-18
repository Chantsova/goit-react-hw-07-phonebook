// import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

// export const addContact = createAction('contacts/addContact', data => ({
//   payload: {
//     id: uuidv4(),
//     name: data.name,
//     number: data.number,
//   },
// }));

// export const deleteContact = createAction('contacts/deleteContact');
// export const changeFilter = createAction('contacts/changeFilter');

export const fetchContactsRequest = createAction('contacts/fetchContactsRequest');
export const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');
export const fetchContactsError = createAction('contacts/fetchContactsError');