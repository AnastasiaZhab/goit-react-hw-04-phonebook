import { Component } from "react";
import ContactForm from "../ContactForm";
import ContactList from "../ContactList";
import Filter from "../Filter";
import PropTypes from 'prop-types';

class Phonebook extends Component {
    state = {
        contacts: [],
        filter: ''
    }

    componentDidMount() {
        const contacts = localStorage.getItem('contacts');
        const parseContacts = JSON.parse(contacts);

        if (parseContacts) {
            this.setState({contacts: parseContacts });
        }
    }

    componentDidUpdate(prevProps, prevState) {

        if (this.state.contacts !== prevState.contacts) {
            localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
          }
    }

    handleCreateContact = (contact) => {
        const { contacts } = this.state;

        if (contacts.find(({ name }) =>  name.trim().toLowerCase() === contact.name.trim().toLowerCase() )
        ) {
            return (alert(`${contact.name} is already in contact`))
        }

        this.setState((prevState) => ({
            contacts: [...prevState.contacts, contact]
        })
        )
    };

    handleRemoveContact = (event) => {
        
        const {name} = event.target;
        const { contacts } = this.state;
        this.setState(
            {contacts: contacts.filter((contact) => contact.id !== name)
            })
    };

    handleChangeFilter = (e) => this.setState({ filter: e.target.value });

    handleFilterContacts = () => {
        const { contacts, filter } = this.state;
        return (
            contacts.filter(contact => contact.name.toLowerCase().includes(filter.trim().toLowerCase()))
        )
    }


    render() {
        return (
            <>
                <h1>Phonebook</h1>
                <ContactForm onSubmit={this.handleCreateContact} />

                <h2>Contacts</h2>
                <Filter onChange={this.handleChangeFilter} value={this.state.filter}/>
                <ContactList list={this.handleFilterContacts()} onRemove={this.handleRemoveContact}/>
            </>
            
        )
    }
};

export default Phonebook;

Phonebook.propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.string.isRequired,
}

