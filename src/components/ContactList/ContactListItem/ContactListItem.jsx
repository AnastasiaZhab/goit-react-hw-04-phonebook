import s from '../ContactList.module.css'

const ContactListItem = ({id, name, number, onRemove }) => {
    return (
            <li>
                <span>{name}</span> - <span>{number}</span>
                <button type="button" name={id} className={s.button} onClick={onRemove}>Remove</button>
            </li>

)
}

export default ContactListItem;

