import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import '../../App.css';
import logo from '../../image/logo.svg';
function Header() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="home">
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
                            <Nav.Link href="home">HOME</Nav.Link>
                            <Nav.Link href="aboutUs">ABOUT US</Nav.Link>
                            <Nav.Link href="work">OUR BUSINESS</Nav.Link>
                            <Nav.Link href="info">SERVICES</Nav.Link>
                            <Nav.Link href="info">OUR WORK</Nav.Link>
                            <Nav.Link href="info">BUSINESSWALL</Nav.Link>
                            <Nav.Link href="contactUs">CONTACT US</Nav.Link>
                            <Nav.Link href="contactUs">CAREER</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    )
}

export default Header;