import {
  Col,
  Container,
  Row,
  Image,
  Card,
  Button,
  Navbar,
  Nav,
  Form,
  Table,
  Accordion,
} from "react-bootstrap";
import "./home.css";
import YellowCable from "../images/ARGRPRG7R.jpg";
import HeaderNav from "../components/HeaderNav";
export default function Home() {
  return (
    <>
      <div className="home">
        <Container className="main-cont">
          {/* first nav */}
          <HeaderNav></HeaderNav>
          {/* product details */}
          <Row>
            <Col sm="8" className="image-col">
              <Image className="product-img md-6" src={YellowCable} rounded />
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
        </Container>
      </div>
      {/* second nav */}
      <div className="second-nav">
        <Navbar expand="lg" className=" bg-body-tertiary">
          <Navbar.Brand href="#productVariants">Product Variants</Navbar.Brand>
          <Navbar.Brand href="#">Specifications</Navbar.Brand>
          <Navbar.Brand href="#">Product Supports</Navbar.Brand>
          <Navbar.Brand href="#">document & download</Navbar.Brand>
          <Navbar.Brand href="#">Related Products and Accessories</Navbar.Brand>
          <Navbar.Brand href="#">other Ways to Browse</Navbar.Brand>
        </Navbar>
      </div>

      {/* product varant */}

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
      <Container>
        {/* spec accordion */}
        <Accordion className="accordion">
          {/* Specifications */}
          <Accordion.Item eventKey="0" className="accordion-items">
            <Accordion.Header>
              <h5>Specifications</h5>
            </Accordion.Header>
            <Accordion.Body>
              <h6>Product Classification</h6>
              <Table responsive style={{ border: "1px lightgray solid" }}>
                <tbody>
                  <tr>
                    <th>Regional Availability </th>
                    <td>
                      Asia | Australia/New Zealand | China | Europe | India |
                      Latin America | Middle East/Africa | North America
                    </td>
                  </tr>
                  <tr>
                    <th>Portfolio </th>
                    <td>CommScope &copy;</td>
                  </tr>
                  <tr>
                    <th> Product Type </th>
                    <td>Fiber array cable assembly</td>
                  </tr>
                  <tr>
                    <th> Product Brand </th>
                    <td>Propel | SYSTIMAX ULL</td>
                  </tr>
                  <tr>
                    <th> Ordering Note </th>
                    <td>
                      For additional jacket colors, please contact a CommScope
                      Sales Representative | For lengths greater than 999 ft
                      (304 m), orders must be in meters | Minimum length may
                      vary based on cable configuration
                    </td>
                  </tr>
                </tbody>
              </Table>
              <h6>General Specifications</h6>
              <Table responsive style={{ border: "1px lightgray solid" }}>
                <tbody>
                  <tr>
                    <th>Connector A, quantity </th>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th>Color, boot A </th>
                    <td>Black </td>
                  </tr>
                  <tr>
                    <th> Color, connector A </th>
                    <td>Green</td>
                  </tr>
                  <tr>
                    <th> Connector B, quantity </th>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th> Color, boot B </th>
                    <td>Black</td>
                  </tr>
                  <tr>
                    <th> Construction Type </th>
                    <td>Stranded</td>
                  </tr>
                  <tr>
                    <th> Furcation Color </th>
                    <td>Yellow</td>
                  </tr>
                  <tr>
                    <th> Interface, Connector A </th>
                    <td>MPO-16/APC Female</td>
                  </tr>
                  <tr>
                    <th> Interface, Connector B</th>
                    <td>MPO-16/APC Female</td>
                  </tr>
                  <tr>
                    <th> Jacket Color</th>
                    <td>Yellow</td>
                  </tr>
                  <tr>
                    <th> Polarity</th>
                    <td>Method A</td>
                  </tr>
                  <tr>
                    <th> Fibers per Subunit, quantity</th>
                    <td>16</td>
                  </tr>
                  <tr>
                    <th>Total Fibers, quantity</th>
                    <td>16</td>
                  </tr>
                </tbody>
              </Table>
              <h6>Dimensions</h6>
              <Table responsive style={{ border: "1px lightgray solid" }}>
                <tbody>
                  <tr>
                    <th>Cable Assembly Length Range (m)</th>
                    <td>1 – 305</td>
                  </tr>
                  <tr>
                    <th>Cable Assembly Length Range (ft)</th>
                    <td>1 – 999 </td>
                  </tr>
                </tbody>
              </Table>
              <h6>Mechanical Specifications</h6>
              <Table responsive style={{ border: "1px lightgray solid" }}>
                <tbody>
                  <tr>
                    <th>Cable Retention Strength, maximum</th>
                    <td>11.24 lb @ 0 ° | 4.40 lb @ 90 °</td>
                  </tr>
                </tbody>
              </Table>
              <h6>Optical Specifications</h6>
              <Table responsive style={{ border: "1px lightgray solid" }}>
                <tbody>
                  <tr>
                    <th>Fiber Mode</th>
                    <td>Singlemode</td>
                  </tr>
                  <tr>
                    <th>Fiber Type</th>
                    <td>G.657.A2, TeraSPEED&copy; </td>
                  </tr>
                </tbody>
              </Table>
              <h6>Environmental Specifications</h6>
              <Table responsive style={{ border: "1px lightgray solid" }}>
                <tbody>
                  <tr>
                    <th>Operating Temperature</th>
                    <td> -10 °C to +60 °C (+14 °F to +140 °F)</td>
                  </tr>
                  <tr>
                    <th>Environmental Space</th>
                    <td>Dual Rated LSZH/Riser | Indoor</td>
                  </tr>
                </tbody>
              </Table>
              <h6>Regulatory Compliance/Certifications</h6>
              <Table responsive style={{ border: "1px lightgray solid" }}>
                <tbody>
                  <tr>
                    <th>Agency</th>
                    <th>Classification</th>
                  </tr>
                  <tr>
                    <td>ISO 9001:2015</td>
                    <td>
                      Designed, manufactured and/or distributed under this
                      quality management system
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>
          {/* Product Supports */}
          <Accordion.Item eventKey="1" className="accordion-items">
            <Accordion.Header>
              <h5>Product Supports</h5>
            </Accordion.Header>
            <Accordion.Body>
              <div>
                <a href="">
                  Customer and Technical Support, Software/Firmware, Repair
                  Services
                </a>
              </div>
              <div>
                <a href="">Technical Training for CommScope</a>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="accordion-items">
            <Accordion.Header>
              <h5>document & download</h5>
            </Accordion.Header>
            <Accordion.Body>
              <h6>Installation Instruction</h6>
              <hr />
              <a href="">TECP-96-194 Cleaning Fiber Connectors and Adapters</a>
              <h6>Product Compliance Documentation</h6>
              <hr />
              <a href="">Global Trade Data</a>
              <a href="">Statement of Compliance RoHS/Reach</a>
              <h6>Product Specification</h6>
              <hr />
              <a href="">ARGRPRG7R Product specifications</a>
              <Form.Select aria-label="Default">
                <option>Choose other Language</option>
                <option value="1">Chinese Simplified</option>
                <option value="2">French</option>
                <option value="3">Greman</option>
                <option value="4">Japanese</option>
                <option value="5">Portuguese</option>
                <option value="6">Spanish</option>
              </Form.Select>
              <a href="">ARGRPRG7R Product specifications (Comprehensive)</a>
              <Form.Select aria-label="Default">
                <option>Choose other Language</option>
                <option value="1">Chinese Simplified</option>
                <option value="2">French</option>
                <option value="3">Greman</option>
                <option value="4">Japanese</option>
                <option value="5">Portuguese</option>
                <option value="6">Spanish</option>
              </Form.Select>
              <hr />
              <h6>Warranty</h6>
              <a href="">CommScope Limited Product Warranty</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="accordion-items">
            <Accordion.Header>
              <h5>Related Products and Accessories</h5>
            </Accordion.Header>
            <Accordion.Body>
              <h6>Included Products</h6>
              <h6 style={{ color: "blue" }}>Cables</h6>
              <Accordion flush>
                <Accordion.Header>
                  <h6>Fiber Optics Cables</h6>
                  <h6>Indoor Cables(1)</h6>
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col md="2"></Col>
                    <Col md="8">
                      <div>
                        <a href="">
                          <h6>760251072 | N-016-MP-8G1-F30YL/D</h6>
                        </a>
                      </div>
                      <div>
                        Fiber indoor cable, TeraSPEED® Low Smoke Zero Halogen
                        Riser for Light Duty MPO Patchcords, 16 fiber,
                        Singlemode G.657.A2/B2, Feet jacket marking, Yellow
                        jacket color, Dca flame rating
                      </div>
                    </Col>
                    <Col md="2">
                      {" "}
                      <Button variant="outline-primary">Preview</Button>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion>
              <h6 style={{ color: "blue" }}>Connectors</h6>
              <Accordion flush>
                <Accordion.Header>
                  <h6>Fiber Adapters & Connectors</h6>
                  <h6>Connectors(1)</h6>
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col md="2"></Col>
                    <Col md="8">
                      <div>
                        <a href="">
                          <h6>860661399</h6>
                        </a>
                      </div>
                      <div>
                        Fiber Optic Connector Kit, singlemode, OS2, MPO-16/APC,
                        ULL, unpinned, green, for 3 mm cable
                      </div>
                    </Col>
                    <Col md="2">
                      {" "}
                      <Button variant="outline-primary">Preview</Button>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="accordion-items">
            <Accordion.Header>
              <h5>Other Ways to Browse</h5>
            </Accordion.Header>
            <Accordion.Body>
              <Accordion>
                <Accordion.Item eventKey="1" className="accordion-items">
                  <Accordion.Header>
                    <h6 style={{ color: "blue" }}>Browse by Category</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div>
                      <a href=""> MPO Cable Assemblies</a>
                    </div>
                    <div>
                      <a href="">SYSTIMAX&copy; MPO Calbe Assemblies</a>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="accordion-items">
                  <Accordion.Header>
                    <h6 style={{ color: "blue" }}>Browse by Network</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div>
                      <a href=""> Arrays for Data Centers</a>
                    </div>
                    <div>
                      <a href=""> High Speed Migration For Data Centers</a>
                    </div>
                    <div>
                      <a href="">SYSTIMAX&copy; Fiber Structurd Cabling for Enterprise Networks</a>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
}
