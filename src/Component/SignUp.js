import React from 'react'
import './css/Signup.css'

import { Container } from 'react-bootstrap-v5'
const SignUpPage = () => {
  return (
    <>
      <section class="Sign-up-Page-Section">
        <Container>
          <div class="text-center mb-4">
            <h1>Create Account</h1>
            <p>Sign up now and get free account instant.</p>
          </div>
          <div class="row">
            <div class="form-body-content">
              <div class="col-md-6 shadow-section mx-auto p-3">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Name</label>
                  <input required="" placeholder='Enter Your Name' type="text" class="form-control" id="exampleFormControlInput1" />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Email</label>
                  <input required="" placeholder='Enter Your Email' type="email" class="form-control" id="exampleFormControlInput1" />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Password</label>
                  <input required="" placeholder='Enter Your Password' type="password" class="form-control" id="exampleFormControlInput1" />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Confirm Password</label>
                  <input required="" placeholder='Enter Your Confirm Password' type="password" class="form-control" id="exampleFormControlInput1" />
                </div>
                <div class="mb-3">
                  <input class="form-check-input" type="checkbox" id="signupCheckTextCheckbox" data-gtm-form-interact-field-id="0" />
                  <a href="/" class="me-2">Terms of Use  </a><a href="/" class="ms-2">Privacy Policy</a>
                </div>

                <div class="mb-3 text-center">
                  <a href="/" class="btn sign-up-btn">Sign Up</a>
                </div>
                <div class="mb-3">
                  <p>Sign up with your social network.</p>
                </div>
                <div class="mb-3 text-center">
                  <a href="/" class="btn Google-btn"><i
                    class="fa-brands fa-google-plus-g me-2"></i>Continue with Google</a>
                </div>
                <div class="mb-3 text-center">
                  <a href="/" class="btn Facebook-btn"><i class="fa-brands fa-facebook me-2"></i>Continue
                    with Facebook</a>
                </div>
                <div class="mb-3 text-center">
                  <p>Already have an account? <a href="Login-page.html">Sign in here.</a></p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default SignUpPage
