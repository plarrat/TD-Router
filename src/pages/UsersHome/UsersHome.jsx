import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function UsersHome() {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    let datas = await axios.get("https://jsonplaceholder.typicode.com/users");
    return datas.data;
  }
  useEffect(() => {
    getUsers().then((datas) => setUsers(datas));
  }, []);

  const lignesUsers = users.map((user) => {
    return (
      <tr>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>
          <Link to={"/users/" + user.id} className="btn btn-warning">
            Modifier
          </Link>
        </td>
        <td>
          <Button variant="danger">Supprimer</Button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <section className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <h1>Gestion des utilisateurs</h1>
            <hr />

            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Prénom / Nom</th>
                  <th>Pseudo</th>
                  <th>Email</th>
                  <th>Modifier</th>
                  <th>Supprimer</th>
                </tr>
              </thead>
              <tbody>{lignesUsers}</tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
