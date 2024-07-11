import React from 'react'
import MainProductItemCard from './MainProductItemCard'
import trending1 from './assets/trending1.jpg'
import trending2 from './assets/trending2.jpg'
import trending3 from './assets/trending3.jpg'
import trending4 from './assets/trending4.jpg'


const HomeTrendingSection = () => {
    return (
        <>
            <section className="trending-section ">
                <div className="container">
                    <div className="text-center mb-2">
                        <h4 className="fw-bold mb-2">TRENDING</h4>
                        <p className="mb-3">Quis id facere possimus nihil dicta minima doloribus aliquid asperiores unde aspernatur <br />
                            fugiat praesentium et quo esse accusantium temporibus iste, eius natus.</p>
                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-3 col-6 mb-3">
                            <MainProductItemCard MainImg={trending1} ProductName="Headphone" ProductPrice="1400" Discount="30" ProductInfo1="3K+ viewed in past month" ProductInfo2="Get it by Sunday February 25" />
                        </div>
                        <div className="col-lg-3 col-6 mb-3">
                            <MainProductItemCard MainImg={trending2} ProductName="jewellery" ProductPrice="2500" Discount="30" ProductInfo1="3K+ viewed in past month" ProductInfo2="Get it by Sunday February 25" />
                        </div>
                        <div className="col-lg-3 col-6 mb-3">
                            <MainProductItemCard MainImg={trending3} ProductName="Cap" ProductPrice="400" Discount="1130" ProductInfo1="3K+ viewed in past month" ProductInfo2="Get it by Sunday February 25" />
                        </div>
                        <div className="col-lg-3 col-6 mb-3">
                            <MainProductItemCard MainImg={trending4} ProductName="Earphone" ProductPrice="400" Discount="330" ProductInfo1="3K+ viewed in past month" ProductInfo2="Get it by Sunday February 25" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeTrendingSection
