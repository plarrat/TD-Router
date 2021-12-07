import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../../providers/UsersProvider";

export default function UsersFormUpdate() {
  const { id } = useParams();
  const { getUser } = useContext(UsersContext);
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser(getUser(id));
  }, []);

  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col>
            <h1>Formulaire Utilisateur ({user.username})</h1>
            <hr />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
