import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactsActions from './phonebook-actions';

const addContact = (state, action) => [...state, action.payload];

const deleteContact = (state, action) => {
  return state.filter(contact => contact.id !== action.payload);
};

const items = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (state, action) => action.payload,
  [contactsActions.addContactSuccess]: addContact,
  [contactsActions.removeContactSuccess]: deleteContact,
});

const filter = createReducer('', {
  [contactsActions.filterContacts]: (state, action) => action.payload,
});

const loading = createReducer(false, {
  [contactsActions.addContactRequest]: () => true,
  [contactsActions.addContactSuccess]: () => false,
  [contactsActions.addContactError]: () => false,
  [contactsActions.fetchContactsRequest]: () => true,
  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.fetchContactsError]: () => false,
  [contactsActions.removeContactRequest]: () => true,
  [contactsActions.removeContactSuccess]: () => false,
  [contactsActions.removeContactError]: () => false,
});
export default combineReducers({
  items,
  loading,
  filter,
});
