import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
// import styles from './ContactList.module.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import fadeStyles from './ContactListItem-fade.module.css';
import contactsSelectors from '../../redux/phonebook/phonebookSelectors';
import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactList = ({ contacts }) => {
  return (
    contacts.length > 0 && (
      <TransitionGroup component={ListGroup} variant="flush">
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
};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getFilteredContacts(state),
});
export default connect(mapStateToProps)(ContactList);
