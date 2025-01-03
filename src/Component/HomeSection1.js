import React from 'react'
import './css/Home.css';
import { Container } from 'react-bootstrap-v5';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useProductContext } from './Context/ProductContext';

import { Pagination, Navigation } from 'swiper/modules';

import cmen from './assets/cmen.jpg'
import cwomen from './assets/cwomen.jpg'
import cwatch from './assets/cwatch.jpg'
import ckid from './assets/ckid.jpg'
import csunglass from './assets/csunglass.jpg'
import cbag from './assets/cbag.jpg'
import cshoes from './assets/cshoes.jpg'

const HomeSection1 = () => {
    const { handleCategoryFilter } = useProductContext();

    return (
        <>
            <section className="banner-product-all-categories mb-2 ">
                <Container>
                    <div className="banner-product-all-categories-main-body mt-2">
                        <h4 className='mb-1'>Shop By <span className='text-light-blue'>Category</span></h4>
                        <p className='text-paragraph'>Shop the latest products from the most popular collections</p>
                        <div className="row text-center ">
                            <Swiper
                                slidesPerView={6}
                                loop={true}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper"
                                breakpoints={{
                                    0: {
                                        slidesPerView: 2,
                                    },
                                    576: {
                                        slidesPerView: 2,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                    },
                                    1024: {
                                        slidesPerView: 6,
                                    },
                                }}
                            >
                                <SwiperSlide>
                                    <div className="categories-brand text-dark">
                                        <Link onClick={() => handleCategoryFilter("Men")} to="/CategorySingle">
                                            <img className="img-fluid mb-2" src={cmen} alt="ShopImage" />
                                            <h6 className='mb-5 text-dark'>Men's Wear</h6>
                                        </Link>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="categories-brand">
                                        <Link onClick={() => handleCategoryFilter("Women")} to="/CategorySingle">
                                            <img className="img-fluid mb-2" src={cwomen} alt="ShopImage" />
                                            <h6 className='text-dark'>Women Wear</h6>
                                        </Link>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="categories-brand">
                                        <Link onClick={() => handleCategoryFilter("Watch")} to="/CategorySingle">
                                            <img className="img-fluid mb-2" src={cwatch} alt="ShopImage" />
                                            <h6 className='text-dark mb-5'>Smart Watch</h6>
                                        </Link>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="categories-brand">
                                        <Link onClick={() => handleCategoryFilter("Kids")} to="/CategorySingle">
                                            <img className="img-fluid mb-2" src={ckid} alt="ShopImage" />
                                            <h6 className='text-dark mb-5'>Kids Wear</h6>
                                        </Link>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide >
                                    <div className="categories-brand">
                                        <Link onClick={() => handleCategoryFilter("Sunglasses")} to="/CategorySingle">
                                            <img className="img-fluid mb-2" src={csunglass} alt="ShopImage" />
                                            <h6 className='text-dark mb-5'>Sunglasses</h6>
                                        </Link>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="categories-brand">
                                        <Link onClick={() => handleCategoryFilter("Shoes")} to="/CategorySingle">
                                            <img className="img-fluid mb-2" src={cshoes} alt="ShopImage" />
                                            <h6 className='text-dark mb-5'>Casual Shoes</h6>
                                        </Link>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide >
                                    <div className="categories-brand">
                                        <Link onClick={() => handleCategoryFilter("Bags")} to="/CategorySingle">
                                            <img className="img-fluid mb-2" src={cbag} alt="ShopImage" />
                                            <h6 className='text-dark mb-5'>Bag</h6>
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default HomeSection1
