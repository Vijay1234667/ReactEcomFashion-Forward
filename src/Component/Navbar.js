import { NavLink } from "react-router-dom";
import ELOGOS from './assets/ELOGOS.png'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
function NavBar() {


    return (
        <>
            <section className="navbar-section d-none d-md-block">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-baseline">
                        <div className="nav-sign-btn">
                            <a href="index.html" className=""><img src={ELOGOS} alt="logo" width="200px" /></a>
                        </div>
                        <ul className="navbar-bottom-nav">
                            <div className="d-flex mx-auto">
                                <li>
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="about">About Us</NavLink>
                                </li>
                                <li>
                                    <NavLink to="contactus">Contact</NavLink>
                                </li>
                                <li>
                                    <NavLink to="filtercategory">Product</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/cartsingleproduct/:id">Cart</NavLink>
                                </li>
                                <li>
                                    <NavLink to="blogs">Blogs</NavLink>
                                </li>
                                <li>
                                    <NavLink to="faq">FAQ's</NavLink>
                                </li>
                            </div>
                        </ul>
                        <div className="nav-sign-btn d-flex">
                            <div>
                                <NavLink to="login" className='btn'>LOGIN</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="d-md-none">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Navbar</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Link</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    );
}

export default NavBar;