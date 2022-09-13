import { useState} from "react";
import PropTypes from 'prop-types';
import { nanoid } from "nanoid";
import s from './ContactForm.module.css';

export default function ContactForm({ onSubmit }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        const id = nanoid();
        onSubmit(id, name, number);
         setName('');
         setNumber('');
    }

    const handleChange = e => {
        const { name, value } = e.currentTarget;

        switch (name) {
            case 'name':
                setName(value);
                break;
            
            case 'number':
                setNumber(value);
                break;
            
            default:
                return;
        }
    }


    return (
        
        <form className={s.form} onSubmit={handleSubmit}>
            <label className={s.label} htmlFor="">Name
                <input className={s.input}
                    type="text"
                        name="name"
                        value={name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={handleChange}
                    />
            </label>
                <label className={s.label} htmlFor="">Number
                <input className={s.input}
                        type="tel"
                        value={number}
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={handleChange}

                    />
                    </label>
                <button className={s.button }type="submit">Add contact</button>
            </form>
        )
    }

ContactForm.propTypes = {
      onSubmit: PropTypes.func.isRequired,
    }
