import { useState, useEffect} from "react";
import ContactForm from "../ContactForm";
import ContactList from "../ContactList";
import Filter from "../Filter";
import PropTypes from 'prop-types';

export default function Phonebook() {
    const [contacts, setContacts] = useState(() => JSON.parse(window.localStorage.getItem('contacts')) ?? []);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        window.localStorage.setItem('contacts', JSON.stringify(contacts));

    }, [contacts])

    const handleCreateContact = (id, name, number) => {
    const value = name.toLowerCase();
    contacts.filter((contact) => contact.name.toLowerCase() === value)
      .length === 0
      ? setContacts((prevState) => [
          ...prevState,
          { id: id, name: name, number: number },
        ])
      : alert(`${name} is already in contacts.`);
  };

    const handleChangeFilter = (e) => setFilter(e.target.value);

    const handleFilterContacts = () => {
    const value = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(value)
    );
  };

    const handleRemoveContact = (event) => {
        const { name } = event.target;
        setContacts(contacts.filter((contact) => contact.id !== name))
    };

    
    return (
        <>
            <h1>Phonebook</h1>
            <ContactForm onSubmit={handleCreateContact} />

            <h2>Contacts</h2>
            <Filter onChange={handleChangeFilter} value={filter} />
            <ContactList list={handleFilterContacts()} onRemove={handleRemoveContact} />
        </>
            
    )
}



Phonebook.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.string, PropTypes.number),
    filter: PropTypes.string,
}