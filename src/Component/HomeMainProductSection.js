import React from 'react'
import MainProductItemCard from './MainProductItemCard'

import galleryproduct1 from './assets/galleryproduct1.jpg'
import galleryproduct2 from './assets/galleryproduct2.jpg'
import galleryproduct3 from './assets/galleryproduct3.jpg'
import galleryproduct4 from './assets/galleryproduct4.jpg'
import galleryproduct5 from './assets/galleryproduct5.jpg'
import galleryproduct6 from './assets/galleryproduct6.jpg'
import galleryproduct7 from './assets/galleryproduct7.jpg'
import galleryproduct8 from './assets/galleryproduct8.jpg'
import galleryproduct9 from './assets/galleryproduct9.jpg'


import leftcardbodyimg1 from './assets/leftcardbodyimg1.jpg'
import leftcardbodyimg2 from './assets/leftcardbodyimg2.jpg'
import leftcardbodyimg3 from './assets/leftcardbodyimg3.jpg'
import leftcardbodyimg4 from './assets/leftcardbodyimg4.jpg'
import summersale from './assets/summersale.jpg'

import HomeSaleimg from './assets/HomeSaleimg.jpg'
import MainSmallCardItems from './MainSmallCardItems'

const HomeMainProductSection = () => {
    return (
        <>
            <section class="main-wrapper-section">
                <div class="container">
                    <div class="row ">
                        <div class="col-md-4 mb-2">
                            <div class="mega-sale-sidebar-image">
                                <img class="img-fluid mb-3" src={HomeSaleimg} alt="ShopImage" width="100%" />
                            </div>
                            <div class="home-leftside-wrapper">
                                <MainSmallCardItems LeftCardImg={leftcardbodyimg1} CategeoryName="Electronics" ItemsName="Shirt" Price="200" Discount="25" />
                                <MainSmallCardItems LeftCardImg={leftcardbodyimg2} CategeoryName="Fashion" ItemsName="Shirt" Price="200" Discount="25" />
                                <MainSmallCardItems LeftCardImg={leftcardbodyimg3} CategeoryName="Fashion" ItemsName="Shirt" Price="200" Discount="25" />
                                <MainSmallCardItems LeftCardImg={leftcardbodyimg4} CategeoryName="Fashion" ItemsName="Shirt" Price="200" Discount="25" />
                                <div>
                                    <img class="img-fluid mb-3" src={summersale} alt="ShopImage" />
                                </div>
                            </div>
                        </div>

                        <div class="col-md-8 g-0">
                            <section class="product-cards mb-4">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-4 col-6 mb-3">
                                            <MainProductItemCard MainImg={galleryproduct1} ProductName="Men Watch" ProductPrice="999"   ProductInfo1="3K+ viewed in past month" ProductInfo2="Get it by Sunday February 25" />
                                        </div>

                                        <div class="col-lg-4 col-6 mb-3">
                                            <MainProductItemCard MainImg={galleryproduct2} ProductName="Men T-Shirt" ProductPrice="699"  ProductInfo1="2K+ viewed in past month" ProductInfo2="From  3000" />
                                        </div>

                                        <div class="col-lg-4 col-6 mb-3">
                                            <MainProductItemCard MainImg={galleryproduct3} ProductName="Men Shoes" ProductPrice="799"  ProductInfo1="20k viewed in past month"  />
                                        </div>

                                        <div class="col-lg-4 col-6 mb-3">
                                            <MainProductItemCard MainImg={galleryproduct4} ProductName="Men Cap" ProductPrice="499"  ProductInfo1="3m viewed in past month"  />
                                        </div>

                                        <div class="col-lg-4 col-6 mb-3">
                                            <MainProductItemCard MainImg={galleryproduct5} ProductName="Men Shirt" ProductPrice="799"  ProductInfo1="2k viewed in past month"  />
                                        </div>

                                        <div class="col-lg-4 col-6 mb-3">
                                            <MainProductItemCard MainImg={galleryproduct6} ProductName="Men Goggles" ProductPrice="999"  ProductInfo1="1k viewed in past month"  />
                                        </div>

                                        <div class="col-lg-4 col-6 mb-3">
                                            <MainProductItemCard MainImg={galleryproduct7} ProductName="Belts" ProductPrice="299"  ProductInfo1="2k viewed in past month"  />
                                        </div>

                                        <div class="col-lg-4 col-6 mb-3">
                                            <MainProductItemCard MainImg={galleryproduct8} ProductName="Bag" ProductPrice="599"  ProductInfo1="4k viewed in past month"  />
                                        </div>

                                        <div class="col-lg-4 col-6 mb-3">
                                            <MainProductItemCard MainImg={galleryproduct9} ProductName="Women Track" ProductPrice="999"  ProductInfo1="3k viewed in past month"  />
                                        </div>                                    
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

export default HomeMainProductSection
