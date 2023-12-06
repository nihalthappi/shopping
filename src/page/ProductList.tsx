import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard/ProductCard";
import "./productlist.css"
export default function ProductList() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Container>
      <Row>
        {arr.map(() => (
          <Col sm={3} >
            <ProductCard />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
