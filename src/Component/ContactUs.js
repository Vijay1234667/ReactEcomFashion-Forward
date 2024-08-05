import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import FmdGoodIcon from '@mui/icons-material/FmdGood';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import EmailIcon from '@mui/icons-material/Email';

import { Container } from 'react-bootstrap-v5'
import BreadcrumbFixedTop from './BreadcrumbFixedTop';
const ContactUsPage = () => {
    return (
        <>
    <BreadcrumbFixedTop Title="Contact" Subtitle="Contact"/>
            <section className="contact-us-section">
                <Container>
                    <h2 className='text-center'>Contact With US</h2>
                    <p className='text-center sameparacolor'>
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
                    </p>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <p>Do you have any questions, suggestions, or inquiries? Feel free to
                                contact
                                anytime to get in touch with our team. We're always ready to assist you
                                with anything.
                            </p>
                            <div>
                                <ul className="contact-additional-info p-0">
                                    <li>
                                        <p><span><FmdGoodIcon /></span><a href='/'><span
                                            className="px-2">Powai
                                            Mumbai-400076</span></a></p>
                                    </li>
                                    <li>
                                        <p><span><AddIcCallIcon /></span><a href='/'><span
                                            className="px-2">+
                                            9137168732</span></a></p>
                                    </li>
                                    <li>
                                        <p><span><AddIcCallIcon /></span><a href='/'><span
                                            className="px-2">+
                                            9137168732</span></a></p>
                                    </li>
                                    <li>
                                        <p><span><EmailIcon /></span><a href='/'><span
                                            className="px-2">vykumar381@gamil.com</span></a></p>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <ul className="contact-us-left-social p-0">
                                    <li>
                                        <a href='/'><FacebookOutlinedIcon /></a>
                                    </li>
                                    <li>
                                        <a href='/'><TwitterIcon /></a>
                                    </li>
                                    <li>
                                        <a href='/'><LinkedInIcon /></a>
                                    </li>
                                    <li>
                                        <a href='/'><InstagramIcon /></a>
                                    </li>

                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12">
                            <form action='https://formspree.io/f/xdoqjkpj' method='POST'>
                                <div className="form-group row">
                                    <label for="name" className="col-lg-12 col-form-label " >Full Name</label>
                                    <div className=" mb-2">
                                        <input className="box" type="text" name="name" id="name" placeholder="Enter Your Name"
                                            required /><br />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-form-label" for="email">Email</label>
                                    <div className=" mb-2">
                                        <input className="box" type="email" autoCapitalize='off' name="email" id="email" placeholder="Enter Your Email "
                                            required /><br />
                                    </div>
                                </div>

                                <div className="form-group row mb-2">
                                    <div className="">
                                        <label for="exampleFormControlTextarea1" autoCapitalize='off' className="form-label">Message</label>
                                        <input className="box" type="text" name="Message" id="phone" placeholder="Message "
                                            required /><br />
                                        <br />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <div className="contact-us-submit-btn">
                                        <input type="submit" id="submitDetails" className="btn" autoCapitalize='off' name="submitDetails"
                                            value="Send Message" /><br />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </Container>
            </section>
            <div className="container-fluid p-0">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30156.827198783183!2d72.88444935500587!3d19.12504705371045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8081c1d7b43%3A0xbaf100c54b8be366!2sPowai%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1715323659904!5m2!1sen!2sin"
                    width="100%" height="450" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    )
}

export default ContactUsPage
