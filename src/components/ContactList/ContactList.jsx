// import './ContactList.css';
// import React from 'react';
// import * as contactsActions from '../redux/contacts/contacts-actions';

// import { getVisibleContacts } from '../redux/contacts/contacts-selectors';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors} from "../redux/contacts";

export default function ContactList() {
  // const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);

  const onDeleteContact = id => dispatch(contactsActions.deleteContact(id));

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts())
  }, [dispatch]);

  return (
    <ul className="contacts__list">
      {contacts.map(({ name, number, id }) => (
        <li className="contacts__item" key={id}>
          <p className="contacts__name">{name}</p>
          <p className="contacts__number">{number}</p>
          <button className="contacts__btn" onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
