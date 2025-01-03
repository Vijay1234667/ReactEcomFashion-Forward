import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useProductContext } from './Context/ProductContext';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { Swiper, SwiperSlide } from 'swiper/react';

import './css/AddToCart.css';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { Thumbs } from 'swiper/modules';
import './css/AddToCart.css';
import { Container } from 'react-bootstrap-v5';
import BreadcrumbFixedTop from './BreadcrumbFixedTop';

const API = 'http://localhost:3001/cardata';

const SingleProduct = () => {
  const [addImg, setaddImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const { getSingleProduct, isSingleLoading, singleProduct , handleCart } = useProductContext();
  
  const { id } = useParams();

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, [id]);


  useEffect(() => {
    if (singleProduct[0]) {
      setTotalPrice(singleProduct[0].ProductPrice);
    }
  }, [singleProduct]);

  useEffect(() => {
    if (singleProduct.length > 0) {
      const existingProducts = JSON.parse(localStorage.getItem('itemset')) || [];
      
      const productExists = existingProducts.some(product => product.id === singleProduct[0].id);
      
      if (!productExists) {
        existingProducts.push(singleProduct[0]);
        localStorage.setItem('itemset', JSON.stringify(existingProducts));
      }
    }
  }, [singleProduct]);

  if (isSingleLoading) {
    return <div>Loading....</div>;
  }



  const imgArray = [
    'http://localhost:3001/img-hover7.JPG',
    'http://localhost:3001/img5_1.JPG',
    'http://localhost:3001/WomenItem16.jpg',
    'http://localhost:3001/img5_1.JPG',
  ];

  const currImg = (key) => {
    setaddImg(key);
  };
  
  return (
    <>
      <BreadcrumbFixedTop Title={singleProduct[0]?.ProductName} />
      <Container fluid className='p-0'>
        <section className='add-to-bag-main-page padding-all'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-4'>
                <img
                  className='img-fluid'
                  src={'http://localhost:3001/' + singleProduct[0]?.image}
                  alt='nbnk'
                />
                <Swiper
                  spaceBetween={10}
                  slidesPerView={3}
                  freeMode={true}
                  modules={[Thumbs]}
                  watchSlidesProgress
                  className='mySwiper'>
                  {imgArray.map((img, key) => (
                    <SwiperSlide className='top-img' key={key} onClick={() => currImg(key)}>
                      <img src={img} alt='img' className='img-fluid' />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className='col-lg-5 h-auto add-to-bag-body-content'>
                <h4 className='fw-bold mb-1'>
                  <span className='text-success'># </span>
                  {singleProduct[0]?.ProductName}
                  <span className='text-success'>#</span>
                </h4>
                <h6>{singleProduct[0]?.ProductInfo1}</h6>
                <span className='hrtag' />
                <div className='QuantitySection'>
                  <h5>
                    <span>&#8377;</span>{totalPrice}
                  </h5>
                  <h6 className='mb-3'>Add Quantity</h6>
                  <div className='d-flex mb-3'>
                    <div className=''>
                      <button className='btn btn-outline-primary'  type='button'>-</button>
                    </div>
                    <div className='ms-2'>
                      <span className='' type='text'>1</span>
                    </div>
                    <div className='ms-2'>
                      <button className='btn btn-outline-primary'  type='button'>+</button>
                    </div>
                  </div>
                </div>
                <div className='mb-3'>
                  <h6>More Colors..</h6>
                  <div className='choose-color'>
                    <ul className='d-flex p-0 '>
                      <li><a href='javascript:void(0)' className='btn bg-success'></a></li>
                      <li><a href='javascript:void(0)' className='btn bg-primary'></a></li>
                      <li><a href='javascript:void(0)' className='btn bg-warning'></a></li>
                      <li><a href='javascript:void(0)' className='btn bg-danger'></a></li>
                      <li><a href='javascript:void(0)' className='btn bg-info'></a></li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h6 className='mb-3'>Select Size</h6>
                  <div className='add-to-carts-featured-products-sizes-btn mb-4'>
                    <ul className='d-flex p-0'>
                      <li><a className='btn' href='javascript:void(0)'>XS</a></li>
                      <li><a className='btn' href='javascript:void(0)'>S</a></li>
                      <li><a className='btn' href='javascript:void(0)'>M</a></li>
                      <li><a className='btn' href='javascript:void(0)'>L</a></li>
                      <li><a className='btn' href='javascript:void(0)'>XL</a></li>
                      <li><a className='btn' href='javascript:void(0)'>XXL</a></li>
                    </ul>
                  </div>
                </div>

                <div className='Product-Category d-flex align-items-baseline'>
                  <h6 className='me-2 '>Category:</h6>
                  <p>{singleProduct[0]?.category}</p>
                </div>
                <div className='mb-3'>
                  <div className='add-to-carts-featured-products-add-tobag-whishlist-btn'>
                    <div className='mb-2'>
                      <Link className='btn btn-1 w-75' onClick={() => handleCart(singleProduct,quantity,totalPrice)} to='/cartsingleproduct'>
                        <AddShoppingCartIcon />
                        Add To Cart
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='Product-Category d-flex'>
                  <h6 className='me-2'>Estimated Delivery:</h6>
                  <p className='text-success fw-medium'>17 July - 23 July</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default SingleProduct;
