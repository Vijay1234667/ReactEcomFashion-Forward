import React from 'react'
import './css/Home.css';
import { Container } from 'react-bootstrap-v5';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

import cmen from './assets/cmen.jpg'
import cwomen from './assets/cwomen.jpg'
import cwatch from './assets/cwatch.jpg'
import ckid from './assets/ckid.jpg'
import csports from './assets/csports.jpg'
import csunglass from './assets/csunglass.jpg'
import cbag from './assets/cbag.jpg'
import cshoes from './assets/cshoes.jpg'


const HomeSection1 = () => {
    return (
        <>
            <section className="banner-product-all-categories mb-5 pt-3">
                <Container>
                    <div className="banner-product-all-categories-main-body mt-2">
                        <h4 className='mb-3 h4color'>Shop By Category</h4>
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
                            >
                                <SwiperSlide>
                                    <div className="categories-brand">
                                        <Link to="filtercategory">
                                            <div>
                                                <img className="img-fluid mb-2" src={cmen} alt="ShopImage" />
                                                <h6 className='h6color'>Men</h6>
                                            </div>
                                        </Link>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="categories-brand">
                                        <Link to="/filtercategory">
                                            <div>
                                                <img className="img-fluid mb-2" src={cwomen} alt="ShopImage" />
                                                <h6 className='h6color'>Women</h6>
                                            </div>
                                        </Link>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="categories-brand">
                                        <Link to="/filtercategory">
                                            <div>
                                                <img className="img-fluid mb-2" src={cwatch} alt="ShopImage" />
                                                <h6 className='h6color'>Watches</h6>
                                            </div>
                                        </Link>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="categories-brand">
                                        <Link to="/filtercategory">
                                            <div>
                                                <img className="img-fluid mb-2" src={ckid} alt="ShopImage" />
                                                <h6 className='h6color'>Kids</h6>
                                            </div>
                                        </Link>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="categories-brand">
                                        <Link to="/filtercategory">
                                            <div>
                                                <img className="img-fluid mb-2" src={csports} alt="ShopImage" />
                                                <h6 className='h6color'>Sports</h6>
                                            </div>
                                        </Link>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="categories-brand">
                                        <Link to="/filtercategory">
                                            <div>
                                                <img className="img-fluid mb-2" src={csunglass} alt="ShopImage" />
                                                <h6 className='h6color'>Sunglass</h6>
                                            </div>
                                        </Link>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="categories-brand">
                                        <Link to="/filtercategory">
                                            <div>
                                                <img className="img-fluid mb-2" src={cshoes} alt="ShopImage" />
                                                <h6 className='h6color'>Shoes</h6>
                                            </div>
                                        </Link>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="categories-brand">
                                        <Link to="/filtercategory">
                                            <div>
                                                <img className="img-fluid mb-2" src={cbag} alt="ShopImage" />
                                                <h6 className='h6color'>Bag</h6>
                                            </div>
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
