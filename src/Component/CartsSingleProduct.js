import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useProductContext } from './Context/ProductContext';
import BreadcrumbFixedTop from './BreadcrumbFixedTop';


const CartsSingleProduct = () => {
  const { singleProduct } = useProductContext();

  const { id } = useParams();
  return (

    <>
    <BreadcrumbFixedTop Title="Carts" Subtitle="Carts"/>
      <section className="main-top-cart-delivery-section">
        <div className="container-fluid p-0">
          <div className="row mt-5">
            <div className="Product-Cart-Info-Table col-lg-12 mx-auto">
              <table className="table">
                <thead className="text-center">
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Category</th>
                    <th scope="col">Brands</th>
                    <th scope="col">Price</th>
                    <th scope="col">Remove</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td>1</td>
                    <td>{singleProduct[0]?.ProductName}</td>
                    <td>{singleProduct[0]?.ProductInfo1}</td>
                    <td>
                      {singleProduct[0]?.category}
                    </td>
                    <td>
                      {singleProduct[0]?.Brands}
                    </td>
                    <td>
                      {singleProduct[0]?.ProductPrice}
                    </td>
                    <td>
                      <button className='btn bg-danger text-white'>X</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="payment-summary-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="shadow-md p-4 payment-summary-body  mb-4">
                  <h5 className="paysum-head">Payment Summary</h5>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>Total Items</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>Total Shipping</td>
                        <td className="text-success"><span>&#8377;</span>0.00</td>
                      </tr>
                      <tr>
                        <td>
                          Delivery Chrges
                        </td>
                        <td className="text-success fw-medium">Free Delivery</td>
                      </tr>
                      <tr>
                        <td>
                          <h5 className=" fw-bold">Total Amount</h5>
                        </td>
                        <td className="text-danger fw-bold"><span>&#8377;</span>{singleProduct[0]?.ProductPrice}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="text-center place-order-btn">
                    <a href="#deliveryaddress" className="btn">Process To Checkout</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}

export default CartsSingleProduct
