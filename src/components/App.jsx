import s from "./App.module.css";

import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import usersCatalog from "./userCard.json";
import { useState } from "react";

const App = () => {
  const [users, setUsers] = useState(usersCatalog);
  const [filter, setFilter] = useState("");

  const handleAddUser = (newUsers) => {
    setUsers((prevUsers) => {
      return [...prevUsers, newUsers];
    });
  };

  const handleDeleteUser = (id) => {
    setUsers((prev) => prev.filter((user) => user.id != id));
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const visibleUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div className={s.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm onAddUser={handleAddUser} />
      <SearchBox value={filter} onChange={handleFilterChange} />
      <ContactList users={visibleUsers} handleDeleteUser={handleDeleteUser} />
    </div>
  );
};

export default App;
