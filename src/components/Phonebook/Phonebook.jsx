import { useEffect, useState} from "react";
import ContactForm from "../ContactForm";
import ContactList from "../ContactList";
import Filter from "../Filter";
import PropTypes from 'prop-types';

export default function Phonebook() {
    const [contacts, setContacts] = useState(() => JSON.parse(window.localStorage.getItem('contacts')) ?? []);
    const [filter, setFilter] = useState('');

    useEffect(() => {
         window.localStorage.setItem('contacts', JSON.stringify(contacts));

    },[contacts])

    const handleCreateContact = (id, name, number) => {
        const value = name.toLowerCase();

        contacts.filter(contact => contact.name.toLowerCase() === value).lenght === 0
            ?
            setContacts(prev => [...prev, { id: id, name: name, number: number }])
            :
            alert(`${name} is already in contacts.`)

    };

    const handleRemoveContact = (event) => {
        const { name } = event.target;
        setContacts(contacts.filter((contact) => contact.id !== name))
    };

    const handleChangeFilter = (e) => setFilter(e.target.value);

    const handleFilterContacts = () => {
            return contacts.filter(contact => contact.name.toLowerCase().includes(filter.trim().toLowerCase()))
    }

        return (
            <>
                <h1>Phonebook</h1>
                <ContactForm onSubmit={handleCreateContact} />

                <h2>Contacts</h2>
                <Filter onChange={handleChangeFilter} value={filter}/>
                <ContactList list={handleFilterContacts()} onRemove={handleRemoveContact}/>
            </>
            
        )

}
// class Phonebook extends Component {
//     state = {
//         contacts: [],
//         filter: ''
//     }

//     componentDidMount() {
//         const contacts = localStorage.getItem('contacts');
//         const parseContacts = JSON.parse(contacts);

//         if (parseContacts) {
//             this.setState({contacts: parseContacts });
//         }
//     }

//     componentDidUpdate(prevProps, prevState) {

//         if (this.state.contacts !== prevState.contacts) {
//             localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//           }
//     }




Phonebook.propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.string.isRequired,
}

