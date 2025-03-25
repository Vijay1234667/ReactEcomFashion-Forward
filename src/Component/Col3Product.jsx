import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { useProductContext } from './Context/ProductContext';

const Col3Product = ({ id, ProductName, ProductPrice, ProductInfo1, Discount, image }) => {
    const { base_url, public_url } = useProductContext();
    
    return (
        <div className="col-lg-3 col-6 mb-3">
            <Link to={`/singleproduct/${id}`} className="text-decoration-none">
                <div className="card h-100 shadow-sm  rounded border border-1 border-danger-subtle p-1">
                    <div className="position-relative">
                        <img src={`${base_url}${public_url}/${image}`} alt={ProductName} className="card-img-top" />
                    </div>
                    <div className="card-body text-center py-1">
                        <div className='d-flex justify-content-between mt-2'>
                            <span className="font-weight-bold text-dark">{ProductName}</span>
                            <h6 className="text-danger font-weight-bold">&#8377;{ProductPrice}</h6>
                        </div>
                        <p className="text-muted">{ProductInfo1}</p>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-light border rounded-circle mx-2">
                                <FavoriteBorderIcon className="text-secondary" />
                            </button>
                            <button className="btn btn-light border rounded-circle mx-2">
                                <AddShoppingCartIcon className="text-secondary" />
                            </button>
                            <button className="btn btn-light border rounded-circle mx-2">
                                <SearchIcon className="text-secondary" />
                            </button>
                        </div>
                        {Discount && <button className='btn badge badge-warning text-dark mt-2'>{Discount}</button>}
                        <button className="btn btn-dark mt-3 w-100">Add to Cart</button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Col3Product;