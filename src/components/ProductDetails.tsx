import { Button, Card, Col, Row, Image, ListGroup } from "react-bootstrap";
import YellowCable1 from "../images/ARGRPRG7R.jpg";
import YellowCable2 from "../images/ARGRPRG7R-2.jpg";
import YellowCable3 from "../images/ARGRPRG7R-3.jpg";

import "./styles/ProductDetails.css";
import { useState } from "react";
export default function ProductDetails() {
  const [productImage, setProductImage] = useState(YellowCable1);
  return (
    <Row>
      <Col sm="8">
        <div className="image-col">
          <Image className="product-img md-6" src={productImage} rounded />
        </div>
        <ListGroup horizontal className="image-list">
          <ListGroup.Item
            className="marginRight1 pointer thumbnail"
            onClick={() => {
              setProductImage(YellowCable1);
            }}
          >
            <Image src={YellowCable1} style={{width:"5rem"}}/>
          </ListGroup.Item>

          <ListGroup.Item
            className="marginRight1 pointer thumbnail"
            onClick={() => {
              setProductImage(YellowCable2);
            }}
          >
            <Image src={YellowCable2} style={{width:"5rem"}}/>
            
          </ListGroup.Item>
          <ListGroup.Item
            className="marginRight1 pointer thumbnail"
            onClick={() => {
              setProductImage(YellowCable3);
            }}
          >
            <Image src={YellowCable3} style={{width:"5rem"}}/>
            
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col sm="4">
        <Card style={{ border: "none" }}>
          <Card.Body>
            <Card.Title
              style={{
                color: "blue",
                fontSize: "2.5rem",
                fontWeight: "300",
              }}
            >
              ARGRPRG7R
            </Card.Title>
            <Card.Subtitle className="mb-2" style={{ color: "green" }}>
              Base Product
            </Card.Subtitle>
            <Card.Text>
              <div>
                <ul className="city-list mb-3">
                  <li className="list-label">Available in:</li>
                  <li className="list-item">Asia</li>
                  <li className="list-item">Australia/New Zealand</li>
                  <li className="list-item">China</li>
                  <li className="list-item">Europe</li>
                  <li className="list-item">India</li>
                  <li className="list-item">Latin America</li>
                  <li className="list-item">Middle East/Africa</li>
                  <li className="list-item">North America</li>
                </ul>
              </div>

              <div>
                <hr />
              </div>

              <Button className="product-btn" href="#productVariants">
                <i>Configure</i> Product variants
              </Button>
              <Button className="product-btn">find a Partner</Button>
              <Button className="product-btn">Add to My Product</Button>
              <h6>Specification</h6>

              <div className="spec">
                <Button className="download-btn">Download</Button>
                <Button className="share-btn">Share</Button>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
