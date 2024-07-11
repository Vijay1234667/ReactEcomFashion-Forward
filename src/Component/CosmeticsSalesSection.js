import React from 'react'
import CosmeticsItem1 from './assets/CosmeticsItem1.png'
import CosmeticsItem2 from './assets/CosmeticsItem2.png'
import CosmeticsItem3 from './assets/CosmeticsItem3.png'
import CosmeticsItem4 from './assets/CosmeticsItem4.png'


const CosmeticsSalesSection = () => {
    return (
        <>
            <section className="Cosmetics-sales-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 mb-2">
                            <div className="card first-card  h-100">
                                <img className="img-fluid" src={CosmeticsItem1} alt="ShopImage"/>
                                    <span className="sale-position">-10%</span>
                                    <div className="card-body">
                                        <h5>Sunglasses Sale</h5>
                                        <p>
                                            See all Sunglasses and get 10% off at all Sunglasses
                                        </p>
                                        <div className="glasses-btn">
                                            <a href="/" className="btn">SHOP BY GLASSES</a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-3  mb-2">
                            <div className="card second-card h-100">
                                <div className="card-body text-center">
                                    <h5>Cosmetics Sales</h5>
                                    <p>
                                        Buy Cosmetics products and get 30% off at all Cosmetics
                                    </p>
                                    <div className="Cosmetics-btn">
                                        <a href="/" className="btn">SHOP BY Cosmetics </a>
                                    </div>
                                </div>
                                <span className="sale-position">-80%</span>
                                <div>
                                    <img className="img-fluid" src={CosmeticsItem2} alt="ShopImage"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3  mb-2">
                            <div className="card third-card  h-100">
                                <img className="img-fluid h-100" src={CosmeticsItem3} alt="ShopImage"/>
                                    <div className="card-img-overlay text-center ">
                                        <div className=" border border-3 bg-dark-3 py-3">
                                            <h5>Fashion Summer Sale</h5>
                                            <h2>UP TO 80% OFF</h2>
                                            <p>On top Fashion Brands</p>
                                            <div className="summer-btn">
                                                <a href="/" className="btn">SHOP BY FASHION</a>
                                            </div>
                                        </div>

                                    </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card forth-card">
                                <img className="img-fluid" src={CosmeticsItem4}  alt="ShopImage"/>
                                    <span className="sale-position">-50%</span>
                                    <div className="card-body text-center">
                                        <h2>SUPER SALE</h2>
                                        <h6>UP TO 50% OFF</h6>
                                        <p>
                                            On All Electronic
                                        </p>
                                        <div className="hurry-up-btn">
                                            <a href="/" className="btn">HURRY UP!</a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CosmeticsSalesSection
