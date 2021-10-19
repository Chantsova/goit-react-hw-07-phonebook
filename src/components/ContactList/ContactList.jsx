import './ContactList.css';
import { toast, Toaster } from 'react-hot-toast';
import { useFetchContactsQuery, useDeleteContactMutation } from '../redux/contacts/contacts-slice';

const ContactList = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();

  const [deleteContact] = useDeleteContactMutation();

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

export default ContactList;