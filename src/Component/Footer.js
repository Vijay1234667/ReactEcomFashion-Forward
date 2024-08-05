import React from "react";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import ELOGOS from './assets/ELOGOS.png'

import footpost1 from './assets/footpost1.png'
import footpost2 from './assets/footpost2.jpg'
import FooterPayment from './assets/FooterPayment.png'
import { Link } from "react-router-dom";

function FooterPage() {
    return (
        <>
            <footer className="footer-section">
                <div className="container">
                    <div className="row footer-top">
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="footer-left-sec">
                                <img className="img-fluid d-block m-auto mb-3" src={ELOGOS} alt="shopimage" width="190px"
                                    height="200px" />
                                <p className="text-center">
                                    consectetur adipisicing elit. Laudantium fugit, sunt tenetur quid.
                                </p>
                                <div className="left-socials-icons text-center">
                                    <a href="/"><FacebookOutlinedIcon /></a>
                                    <a href="/"><TwitterIcon /></a>
                                    <a href="/"><LinkedInIcon /></a>
                                    <a href="/"><InstagramIcon /></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-12 mb-md-5 mb-0">
                            <h6>QUICK LINKS</h6>
                            <div className="row mb-md-0 mb-4">
                                <div className="col-lg-6 col-6 footer-column-links">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link active" href="index.html">HOME</a>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link active" to="filtercategory">PRODUCT</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link active" to="blogs">BLOGS</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link active" to="contactus">CONTACT</Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-lg-6 col-6 footer-column-links">
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <Link className="nav-link active" to="gallery">GALLERY</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link active" to="paymentform">PAYMENT FORM</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link active" to="profile">PROFILE</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link active" to="projects">OUR PROJECT</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-10 mb-2">
                            <h6>SOME POSTS</h6>
                            <div className="footer-post-sec">
                                <div>
                                    <a href="/"><img className="img-fluid" src={footpost1}
                                        alt="shopimage" />
                                    </a>
                                </div>
                                <div className="ms-2">
                                    <span className="footer-date">APR 07 / 15</span>
                                    <p>FUSCE TINCIDUNT ACCUMSAN PRETIUM </p>
                                </div>
                            </div>

                            <div className="footer-post-sec">
                                <div>
                                    <a href="/"><img className="img-fluid" src={footpost2}
                                        alt="shopimage" />
                                    </a>
                                </div>
                                <div className="ms-2">
                                    <span className="footer-date">APR 07 / 15</span>
                                    <p>FUSCE TINCIDUNT ACCUMSAN PRETIUM</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 ">
                            <h6>POPULAR TAGS</h6>
                            <div className="footer-column-links-tags">
                                <Link to="deliveryaddress">HEADPHONESS</Link>
                                <Link to="/">successfull</Link>
                                <Link to="addtocart">NEW</Link>
                                <Link to="/">WIRELESS</Link>
                                <Link to="/">CABLES</Link>
                                <a href="/"> BRANDS</a>
                                <a href="/">CASES</a>
                                <a href="/"> CABLES</a>
                                <a href="/"> SHIRT</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
                <div className="container-fluid">
                    <div className="footer-delevery-process text-white text-center">
                        <div className="row justify-content-center">
                            <div className="col-lg-2 col-md-6 col-6 mb-0 mb-md-3">
                                <i className="fa-solid fa-thumbs-up fs-5 mb-2"></i>
                                <h6>Fast & Secure Delivery</h6>
                                <p>
                                    Tell about your service.
                                </p>
                            </div>
                            <div className="col-lg-2 col-md-6 col-10">
                                <i className="fa-solid fa-sack-dollar fs-5 mb-2"></i>
                                <h6>Money Back Guarantee</h6>
                                <p>
                                    Within 10 days. </p>
                            </div>

                            <div className="col-lg-2 col-md-6 col-6">
                                <i className="fa-solid fa-truck fs-5 mb-2"></i>
                                <h6>24 Hour Return Policy</h6>
                                <p>
                                    No question ask.
                                </p>
                            </div>
                            <div className="col-lg-2 col-md-6 col-10">
                                <i className="fa-solid fa-right-left fs-5 mb-2"></i>
                                <h6>
                                    Pro Quality Support</h6>
                                <p>
                                    24/7 Live support.
                                </p>
                            </div>
                            <div className="col-lg-2 col-md-6 col-6">
                                <i className="fa-solid fa-lock fs-5 mb-2"></i>
                                <h6>Secure Checkout</h6>
                                <p>
                                    full Guarantee
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright-section">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-lg-4 col-md-6 my-2 col-12">
                                <p>
                                    © 2024 All rights reserved. Development by <a className="agency-copy"
                                        href="/">Fashion Forward</a>
                                </p>
                            </div>
                            <div className="col-lg-4 mb-2 col-md-6 col-12">
                                <div className="footer-social-icons">
                                    <Link to="privacy" className=" text-decoration-none text-white me-2">Privacy Policy</Link> <span
                                        className="text-white">|</span>
                                    <Link to="terms" className=" text-decoration-none text-white ms-2">Terms And Condition</Link>
                                </div>
                            </div>
                            <div className="col-lg-4 co-12">
                                <div className="footer-payment-icons">
                                    <img className="img-fluid" src={FooterPayment} alt="shopimage" width="210" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
export default FooterPage;