import { Accordion, Table, Form, Row, Col, Button } from "react-bootstrap";
import "./styles/Common.css"
export default function ProductAccordion() {
    return(
        <Accordion className="accordion">
          {/* Specifications */}
          <Accordion.Item eventKey="0" className="accordion-items"   id="specifications">
            <Accordion.Header>
              <h5>Specifications</h5>
            </Accordion.Header>
            <Accordion.Body>
              <h6 className="marginBottom1 bold600">Product Classification</h6>
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
              <h6 className="marginBottom1 bold600">General Specifications</h6>
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
              <h6 className="marginBottom1 bold600">Dimensions</h6>
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
              <h6 className="marginBottom1 bold600">Mechanical Specifications</h6>
              <Table responsive style={{ border: "1px lightgray solid" }}>
                <tbody>
                  <tr>
                    <th>Cable Retention Strength, maximum</th>
                    <td>11.24 lb @ 0 ° | 4.40 lb @ 90 °</td>
                  </tr>
                </tbody>
              </Table>
              <h6 className="marginBottom1 bold600">Optical Specifications</h6>
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
              <h6 className="marginBottom1 bold600">Environmental Specifications</h6>
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
              <h6 className="marginBottom1 bold600">Regulatory Compliance/Certifications</h6>
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
          <Accordion.Item eventKey="1" className="accordion-items" id="productSupport">
            <Accordion.Header>
              <h5>Product Supports</h5>
            </Accordion.Header>
            <Accordion.Body>
              <div>
                <a href="#" className="marginBottom2 noUnderLine bold600">
                  Customer and Technical Support, Software/Firmware, Repair
                  Services
                </a>
              </div>
              <div>
                <a href="#" className="marginBottom2 noUnderLine bold600">Technical Training for CommScope</a>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="accordion-items" id="documentDownload">
            <Accordion.Header>
              <h5>document & download</h5>
            </Accordion.Header>
            <Accordion.Body>
              <h6>Installation Instruction</h6>
              <hr />
              <a href="#" className="noUnderLine bold600">TECP-96-194 Cleaning Fiber Connectors and Adapters</a>
              <h6 className="marginTop1">Product Compliance Documentation</h6>
              <hr />
              <div className="marginBottom1"><a href="#" className="noUnderLine bold600">Global Trade Data</a></div>
              
              <a href="#" className="noUnderLine bold600">Statement of Compliance RoHS/Reach</a>
              <h6 className="marginTop1">Product Specification</h6>
              <hr />
              <a href="#" className="noUnderLine bold600 ">ARGRPRG7R Product specifications</a>
              <Form.Select aria-label="Default" className="marginTop1">
                <option>Choose other Language</option>
                <option value="1">Chinese Simplified</option>
                <option value="2">French</option>
                <option value="3">Greman</option>
                <option value="4">Japanese</option>
                <option value="5">Portuguese</option>
                <option value="6">Spanish</option>
              </Form.Select>
              <a href="#" className="noUnderLine bold600">ARGRPRG7R Product specifications (Comprehensive)</a>
              <Form.Select aria-label="Default" className="marginTop1">
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
              <a href="#" className="noUnderLine bold600">CommScope Limited Product Warranty</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="accordion-items" id="relatedProductAccessories">
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
                        <a href="#" className="noUnderLine bold600">
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
                        <a href="#" className="noUnderLine bold600">
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
          <Accordion.Item eventKey="4" className="accordion-items" id="otherBrowse">
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
                      <a href="#" className="noUnderLine bold600"> MPO Cable Assemblies</a>
                    </div>
                    <div>
                      <a href="#" className="noUnderLine bold600">SYSTIMAX&copy; MPO Calbe Assemblies</a>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="accordion-items">
                  <Accordion.Header>
                    <h6 style={{ color: "blue" }}>Browse by Network</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div>
                      <a href="#" className="noUnderLine bold600"> Arrays for Data Centers</a>
                    </div>
                    <div>
                      <a href="#" className="noUnderLine bold600"> High Speed Migration For Data Centers</a>
                    </div>
                    <div>
                      <a href="#" className="noUnderLine bold600">
                        SYSTIMAX&copy; Fiber Structurd Cabling for Enterprise
                        Networks
                      </a>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
    )
}