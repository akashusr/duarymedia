import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../App.css';
import logo from '../../image/logo.svg';
function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        alt=""
                        srcSet={logo}
                        width="170"
                        // height="30"
                        className="d-inline-block align-center p-2"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Nav className="space-x-2">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link as={Link} to="aboutUS">About us</Nav.Link>
                        <Nav.Link as={Link} to="contactUs">Contact us</Nav.Link>
                        <Nav.Link as={Link} to="career">Career</Nav.Link>
                        <Nav.Link as={Link} to="work">Work</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Header;