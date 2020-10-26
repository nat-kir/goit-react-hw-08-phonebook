import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';
import { connect } from 'react-redux';
import conntactOperations from '../../redux/phonebook/phonebookOperations';
import Notification from '../Notification';
import { CSSTransition } from 'react-transition-group';
import './Form-notification.css';
import contactsSelectors from '../../redux/phonebook/phonebookSelectors';

class Form extends Component {
  static propTypes = {
    onAddContact: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
    notification: '',
    notificationIsVisible: false,
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    const { name, number } = this.state;
    const contacts = this.props.contacts;

    e.preventDefault();

    if (name === '') {
      alert('Please, give a name for new contact');
      return;
    }
    if (number === '') {
      alert('Please, add a number');
      return;
    }
    if (
      contacts.some(contact => {
        return name.toLowerCase() === contact.name.toLowerCase();
      })
    ) {
      this.setState({
        notification: `Contact "${name}" is already exist`,
        notificationIsVisible: true,
      });
      return;
    }

    if (
      contacts.some(contact => {
        return number === contact.number;
      })
    ) {
      this.setState({
        notification: `Number "${number}" is already exist`,
        notificationIsVisible: true,
      });
      return;
    }

    this.props.onAddContact({ name, number });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { notification, notificationIsVisible } = this.state;
    return (
      <>
        <CSSTransition
          in={notificationIsVisible}
          timeout={3000}
          classNames="Notification-slideIn"
          unmountOnExit
          onEntered={() => this.setState({ notificationIsVisible: false })}
        >
          <Notification message={notification} />
        </CSSTransition>{' '}
        <form
          className={styles.form}
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <label className={styles.label}>
            <p className={styles.labelName}>Name:&#42;</p>
            <input
              required
              className={styles.input}
              type="text"
              placeholder="ex. Anne Hathaway"
              value={this.state.name}
              name="name"
              onChange={this.handleInputChange}
            />
          </label>
          <label className={styles.label}>
            <p className={styles.labelName}>Number:&#42;</p>
            <input
              required
              className={styles.input}
              type="number"
              placeholder="ex. 0532455678"
              value={this.state.number}
              name="number"
              onChange={this.handleInputChange}
            />
          </label>

          <button className={styles.button} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}
const mapStateToProps = state => ({
  contacts: contactsSelectors.getContacts(state),
});
const mapDispatchToProps = {
  onAddContact: conntactOperations.addContact,
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
