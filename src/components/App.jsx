import React, {Component} from "react";
import {nanoid} from "nanoid";

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = contact => {
    const contacts = this.state.contacts;
    const names = contacts.map(elem => elem.name.toLowerCase());
    if (names.includes(contact.name.toLowerCase())) {
      window.alert('The name ' + contact.name + ' already exists');
      return;
    }

    const newContact = {
      id: nanoid(),
      name: contact.name,
      number: contact.number,
    };

    contacts.push(newContact);
    this.setState({ contacts: contacts });
  };

  findContact = () => {
    const filter = this.state.filter;
    const contacts = this.state.contacts;
    return contacts.filter(el => {
      const curName = el.name;
      let temp = curName.substr(0, filter.length);
      return filter.toLowerCase() === temp.toLowerCase();
    });
  };

  render() {
    return (
      <div>
        React homework template
      </div>
    );
  }
}

export default App;
