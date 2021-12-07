import { Container, Row, Col, Image } from "react-bootstrap";
import Homer from "./../../assets/homer-404.png";

export default function Error404() {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <Image src={Homer} fluid />
        </Col>
        <Col>
          <h1>Erreur 404</h1>
        </Col>
      </Row>
    </Container>
  );
}
