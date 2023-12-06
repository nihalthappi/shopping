import { Button, Card } from "react-bootstrap";
import YellowWire from "../../images/ARGRPRG7R.jpg";
import "../styles/Common.css";
import "./style.css";
export default function ProdcutCard() {
  return (
    <Card style={{ width: "13rem",margin:"0.5rem"}}>
      <Card.Img variant="top" src={YellowWire} className="product-img" />
      <Card.Body>
        <Card.Subtitle className="mb-2" style={{ color: "green" }}>
          Base Product
        </Card.Subtitle>
        <Card.Title>
          <a href="/" className="noUnderLine">
            AQGRPRG7R
          </a>
        </Card.Title>
        <Card.Text>
          Ultra Low Loss (ULL) Singlemode G.657.A2 MPO16 UPC (Non-Pinned) to
          MPO16 (Non-Pinned), Fiber Array Cable Assembly, 16-Fiber, Plenum
        </Card.Text>
        <Button variant="outline-primary">Add to my product list</Button>
      </Card.Body>
    </Card>
  );
}
