import './Filter.css';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors, contactsActions} from "../redux/contacts";

export default function Filter() {
  const value = useSelector(contactsSelectors.getFilter);
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
