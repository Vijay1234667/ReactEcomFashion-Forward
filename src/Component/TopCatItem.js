import React from 'react'
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';


import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { useProductContext } from './Context/ProductContext';


const TopCatItem = () => {

    const { products } = useProductContext();

    let base_url = process.env.REACT_APP_BASE_URL;
    let public_url = process.env.PUBLIC_URL;


    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {products.slice(3, 8).map((curElem) => {
                    const { id, ProductName, ProductPrice, ProductInfo1, Discount, image } = curElem;
                    return (
                        <SwiperSlide key={id}>
                            <Link to={`/singleproduct/${id}`} >
                                <div className="product-cards-main-body h-100">
                                    <div className="image-section">
                                        <img src={`${base_url}` + `${public_url}/` + image} className="card-img-top "
                                            alt="img" />
                                    </div>
                                    <div className="product-body text-center mb-2">
                                        <div className='d-flex justify-content-between mt-2'>
                                            <div>
                                                <span className="Home-product-items-name">{ProductName}</span>
                                            </div>
                                            <h6 className="product-price"><span>&#8377;</span>{ProductPrice}</h6>
                                        </div>
                                        <div>
                                            <ul className="product-info p-0 mt-1">
                                                <li>{ProductInfo1}</li>
                                            </ul>
                                        </div>
                                        <div className="product-tag">
                                            <span className="badge badge-secondary mb-2 ">
                                                <a href="/" className=""><FavoriteBorderIcon /></a>
                                            </span>
                                            <span className="badge badge-secondary mb-2">
                                                <a href="/"><AddShoppingCartIcon /></a>
                                            </span>
                                            <span className="badge badge-secondary"><a href="/">
                                                <SearchIcon /></a>
                                            </span>
                                        </div>
                                        <div className='Discount'>
                                            <button className='btn'>{Discount}</button>
                                        </div>
                                        <div className='product-main-ATC-btn'>
                                            <a href="" className='btn btn-dark w-100'>Add to Cart</a>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}

export default TopCatItem
