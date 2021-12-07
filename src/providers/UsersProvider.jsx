import { createContext, useState, useEffect } from "react";
import axios from "axios";

const UsersContext = createContext();

export default function UsersProvider({ children }) {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    let datas = await axios.get("https://jsonplaceholder.typicode.com/users");
    return datas.data;
  }

  useEffect(() => {
    getUsers().then((datas) => setUsers(datas));
    alert("Provider Users");
  }, []);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
}
