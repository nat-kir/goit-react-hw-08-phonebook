import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import { connect } from 'react-redux';
// import contactsActions from '../../redux/phonebook/phonebook-actions';
import contactOperations from '../../redux/phonebook/phonebookOperations';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={styles.ListItem} key={id}>
      <p>
        {name} : {number}
      </p>
      <button className={styles.button} type="button" onClick={onDeleteContact}>
        Удалить
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
const mapStateToProps = (state, ownProps) => {
  const item = state.contacts.items.find(item => item.id === ownProps.id);
  return { ...item };
};
const mapDispatchToProps = (dispatch, ownProps) => ({
  onDeleteContact: () => {
    dispatch(contactOperations.removeContact(ownProps.id));
    console.log(ownProps.id);
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
