import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../App.css';
import logo from '../../image/logo.svg';
function Header() {
    const handleToggle = () => {
        const nav = document.querySelector('#responsive-navbar-nav');
        nav.classList.toggle('show');


    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        alt=""
                        srcSet={logo}
                        width="170"
                        className="d-inline-block align-center p-2"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" id="tog" />
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav"  >
                    <Nav className="space-x-2">
                        <Nav.Link onClick={handleToggle} as={Link} to="/">Home</Nav.Link>
                        <Nav.Link onClick={handleToggle} as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link onClick={handleToggle} as={Link} to="/about">About us</Nav.Link>
                        <Nav.Link onClick={handleToggle} as={Link} to="/contact">Contact us</Nav.Link>
                        <Nav.Link onClick={handleToggle} as={Link} to="/career">Career</Nav.Link>
                        <Nav.Link onClick={handleToggle} as={Link} to="/work">Work</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;