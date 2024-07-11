import React from 'react'
import Toptitlehead from './Toptitlehead'
import './css/Project.css'


// import project1 from './assets/project1.png'
// import Project2 from './assets/project2.png'
// import Project3 from './assets/project3.png'
// import Project4 from './assets/project4.png'
// import Project5 from './assets/project5.png'
// import Project6 from './assets/project6.png'
// import Project7 from './assets/project7.png'
// import Project8 from './assets/project8.png'
// import Project9 from './assets/project9.png'
// import Project10 from './assets/project10.png'

// import project1mob from './assets/project1mob.png'
// import project2mob from './assets/project2mob.png'
// import project3mob from './assets/project3mob.png'
// import project4mob from './assets/project4mob.png'
// import project5mob from './assets/project5mob.png'
// import project6mob from './assets/project6mob.png'
// import project7mob from './assets/project7mob.png'
// import project8mob from './assets/project8mob.png'
// import project9mob from './assets/project9mob.png'
// import project10mob from './assets/project10mob.png'



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



const ProjectsPage = () => {
    return (
        <>
            <Toptitlehead title="Project" />
            <section className="Freelancing-section">
                <div className="container">
                    <div className="Freelancing-section-Body text-center">
                        <div className="row">
                            <div className="col-md-12 col-12">
                                <h4 className="mb-3"> i am <span className="freelancing-green-color ">available</span> for freelancing</h4>
                                <p>Lorem ipsum dolor sit <span className="d-block d-sm-inline">amet consectetur adipisicing elit</span>.
                                </p>
                                <div className="Hire-Me-btn">
                                    <a href="/" className="btn">HIRE ME</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-work-data">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-6 text-center mb-4 mb-md-0">
                            <h2 className="counter-numbers" data-number="2000">0+</h2>
                            <p>Project Completed</p>
                        </div>
                        <div className="col-lg-3 col-6 text-center">
                            <h2 className="counter-numbers" data-number="6000">0+</h2>
                            <p>Happy Clients</p>
                        </div>
                        <div className="col-lg-3 col-6 text-center">
                            <h2 className="counter-numbers" data-number="5000">0+</h2>
                            <p>Cup Of Coffee</p>
                        </div>
                        <div className="col-lg-3 col-6 text-center">
                            <h2 className="counter-numbers" data-number="3000">0+</h2>
                            <p>Real Proffessionals</p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="our-project-section">
                <div className="container ">
                    <div className="our-project-section-top-content text-center mb-5">
                        <h2>All Projects</h2>
                        <p>
                            Meet the Slick's crew - a dedicated and passionate team who wants to improve <br/> your
                                experience of
                                creating
                                websites.
                        </p>
                        <div className="hire-team-btn">
                            <a href="/" className="btn">OUR PROJECTS</a>
                        </div>
                    </div>

                    <div className="row popup-view1">
                        <div className="col-lg-4 col-sm-6 animate__animated animate__fadeInLeft">
                            <div className="card">
                                <a className="popup-view" href="/"><img className="img-fluid  card-img-top"
                                    src={ProjectCard} alt="ShopImage" /></a>
                                <div className="card-body text-center">
                                    <a href="/"><span><i className="fa-brands fa-twitter"></i></span>Project1</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 animate__animated animate__fadeInDown">
                            <div className="card">
                                <a className="popup-view" href="/"><img className="img-fluid card-img-top"
                                    src={ProjectCard2} alt="ShopImage" /></a>
                                <a className="popup-view" href="/"><img className="img-fluid card-img-top" alt='/' /></a>
                                <div className="card-body text-center">
                                    <a className="text-danger" href="/"><span><i
                                        className="fa-brands fa-google-plus-g mx-1"></i></span>Project2</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 animate__animated animate__fadeInRight">
                            <div className="card">
                                <a href="/"><img className="img-fluid  card-img-top" src={ProjectCard3}
                                    alt="ShopImage" /></a>
                                <a href="/"><img className="img-fluid  card-img-top" alt='/' /></a>
                                <div className="card-body text-center">
                                    <a href="/" className="text-info">
                                        <span><i className="fa-brands fa-facebook mx-1"></i></span>Project3</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 animate__animated animate__fadeInLeft">
                            <div className="card">
                                <a href="/"><img className="img-fluid  card-img-top" src={ProjectCard4}
                                    alt="ShopImage" /></a>
                                <a href="/"><img className="img-fluid  card-img-top" alt='/' /></a>
                                <div className="card-body text-center">
                                    <a className="text-info" href="/"><span><i
                                        className="fa-brands fa-github mx-1"></i></span>Project4</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 animate__animated animate__fadeInUp">
                            <div className="card">
                                <a href="/"><img className="img-fluid card-img-top" src={ProjectCard5}
                                    alt="ShopImage" /></a>
                                <a href="/"><img className="img-fluid card-img-top" alt='/' /></a>
                                <div className="card-body text-center">
                                    <a href="/" className="text-warning"><span><i
                                        className="fa-brands fa-instagram mx-1"></i></span>Project5</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 animate__animated animate__fadeInRight">
                            <div className="card">
                                <a href="/"><img className="img-fluid card-img-top" src={ProjectCard6}
                                    alt="ShopImage" /></a>
                                <a href="/"><img className="img-fluid card-img-top" alt='/' /></a>
                                <div className="card-body text-center">
                                    <a className="text-primary" href="/"><span><i
                                        className="fa-brands fa-linkedin mx-1"></i></span>Project6</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 animate__animated animate__fadeInRight">
                            <div className="card">
                                <a href="/"><img className="img-fluid card-img-top" src={ProjectCard7}
                                    alt="ShopImage" /></a>
                                <a href="/"><img className="img-fluid card-img-top" alt='/' /></a>
                                <div className="card-body text-center">
                                    <a className="text-primary" href="/"><span><i
                                        className="fa-brands fa-linkedin mx-1"></i></span>Project7</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 animate__animated animate__fadeInRight">
                            <div className="card">
                                <a href="/"><img className="img-fluid card-img-top" src={ProjectCard8}
                                    alt="ShopImage" /></a>
                                <a href="/"><img className="img-fluid card-img-top" alt='/' /></a>
                                <div className="card-body text-center">
                                    <a className="text-primary" href="/"><span><i
                                        className="fa-brands fa-linkedin mx-1"></i></span>Project8</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 animate__animated animate__fadeInRight">
                            <div className="card">
                                <a href="/"><img className="img-fluid card-img-top" src={ProjectCard9}
                                    alt="ShopImage" /></a>
                                <a href="/"><img className="img-fluid card-img-top" alt='/' /></a>
                                <div className="card-body text-center">
                                    <a className="text-primary" href="/"><span><i
                                        className="fa-brands fa-linkedin mx-1"></i></span>Project9</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 animate__animated animate__fadeInRight">
                            <div className="card">
                                <a href="/"><img className="img-fluid card-img-top" src={ProjectCard10}
                                    alt="ShopImage" /></a>
                                <a href="/"><img className="img-fluid card-img-top" alt='/' /></a>
                                <div className="card-body text-center">
                                    <a className="text-primary" href="/"><span><i
                                        className="fa-brands fa-linkedin mx-1"></i></span>Project10</a>
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
