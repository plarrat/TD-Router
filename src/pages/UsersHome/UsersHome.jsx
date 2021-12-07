import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UsersContext } from "../../providers/UsersProvider";

export default function UsersHome() {
  const { users } = useContext(UsersContext);

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
