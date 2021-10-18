import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contacts-reducer';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import logger from 'redux-logger';
// import storage from 'redux-persist/lib/storage';

// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

// const middleware = getDefaultMiddleware => [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
//   logger,
// ];

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  // middleware,
  // devTools: process.env.NODE_ENV === 'development',
});

// const persistor = persistStore(store);

// export { store, persistor };

// const addContact = data => {
//   return {
//     type: 'addContact',
//     payload: data
//   }
// };

// const addContactsOperation = () => {
//   const contact = fetch('/contacts')
//   return (dispatch) => {
//     dispatch(addContact(contact))
//   }
// };

