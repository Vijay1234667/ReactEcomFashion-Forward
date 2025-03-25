import React from 'react'
import './css/Login.css'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    return (
        <>
            <section className="Login-Page-Section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className=" Login-Page-left-content col-md-4">
                            <h2>New Customer</h2>
                            <p>Sign up for a free account at our store.</p>
                            <p>
                                Registration is quick and easy. it allow you to be able to order from our shop. To start shopping click register
                            </p>
                            <div>
                                <a href="" className='btn'>Create a Account</a>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="mb-4 ">
                                <h2>Log In</h2>
                                <p>Don’t have an account yet? <Link to="signup" className="ms-1">Register here</Link></p>
                            </div>
                            <div className="form-body-content">
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Username</label>
                                    <input required="" placeholder='Enter Your Username' type="email" className="form-control" id="exampleFormControlInput1" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Password</label>
                                    <input required="" placeholder='Enter Your Password' type="email" className="form-control" id="exampleFormControlInput1" />
                                </div>
                                <div className="mb-3 d-flex justify-content-between">
                                    <h6><input className="form-check-input" type="checkbox" id="signupCheckTextCheckbox"
                                        data-gtm-form-interact-field-id="0" />
                                        Remember me</h6>
                                    <div className="forget-btn">
                                        <a href="/">Forgot Password</a>
                                    </div>
                                </div>
                                <div className="mb-3 text-center">
                                    <a href="/" className="btn sign-btn">Log In</a>
                                </div>
                                <div className="mb-3">
                                    <p>Sign in with your social network.</p>
                                </div>
                                <div className="mb-3 text-center">
                                    <a href="/" className="btn Google-btn"><i
                                        className="fa-brands fa-google-plus-g me-2"></i>Continue with
                                        Google</a>
                                </div>
                                <div className="mb-3 text-center">
                                    <a href="/" className="btn Facebook-btn"><i
                                        className="fa-brands fa-facebook me-2"></i>Continue with Facebook</a>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </section>
        </>
    )
}

export default LoginPage
