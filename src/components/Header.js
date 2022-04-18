import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import '../App.css';
import logo from '../image/logo.svg';
function Header() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">
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
                            <Nav.Link href="#Home">Home</Nav.Link>
                            <Nav.Link href="#AboutUs">About us</Nav.Link>
                            <Nav.Link href="#Work">Work</Nav.Link>
                            <Nav.Link href="#Info">Info</Nav.Link>
                            <Nav.Link href="#ContactUs">Contact us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    )
}

export default Header;