import React from 'react'
import './css/Login.css'
import LoginLeftImg from './assets/LoginLeftImg.jpg'
import LoginAbsoluteImg from './assets/LoginAbsoluteImg.svg'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <>
       <section className="Login-Page-Section">
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-fluid" src={LoginLeftImg} alt="LoginLeftImg"/>
                    </div>
                    <div className="col-md-5  shadow-section p-3">
                        <div className="mb-4 text-center">
                            <h1>Sign in</h1>
                            <p>Don’t have an account yet? <Link to="signup" className="ms-1">Register here</Link></p>
                        </div>
                        <div className="form-body-content">
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Name</label>
                                <input required="" placeholder='Enter Your Name' type="email" className="form-control" id="exampleFormControlInput1"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Password</label>
                                <input required="" placeholder='Enter Your Password' type="email" className="form-control" id="exampleFormControlInput1"/>
                            </div>
                            <div className="mb-3 d-flex justify-content-between">
                                <h6><input className="form-check-input" type="checkbox" id="signupCheckTextCheckbox"
                                        data-gtm-form-interact-field-id="0"/>
                                    Remember me</h6>
                                <div className="forget-btn">
                                    <a href="/">Forgot Password</a>
                                </div>
                            </div>
                            <div className="mb-3 text-center">
                                <a href="/" className="btn sign-btn">Sign In</a>
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
                <div className="loginabsoluteright-absolute-image d-none d-md-block">
                    <img className="img-fluid" src={LoginAbsoluteImg} alt="LoginAbsoluteImg" width="500px"/>
                </div>
            </div>
        </section>
    </>
  )
}

export default LoginPage
