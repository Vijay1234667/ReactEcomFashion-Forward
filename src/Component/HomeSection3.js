import React from 'react'
import limitoffer1 from './assets/limitoffer1.png'
import limitoffer2 from './assets/limitoffer2.png'


const HomeSection3 = () => {
    return (
        <>
            <section class="Limited-offers-section">
                <div class="container bg-pink">
                    <div class="row align-items-center">
                        <div class="col-md-3">
                            <img class="img-fluid" src={limitoffer1} alt="limitoffer1"/>
                        </div>

                        <div class="col-md-6">
                            <div class="text-center">
                                <h6 class="mb-2">LIMITED OFFER</h6>
                                <h4>25% Off Only This Monday <br/>and Get Special Offer</h4>
                                <div class="limited-offer-btn">
                                    <a href="/" class="btn">Shop Now</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3">
                            <img class="img-fluid" src={limitoffer2} alt="limitoffer2"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeSection3
