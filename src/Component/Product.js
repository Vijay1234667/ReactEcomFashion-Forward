import React from 'react'


import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useProductContext } from './Context/ProductContext';


const Product = (curElem) => {
    const {base_url, public_url } = useProductContext();
    const { id,  ProductName, ProductPrice, ProductInfo1, Discount, image } = curElem;
    return (
        <div className="col-lg-4 col-6 mb-3">
            <Link to={`/singleproduct/${id}`}>
                <div className="product-cards-main-body ">
                    <div className="image-section">
                        <img src={`${base_url}` + `${public_url}/` + image} className="card-img-top "
                            alt="img" />
                    </div>
                    <div className="product-body text-center mb-2">
                        <div className='d-flex  justify-content-between mt-2'>
                            <div className='mb-2 mb-md-0'>
                                <span className="Home-product-items-name">{ProductName}</span>
                            </div>
                            <h6 className="product-price"><span>&#8377;</span>{ProductPrice}</h6>
                        </div>
                        <div>
                            <ul className="product-info p-0 mt-1">
                                <li>{ProductInfo1}</li>
                            </ul>
                        </div>
                        <div className="product-tag">
                            <span className="badge badge-secondary mb-2 ">
                                <a href="/" className=""><FavoriteBorderIcon /></a>
                            </span>
                            <span className="badge badge-secondary mb-2">
                                <a href="/"><AddShoppingCartIcon /></a>
                            </span>
                            <span className="badge badge-secondary"><a href="/">
                                <SearchIcon /></a>
                            </span>
                        </div>
                        <div className='Discount'>
                            <button className='btn'>{Discount}</button>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
};

export default Product;
