import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Container from './components/Container';
import ContactList from './components/ContactList';
import Form from './components/Form';
import Filter from './components/Filter';
import AppName from './components/AppName';
import Notification from './components/Notification';
import { CSSTransition } from 'react-transition-group';
import './App.css';

class App extends Component {
  state = {
    contacts: [
      // { id: '1', name: 'Brad Pitt', number: '0591234567' },
      // { id: '2', name: 'Anne Hathaway', number: '0593452378' },
      // { id: '3', name: 'Natalie Portman', number: '0595673427' },
      // { id: '4', name: 'Salma Hayek', number: '0594567345' },
      // { id: '5', name: 'George Clooney', number: '0594675189' },
    ],
    filter: '',
    notification: '',
    notificationIsVisible: false,
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const newContact = {
      id: uuidv4(),
      name,
      number,
    };

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

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  filterContacts = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter, notification, notificationIsVisible } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <Container>
        <AppName />
        <Form onSubmit={this.addContact} />
        <Filter value={filter} onChange={this.filterContacts} />

        <h2>Contacts</h2>
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
        <CSSTransition
          in={notificationIsVisible}
          // appear={true}
          timeout={3000}
          classNames="Notification-slideIn"
          unmountOnExit
          onEntered={() => this.setState({ notificationIsVisible: false })}
        >
          <Notification message={notification} />
        </CSSTransition>
      </Container>
    );
  }
}

export default App;
