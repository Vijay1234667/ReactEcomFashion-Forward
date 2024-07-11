import React from 'react'
import './css/Ourteam.css';

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import Vanessalaird from './assets/Vanessalaird.jpg'
import IreaEvans from './assets/IreaEvans.jpg'
import MasonCampbell from './assets/MasonCampbell.jpg'
import KavyaMalkova from './assets/KavyaMalkova.jpg'
import EvaMendes from './assets/EvaMendes.jpg'
import OliviaTaylor from './assets/OliviaTaylor.jpg'



import { Container } from 'react-bootstrap-v5'

const OurTeamPage = () => {
    return (
        <>
            <section className="our-team-section">
                <Container>
                    <div className="our-team-section-top-content text-center mb-5">
                        <h2>Dedicated & Passionate Team</h2>
                        <p>
                            Meet the Slick's crew - a dedicated and passionate team who wants to improve <br /> your
                            experience of
                            creating
                            websites.
                        </p>
                        <div className="hire-team-btn">
                            <a href="/" className="btn">HIRE OUR TEAM</a>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6 animate__animated animate__fadeInLeft">
                            <div className="card">
                                <img className="img-fluid rounded-circle card-img-top"
                                    src={Vanessalaird} alt="Vanessalaird" />
                                <div className="card-body text-center">
                                    <h4>Vanessa laird</h4>
                                    <h6>CEO</h6>
                                    <a href="/"><span><TwitterIcon /></span>@vanessalaird</a>
                                    <div className="">
                                        <ul className="Team-Social-left-icon p-0">
                                            <li><FacebookOutlinedIcon /></li>
                                            <li><TwitterIcon /></li>
                                            <li><LinkedInIcon /></li>
                                            <li><InstagramIcon /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 animate__animated animate__fadeInDown">
                            <div className="card">
                                <img className="img-fluid rounded-circle card-img-top" src={IreaEvans}
                                    alt="IreaEvans" />
                                <div className="card-body text-center">
                                    <h4>Irea Evans</h4>
                                    <h6>DIRECTOR</h6>
                                    <a className="text-danger" href="/"><span><InstagramIcon /></span>ireaevans</a>
                                    <div className="">
                                        <ul className="Team-Social-left-icon p-0">
                                            <li><FacebookOutlinedIcon /></li>
                                            <li><TwitterIcon /></li>
                                            <li><LinkedInIcon /></li>
                                            <li><InstagramIcon /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 animate__animated animate__fadeInRight">
                            <div className="card">
                                <img className="img-fluid rounded-circle card-img-top"
                                    src={MasonCampbell} alt="" />
                                <div className="card-body text-center">
                                    <h4>Mason Campbell</h4>
                                    <h6>MANAGER</h6>
                                    <a href="/" className="text-info">
                                        <span><FacebookOutlinedIcon /></span>masoncampbell</a>
                                    <div className="">
                                        <ul className="Team-Social-left-icon p-0">
                                            <li><FacebookOutlinedIcon /></li>
                                            <li><TwitterIcon /></li>
                                            <li><LinkedInIcon /></li>
                                            <li><InstagramIcon /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 animate__animated animate__fadeInLeft">
                            <div className="card">
                                <img className="img-fluid rounded-circle card-img-top"
                                    src={KavyaMalkova} alt="KavyaMalkova" />
                                <div className="card-body text-center">
                                    <h4>Kavya Malkova</h4>
                                    <h6>FRONT END CODER</h6>
                                    <a className="text-info" href="/"><span><TwitterIcon /></span>natashamalkova</a>
                                    <div className="">
                                        <ul className="Team-Social-left-icon p-0">
                                            <li><FacebookOutlinedIcon /></li>
                                            <li><TwitterIcon /></li>
                                            <li><LinkedInIcon /></li>
                                            <li><InstagramIcon /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 animate__animated animate__fadeInUp">
                            <div className="card">
                                <img className="img-fluid rounded-circle card-img-top" src={EvaMendes}
                                    alt="EvaMendes" />
                                <div className="card-body text-center">
                                    <h4>Eva Mendes</h4>
                                    <h6>BACK END GENIE</h6>
                                    <a href="/" className="text-warning"><span><InstagramIcon /></span>evamendes</a>
                                    <div className="">
                                        <ul className="Team-Social-left-icon p-0">
                                            <li><FacebookOutlinedIcon /></li>
                                            <li><TwitterIcon /></li>
                                            <li><LinkedInIcon /></li>
                                            <li><InstagramIcon /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 animate__animated animate__fadeInRight">
                            <div className="card">
                                <img className="img-fluid rounded-circle card-img-top"
                                    src={OliviaTaylor} alt="OliviaTaylor" />
                                <div className="card-body text-center">
                                    <h4>Olivia Taylor</h4>
                                    <h6>HAPPINESS ENGINEER</h6>
                                    <a className="text-primary" href="/"><span><LinkedInIcon /></span>oliviataylor</a>
                                    <div className="">
                                        <ul className="Team-Social-left-icon p-0">
                                            <li><FacebookOutlinedIcon /></li>
                                            <li><TwitterIcon /></li>
                                            <li><LinkedInIcon /></li>
                                            <li><InstagramIcon /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </Container >
            </section >
        </>

    )
}

export default OurTeamPage
