import React from 'react'
import Toptitlehead from './Toptitlehead'
import { Container } from 'react-bootstrap-v5'

import galleryproduct1 from './assets/galleryproduct1.jpg'
import galleryproduct2 from './assets/galleryproduct2.jpg'
import galleryproduct3 from './assets/galleryproduct3.jpg'
import galleryproduct4 from './assets/galleryproduct4.jpg'
import galleryproduct5 from './assets/galleryproduct5.jpg'
import galleryproduct6 from './assets/galleryproduct6.jpg'
import galleryproduct7 from './assets/galleryproduct7.jpg'
import galleryproduct8 from './assets/galleryproduct8.jpg'


const GalleryPage = () => {
    return (
        <>
            <Toptitlehead title="Gallery" />
            <section className="gallery pt-3">
                <Container>
                    <div className="row  gallery-content popup-view1">
                        <div className="col-12 col-md-6 col-lg-3 mb-3">
                            <a className="popup-view" href="homepageimages/product3.jpg">
                                <img className="img-fluid" src={galleryproduct1} alt="project-2.jpg" />
                            </a>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mb-3">
                            <a className="popup-view" href="homepageimages/product4.jpg">
                                <img className="img-fluid" src={galleryproduct2} alt="project-3.jpg" />
                            </a>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mb-3">
                            <a className="popup-view" href="homepageimages/product5.jpg">
                                <img className="img-fluid" src={galleryproduct3} alt="project-6.jpg" />
                            </a>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mb-3">
                            <a className="popup-view" href="homepageimages/product6.jpg">
                                <img className="img-fluid" src={galleryproduct4} alt="project-1.jpg" />
                            </a>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mb-3">
                            <a className="popup-view" href="homepageimages/product8.jpg">
                                <img className="img-fluid" src={galleryproduct5} alt="news-2.jpg" />
                            </a>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mb-3">
                            <a className="popup-view" href="homepageimages/product5.jpg">
                                <img className="img-fluid" src={galleryproduct6} alt="feature-1.jpg" />
                            </a>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mb-3">
                            <a className="popup-view" href="homepageimages/product9.jpg">
                                <img className="img-fluid" src={galleryproduct7} alt="gallery_1.jpg" />
                            </a>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mb-3">
                            <a className="popup-view" href="homepageimages/product10.jpg">
                                <img className="img-fluid" src={galleryproduct8} alt="news-1.jpg" />
                            </a>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default GalleryPage
