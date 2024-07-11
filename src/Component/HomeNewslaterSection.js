import React from 'react'

const HomeNewslaterSection = () => {
    return (
        <>
            <section className="homepage-bottom-newslater-section">
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="newslater-body text-center">
                                <h4>Get Latest Update by <br/>Subscribe Our Newslater</h4>
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
                </div>
            </section>
        </>
    )
}

export default HomeNewslaterSection
