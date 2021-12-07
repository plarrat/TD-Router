import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UsersContext = createContext();

export default function UsersProvider({ children }) {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    let datas = await axios.get("https://jsonplaceholder.typicode.com/users");
    return datas.data;
  }

  useEffect(() => {
    getUsers().then((datas) => setUsers(datas));
  }, []);

  function searchUsers(search) {
    const searchMini = search.toLowerCase();
    const res = users.filter((user) => {
      const name = user.name.toLowerCase();
      const username = user.username.toLowerCase();
      const email = user.email.toLowerCase();

      if (name.indexOf(searchMini) > -1) return user;
      if (username.indexOf(searchMini) > -1) return user;
      if (email.indexOf(searchMini) > -1) return user;
    });
    return res;
  }

  function getUser(id) {
    id = parseInt(id);
    const res = users.filter((user) => user.id === id);
    return res[0] !== undefined ? res[0] : undefined;
  }

  return (
    <UsersContext.Provider value={{ users, setUsers, searchUsers, getUser }}>
      {children}
    </UsersContext.Provider>
  );
}
