import './ContactList.css';
import { toast, Toaster } from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { useFetchContactsQuery, useDeleteContactMutation } from '../redux/contacts/contacts-slice';
import { getVisibleContacts } from '../redux/contacts/contacts-selectors';
import { addContactList } from '../redux/contacts/contacts-actions';

const ContactList = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();
  
  const dispatch = useDispatch();
  dispatch(addContactList(contacts));
  
  const contactsL= useSelector(getVisibleContacts);

  const [deleteContact] = useDeleteContactMutation();
  const onDeleteContact = async (contactId) => {
    await deleteContact(contactId).unwrap();
     toast.success("Contact deleted")
  };

  return (
    <div>
      {contactsL &&
      <ul className="contacts__list">
        {contactsL.map(({ name, number, id }) => (
          <li className="contacts__item" key={id}>
            <p className="contacts__name">{name}</p>
            <p className="contacts__number">{number}</p>
            <button className="contacts__btn" onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </li>
        ))}
        </ul>} 

      <div><Toaster /></div>
      
      {isFetching && <h1>Waiting...</h1>}

    </div>
  );
}

export default ContactList;