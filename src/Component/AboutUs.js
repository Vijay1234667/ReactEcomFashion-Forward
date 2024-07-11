import './css/About.css';

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import AboutPerson from './assets/AboutPerson.jpg'
function AboutPage() {
    return (
        <>
            <section className="About-us-Page-Section">
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-lg-5">
                            <div className="form-body-content">
                                <h5>Interested in working together? Let’s talk. Just Say Hi!</h5>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">What’s your name</label>
                                    <input  type="email" placeholder="Name" className="form-control"
                                        id="exampleFormControlInput1" required />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Email Address</label>
                                    <input  type="email" className="form-control" placeholder="Email"
                                        id="exampleFormControlInput1" required/>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>

                                <div className="mb-3">
                                    <a href="/" type='submit' className="btn Contact-btn">Contact Me</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 ">
                            <div className="about-right-section">
                                <div className="mb-3">
                                    <img className="img-fluid rounded-circle" src={AboutPerson} alt=""
                                        width="70px"/>
                                </div>
                                <div className="mb-3">
                                    <h3>John Carter</h3>
                                    <p>Head of Engineering at Google</p>
                                </div>
                                <div className="d-flex align-items-baseline mb-2">
                                    <div>
                                        <a href="/"><i className="fa-solid fa-location-dot fs-5"></i></a>
                                    </div>
                                    <div className="ms-3">
                                        <h5>Address:</h5>
                                        <p>1802 Ruckman RoadOklahoma City, OK 73116</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-baseline">
                                    <div>
                                        <a href="/"><i className="fa-solid fa-phone fs-5 text-success"></i></a>
                                    </div>
                                    <div className="ms-3">
                                        <h5>Phone:</h5>
                                        <p>+91 9137168732</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-baseline">
                                    <div>
                                        <a href="/"><i className="fa-solid fa-envelope fs-5 text-danger"></i></a>
                                    </div>
                                    <div className="ms-3">
                                        <h5>Email</h5>
                                        <p>Onlne@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <ul className="About-us-social">
                                <li><FacebookOutlinedIcon/></li>
                                <li><TwitterIcon/></li>
                                <li><LinkedInIcon/></li>
                                <li><InstagramIcon/></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
export default AboutPage;