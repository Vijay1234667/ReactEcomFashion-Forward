import React from 'react'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import WalletIcon from '@mui/icons-material/Wallet';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PaidIcon from '@mui/icons-material/Paid';

import { Container } from 'react-bootstrap-v5'
import CategeoriesItem1 from './assets/CategeoriesItem1.jpg'
import CategeoriesItem3 from './assets/CategeoriesItem3.webp'
import CategeoriesItem4 from './assets/CategeoriesItem4.png'
import FooterPayment from './assets/FooterPayment.png'

const PaymentFormPage = () => {
    return (
        <>
            <section className="payment-integration-section">
                <Container>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="box-1 user">
                                <div className='PaymentOption'>
                                    <div className="mt-3 d-flex">
                                        <div>
                                            <input type="radio" />
                                        </div>
                                        <div className='ms-2'>
                                            <h5><SensorOccupiedIcon className='me-2' />UPI</h5>
                                            <p>
                                                Pay with cash upon delivery
                                            </p>
                                        </div>
                                        <hr />
                                    </div>
                                    <div className="mt-3 d-flex">
                                        <div>
                                            <input type="radio" />
                                        </div>
                                        <div className='ms-2'>
                                            <h5><DeliveryDiningIcon className='me-2' />Cash on delivery</h5>
                                            <p>
                                                Pay with cash upon delivery
                                            </p>
                                        </div>
                                        <hr />
                                    </div>
                                    <div className="mt-3 d-flex">
                                        <div>
                                            <input type="radio" />
                                        </div>
                                        <div className='ms-2'>
                                            <h5><WalletIcon className='me-2' />Wallets</h5>
                                            <p>
                                                Pay with cash upon delivery
                                            </p>
                                        </div>
                                        <hr />
                                    </div>
                                    <div className="mt-3 d-flex">
                                        <div>
                                            <input type="radio" />
                                        </div>
                                        <div className='ms-2'>
                                            <h5><AccountBalanceIcon className='me-2' />Net Banking</h5>
                                            <p>
                                                Pay with cash upon delivery
                                            </p>
                                        </div>
                                        <hr />
                                    </div>
                                    <div className="mt-3 d-flex">
                                        <div>
                                            <input type="radio" />
                                        </div>
                                        <div className='ms-2'>
                                            <div className="d-flex justify-content-between">
                                                <h5><PaidIcon className='me-2' />Pay pal</h5>
                                                <img className="img-fluid" src={FooterPayment} alt="FooterPayment" width="300px" />
                                            </div>
                                            <p>
                                                Pay via Pay Pal; you can pay with your credit card if you don’t have a PayPal account.
                                            </p>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                                <div>
                                    <Swiper
                                        // install Swiper modules
                                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                                        spaceBetween={50}
                                        slidesPerView={1}
                                        navigation
                                        pagination={{ clickable: true }}
                                        onSwiper={(swiper) => console.log(swiper)}
                                        onSlideChange={() => console.log('slide change')} >
                                        <SwiperSlide>
                                            <div>
                                                <img className='img-fluid review-person' src={CategeoriesItem1} alt="ExpertisePersonimg" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div>
                                                <img className='img-fluid review-person' src={CategeoriesItem3} alt="ExpertisePersonimg" />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div>
                                                <img className='img-fluid review-person' src={CategeoriesItem4} alt="ExpertisePersonimg" />
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="box-2">
                                <div className="box-inner-2">
                                    <div>
                                        <h4 className="fw-bold text-success">Payment Details</h4>
                                        <p className=" mb-3">Complete your purchase by providing your payment details</p>
                                    </div>
                                    <form action="">
                                        <div className="mb-3">
                                            <label className=" mb-2">Email address</label>
                                            <input className="form-control" placeholder='Enter your Email' type="email" required />
                                        </div>
                                        <div>
                                            <p className=" mb-2">Card Number</p>
                                            <div className="d-flex align-items-center justify-content-between card-atm border rounded">
                                                <div className="fab fa-cc-visa"></div>
                                                <input type="text" className="form-control" placeholder="Card Number" required />
                                                <div className="d-flex w-50">
                                                    <input type="text" className="form-control px-0" placeholder="MM/YY" required />
                                                    <input type="password" maxlength="3" className="form-control px-0" placeholder="CVV" required />
                                                </div>
                                            </div>
                                            <div className="my-3 cardname">
                                                <label className="mb-2">Cardholder name</label>
                                                <input className="form-control" placeholder='Cardholder name' type="text" required />
                                            </div>

                                            <div className="address">
                                                <p className="mb-3">Billing address</p>
                                                <select className="form-select" aria-label="Default select example">
                                                    <option selected hidden>United States</option>
                                                    <option value="1">India</option>
                                                    <option value="2">Australia</option>
                                                    <option value="3">Canada</option>
                                                </select>
                                                <div className="d-flex">
                                                    <input className="form-control zip" type="text" placeholder="ZIP" required />
                                                    <input className="form-control state" type="text" placeholder="State" required />
                                                </div>
                                                <div className=" my-3">
                                                    <p className=" mb-2">VAT Number</p>
                                                    <div className="inputWithcheck">
                                                        <input className="form-control" type="text" placeholder="GB012345B9" required />
                                                        <span className="fas fa-check"></span>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-column dis">
                                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                                        <p>Quantity</p>
                                                        <p><span className="fas fa-dollar-sign"></span>1</p>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                                        <p>Discount</p>
                                                        <p><span className="fas fa-dollar-sign"></span><span>&#8377;</span>20.00</p>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                                        <p>Delivery Charges</p>
                                                        <p className='text-success fw-bold'>FREE DELIVERY</p>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                                        <p className="fw-bold">Total</p>
                                                        <p className="fw-bold"><span className="fas fa-dollar-sign"></span>200.00</p>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                                        <p className="text-success">You Will Save <span>&#8377;</span>20 on this order</p>
                                                    </div>
                                                    <input className="btn btn-primary mt-2" type='submit' value='Pay 200.00' />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default PaymentFormPage
