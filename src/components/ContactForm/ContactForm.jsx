import { Component } from "react";
import PropTypes from 'prop-types';
import { nanoid } from "nanoid";
import s from './ContactForm.module.css';


class ContactForm extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };

    state = {
        name: "",
        number: ""
    }

    handleSubmit = e => {
        e.preventDefault();

        const { name, number } = this.state;

        this.props.onSubmit({ id: nanoid(), name, number });
        this.setState({ name: "", number: "" })
    }

    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    }
    
     
    render() {
        return(
            <form className={s.form} onSubmit={this.handleSubmit}>
                <label className={s.label} htmlFor="">Name
                <input className={s.input}
                    type="text"
                        name="name"
                        value={this.state.name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={this.handleChange}
                    />
                </label>
                <label className={s.label} htmlFor="">Number
                <input className={s.input}
                        type="tel"
                        value={this.state.number}
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={this.handleChange}

                    />
                    </label>
                <button className={s.button }type="submit">Add contact</button>
            </form>
        )
    }
};

export default ContactForm;


