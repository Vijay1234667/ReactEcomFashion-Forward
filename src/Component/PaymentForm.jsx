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
import HomeNewslaterSection from './HomeNewslaterSection';

import { useProductContext } from './Context/ProductContext';


const PaymentFormPage = () => {
    const { totalItems, totalPrice } = useProductContext();
    // console.log(totalItems, "ti");




    return (
        <>
            <section className="payment-integration-section">
                <Container>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="box-1 user">
                                <div className='PaymentOption'>
                                    <div className="mt-3">
                                        <div className='ms-2'>
                                            <h5><SensorOccupiedIcon className='me-2' />UPI</h5>
                                            <p className='text-paragraph'>
                                                Pay with cash upon delivery
                                            </p>
                                        </div>
                                        <hr />
                                    </div>
                                    <div className="mt-3">
                                        <div className='ms-2'>
                                            <h5><DeliveryDiningIcon className='me-2' />Cash on delivery</h5>
                                            <p>
                                                Pay with cash upon delivery
                                            </p>
                                        </div>
                                        <hr />
                                    </div>
                                    <div className="mt-3">
                                        <div className='ms-2'>
                                            <h5><WalletIcon className='me-2' />Wallets</h5>
                                            <p>
                                                Pay with cash upon delivery
                                            </p>
                                        </div>
                                        <hr />
                                    </div>
                                    <div className="mt-3">
                                        <div className='ms-2'>
                                            <h5><AccountBalanceIcon className='me-2' />Net Banking</h5>
                                            <p>
                                                Pay with cash upon delivery
                                            </p>
                                        </div>
                                        <hr />
                                    </div>
                                    <div className="mt-3 d-flex">
                                        <div className='ms-2'>
                                            <div className="d-flex justify-content-between">
                                                <h5><PaidIcon className='me-2' />Pay pal</h5>
                                                <img className="img-fluid" src={FooterPayment} alt="FooterPayment" width="250px" />
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
                            <div className='mb-3'>
                                <h4 className="h4color">Payment Details</h4>
                                <p className="text-paragraph">Complete your purchase by providing your payment details</p>
                                <form action="">
                                    <div className="my-3">
                                        <label className="mb-2">Cardholder name</label>
                                        <input className="form-control" placeholder='Cardholder name' type="text" required />
                                    </div>
                                    <div className="mb-3">
                                        <label className=" mb-2">Email address</label>
                                        <input className="form-control" placeholder='Enter your Email' type="email" required />
                                    </div>
                                    <div className="mb-3">
                                        <label className=" mb-2">Card Number</label>
                                        <div className="d-flex align-items-center justify-content-between ">
                                            <input type="text" className="form-control" placeholder="Card Number" required />
                                            <div className="d-flex w-50">
                                                <input type="text" className="form-control ms-2 me-2" placeholder="MM/YY" required />
                                                <input type="password" maxlength="3" className="form-control" placeholder="CVV" required />
                                            </div>
                                        </div>
                                    </div>


                                    <div className="address">
                                        <p className="mb-3">Billing address</p>
                                        <select className="form-select mb-2 bg-transparent" aria-label="Default select example">
                                            <option selected hidden>United States</option>
                                            <option value="1">India</option>
                                            <option value="2">Australia</option>
                                            <option value="3">Canada</option>
                                        </select>
                                        <div className="d-flex mb-2">
                                            <input className="form-control zip" type="text" placeholder="ZIP" required />
                                            <input className="form-control state ms-1" type="text" placeholder="State" required />
                                        </div>
                                    </div>

                                </form>
                            </div>
                            
                            <div>
                                <table className='table border-0 text-center '>
                                    <thead className=''>
                                        <tr>
                                            <th>Total Quantity</th>
                                            <th>Total Amount</th>
                                            <th>Delivery Charges</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className=' fw-bold'>{totalItems}</td>
                                            <td className='text-danger fw-bold'>{totalPrice}&#x20B9;</td>
                                            <td className='text-success fw-bold'>FREE DELIVERY</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h6 className="text-success mb-3">You Will Save 200 on this order</h6>
                                <div className='text-center Fullwidthbutton'>
                                    <button type='submit' className='btn'>Pay {totalPrice} &#x20B9;</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <HomeNewslaterSection />
        </>
    )
}

export default PaymentFormPage
