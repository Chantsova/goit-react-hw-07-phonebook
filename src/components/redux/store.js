import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { phonebookApi } from './contacts/contacts-slice';
import contactsReducer from './contacts/contacts-reducer';

export const store = configureStore({
  reducer: {
    contactsReducer,
    [phonebookApi.reducerPath]: phonebookApi.reducer
    
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), phonebookApi.middleware],
  devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch);