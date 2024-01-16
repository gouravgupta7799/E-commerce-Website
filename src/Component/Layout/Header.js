import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cart from '../Cart/CartProducts'
import { Link } from 'react-router-dom';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <h2 style={{ color: 'white', margin: '0px 25px 0px' }}>Ecommerce</h2>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/Store">Store</Nav.Link>
            <Nav.Link as={Link} to="/About">About</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link ><Cart /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;