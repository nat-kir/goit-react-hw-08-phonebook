import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReducer from './phonebook/phonebook-reducer';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const store = configureStore({ reducer: { contacts: contactsReducer } });

export default store;
