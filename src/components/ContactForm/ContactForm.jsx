import './ContactForm.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors, contactsActions} from "../redux/contacts";

import { v4 as uuidv4 } from 'uuid';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(contactsSelectors.getContacts);

  const dispatch = useDispatch();

  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  const handleChange = e => {
    const { name, value } = e.target;

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
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const found = contacts.find(
  //     contact => contact.name.toLowerCase() === name.toLowerCase(),
  //   );

  //   if (found === undefined) {
  //     dispatch(contactsActions.addContact({ name, number }));
  //     reset();
  //   } else {
  //     alert(`${name} is already in the Contact List`);
  //   }
  // };

  // const reset = () => {
  //   setName('');
  //   setNumber('');
  // };

  return (
    <form className="submit__form" onSubmit={"aaa"}>
      {/* //{handleSubmit}> */}
      <label htmlFor={nameInputId}>
        <h2>Name</h2>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="The name can only consist of letters, apostrophes, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc. "
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor={numberInputId}>
        <h2>Number</h2>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>

      <button className="submit__btn" type="submit">
        Add contact
      </button>
    </form>
  );
}
