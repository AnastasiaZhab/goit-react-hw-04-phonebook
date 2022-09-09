import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem/ContactListItem';
    
const ContactList = ({ list, onRemove }) => {
    return (<ul>
        {list.map((list) => (
            <ContactListItem list={list} onRemove={onRemove}/>
        ))}
        </ul>
    )
};

export default ContactList;


ContactList.propTypes = {
    list: PropTypes.array.isRequired,
    onRemove: PropTypes.func.isRequired,
}