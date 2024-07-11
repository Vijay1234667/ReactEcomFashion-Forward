import React from 'react'
import './css/Home.css';

import appliance from './assets/appliance.png'
import electronic from './assets/electronic.png'
import grocery from './assets/grocery.png'
import fashion from './assets/fashion.png'
import toy from './assets/toy.png'


const HomeSection1 = () => {
    return (
        <>
            <section class="banner-product-all-categories  animate__animated animate__backInLeft">
                <div class="container">
                    <div class="banner-product-all-categories-main-body mt-2 shadow rounded">
                        <div class="row text-center">

                            <div class="col-lg-2 col-md-4 col-6">
                                <div class="categories-brand">
                                    <a href="/"><img class="img-fluid mb-2" src={appliance} alt="ShopImage"
                                        width="60" /></a>
                                    <h6>Mobile & Tablets</h6>
                                </div>
                            </div>

                            <div class="col-lg-2 col-md-4 col-6">
                                <div class="categories-brand">
                                    <a href="/"><img class="img-fluid mb-2 " src={electronic} alt="ShopImage"
                                        width="60" /></a>
                                    <h6>Electronics</h6>
                                </div>
                            </div>

                            <div class="col-lg-2 col-md-4 col-6">
                                <div class="categories-brand">
                                    <a href="/"><img class="img-fluid mb-2 " src={fashion} alt="ShopImage"
                                        width="60" /></a>
                                    <h6>Fashion</h6>
                                </div>
                            </div>

                            <div class="col-lg-2 col-md-4 col-6">
                                <div class="categories-brand">
                                    <a href="/"><img class="img-fluid mb-2" src={toy} alt="ShopImage"
                                        width="60" /></a>
                                    <h6>Toys</h6>
                                </div>
                            </div>

                            <div class="col-lg-2 col-md-4 col-6">
                                <div class="categories-brand">
                                    <a href="/"><img class="img-fluid mb-2" src={appliance} alt="ShopImage"
                                        width="60" /></a>
                                    <h6>Home & Kitchen</h6>
                                </div>
                            </div>

                            <div class="col-lg-2 col-md-4 col-6">
                                <div class="categories-brand">
                                    <a href="/"><img class="img-fluid mb-2" src={grocery} alt="ShopImage"
                                        width="60" /></a>
                                    <h6>Grocery</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeSection1
