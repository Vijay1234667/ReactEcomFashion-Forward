import React from 'react'
import HomeBannerimg1 from "./assets/HomeBannerimg1.jpg"
import HomeBannerimg2 from "./assets/HomeBannerimg2.jpg"
import HomeBannerimg3 from "./assets/HomeBannerimg3.jpg"
import HomeBannerimg4 from "./assets/HomeBannerimg4.jpg"
import HomeBannerimg5 from "./assets/HomeBannerimg5.jpg"
import HomeBannerimg6 from "./assets/HomeBannerimg6.png"

const HomeBannerPage = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row g-0">
                        <div className="col-lg-6 col-12 ">
                            <div className='flashimagelight'>
                                <img src={HomeBannerimg1} className='d-block img-fluid' alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3  col-6">
                            <div className='flashimagelight'>
                                <img src={HomeBannerimg2} className='img-fluid' alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className='flashimagelight'>
                                <img src={HomeBannerimg3} className='img-fluid' alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className='flashimagelight'>
                                <img src={HomeBannerimg4} className='img-fluid' alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className='flashimagelight'>
                                <img src={HomeBannerimg5} className='img-fluid' alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className='flashimagelight'>
                                <img src={HomeBannerimg6} className='img-fluid' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeBannerPage
