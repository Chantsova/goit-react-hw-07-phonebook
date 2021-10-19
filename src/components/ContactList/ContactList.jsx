import './ContactList.css';
import React, { useState, useEffect } from 'react';
import { toast, Toaster } from 'react-hot-toast';
// import * as contactsActions from '../redux/contacts/contacts-actions';
// import { useSelector, useDispatch } from 'react-redux';
// import { getVisibleContacts } from '../redux/contacts/contacts-selectors';

import { useFetchContactsQuery, useDeleteContactMutation } from 'components/redux/contacts/contacts-slice';

export default function ContactList() {
  const { data: contacts, isFetching } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  // const [contactsList, setContactsList] = useState([]);

  // useEffect(() => {
  //   setContactsList(contacts)
  // }, [contacts])
  
  //const contacts = useSelector(getVisibleContacts);
  //const dispatch = useDispatch();
  const onDeleteContact = async (contactId) => {
    await deleteContact(contactId).unwrap();
     toast.success("Contact deleted")
  };

  return (
    <div>
      {contacts &&
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
        </ul>}
      
      {isFetching && <h1>Waiting...</h1>}

      <div><Toaster/></div>
    </div>
  );
}