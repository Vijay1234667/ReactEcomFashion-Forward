import React from 'react'
import { Link } from 'react-router-dom';
import { useProductContext } from './Context/ProductContext';

const MainSmallCardItems = (curElem) => {
    const { base_url, public_url } = useProductContext();

    const { id, LeftCardImg, ProductName, category, ProductPrice } = curElem;

    return (
        <>
            <Link to={`/singleproduct/${id}`}>
                <div className="card border-0 pb-3 px-1 mb-3">
                    <div className="row g-0 align-items-center">
                        <div className="col-3 text-center">
                            <a target="_blank" href="/">
                                <img className='img-fluid' src={`${base_url}` + `${public_url}/` + LeftCardImg} alt="LeftCardImg" />
                            </a>
                        </div>
                        <div className="col-8">
                            <div className="card-body p-0 px-2">
                                <h6 className='Home-product-items-name'>{ProductName}</h6>
                                <h5 className="mb-1 Home-product-category-title"> {category}</h5>
                                <h6 className="product-price"><span>&#8377;</span>{ProductPrice}</h6>
                                <div className="d-flex justify-content-between">
                                    <div></div>
                                    <div>
                                        <a href="/" className="orange-btn-btn">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default MainSmallCardItems
