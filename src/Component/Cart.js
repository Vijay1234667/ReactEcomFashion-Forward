import './css/Cart.css';
import addtocart1 from './assets/addtocart1.png'
function CartPage() {
    return (
        <>
            <section className="main-top-cart-delivery-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="">
                            <table className="table table-bordered caption-top">
                                <thead className="text-center">
                                    <tr>
                                        <th scope="col">No.</th>
                                        <th scope="col">Product</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    <tr>
                                        <th>1</th>
                                        <td><img className="img-fluid" src={addtocart1} width="50px" height="40px"
                                            alt="addtocart1" /></td>
                                        <td>Slogan cotton print t-shirt</td>
                                        <td>
                                            200
                                        </td>
                                        <td>
                                            1
                                        </td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="payment-summary-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <div className="shadow-md p-4 payment-summary-body  mb-4">
                                    <h5 className="paysum-head">Your Order Summary</h5>
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <td> Items</td>
                                                <td>1</td>
                                            </tr>
                                            <tr>
                                                <td>Discount</td>
                                                <td className="text-success"><span>&#8377;</span>20.00</td>
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
                                                <td className="text-danger fw-bold"><span>&#8377;</span>200</td>
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
    );
}
export default CartPage;