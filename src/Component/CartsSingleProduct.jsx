import React, { useEffect, useState } from 'react';
import { useProductContext } from './Context/ProductContext';
import BreadcrumbFixedTop from './BreadcrumbFixedTop';
import { NavLink } from 'react-router-dom';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const CartsSingleProduct = () => {
  const { singleProduct , handleDecrement,handleIncrement,totalItems,setTotalItems,handleRemoveItem,totalPrice,carts,setCarts,setTotalPrice } = useProductContext();


  useEffect(() => {
    if (singleProduct.length > 0) {
      const existingProducts = JSON.parse(localStorage.getItem('carts')) || [];
      const productExists = existingProducts.some(product => product.id === singleProduct[0].id);

      if (!productExists) {
        const newProduct = { ...singleProduct[0], quantity: 1 };
        const updatedProducts = [...existingProducts, newProduct];

        setCarts(updatedProducts);
        localStorage.setItem('carts', JSON.stringify(updatedProducts));
        
        setTotalPrice(prevPrice => prevPrice + singleProduct[0].ProductPrice);
        setTotalItems(prevItems => prevItems + 1);
      }
    }
  }, [singleProduct]);




  return (
    <>
      <BreadcrumbFixedTop Title="Carts" Subtitle="Carts" />
      <section className="main-top-cart-delivery-section">
        <div className="container-fluid">
          <div className="row mt-5">
            <div className="Product-Cart-Info-Table col-md-12">
              <table className="table">
                <thead className="text-center">
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Brands</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col">Remove</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {
                    carts.map((c, key) => (
                      <tr key={key}>
                        <td>{key + 1}</td>
                        <td>{c.ProductName}</td>
                        <td>{c.category}</td>
                        <td>{c.Brands}</td>
                        <td>
                          <div className="d-flex justify-content-center align-items-center">
                            <button className="btn btn-outline-primary" onClick={() => handleDecrement(key)}>-</button>
                            <span className="mx-2">{c.quantity}</span>
                            <button className="btn btn-outline-primary" onClick={() => handleIncrement(key)}>+</button>
                          </div>
                        </td>
                        <td><CurrencyRupeeIcon className='fs-5'/>{c.ProductPrice * c.quantity}</td>
                        <td>
                          <button
                            className='btn bg-danger text-white'
                            onClick={() => handleRemoveItem(key)}
                          >
                            <DeleteForeverIcon/>
                          </button>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <div className="payment-summary-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="shadow-md p-4 payment-summary-body mb-4">
                <h5 className="paysum-head">Payment Summary</h5>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Total Items</td>
                      <td>{totalItems}</td>
                    </tr>

                    <tr>
                      <td>Delivery Charges</td>
                      <td className="text-success fw-medium">Free Delivery</td>
                    </tr>
                    <tr>
                      <td><h5 className="fw-bold">Total Amount</h5></td>
                      <td className="text-danger fw-bold"><CurrencyRupeeIcon/>{totalPrice}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-center place-order-btn">
                  <NavLink to="/paymentform">
                    <button className="btn">Proceed To Checkout</button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartsSingleProduct;
