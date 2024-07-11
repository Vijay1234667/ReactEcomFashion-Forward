import React from 'react'
import './css/DeliveryAddress.css';
import LoginAbsoluteImg from './assets/LoginAbsoluteImg.svg'
import Deliveryaddresstopimg from './assets/Deliveryaddresstopimg.svg'
const DeliveryAddressPage = () => {
    return (
        <>
            <section class="Delivery-Address-Section">
                <div class="container">
                    <div class="text-center mb-4">
                        <h1><span></span>Enter Your
                            Delivery Address</h1>
                    </div>
                    <div class="row">
                        <div class="form-body-content">
                            <form>
                                <div class="col-md-6 shadow-section mx-auto p-3">
                                    <div class="mb-3">
                                        <label class="form-label">Full name</label>
                                        <input type="text" placeholder='Full name' class="form-control" required/>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Email</label>
                                        <input type="email" placeholder='Enter Your Email' class="form-control" required/>
                                    </div>
                              
                                    <div class="mb-3">
                                        <label class="form-label">Street address</label>
                                        <input type="text" placeholder='Enter Your Street address'  class="form-control" required/>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Flat/Other(Optional)</label>
                                        <input type="text" placeholder='Enter Your Flat/Other(Optional)' class="form-control" required/>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <div class="mb-3 col-md-5">
                                            <label class="form-label" required>City</label>
                                            <input type="text"placeholder='Enter Your City'  class="form-control"/>
                                        </div>
                                        <div class="mb-3 col-md-5">
                                            <label class="form-label" required>Pincode</label>
                                            <input type="text" placeholder='Enter Your Pincode' class="form-control"/>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">State</label>
                                        <select class="form-select" id="country" name="country">
                                            <option value="AF">Maharashtra</option>
                                            <option value="AX">Goa</option>
                                            <option value="AX">Rajasthan</option>
                                        </select>
                                    </div>
                                    <div class="mb-3 text-center">
                                        <input href="#paymentform" type="submit" value="Continue to payment" class="btn Google-btn"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="delivery-absoluteimg d-none d-md-block">
                        <img class="img-fluid" src={Deliveryaddresstopimg} alt="" width="420px"/>
                    </div>
                    <div class="delivery-absoluteimgleft d-none d-md-block">
                        <img class="img-fluid" src={LoginAbsoluteImg} alt="" width="420px"/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DeliveryAddressPage
