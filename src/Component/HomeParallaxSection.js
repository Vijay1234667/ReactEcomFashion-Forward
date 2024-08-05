import React from 'react'
import homeparallaxsale from './assets/homeparallaxsale.jpg'
import blogfurniture1 from './assets/blogfurniture1.jpg'
import blogfurniture2 from './assets/blogfurniture2.jpg'
import blogfurniture3 from './assets/blogfurniture3.jpg'
import blogfurniture4 from './assets/blogfurniture4.jpg'
import blogfurniture5 from './assets/blogfurniture5.jpg'

import BlogsRightCard from './BlogsRightCard'

const HomeParallaxSection = () => {
    return (
        <>
            <section className="home-parallax-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="mb-2">
                                <img className="img-fluid md-mb-0 mb-3" src={homeparallaxsale} alt="ShopImage" width="100%" />
                            </div>
                            <div>
                                <BlogsRightCard Image={blogfurniture1} PostName="Home Design Here" Posttext="11 December, 2022" />
                                <BlogsRightCard Image={blogfurniture2} PostName="Home Design Here" Posttext="11 December, 2022" />
                                <BlogsRightCard Image={blogfurniture3} PostName="Home Design Here" Posttext="11 December, 2022" />
                                <BlogsRightCard Image={blogfurniture4} PostName="Home Design Here" Posttext="11 December, 2022" />
                                <BlogsRightCard Image={blogfurniture5} PostName="Home Design Here" Posttext="11 December, 2022" />
                                <div className="popular-tags h4color">
                                    <h4 className="mb-3">Popular Tags</h4>
                                    <ul className="p-0 ">
                                        <li><a href="/">CLOTHS</a></li>
                                        <li><a href="/">ELECTRONIC</a></li>
                                        <li><a href="/">Furniture</a></li>
                                        <li><a href="/">FURNITURE</a></li>
                                        <li><a href="/">LAPTOP</a></li>
                                        <li><a href="/">MEN WEAR</a></li>
                                        <li><a href="/">TOP WEAR</a></li>
                                        <li><a href="/">HEADPHONES</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8">
                            <section className="homepage-parallax-section-1 parallax-relative">
                                <div className="container-fluid">
                                    <div className="text-center parallax-body-content">
                                        <h2 className='h2color'>HOODIES LIGHT</h2>
                                        <a href="/" className="orange-btn-btn">Shop Now</a>
                                    </div>
                                </div>
                            </section>
                            <section className="homepage-parallax-section-2 parallax-relative">
                                <div className="container-fluid">
                                    <div className="text-center parallax-body-content">
                                        <h2 className='h2color'>HOODIES HEAVY</h2>
                                        <a href="/" className="orange-btn-btn">Shop Now</a>
                                    </div>
                                </div>
                            </section>
                            <section className="homepage-parallax-section-3 parallax-relative">
                                <div className="container-fluid">
                                    <div className="text-center parallax-body-content">
                                        <h2 className='h2color'>SWEATSHIRTS</h2>
                                        <a href="/" className="orange-btn-btn">Shop Now</a>
                                    </div>
                                </div>
                            </section>
                            <section className="homepage-parallax-section-4 parallax-relative">
                                <div className="container-fluid">
                                    <div className="text-center parallax-body-content">
                                        <h2 className='h2color'>HEADWEAR</h2>
                                        <a href="/" className="orange-btn-btn">Shop Now</a>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeParallaxSection
