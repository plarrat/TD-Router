import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UsersContext } from "../../providers/UsersProvider";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";

export default function UsersHome() {
  const { users, searchUsers } = useContext(UsersContext);

  const [search, setSearch] = useState("");
  const lignesUsers = searchUsers(search).map((user) => {
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
      <Container className=" mt-5">
        <Row>
          <Col md="12">
            <h1>Gestion des utilisateurs</h1>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Rechercher un utilisatreur"
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button variant="outline-secondary">Rechercher</Button>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col md="12">
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
          </Col>
        </Row>
      </Container>
    </div>
  );
}
