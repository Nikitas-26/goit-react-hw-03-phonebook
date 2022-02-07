import { Component } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Form from "./Components/Form/Form";
import ContactsListItem from "./Components/ContactsListItem/ContactsListItem";
import FilterItems from "./Components/FilterItems/FilterItems";
class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "",
    number: "",
    filter: "",
  };
  componentDidMount(){
    const localStorageData = JSON.parse(localStorage.getItem('contacts'))
    this.setState({contacts: localStorageData})
  }
componentDidUpdate(prevProps, prevState, snapshot){
  if(prevState.contacts !== this.state.contacts){
    localStorage.setItem('contacts',JSON.stringify(this.state.contacts))
  }
}

  filter = (query) => {
    return this.state.contacts.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()) && item);
  };
  removeName = (name) =>
    this.setState((prev) => ({
      contacts: prev.contacts.filter((el) => el.name !== name),
    }));

  onInputValue = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  addContact = (contact) => {
    this.setState((prev) => ({ contacts: [...prev.contacts, contact] }));
  };
  onBtnSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      ...this.state,
      name: this.state.name,
      id: nanoid(),
      number: this.state.number,
    };
    const dublicate = this.state.contacts.some((el) => el.name.toLowerCase() === this.state.name.toLowerCase());
    if (!dublicate) {
      return this.addContact(newContact);
    } else {
      alert(`${this.state.name} alredy in contacts`);
    }
  };
  render() {
    return (
      <>
        <h1>PhoneBook</h1>
        <Form onInputValue={this.onInputValue} onTelValue={this.onTelValue} onBtnSubmit={this.onBtnSubmit} />
        <h2>Contacts</h2>
        <FilterItems filter={this.state.filter} onInputValue={this.onInputValue} />
        <ul>
          <ContactsListItem filter={this.filter(this.state.filter)} removeName={this.removeName} />
        </ul>
      </>
    );
  }
}

export default App;
