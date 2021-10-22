import './Filter.css';

export default function Filter({filter}) {
  const handleChange = e => {
    filter(e.currentTarget.value)
  };

  return (
    <label className="filter">
      <h3>Find contacts by name</h3>
      <input
        type="text"
        onChange={handleChange}
      ></input>
    </label>
  );
}