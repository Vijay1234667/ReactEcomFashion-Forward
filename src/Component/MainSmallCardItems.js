import React from 'react'

const MainSmallCardItems = ({ LeftCardImg, CategeoryName, ItemsName, Price, Discount }) => {
    return (
        <>
            <div className="card border-0 mb-3">
                <div className="row g-0 align-items-center">
                    <div className="col-3 text-center">
                        <a target="_blank" href="/">
                            <img src={LeftCardImg} className="img-fluid " alt="LeftCardImg" />
                        </a>
                    </div>
                    <div className="col-8">
                        <div className="card-body p-0 px-2">
                            <h5 className="mb-1"> {CategeoryName}</h5>
                            <h6 className="font-400 font-10">{ItemsName}</h6>
                            <div className="d-flex justify-content-between align-items-center flex-wrap rating-wrap">
                                <div className="rating">
                                    <h6 className="home-leftside-wrapper-price"><span>&#8377;</span>{Price}<del
                                        className="discount"><span>&#8377;</span>{Discount}</del></h6>
                                </div>
                                <div>
                                    <a href="/" className="home-leftside-wrapper-btn">Add to Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainSmallCardItems
