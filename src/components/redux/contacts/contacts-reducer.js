import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {addContactList, changeFilter} from '../contacts/contacts-actions';

const items = createReducer([], {
  [addContactList]: (_, { payload }) => payload 
});

const filter = createReducer('', {
  [changeFilter]:  (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
