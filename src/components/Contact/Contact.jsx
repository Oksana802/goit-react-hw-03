import s from "./Contact.module.css";
import { FaPhone } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
const Contact = ({ id, name, number, handleDeleteUser }) => {
  return (
    <div className={s.box}>
      <li className={s.item}>
        <ul>
          <li>
            <IoPersonSharp className={s.icon} />
            {name}
          </li>
          <li>
            <FaPhone className={s.icon} />
            {number}
          </li>
        </ul>
        <button onClick={() => handleDeleteUser(id)} className={s.btn}>
          Delete
        </button>
      </li>
    </div>
  );
};

export default Contact;
