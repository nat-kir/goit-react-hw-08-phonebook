import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './phonebook/phonebook-reducer';

const store = configureStore({
  reducer: { contacts: contactsReducer },
});

export default store;
