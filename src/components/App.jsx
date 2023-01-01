import { Component } from 'react';
import { Title } from './Title/Title';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import Notiflix from 'notiflix';
import shortid from 'shortid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(precProps, prevState) {
    if (this.state.contacts.length !== prevState.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  formSubmitHandler = data => {
    const addContact = {
      id: shortid.generate(),
      name: data.name,
      number: data.number,
    };

    this.state.contacts.find(contact => contact.name === data.name)
      ? Notiflix.Notify.info(`${data.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [addContact, ...prevState.contacts],
        }));
  };

  filterContact = text => {
    const normalized = text.target.value.trim().toLowerCase();
    this.setState({ filter: normalized });
  };

  deleteContact = id => {
    const { contacts } = this.state;
    this.setState({ contacts: contacts.filter(contact => contact.id !== id) });
  };

  upperCaseWord = data => {
    return data[0].toUpperCase() + data.substring(1);
  };

  render() {
    const { contacts, filter } = this.state;
    const sortedContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
    return (
      <div>
        <Title title="Phonebook" />
        <Form onSubmit={this.formSubmitHandler} />

        <Title title="Contacts" />
        <Filter filterContact={this.filterContact} />

        <Contacts
          contacts={sortedContacts}
          deleteContact={this.deleteContact}
          upperCaseWord={this.upperCaseWord}
        />
      </div>
    );
  }
}
