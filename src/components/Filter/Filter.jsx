import './Filter.css';
import { useSelector, useDispatch } from 'react-redux';
import * as contactsActions from '../redux/contacts/contacts-actions';
import { getFilter } from '../redux/contacts/contacts-selectors';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className="filter">
      <h3>Find contacts by name</h3>
      <input
        type="text"
        value={value}
        onChange={e => dispatch(contactsActions.changeFilter(e.target.value))}
      ></input>
    </label>
  );
}
