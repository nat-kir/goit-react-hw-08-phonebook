import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import { connect } from 'react-redux';
import contactOperations from '../../redux/phonebook/phonebookOperations';
import contactsSelectors from '../../redux/phonebook/phonebookSelectors';

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
const mapState = (state, ownProps) => {
  const item = contactsSelectors.getContactById(state, ownProps.id);
  return { ...item };
};
const mapDispatchToProps = (dispatch, ownProps) => ({
  onDeleteContact: () => {
    dispatch(contactOperations.removeContact(ownProps.id));
    console.log(ownProps.id);
  },
});
export default connect(mapState, mapDispatchToProps)(ContactItem);
