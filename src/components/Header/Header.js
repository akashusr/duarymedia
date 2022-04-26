import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../App.css';
import logo from '../../image/logo.svg';
function Header() {
    return (
        <>
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
                            <Nav.Link as={Link} to="home">HOME</Nav.Link>
                            <Nav.Link as={Link} to="services">SERVICES</Nav.Link>
                            <Nav.Link as={Link} to="aboutUS">ABOUT US</Nav.Link>
                            <Nav.Link as={Link} to="contactUs">CONTACT US</Nav.Link>
                            <Nav.Link as={Link} to="career">CAREER</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    )
}

export default Header;