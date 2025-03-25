import React, { useEffect, useState } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './css/Home.css';
import { Container } from 'react-bootstrap-v5';

import Typed from "typed.js";

const HomeSection3 = () => {
    useEffect(() => {
        const options = {
          strings: ["Sunglasses", "Bag", "Watch", "Shoes"],
          typeSpeed: 180,
          backSpeed: 180,
          loop: true,
        };
        const typed = new Typed(".auto-type-textSale1", options);
    
        return () => {
          typed.destroy();
        };
      }, []);


    let time = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(time);

    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    };
    setInterval(UpdateTime, 1000)

    return (
        <>
            <section className="Limited-offers-section mt-5 mb-5">
                <Container>
                    <div className="">
                        <div className='text-center text-white'>
                            <h2 className='mb-4 font-h2'>End of Season <span className='auto-type-textSale1'></span>
                                <span className='d-md-block'>Sale upto 30%</span></h2>
                            <a href="/" className='btn '> <AddShoppingCartIcon className='me-1 nav-offer-btn' />Shop Now</a>
                            <ul className='d-flex justify-content-center Limited-offers-timmer'>
                                <li>
                                    <span>09</span>
                                    <h6 className='d-block fs-5'>Days</h6>
                                </li>
                                <li>
                                    <span>13</span>
                                    <h6 className='d-block fs-5'>Hours</h6>
                                </li>
                                <li>
                                    <span>17</span>
                                    <h6 className='d-block fs-5'>Min</h6>
                                </li>
                                <li>
                                    <spa>01</spa>
                                    <h6 className='d-block fs-5'>Sec</h6>
                                </li>
                            </ul>
                        </div>
                    </div>

                </Container>

            </section>
        </>
    )
}

export default HomeSection3
