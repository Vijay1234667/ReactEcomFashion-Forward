import React from 'react'
import homeparallaxsale from './assets/homeparallaxsale.jpg'


import Parallaxleftitem1 from './assets/Parallaxleftitem1.jpg'
import Parallaxleftitem2 from './assets/Parallaxleftitem2.png'
import Parallaxleftitem3 from './assets/Parallaxleftitem3.png'
import Parallaxleftitem4 from './assets/Parallaxleftitem4.png'
import Parallaxleftitem5 from './assets/Parallaxleftitem5.png'
import MainSmallCardItems from './MainSmallCardItems'



const HomeParallaxSection = () => {
    return (
        <>
            <section className="home-parallax-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="mega-sale-sidebar-image mb-2">
                                <img className="img-fluid" src={homeparallaxsale} alt="ShopImage" width="100%" />
                            </div>
                            <div className="home-leftside-wrapper">
                                <MainSmallCardItems LeftCardImg={Parallaxleftitem1} CategeoryName="Electronics" ItemsName="Shirt" Price="200" Discount="25" />
                                <MainSmallCardItems LeftCardImg={Parallaxleftitem2} CategeoryName="Electronics" ItemsName="Shirt" Price="400" Discount="45" />
                                <MainSmallCardItems LeftCardImg={Parallaxleftitem3} CategeoryName="Electronics" ItemsName="Shirt" Price="500" Discount="88" />
                                <MainSmallCardItems LeftCardImg={Parallaxleftitem4} CategeoryName="Electronics" ItemsName="Shirt" Price="600" Discount="85" />
                                <MainSmallCardItems LeftCardImg={Parallaxleftitem5} CategeoryName="Electronics" ItemsName="Shirt" Price="800" Discount="75" />
                            </div>
                        </div>

                        <div className="col-md-8">
                            <section className="homepage-parallax-section-1 parallax-relative">
                                <div className="container-fluid">
                                    <div className="text-center parallax-body-content">
                                        <h2>HOODIES LIGHT</h2>
                                        <a href="/" className="btn">Shop Now</a>
                                    </div>
                                </div>
                            </section>
                            <section className="homepage-parallax-section-2 parallax-relative">
                                <div className="container-fluid">
                                    <div className="text-center parallax-body-content">
                                        <h2>HOODIES HEAVY</h2>
                                        <a href="/" className="btn">Shop Now</a>
                                    </div>
                                </div>
                            </section>
                            <section className="homepage-parallax-section-3 parallax-relative">
                                <div className="container-fluid">
                                    <div className="text-center parallax-body-content">
                                        <h2>SWEATSHIRTS</h2>
                                        <a href="/" className="btn">Shop Now</a>
                                    </div>
                                </div>
                            </section>
                            <section className="homepage-parallax-section-4 parallax-relative">
                                <div className="container-fluid">
                                    <div className="text-center parallax-body-content">
                                        <h2>HEADWEAR</h2>
                                        <a href="/" className="btn">Shop Now</a>
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
