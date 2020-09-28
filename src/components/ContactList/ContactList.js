import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={styles.List}>
    {contacts.map(({ id, name, number }) => (
      <li className={styles.ListItem} key={id}>
        <ContactItem
          name={name}
          number={number}
          deleteContact={() => onDeleteContact(id)}
        />
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;
