import React from 'react'
import { Container } from 'react-bootstrap'

const HomeNewslaterSection = () => {
    return (
        <>
            <section className="homepage-bottom-newslater-section">
                <Container>
                <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="newslater-body text-center">
                                <h4 className='text-white'>Get Latest Update by <span className='d-md-block'>Subscribe Our Newslater</span></h4>
                                <div className="mb-4">
                                    <input type="text" className="form-control form-control-lg bubscribe-control rounded-0 px-5 py-3"
                                        placeholder="Enter your email" />
                                </div>
                                <div className="pb-3">
                                    <button className="btn btn-light w-100 rounded-0 px-5 py-3" type="button">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default HomeNewslaterSection
