import React from 'react'
import './css/PaymentForm.css'

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
            <section class="payment-integration-section">
                <Container>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="box-1 user">
                                    <div class="">
                                        <img src="https://ik.imagekit.io/gku4adhog/first-fly-travel/Delta.svg?updatedAt=1714385080148"
                                            class="pic" alt="AboutPerson" width={140} />
                                    </div>

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
                            <div class="col-lg-6">
                                <div class="box-2">
                                    <div class="box-inner-2">
                                        <div>
                                            <h4 class="fw-bold text-success">Payment Details</h4>
                                            <p class=" mb-3">Complete your purchase by providing your payment details</p>
                                        </div>
                                        <form action="">
                                            <div class="mb-3">
                                                <label class=" mb-2">Email address</label>
                                                <input class="form-control" placeholder='Enter your Email' type="email" required />
                                            </div>
                                            <div>
                                                <p class=" mb-2">Card Number</p>
                                                <div class="d-flex align-items-center justify-content-between card-atm border rounded">
                                                    <div class="fab fa-cc-visa"></div>
                                                    <input type="text" class="form-control" placeholder="Card Number" required />
                                                    <div class="d-flex w-50">
                                                        <input type="text" class="form-control px-0" placeholder="MM/YY" required />
                                                        <input type="password" maxlength="3" class="form-control px-0" placeholder="CVV" required />
                                                    </div>
                                                </div>
                                                <div class="my-3 cardname">
                                                    <label class="mb-2">Cardholder name</label>
                                                    <input class="form-control" placeholder='Cardholder name' type="text" required />
                                                </div>

                                                <div class="address">
                                                    <p class="mb-3">Billing address</p>
                                                    <select class="form-select" aria-label="Default select example">
                                                        <option selected hidden>United States</option>
                                                        <option value="1">India</option>
                                                        <option value="2">Australia</option>
                                                        <option value="3">Canada</option>
                                                    </select>
                                                    <div class="d-flex">
                                                        <input class="form-control zip" type="text" placeholder="ZIP" required />
                                                        <input class="form-control state" type="text" placeholder="State" required />
                                                    </div>
                                                    <div class=" my-3">
                                                        <p class=" mb-2">VAT Number</p>
                                                        <div class="inputWithcheck">
                                                            <input class="form-control" type="text" placeholder="GB012345B9" required />
                                                            <span class="fas fa-check"></span>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex flex-column dis">
                                                        <div class="d-flex align-items-center justify-content-between mb-2">
                                                            <p>Quantity</p>
                                                            <p><span class="fas fa-dollar-sign"></span>1</p>
                                                        </div>
                                                        <div class="d-flex align-items-center justify-content-between mb-2">
                                                            <p>Discount</p>
                                                            <p><span class="fas fa-dollar-sign"></span><span>&#8377;</span>20.00</p>
                                                        </div>
                                                        <div class="d-flex align-items-center justify-content-between mb-2">
                                                            <p>Delivery Charges</p>
                                                            <p className='text-success fw-bold'>FREE DELIVERY</p>
                                                        </div>
                                                        <div class="d-flex align-items-center justify-content-between mb-2">
                                                            <p class="fw-bold">Total</p>
                                                            <p class="fw-bold"><span class="fas fa-dollar-sign"></span>200.00</p>
                                                        </div>
                                                        <div class="d-flex align-items-center justify-content-between mb-2">
                                                            <p class="text-success">You Will Save <span>&#8377;</span>20 on this order</p>
                                                        </div>
                                                        <input class="btn btn-primary mt-2" type='submit' value='Pay 200.00' />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
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
