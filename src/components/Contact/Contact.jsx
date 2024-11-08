import s from "./Contact.module.css";

const Contact = ({ id, name, number, handleDeleteUser }) => {
  return (
    <div>
      <li className={s.item}>
        <ul>
          <li>{name}</li>
          <li>{number}</li>
        </ul>
        <button onClick={() => handleDeleteUser(id)} className={s.btn}>
          Delete
        </button>
      </li>
    </div>
  );
};

export default Contact;
