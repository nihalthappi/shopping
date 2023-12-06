import { Container, Navbar } from "react-bootstrap";
import "./home.css";
import HeaderNav from "../components/HeaderNav";
import ProductDetails from "../components/ProductDetails";
import ProductVariants from "../components/ProductVariants";
import ProductAccordion from "../components/ProductAccordion";

export default function Home() {
  return (
    <>
      <div className="home">
        <Container className="main-cont">
          {/* first nav */}
          <HeaderNav />
          {/* product details */}
          <ProductDetails />
        </Container>
      </div>
      {/* second nav */}
      <div className="second-nav">
        <Navbar collapseOnSelect expand="lg" className=" bg-body-tertiary">
          <Navbar.Collapse>
            {" "}
            <Navbar.Brand href="#productVariants" className="navActive">
              Product Variants
            </Navbar.Brand>
            <Navbar.Brand href="#specifications" className="navActive">Specifications</Navbar.Brand>
            <Navbar.Brand href="#productSupport" className="navActive">Product Supports</Navbar.Brand>
            <Navbar.Brand href="#documentDownload" className="navActive">
              document & download
            </Navbar.Brand>
            <Navbar.Brand href="#relatedProductAccessories" className="navActive">
              Related Products and Accessories
            </Navbar.Brand>
            <Navbar.Brand href="#otherBrowse" className="navActive">
              other Ways to Browse
            </Navbar.Brand>
          </Navbar.Collapse>
        </Navbar>
      </div>

      {/* product varant */}
      <ProductVariants />
      <Container>
        {/* spec accordion */}
        <ProductAccordion />
      </Container>
    </>
  );
}
