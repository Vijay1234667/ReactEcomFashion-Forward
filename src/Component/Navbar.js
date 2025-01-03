import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import EcomLogo1 from './assets/EcomLogo1.png';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavBar() {

    return (
        <>
            <section className="">
                <>
                    {['lg',].map((expand) => (
                        <Navbar key={expand} expand={expand}>
                            <Container>
                                <Navbar.Brand>
                                    <NavLink to="/">
                                    <img className="img-fluid" src={EcomLogo1} alt="EcomLogo1" width="200px" />
                                    </NavLink>
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                                <Navbar.Offcanvas
                                    id={`offcanvasNavbar-expand-${expand}`}
                                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                    placement="end"
                                >
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                            <img src={EcomLogo1} className="img-fluid" width="180px" alt="" />
                                        </Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body className="">
                                        <Nav className=" Offcanvasbodynav justify-content-center flex-grow-1">
                                            <NavLink className="navlinks" to="/">HOME</NavLink>
                                            <NavLink className="navlinks" to="about">ABOUT US</NavLink>
                                            <NavLink className="navlinks" to="filtercategory">PRODUCT</NavLink>
                                            <NavLink className="navlinks" to="blogs">BLOGS</NavLink>
                                            <NavLink className="navlinks" to="contactus">CONTACT</NavLink>
                                            <NavLink className="navlinks" to="faq">FAQ</NavLink>
                                        </Nav>
                                        <Nav className=" Offcanvasbodynav justify-content-center ">
                                            <NavLink to="/" className="btn btn-white nav-offer-btn d-none d-md-block">20%OFF</NavLink>
                                        </Nav>
                                    </Offcanvas.Body>
                                </Navbar.Offcanvas>
                            </Container>
                        </Navbar>
                    ))}
                </>
            </section>
        </>
    );
}

export default NavBar;