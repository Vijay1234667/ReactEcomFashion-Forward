import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

import Homebrand1 from './assets/Homebrand1.jpg'
import Homebrand2 from './assets/Homebrand2.jpg'
import Homebrand3 from './assets/Homebrand3.jpg'
import Homebrand4 from './assets/Homebrand4.jpg'
import Homebrand5 from './assets/Homebrand5.jpg'
import Homebrand6 from './assets/Homebrand6.jpg'

const HomeBrandCompany = () => {
    return (
        <>
            <section className="brand-company-section">
                <div className="container">
                    <div className="text-center">
                        <h4 className="mb-2 h4color">Shop By Brands</h4>
                        <p className='text-paragraph'>Select Your Favorite Brands And Purchase</p>
                    </div>
                    <div className="row justify-content-center">
                        <Swiper
                            slidesPerView={3}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                576: {
                                  slidesPerView: 5,
                                },
                                768: {
                                  slidesPerView: 5,
                                },
                              }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img className="img-fluid" src={Homebrand1} alt="ShopImage" width="140px" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="img-fluid" src={Homebrand2} alt="ShopImage" width="140px" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="img-fluid" src={Homebrand3} alt="ShopImage"
                                    width="140px" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="img-fluid" src={Homebrand4} alt="ShopImage"
                                    width="140px" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="img-fluid" src={Homebrand5} alt="ShopImage"
                                    width="140px" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className="img-fluid" src={Homebrand6} alt="ShopImage"
                                    width="140px" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeBrandCompany
