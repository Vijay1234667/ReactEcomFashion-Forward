import React from 'react'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';


const MainProductItemCard = ({ MainImg, ProductName, ProductPrice, ProductInfo1, }) => {
    return (
        <>
            <div class="product-cards-main-body ">
                <div class="image-section">
                    <a href="#addtocart"><img src={MainImg} class="card-img-top img-fluid"
                        alt="..." />
                    </a>
                </div>
                <div class="product-body  text-center mb-2">
                    <div className='d-flex justify-content-between mt-2'>
                        <div>
                            <span class="product-name">{ProductName}</span>
                        </div>
                        <h6 class="product-price"><span>&#8377;</span>{ProductPrice}</h6>
                    </div>
                    <div>
                        <ul class="product-info p-0 mt-1">
                            <li>{ProductInfo1}</li>
                        </ul>
                    </div>
                    <div class="product-tag">
                        <span class="badge badge-secondary mb-2 ">
                            <a href="/" class=""><FavoriteBorderIcon /></a>
                        </span>
                        <span class="badge badge-secondary mb-2">
                            <a href="/"><AddShoppingCartIcon /></a>
                        </span>
                        <span class="badge badge-secondary"><a href="/">
                            <SearchIcon /></a>
                        </span>
                    </div>
                    <div className='Discount'>
                        <button className='btn'>30%</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainProductItemCard
