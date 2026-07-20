import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/products">Products</Nav.Link>
                        <Nav.Link as={Link} to="/products/100">Products Detail 100</Nav.Link>
                        <Nav.Link as={Link} to="/products/200">Products Detail 200</Nav.Link>
                        <Nav.Link as={Link} to="/counter">Counter</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
    // return (
    //     <nav>
    //         <Link to="/">Home</Link>
    //         {"|"}
    //         <Link to="/products">Products</Link>
    //         {"|"}
    //         <Link to="/products/100">Products Detail</Link>
    //         {"|"}
    //         <Link to="/products/200">Products Detail</Link>
    //         {"|"}
    //         <Link to="/counter">Counter</Link>
    //     </nav>
    // );
}

export default Navigation;