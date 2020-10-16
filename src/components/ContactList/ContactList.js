import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import styles from './ContactList.module.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import fadeStyles from './ContactListItem-fade.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    contacts.length > 0 && (
      <TransitionGroup component="ul" className={styles.List}>
        {contacts.map(({ id, name, number }) => (
          <CSSTransition key={id} timeout={250} classNames={fadeStyles}>
            <li className={styles.ListItem} key={id}>
              <ContactItem
                name={name}
                number={number}
                deleteContact={() => onDeleteContact(id)}
              />
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    )
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;
