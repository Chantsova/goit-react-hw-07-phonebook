import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import contactsReducer from './contacts/contacts-reducer';
import { phonebookApi } from './contacts/contacts-slice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    [phonebookApi.reducerPath]: phonebookApi.reducer
    
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), phonebookApi.middleware],
  devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch);