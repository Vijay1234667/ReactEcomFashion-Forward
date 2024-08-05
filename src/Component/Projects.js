import React from 'react'
import './css/Project.css'

import ProjectCard from './assets/ProjectCard.png'
import ProjectCard2 from './assets/ProjectCard2.png'
import ProjectCard3 from './assets/ProjectCard3.png'
import ProjectCard4 from './assets/ProjectCard4.png'
import ProjectCard5 from './assets/ProjectCard5.png'
import ProjectCard6 from './assets/ProjectCard6.png'
import ProjectCard7 from './assets/ProjectCard7.png'
import ProjectCard8 from './assets/ProjectCard8.png'
import ProjectCard9 from './assets/ProjectCard9.png'
import ProjectCard10 from './assets/ProjectCard10.png'
import BreadcrumbFixedTop from './BreadcrumbFixedTop'

const ProjectsPage = () => {
    return (
        <>
            <BreadcrumbFixedTop Title="Projects" Subtitle="Project" />
            <section className="section-work-data">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-6 text-center mb-4 mb-md-0">
                            <h2 className="counter-numbers" data-number="2000">2220+</h2>
                            <p>Project Completed</p>
                        </div>
                        <div className="col-lg-3 col-6 text-center">
                            <h2 className="counter-numbers" data-number="6000">4440+</h2>
                            <p>Happy Clients</p>
                        </div>
                        <div className="col-lg-3 col-6 text-center">
                            <h2 className="counter-numbers" data-number="5000">3320+</h2>
                            <p>Cup Of Coffee</p>
                        </div>
                        <div className="col-lg-3 col-6 text-center">
                            <h2 className="counter-numbers" data-number="3000">4550+</h2>
                            <p>Real Proffessionals</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="our-project-section">
                <div className="container ">
                    <div className="our-project-section-top-content text-center mb-5">
                        <h4 className='h4color'>All Projects</h4>
                        <p>
                            Meet the Slick's crew - a dedicated and passionate team who wants to improve <br /> your experience of creating websites.
                        </p>
                        <div className="">
                            <a href="/" className="btn">OUR PROJECTS</a>
                        </div>
                    </div>

                    <div className="row popup-view1">
                        <div className="col-lg-4 col-sm-6 animate__animated animate__fadeInLeft">
                            <div className="card">
                                <img className="img-fluid  card-img-top"
                                    src={ProjectCard} alt="ShopImage" />
                                <div className="card-body text-center">
                                    <span></span>Project1
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 animate__animated animate__fadeInDown">
                            <div className="card">
                                <img className="img-fluid card-img-top"
                                    src={ProjectCard2} alt="ShopImage" />
                                <div className="card-body text-center">
                                    <span>Project2</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 animate__animated animate__fadeInDown">
                            <div className="card">
                                <img className="img-fluid card-img-top"
                                    src={ProjectCard3} alt="ShopImage" />
                                <div className="card-body text-center">
                                    <span>Project2</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 animate__animated animate__fadeInDown">
                            <div className="card">
                                <img className="img-fluid card-img-top"
                                    src={ProjectCard4} alt="ShopImage" />
                                <div className="card-body text-center">
                                    <span>Project2</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 animate__animated animate__fadeInDown">
                            <div className="card">
                                <img className="img-fluid card-img-top"
                                    src={ProjectCard5} alt="ShopImage" />
                                <div className="card-body text-center">
                                    <span>Project2</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 animate__animated animate__fadeInDown">
                            <div className="card">
                                <img className="img-fluid card-img-top"
                                    src={ProjectCard6} alt="ShopImage" />
                                <div className="card-body text-center">
                                    <span>Project2</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 animate__animated animate__fadeInDown">
                            <div className="card">
                                <img className="img-fluid card-img-top"
                                    src={ProjectCard7} alt="ShopImage" />
                                <div className="card-body text-center">
                                    <span>Project2</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 animate__animated animate__fadeInDown">
                            <div className="card">
                                <img className="img-fluid card-img-top"
                                    src={ProjectCard8} alt="ShopImage" />
                                <div className="card-body text-center">
                                    <span>Project2</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 animate__animated animate__fadeInDown">
                            <div className="card">
                                <img className="img-fluid card-img-top"
                                    src={ProjectCard9} alt="ShopImage" />
                                <div className="card-body text-center">
                                    <span>Project2</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 animate__animated animate__fadeInDown">
                            <div className="card">
                                <img className="img-fluid card-img-top"
                                    src={ProjectCard10} alt="ShopImage" />
                                <div className="card-body text-center">
                                    <span>Project2</span>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            </section >
        </>
    )
}

export default ProjectsPage
