import s from "./SearchBox.module.css";
const SearchBox = ({ value, onChange }) => {
  return (
    <div>
      <label className={s.filter}>
        <span className={s.span}>Find contacts by name</span>
        <input
          className={s.input}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default SearchBox;
