import './Filter.css';
import { useFilterContactMutation } from '../redux/contacts/contacts-slice';

export default function Filter() {
  const [filterContact] = useFilterContactMutation();
  
  const onFilter = async (e) => {
    await filterContact(e.target.value).unwrap();
  };

  return (
    <label className="filter">
      <h3>Find contacts by name</h3>
      <input
        type="text"
       // value={value}
        onChange={e => onFilter(e)}
      ></input>
    </label>
  );
}
