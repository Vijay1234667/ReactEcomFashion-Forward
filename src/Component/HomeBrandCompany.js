import React from 'react'

import Homebrand1 from './assets/Homebrand1.jpg'
import Homebrand2 from './assets/Homebrand2.jpg'
import Homebrand3 from './assets/Homebrand3.jpg'
import Homebrand4 from './assets/Homebrand4.jpg'
import Homebrand5 from './assets/Homebrand5.jpg'
import Homebrand6 from './assets/Homebrand6.jpg'

const HomeBrandCompany = () => {
    return (
        <>
            <section class="brand-company-section">
                <div class="container">
                    <div class="text-center">
                        <h4 class="mb-2">Shop By Brands</h4>
                        <p>Select Your Favorite Brands And Purchase</p>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-2 col-md-6 col-sm-4 col-6 mb-3">
                            <a href="/"><img class="img-fluid" src={Homebrand1} alt="ShopImage" width="140px" />
                            </a>
                        </div>
                        <div class="col-lg-2 col-md-6 col-sm-4 col-6 mb-3">
                            <a href="/"><img class="img-fluid" src={Homebrand2} alt="ShopImage" width="140px" />
                            </a>
                        </div>
                        <div class="col-lg-2 col-md-6 col-sm-4 col-6 mb-3">
                            <a href="/"><img class="img-fluid" src={Homebrand3} alt="ShopImage"
                                width="140px" /></a>
                        </div>
                        <div class="col-lg-2 col-md-6 col-sm-4 col-6 mb-3">
                            <a href="/"><img class="img-fluid" src={Homebrand4} alt="ShopImage"
                                width="140px" /></a>
                        </div>
                        <div class="col-lg-2 col-md-6 col-sm-4 col-6 mb-3">
                            <a href="/"><img class="img-fluid" src={Homebrand5} alt="ShopImage"
                                width="140px" /></a>
                        </div>
                        <div class="col-lg-2 col-md-6 col-sm-4 col-6 mb-3 ">
                            <a href="/"><img class="img-fluid" src={Homebrand6} alt="ShopImage"
                                width="140px" /></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeBrandCompany
