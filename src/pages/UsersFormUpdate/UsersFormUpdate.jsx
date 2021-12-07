import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function UsersFormUpdate() {
  const { id } = useParams();

  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col>
            <h1>Formulaire Utilisateur ({id})</h1>
            <hr />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
