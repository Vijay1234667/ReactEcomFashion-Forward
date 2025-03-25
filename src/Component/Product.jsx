import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { useProductContext } from './Context/ProductContext';

const Product = ({ id, ProductName, ProductPrice, ProductInfo1, Discount, image }) => {
    const { base_url, public_url } = useProductContext();
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
            <Link to={`/singleproduct/${id}`} className="text-decoration-none">
                <div className="card shadow-sm  rounded h-100 border border-1 border-danger-subtle p-1">
                    <div className="position-relative">
                        <img src={`${base_url}${public_url}/${image}`} alt={ProductName} className="card-img-top" />
                    </div>
                    <div className="card-body text-center py-2">
                        <h5 className="card-title font-weight-bold text-dark">{ProductName}</h5>
                        <p className="card-text text-muted mb-1">{ProductInfo1}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="text-danger font-weight-bold">&#8377;{ProductPrice}</span>
                            <span className="badge badge-warning text-dark">{Discount}</span>
                        </div>
                        <div className="d-flex justify-content-center mt-2">
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
                        <button className="btn btn-dark mt-3 w-100">Add to Cart</button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Product;
