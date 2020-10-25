import contactActions from './phonebook-actions';
import axios from 'axios';

const addContact = ({ name, number }) => dispatch => {
  dispatch(contactActions.addContactRequest());
  axios
    .post('http://localhost:2000/contacts', { name, number })
    .then(({ data }) => {
      dispatch(contactActions.addContactSuccess(data));
    })
    .catch(error => dispatch(contactActions.addContactError()));
};

const fetchContacts = () => dispatch => {
  dispatch(contactActions.fetchContactsRequest());
  axios
    .get('http://localhost:2000/contacts')
    .then(({ data }) => dispatch(contactActions.fetchContactsSuccess(data)))

    .catch(error => dispatch(contactActions.fetchContactsError(error)));
};

const removeContact = id => dispatch => {
  dispatch(contactActions.removeContactRequest());
  axios
    .delete(`http://localhost:2000/contacts/:${id}`)
    .then(() => dispatch(contactActions.removeContactSuccess(id)))

    .catch(error => dispatch(contactActions.removeContactError(error)));
};

export default { addContact, fetchContacts, removeContact };
