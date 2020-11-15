import React, { Component } from 'react';
import Container from '../components/ContactsAppContainer';
import ContactList from '../components/ContactList';
import ContactForm from '../components/Form';
import Filter from '../components/Filter';
import AppName from '../components/AppName';
import contactOperations from '../redux/phonebook/phonebookOperations';
import { connect } from 'react-redux';
import contactSelectors from '../redux/phonebook/phonebookSelectors';

class ContactsView extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }
  render() {
    return (
      <Container>
        <AppName />
        <ContactForm />
        <Filter />
        <h2>Contacts</h2>
        {this.props.isLoading && <h2>Loading...</h2>}
        <ContactList />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContact: contactSelectors.getLoading(state),
});
const mapDispatchToProps = {
  onFetchContacts: contactOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
