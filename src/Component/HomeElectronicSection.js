import React from 'react'

import Electronicitem1 from './assets/Electronicitem1.jpg'
import Electronicitem2 from './assets/Electronicitem2.jpg'
import Electronicitem3 from './assets/Electronicitem3.jpg'
import Electronicitem4 from './assets/Electronicitem4.jpg'
import ComputerMidSale from './assets/ComputerMidSale.webp'

import MainProductItemCard from './MainProductItemCard'


const HomeElectronicSection = () => {
    return (
        <>
            <section className="computer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb-3">
                            <img className="img-fluid" src={ComputerMidSale} alt="ShopImage" />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-6 mb-3">
                            <MainProductItemCard MainImg={Electronicitem1} ProductName="Jacket" ProductPrice="400" Discount="30" ProductInfo1="3K+ viewed in past month" ProductInfo2="Get it by Sunday February 25" />
                        </div>
                        <div className="col-lg-3 col-6 mb-3">
                            <MainProductItemCard MainImg={Electronicitem2} ProductName="Jacket" ProductPrice="400" Discount="30" ProductInfo1="3K+ viewed in past month" ProductInfo2="Get it by Sunday February 25" />
                        </div>
                        <div className="col-lg-3 col-6 mb-3">
                            <MainProductItemCard MainImg={Electronicitem3} ProductName="Jacket" ProductPrice="400" Discount="30" ProductInfo1="3K+ viewed in past month" ProductInfo2="Get it by Sunday February 25" />
                        </div>
                        <div className="col-lg-3 col-6 mb-3">
                            <MainProductItemCard MainImg={Electronicitem4} ProductName="Jacket" ProductPrice="400" Discount="30" ProductInfo1="3K+ viewed in past month" ProductInfo2="Get it by Sunday February 25" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeElectronicSection
