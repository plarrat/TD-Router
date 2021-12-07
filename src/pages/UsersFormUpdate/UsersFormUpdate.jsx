import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../../providers/UsersProvider";
import { useNavigate } from "react-router-dom";

export default function UsersFormUpdate() {
  const { id } = useParams();
  const { getUser } = useContext(UsersContext);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    setUser(getUser(id));
  }, [id, getUser]);

  useEffect(() => {
    if (user === false) {
      // alert("T existes pas parle a ma main");
      navigate("/users");
    }
  }, [user, navigate]);
  return (
    <div>
      {user !== undefined && (
        <Container className="mt-5">
          <Row>
            <Col>
              <h1>Formulaire Utilisateur ({user.username})</h1>
              <hr />
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
}
