import Contact from "../Contact/Contact";

import s from "./ContactList.module.css";

const ContactList = ({ users, handleDeleteUser }) => {
  return (
    <div>
      <ul className={s.card}>
        {users.map((user) => (
          <Contact
            key={user.id}
            {...user}
            handleDeleteUser={handleDeleteUser}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
