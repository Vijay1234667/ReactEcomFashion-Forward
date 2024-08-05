import React, { useState } from 'react'
import limitoffer1 from './assets/limitoffer1.png'
import limitoffer2 from './assets/limitoffer2.png'
import './css/Home.css';

const HomeSection3 = () => {

    let time = new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState(time);

    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    };
    setInterval(UpdateTime, 1000)
    return (
        <>
            <section className="Limited-offers-section">
                <div className="container bg-pink">
                    <div className="row align-items-center">
                        <div className="col-md-3 d-none d-md-block">
                            <img className="img-fluid" src={limitoffer1} alt="limitoffer1" />
                        </div>

                        <div className="col-md-6 py-3 md-py-0">
                            <div className="text-center">
                                <button className='orange-btn-btn mb-3 mb-md-2'>LIMITED OFFER</button>
                                <h3 className='text-white'>{ctime}</h3>
                                <p className='text-paragraph'>25% Off Only This Monday <br />and Get Special Offer</p>
                            </div>
                        </div>
                        <div className="col-md-3 d-md-block d-none">
                            <img className="img-fluid" src={limitoffer2} alt="limitoffer2" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeSection3
