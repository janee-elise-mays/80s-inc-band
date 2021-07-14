import { Navbar,Nav,NavDropdown } from 'react-bootstrap';

function Navigation() {
    return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#about-us">About us</Nav.Link>
        <Nav.Link href="#booking-info">Booking Information</Nav.Link>
        <Nav.Link href="#find">Find Us</Nav.Link>
        <Nav.Link href="#contact-us">Contact Us</Nav.Link>
        <NavDropdown title="Band Members" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#dylan">Dylan Mays</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>)
}

export default Navigation;