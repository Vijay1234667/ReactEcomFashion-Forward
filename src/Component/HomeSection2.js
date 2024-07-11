import React from 'react';
import './css/Home.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination, History } from 'swiper/modules';

import { Container } from 'react-bootstrap-v5'


import homeS2slide1 from './img/homeS2slide1.jpg'
import homeS2slide2 from './img/homeS2slide2.jpg'
import homeS2slide3 from './img/homeS2slide3.jpg'


const HomeSection2 = () => {
    return (
        <>
            <section className='HomeSection2'>
                <Container>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={3}
                        navigation={true}
                        pagination={true}
                        history={{
                            key: 'slide',
                        }}
                        modules={[Navigation, Pagination, History]}
                        className="mySwiper"
                    >
                        <SwiperSlide data-history="1"><img src={homeS2slide1} alt="" /></SwiperSlide>
                        <SwiperSlide data-history="2"><img src={homeS2slide2} alt="" /></SwiperSlide>
                        <SwiperSlide data-history="3"><img src={homeS2slide3} alt="" /></SwiperSlide>
                        <SwiperSlide data-history="4"><img src={homeS2slide1} alt="" /></SwiperSlide>
                    </Swiper>
                </Container>
            </section>
        </>
    )
}

export default HomeSection2
