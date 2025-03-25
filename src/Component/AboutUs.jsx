import React, { useEffect } from 'react'


import BreadcrumbFixedTop from './BreadcrumbFixedTop';

import { Container } from 'react-bootstrap-v5'
import AboutTeamCard from './AboutTeamCard';

import PhoneIcon from '@mui/icons-material/Phone';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';

import Vanessalaird from './assets/Vanessalaird.jpg'
import IreaEvans from './assets/IreaEvans.jpg'
import MasonCampbell from './assets/MasonCampbell.jpg'
import KavyaMalkova from './assets/KavyaMalkova.jpg'
import EvaMendes from './assets/EvaMendes.jpg'
import OliviaTaylor from './assets/OliviaTaylor.jpg'
import AboutLeft1 from './assets/AboutLeft1.webp'
import AboutLeft2 from './assets/AboutLeft2.webp'
import AboutLeft3 from './assets/AboutLeft3.webp'
import AboutLeft4 from './assets/AboutLeft4.webp'
import AboutPerson from './assets/AboutPerson.jpg'
import ourteemcircleimg from './assets/ourteemcircleimg.png'
import AboutFirstRoundedImg from './assets/AboutFirstRoundedImg.jpg'


import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';

import HomeNewslaterSection from './HomeNewslaterSection';
import Typed from "typed.js";



