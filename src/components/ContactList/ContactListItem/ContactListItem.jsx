import s from '../ContactList.module.css'
import PropTypes from 'prop-types'

const ContactListItem = ({ list, onRemove }) => {
    const {id, name, number} = list
    return (
            <li key={id}>
                <span>{name}</span> - <span>{number}</span>
                <button type="button" name={id} className={s.button} onClick={onRemove}>Remove</button>
            </li>

)
}

export default ContactListItem;

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired,
}