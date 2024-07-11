import React from 'react'
import DiscoverItem1 from './assets/DiscoverItem1.png'
import DiscoverItem2 from './assets/DiscoverItem2.png'
import DiscoverItem3 from './assets/DiscoverItem3.png'
import DiscoverItem4 from './assets/DiscoverItem4.png'
import DiscoverItem5 from './assets/DiscoverItem5.png'

const DiscoverLatestOffer = () => {
    return (
        <>
            <section className="Discover-Latest-Offer">
                <div className="container">
                    <div className=" Discover-Latest-Offer-body  ">
                        <h3>Discover Latest Offer</h3>
                        <div className="Discover-Latest-Offer-btn mb-4">
                            <a href="/" className="btn">Shop Now</a>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-md-4 mb-2">
                            <img className="img-fluid" src={DiscoverItem1} alt="ShopImage" />
                        </div>
                        <div className="col-md-8">
                            <div className="row ">
                                <div className="col-md-6 mb-4">
                                    <img className="img-fluid" src={DiscoverItem2} alt="ShopImage" />
                                </div>
                                <div className="col-md-6 mb-2">
                                    <img className="img-fluid" src={DiscoverItem3} alt="ShopImage" />
                                </div>
                                <div className="col-md-6 mb-2">
                                    <img className="img-fluid" src={DiscoverItem4} alt="ShopImage" />
                                </div>
                                <div className="col-md-6">
                                    <img className="img-fluid" src={DiscoverItem5} alt="ShopImage" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DiscoverLatestOffer
