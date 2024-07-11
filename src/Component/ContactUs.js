import React from 'react'
import './css/ContactUs.css'

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import FmdGoodIcon from '@mui/icons-material/FmdGood';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import EmailIcon from '@mui/icons-material/Email';
import phoneblue from "./img/phoneblue.gif"

import Toptitlehead from './Toptitlehead'
import { Container } from 'react-bootstrap-v5'

const ContactUsPage = () => {
    return (
        <>
            <Toptitlehead title="ContactUs" />
            <section class="contact-us-section">
                <Container>
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-12">
                            <p class="contact-top-info">Do you have any questions, suggestions, or inquiries? Feel free to
                                contact
                                anytime to get in touch with our team. We're always ready to assist you
                                with anything related to our expert reviews, recommendations, or other relevant
                                information. Reach out to us now, and let us help you out!
                            </p>

                            <div>
                                <ul class="contact-additional-info p-0">
                                    <li>
                                        <p><FmdGoodIcon/><span class="px-2">Powai
                                            Mumbai-400076</span></p>
                                    </li>
                                    <li>
                                        <p><span><AddIcCallIcon/></span><a href='/'><span
                                            class="px-2">+
                                            9137168732</span></a></p>
                                    </li>
                                    <li>
                                        <p><span><AddIcCallIcon/></span><a href='/'><span
                                            class="px-2">+
                                            9137168732</span></a></p>
                                    </li>
                                    <li>
                                        <p><span><EmailIcon/></span><a href='/'><span
                                            class="px-2">vykumar381@gamil.com</span></a></p>
                                    </li>
                                </ul>
                            </div>


                            <div>
                                <ul class="contact-us-left-social p-0">
                                    <li>
                                        <a href='/'><FacebookOutlinedIcon/></a>
                                    </li>
                                    <li>
                                        <a href='/'><TwitterIcon/></a>
                                    </li>
                                    <li>
                                        <a href='/'><LinkedInIcon/></a>
                                    </li>
                                    <li>
                                        <a href='/'><InstagramIcon/></a>
                                    </li>
                                 
                                </ul>
                                <div class="">
                                    <a href='/' class="btn text-decoration-none border-primary border-2"><img src={phoneblue} alt="" width="37px" /> Contact Now</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-6 col-12">
                            <form>
                                <div class="form-group row">
                                    <label for="name" class="col-lg-12 col-form-label " >Name</label>
                                    <div class=" mb-2">
                                        <input class="box" type="text" name="name" id="name" placeholder="Name"
                                            required /><br />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label  class="col-form-label" for="email">Email</label>
                                    <div class=" mb-2">
                                        <input class="box" type="email" name="email" id="email" placeholder="E-Mail "
                                            required /><br />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-form-label " for="password">Password</label>
                                    <div class=" mb-3">
                                        <input class="box" type="password" name="password" id="password"
                                            placeholder="Password " required /><br />
                                    </div>
                                </div>

                                <div class="form-group row mb-2">
                                    <div class="">
                                        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                        <input class="box" type="text" name="Message" id="phone" placeholder="Message "
                                            required /><br />
                                        <br />
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <div class="contact-us-submit-btn">
                                        <input type="submit" id="submitDetails" class="btn" name="submitDetails"
                                            value="Submit" /><br />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </Container>
            </section>
            <div class="container-fluid p-0">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30156.827198783183!2d72.88444935500587!3d19.12504705371045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8081c1d7b43%3A0xbaf100c54b8be366!2sPowai%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1715323659904!5m2!1sen!2sin"
                    width="100%" height="450"  allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    )
}

export default ContactUsPage
