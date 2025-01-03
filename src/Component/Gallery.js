import React from 'react'
import { Container } from 'react-bootstrap-v5'

import BlogsRightImg1 from './assets/BlogsRightImg1.jpg'
import BlogsRightImg2 from './assets/BlogsRightImg2.jpg'
import BlogsRightImg3 from './assets/BlogsRightImg3.jpg'
import BlogsRightImg4 from './assets/BlogsRightImg4.jpg'
import BlogsRightImg5 from './assets/BlogsRightImg5.jpg'
import BlogsRightImg6 from './assets/BlogsRightImg6.jpg'
import BlogsRightImg7 from './assets/BlogsRightImg7.jpg'
import BlogsRightImg8 from './assets/BlogsRightImg8.jpg'
import BreadcrumbFixedTop from './BreadcrumbFixedTop';
import HomeNewslaterSection from './HomeNewslaterSection'


function GalleryPage() {
    return (
        <>
            <BreadcrumbFixedTop Title="Gallery" Subtitle="Gallary" />
            <section className="gallery pt-3">
                <Container>
                    <div className="row  gallery-content popup-view1">
                        <div className="col-12 col-md-6 col-lg-3 mb-3">
                            <a className="popup-view" href="homepageimages/product3.jpg">
                                <img className="img-fluid" src={BlogsRightImg1} alt="project-2.jpg" />
                            </a>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mb-3">
                            <a className="popup-view" href="homepageimages/product4.jpg">
                                <img className="img-fluid" src={BlogsRightImg2} alt="project-3.jpg" />
                            </a>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mb-3">
                            <a className="popup-view" href="homepageimages/product5.jpg">
                                <img className="img-fluid" src={BlogsRightImg3} alt="project-6.jpg" />
                            </a>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mb-3">
                            <a className="popup-view" href="homepageimages/product6.jpg">
                                <img className="img-fluid" src={BlogsRightImg4} alt="project-1.jpg" />
                            </a>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mb-3">
                            <a className="popup-view" href="homepageimages/product8.jpg">
                                <img className="img-fluid" src={BlogsRightImg5} alt="news-2.jpg" />
                            </a>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mb-3">
                            <a className="popup-view" href="homepageimages/product5.jpg">
                                <img className="img-fluid" src={BlogsRightImg6} alt="feature-1.jpg" />
                            </a>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mb-3">
                            <a className="popup-view" href="homepageimages/product9.jpg">
                                <img className="img-fluid" src={BlogsRightImg7} alt="gallery_1.jpg" />
                            </a>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mb-3">
                            <a className="popup-view" href="homepageimages/product10.jpg">
                                <img className="img-fluid" src={BlogsRightImg8} alt="news-1.jpg" />
                            </a>
                        </div>
                    </div>
                </Container>
            </section>
            <HomeNewslaterSection />
        </>
    )
}

export default GalleryPage
