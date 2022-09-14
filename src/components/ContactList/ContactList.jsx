import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem/ContactListItem';
    
const ContactList = ({ list, onRemove }) => {
    return (
        <>
            <ul>
            {list.map(({id, name, number}) => (
                <ContactListItem key={id} id={id} name={name} number={number} onRemove={onRemove}/>
            ))}
            </ul>
        </>
    )
};

export default ContactList;

ContactList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string
    })),
    onRemove: PropTypes.func.isRequired,
}