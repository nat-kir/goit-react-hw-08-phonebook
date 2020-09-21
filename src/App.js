import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Container from './components/Container';
import ContactList from './components/ContactList';
import Form from './components/Form';
import Filter from './components/Filter';
import './index.css';

class App extends Component {
  state = {
    contacts: [
      { id: '1', name: 'Brad Pitt', number: '+12345678923' },
      { id: '2', name: 'Anne Hathaway', number: '+19876543234' },
      { id: '3', name: 'Natalie Portman', number: '+12334455645' },
      { id: '4', name: 'Salma Hayek', number: '+13845467549' },
      { id: '5', name: 'George Clooney', number: '+14367498567' },
    ],
    filter: '',
  };

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
      contacts.find(contact => {
        return name.toLowerCase() === contact.name.toLowerCase();
      })
    ) {
      alert(`${name} is already in contacts`);
    } else if (
      contacts.find(contact => {
        return number === contact.number;
      })
    ) {
      alert(`This number ${number} is already in contacts`);
    } else if (name === '') {
      alert('Please, give a name for new contact');
    } else if (number === '') {
      alert('Please, add a number');
    } else {
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
    }
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
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <Container>
        <h2>Phonebook</h2>
        <Form onSubmit={this.addContact} />

        <Filter value={filter} onChange={this.filterContacts} />

        <h2>Contacts</h2>
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
