import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import styles from './ContactList.module.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import fadeStyles from './ContactListItem-fade.module.css';
// import contactActions from '../../redux/phonebook/phonebook-actions';

const ContactList = ({ contacts }) => {
  return (
    contacts.length > 0 && (
      <TransitionGroup component="ul" className={styles.List}>
        {contacts.map(({ id }) => (
          <CSSTransition key={id} timeout={250} classNames={fadeStyles}>
            <ContactItem id={id} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    )
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  // onDeleteContact: PropTypes.func.isRequired,
};
const mapStateToProps = state => {
  const { items, filter } = state.contacts;
  const filteredContacts = items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase()),
  );
  return {
    contacts: filteredContacts,
  };
};

export default connect(mapStateToProps)(ContactList);
