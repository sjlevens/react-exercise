import React, { Component } from 'react';

import './App.css';

import Header from './header';
import Toolbar from './toolbar';
import Table from './table';

import getContacts from '../data/get-contacts';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      nameFilter: '',
      stateFilter: 'all'
    };
  }
  //Call filterContacts to return an array of contacts filtered according to the current state of nameFilter
  filterContacts = () => {
    //Reset Filter
    let filteredContacts = this.state.contacts;

    //Check Name Filter
    if (this.state.nameFilter !== '') {
      filteredContacts = this.state.contacts.filter(contact => {
        const fullName = `${contact.firstName.toUpperCase()} ${contact.lastName.toUpperCase()}`;
        if (fullName.indexOf(this.state.nameFilter.toUpperCase()) >= 0)
          return true;
        return false;
      });
    }

    //Check state filter

    if (this.state.stateFilter !== 'all') {
      filteredContacts = filteredContacts.filter(contact => {
        if ('address' in contact.profile) {
          if ('state' in contact.profile.address) {
            if (contact.profile.address.state === this.state.stateFilter)
              return true;
          }
        }
        return false;
      });
    }

    return filteredContacts;
  };
  //Call createStateList to return a list of the states currently in the table, does not include unknown as an option
  createStateList = filteredContacts => {
    let stateList = [];
    filteredContacts.forEach(contact => {
      if ('address' in contact.profile) {
        if ('state' in contact.profile.address) {
          if (stateList.indexOf(contact.profile.address.state) < 0) {
            stateList.push(contact.profile.address.state);
          }
        }
      }
    });
    return stateList;
  };
  //onSubmit sets the state with whatever is in the name and state inputs
  onSubmit = (nameTerm, stateTerm) => {
    this.setState({ nameFilter: nameTerm, stateFilter: stateTerm });
  };
  componentDidMount() {
    //If component mounts then attempt to retrieve contacts from "API"
    getContacts()
      .then(contacts => {
        this.setState({ contacts: contacts });
        return true;
      })
      .catch(err => console.log(`ERROR: ${err}`));
  }
  render() {
    const contactsList = this.filterContacts();
    const statesList = this.createStateList(contactsList);
    return (
      <div>
        <div className="Toolbar">
          <Header />
        </div>
        <Toolbar onSubmit={this.onSubmit} states={statesList} />
        <Table contacts={contactsList} />
      </div>
    );
  }
}

export default App;