const AboutPage = () => {

    useEffect(() => {
        const options = {
            strings: ["Frontend Developer", "Web Developer", "React Developer", "Web Designer"],
            typeSpeed: 180,
            backSpeed: 180,
            loop: true,
        };
        const typed = new Typed(".auto-type-text-about", options);

        return () => {
            typed.destroy();
        };
    }, []);


    return (
        <>
            <BreadcrumbFixedTop Title="About" Subtitle="About" />
            <section className='About-us-Page-Section padding-all'>
                <section className='Aboutus-Our-Shop'>
                    <Container>
                        <div className="row flex-column-reverse flex-md-row justify-content-center align-items-center md-mb-5 mb-4">
                            <div className="col-lg-6 mb-4 mb-md-0">
                                <div>
                                    <img className='img-fluid rounded-tp-full' src={AboutFirstRoundedImg} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className='About-Our-Shop mb-3'>
                                    <h4 className='orange-color'>I'AM <span className='auto-type-text-about'></span></h4>
                                    <h5>Focusing on Quality
                                        Material, Good Design</h5>
                                    <p className='text-paragraph'>
                                        Donec non interdum nisl. Sed ut est ac lacus sodales convallis. Nam non velit justo. Mauris vel ultrices tortor. Proin bibendum magna porttitor porttitor suscipit. Praesent sit amet consequat eros. Quisque ullamcorper ornare vulputate. Nam sodales sem id diam sollicitudin, id lobortis tellus tincidunt.
                                    </p>
                                    <div className='d-flex  align-items-center mb-4'>
                                        <div>
                                            <PhoneIcon className='fs-3' />
                                        </div>
                                        <div className='ms-3'>
                                            <h5>Phone</h5>
                                            <a className='post-head-orange-text' href="">+91 (536)-(222)-(8892)</a>
                                        </div>
                                    </div>
                                    <div className='d-flex'>
                                        <div>
                                            <AddLocationAltOutlinedIcon className='fs-3' />
                                        </div>
                                        <div className='ms-3'>
                                            <h5>Location</h5>
                                            <a className='post-head-orange-text' href="">View on Google map</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                <section className='AboutIcons-Section'>
                    <Container>
                        <div className="row g-3  justify-content-evenly text-center mb-5">
                            <div className='col-lg-2 col-6 About-portfolio-card'>
                                <IntegrationInstructionsIcon className='mb-3 fs-1' />
                                <div>
                                    <h5>Ui/US Design</h5>
                                </div>
                            </div>
                            <div className='col-lg-2 col-6 About-portfolio-card'>
                                <MobileScreenShareIcon className='mb-3 fs-1' />
                                <div>
                                    <h5>Web Development
                                    </h5>
                                </div>
                            </div>
                            <div className='col-lg-2 col-6 About-portfolio-card'>
                                <PhoneIphoneOutlinedIcon className='mb-3 fs-1' />
                                <div>
                                    <h5>Mobile Apps</h5>
                                </div>
                            </div>
                            <div className='col-lg-2 col-6 About-portfolio-card'>
                                <SearchOutlinedIcon className='mb-3 fs-1' />
                                <div>
                                    <h5>SEO</h5>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                <section className='AboutUs-Our-Work-Section'>
                    <Container>
                        <h2 className='text-center mb-5' >OUR WORKS</h2>
                        <div className="row flex-column-reverse flex-md-row  justify-content-center align-items-center  mb-5">
                            <div className="col-lg-4">
                                <div>
                                    <img className='img-fluid mb-3' src={AboutLeft1} alt="" />
                                </div>
                            </div>
                            <div className="Aboutus-Two-Cards-Section col-lg-4 mb-3">
                                <h6 className=''>Web Design</h6>
                                <h3 className='orange-color'>Cassette tape</h3>
                                <p className='mb-3 text-paragraph'>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.  iusto quae architecto aspernatur repellendus?
                                </p>
                                <div className='d-flex align-items-center'>
                                    <img src={AboutPerson} alt="" />
                                    <div className='ms-3'>
                                        <h6>Jamie Jonson</h6>
                                        <span className='post-head-orange-text'>Avo.com</span>
                                    </div>
                                </div>
                                <div className='mt-4 transparent-btn'>
                                    <button className='btn'>VIEW PORTFOLIO</button>
                                </div>
                            </div>
                        </div>

                        <div className="row  justify-content-center align-items-center mb-5">
                            <div className="Aboutus-Two-Cards-Section col-lg-4 mb-3 ">
                                <h6>Application</h6>
                                <h3 className='orange-color'>Miniwall Clock</h3>
                                <p className='mb-3 text-paragraph'>
                                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                                </p>
                                <div className='d-flex align-items-center'>
                                    <img src={EvaMendes} alt="" />
                                    <div className='ms-3'>
                                        <h5 className='mb-0'>Jamie Jonson</h5>
                                        <span className='post-head-orange-text'>Avo.com</span>
                                    </div>
                                </div>
                                <div className='mt-4 transparent-btn'>
                                    <button className='btn'>VIEW PORTFOLIO</button>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div>
                                    <img className='img-fluid' src={AboutLeft2} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="row flex-column-reverse flex-md-row justify-content-center align-items-center mb-5">
                            <div className="col-lg-4">
                                <div>
                                    <img className='img-fluid' src={AboutLeft3} alt="" />
                                </div>
                            </div>
                            <div className="Aboutus-Two-Cards-Section col-lg-4 mb-3">
                                <h6>Web Design</h6>
                                <h3 className='orange-color'>Avo Portfolio </h3>
                                <p className='mb-3 text-paragraph'>
                                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                                </p>
                                <div className='d-flex align-items-center'>
                                    <img src={MasonCampbell} alt="" />
                                    <div className='ms-3'>
                                        <h5 className='mb-0'>Jamie Jonson</h5>
                                        <span className='post-head-orange-text'>Avo.com</span>
                                    </div>
                                </div>
                                <div className='mt-4 transparent-btn'>
                                    <button className='btn'>VIEW PORTFOLIO</button>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center align-items-center mb-5">
                            <div className="Aboutus-Two-Cards-Section col-lg-4 mb-3">
                                <h6>Web Development</h6>
                                <h3 className='orange-color'>Hand Writing</h3>
                                <p className='mb-3 text-paragraph'>
                                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                                </p>
                                <div className='d-flex align-items-center'>
                                    <img src={IreaEvans} alt="" />
                                    <div className='ms-3'>
                                        <h5 className='mb-0'>Jamie Jonson</h5>
                                        <span className='post-head-orange-text'>Avo.com</span>
                                    </div>
                                </div>
                                <div className='mt-4 transparent-btn'>
                                    <button className='btn'>VIEW PORTFOLIO</button>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div>
                                    <img className='img-fluid' src={AboutLeft4} alt="" />
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                <section className="our-team-section">
                    <Container>
                        <div className="our-team-section-top-content text-center mb-5">
                            <h2 className='font-h2'>Dedicated & Passionate Team</h2>
                            <img src={ourteemcircleimg} width={200} alt="" />
                            <p className='text-paragraph'>
                                Meet the Slick's crew - a dedicated and passionate team who wants to improve <br /> your experience of creating websites.
                            </p>
                            <div className="transparent-btn">
                                <a href="/" className="btn">HIRE OUR TEAM</a>
                            </div>
                        </div>
                        <div className="row">
                            <AboutTeamCard MemberImg={Vanessalaird} MemberName="Vanessa laird" MemberDesignation="CEO" MemberEmail="@vanessalaird" />
                            <AboutTeamCard MemberImg={IreaEvans} MemberName="Irea Evans" MemberDesignation="DIRECTOR" MemberEmail="@ireaevans" />
                            <AboutTeamCard MemberImg={MasonCampbell} MemberName="Mason Campbell" MemberDesignation="MANAGER" MemberEmail="masoncampbell" />
                            <AboutTeamCard MemberImg={KavyaMalkova} MemberName="Kavya Malkova" MemberDesignation="FRONT END CODER" MemberEmail="natashamalkova" />
                            <AboutTeamCard MemberImg={EvaMendes} MemberName="Eva Mendes" MemberDesignation="BACK END GENIE" MemberEmail="evamendes" />
                            <AboutTeamCard MemberImg={OliviaTaylor} MemberName="Olivia Taylor" MemberDesignation="HAPPINESS ENGINEER" MemberEmail="oliviataylor" />
                        </div >
                    </Container >
                </section>
                <section>
                    <HomeNewslaterSection />
                </section>
            </section>

        </>
    );
}
export default AboutPage;