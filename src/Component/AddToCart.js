import React, { useState } from 'react';


import StarIcon from '@mui/icons-material/Star';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import StarHalfIcon from '@mui/icons-material/StarHalf';


import galleryproduct1 from './assets/galleryproduct1.jpg'


import { Swiper, SwiperSlide } from 'swiper/react';



import './css/AddToCart.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


import './css/styles.css'
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';



// import React from 'react';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MasonCampbell from './assets/MasonCampbell.jpg'
import KavyaMalkova from './assets/KavyaMalkova.jpg'
import EvaMendes from './assets/EvaMendes.jpg'
import FooterPayment from './assets/FooterPayment.png'
import CustomerReviews from './CustomerReviews';

const AddToCartPage = () => {
    const [addImg, setaddImg] = useState(0);

    const imgArray = [
        "https://swiperjs.com/demos/images/nature-1.jpg",
        "https://swiperjs.com/demos/images/nature-2.jpg",
        "https://swiperjs.com/demos/images/nature-3.jpg",
        "https://swiperjs.com/demos/images/nature-4.jpg",
    ]

    const currImg = (key) => {
        setaddImg(key)
        console.log(addImg, 'k');
    }

    const pricePerItem = 200.00;
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
    };
    const totalPriceBeforeDiscount = pricePerItem * quantity;




    return (
        <>
            <section className="add-to-bag-main-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={imgArray[addImg]} alt='img' className='img-fluid' />
                            <Swiper spaceBetween={10}
                                slidesPerView={3}
                                freeMode={true}
                                modules={[Thumbs]}
                          

                                watchSlidesProgress
                                className="mySwiper" >
                                {
                                    imgArray.map((img, key) => {
                                        return (
                                            <SwiperSlide key={key} onClick={() => { currImg(key) }}>
                                                <img src={img} alt='img' className='img-fluid' />
                                            </SwiperSlide>
                                        )
                                    })
                                }


                            </Swiper>
                        </div>

                        <div className="col-lg-6 h-auto add-to-bag-body-content">
                            <h4 className="fw-bold mb-1"><span className="text-success">#</span> Check Product Here <span
                                className="text-success">#</span></h4>
                            <h6 className="title-top-para"> Off-White Printed Kurta with Brands...</h6>
                            <hr />
                            <div>
                                <h6><span>&#8377;</span>{totalPriceBeforeDiscount.toFixed(2)}<span className='ms-2'>&#8377;<del>20</del></span></h6>
                                <p>Add More Item</p>
                                <div className="d-flex mb-3">
                                    <div className="">
                                        <button class="btn btn-outline-primary" type="button" onClick={decreaseQuantity}>-</button>
                                    </div>
                                    <div className="ms-2">
                                        <button className="btn btn-outline-primary" type="text">{quantity}</button>
                                    </div>

                                    <div className="ms-2">
                                        <button class="btn btn-outline-primary" type="button" onClick={increaseQuantity}>+</button>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">

                                <h6>More Colors..</h6>
                                <div className="choose-color">
                                    <ul className="d-flex p-0">
                                        <li>
                                            <a href="javascript:void(0)" className="btn bg-success"></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" className="btn bg-primary"></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" className="btn bg-warning"></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" className="btn bg-danger"></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" className="btn bg-info"></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <h6 className="fw-bold">Select Size</h6>
                                <div className="add-to-carts-featured-products-sizes-btn mb-2">
                                    <ul className="d-flex p-0">
                                        <li><a className="btn" href="javascript:void(0)">XS</a></li>
                                        <li><a className="btn" href="javascript:void(0)">S</a></li>
                                        <li><a className="btn" href="javascript:void(0)">M</a></li>
                                        <li><a className="btn" href="javascript:void(0)">L</a></li>
                                        <li><a className="btn" href="javascript:void(0)">XL</a></li>
                                        <li><a className="btn" href="javascript:void(0)">XXL</a></li>
                                    </ul>
                                </div>
                            </div>

                            <h6>Ship To</h6>
                            <div className="types-of-delivery-section">
                                <div>
                                    <p>Delivery by <strong>22nd Feb</strong></p>
                                    <p><strong>Cash on Delivery</strong> | <a href="javascript:void(0)">Available</a></p>
                                    <p>
                                        <strong>10 Days Easy Return</strong> | <a href="javascript:void(0)">Know More</a>
                                    </p>
                                </div>
                            </div>

                            <div className="mb-3">
                                <div className="add-to-carts-featured-products-add-tobag-whishlist-btn">
                                    <div className="mb-2">
                                        <a className="btn btn-1 w-75" href="#cart"><AddShoppingCartIcon />Buy Now</a>
                                    </div>
                                    <div>
                                        <a className="btn w-75 btn-1" href="javascript:void(0)"><FavoriteBorderIcon />Add To
                                            whishlist</a>
                                    </div>
                                </div>
                            </div>
                            <div className="product-details">
                                <h6 className="fw-bolder">Product Details</h6>
                                <p>
                                    There are many variations of passages of Lorem Ipsum
                                    All the Lorem Ipsum generators on the Internet tend to repeat
                                    Contrary to popular belief.
                                </p>
                            </div>
                            <div>
                                <span className="fw-bold">Safe checkout: </span>
                                <img className="img-fluid  px-1" src={FooterPayment} alt=""
                                    width="250px" />
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <section className="Product-Reviews-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 ">
                            <div>
                                <h6>Customer Reviews</h6>
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex">
                                        <div className="left-sidebar-yellow-star">
                                            <StarIcon />
                                            <StarBorderPurple500Icon />
                                            <StarIcon />
                                            <StarHalfIcon />
                                        </div>
                                        <div className="mx-2">
                                            <p>Based on 3 reviews</p>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <CustomerReviews CustomerName="Richard Smith" CustomerImg={EvaMendes} ReviewsDescription="Lorem ipsum, dolor sit amet consectetur adipisicing elit" />
                                    <CustomerReviews CustomerName="Smith" CustomerImg={KavyaMalkova} ReviewsDescription="Lorem ipsum, dolor sit amet consectetur adipisicing elit" />
                                    <CustomerReviews CustomerName="Smith" CustomerImg={MasonCampbell} ReviewsDescription="Lorem ipsum, dolor sit amet consectetur adipisicing elit" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6" >
                            <div className="write-review-btn text-end">
                                <a className="btn" href="/" >Write A Review</a>
                            </div>
                            <form className="add-to-cart-reviews-form-section">
                                <div className="form-group row">
                                    <label for="inputName" className="col-lg-12 col-form-label">Full Name</label>
                                    <div className=" mb-2">
                                        <input type="text" className="form-control" id="inputName" name="Name"
                                            placeholder=" Enter Your FullName" required />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="inputEmail" className="col-form-label">Upload Images</label>
                                    <div className=" mb-2">
                                        <input type="file" className="form-control" id="inputEmail" name="email"
                                            placeholder=" Enter Email" required />
                                    </div>
                                </div>
                                <div className="form-group row mb-2">
                                    <div className="">
                                        <label for="exampleFormControlTextarea1" className="form-label">Write Your
                                            Review</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <div className="reviews-submit-btn">
                                        <input value="Submit" className="btn d-block w-25 mb-3" type="submit" />
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default AddToCartPage
