import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function BasicNavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to={`/`}>Home</Link></Nav.Link>
            <Nav.Link><Link to={`/personas`}>Personas</Link></Nav.Link>
            <Nav.Link><Link to={`/dashboard`}>Dashboard</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicNavBar;