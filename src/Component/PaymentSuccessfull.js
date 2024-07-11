import React from 'react'
import './css/Paymentsuccess.css'

import { Container } from 'react-bootstrap-v5'

const PaymentSuccessfullPage = () => {
    return (
        <>
            <Container className='Successpage'>
                <div className="card border-0 text-center">
                    <div className='successcard'>
                        <i className="checkmark">✓</i>
                    </div>
                    <h1>Payment Successfull</h1>
                    <p>We received your purchase request;<br /> we'll be in touch shortly!</p>
                </div>
            </Container>
        </>
    )
}

export default PaymentSuccessfullPage
