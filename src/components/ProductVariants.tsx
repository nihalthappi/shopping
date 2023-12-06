import { Container, Card, Form, Row, Col, Button, Table } from "react-bootstrap";
import "./styles/ProductVariants.css"
export default function ProductVariants() {
  return (
    <Container id="productVariants">
      <Card>
        <Card.Body>
          <Card.Title>
            <h3>Product Variants</h3>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Configure and display product variants of ARGRPRG7R by selecting
            options
          </Card.Subtitle>
          {/* form input for product variants */}
          <Form>
            <Row>
              <Col md="6">
                <Form.Group className="mb-3 " controlId="formBasic">
                  <Form.Label>Jacket Color</Form.Label>
                  <Form.Select aria-label="Default select">
                    <option selected value="1">
                      J-Yellow
                    </option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md="6">
                <Form.Group className="mb-3 " controlId="formBasic">
                  <Form.Label>Breakout Length/Option</Form.Label>
                  <Form.Select aria-label="Default select">
                    <option selected value="1">
                      A - no Breakout (end A/end B), no gland ,no pulling grip
                    </option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Form.Group className="mb-3 " controlId="formBasic">
                  <Form.Label>Breakout Length/Option</Form.Label>
                  <Form.Control type="number"></Form.Control>
                </Form.Group>
              </Col>

              <Col md="4">
                <Form.Check type="radio" name="scale" label="m" />
                <Form.Check type="radio" name="scale" label="ft" />
              </Col>
              <Col md="4">
                <Button variant="outline-primary" type="submit">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
      {/* display form data */}
      <Table responsive className="variants-table">
        <thead>
          <tr>
            <th>Part Number</th>
            <th>Jack Color</th>
            <th>Breakout Length/Options</th>
            <th>Cord Length</th>
          </tr>
        </thead>
        <tbody>
          <div>No configured items found.</div>
        </tbody>
      </Table>
    </Container>
  );
}
