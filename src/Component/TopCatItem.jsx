import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { useProductContext } from './Context/ProductContext';

const TopCatItem = () => {
    const { products } = useProductContext();
    let base_url = process.env.REACT_APP_BASE_URL;
    let public_url = process.env.PUBLIC_URL;

    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{ clickable: true }}
            breakpoints={{
                576: { slidesPerView: 2 },
                768: { slidesPerView: 4 },
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            {products.slice(3, 8).map(({ id, ProductName, ProductPrice, ProductInfo1, Discount, image }) => (
                <SwiperSlide key={id}>
                    <Link to={`/singleproduct/${id}`} className="text-decoration-none">
                        <div className="card h-100 shadow-sm border-0 rounded">
                            <div className="position-relative">
                                <img src={`${base_url}${public_url}/${image}`} alt={ProductName} className="card-img-top" />
                            </div>
                            <div className="card-body text-center py-1">
                                <h5 className="card-title font-weight-bold text-dark">{ProductName}</h5>
                                <p className="card-text text-muted">{ProductInfo1}</p>
                                <div className="d-flex justify-content-between align-items-center mt-2">
                                    <span className="text-danger font-weight-bold">&#8377;{ProductPrice}</span>
                                    {Discount && <span className="badge badge-warning text-dark">{Discount}</span>}
                                </div>
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
                                <button className="btn btn-dark mt-3 w-100">Add to Cart</button>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default TopCatItem;
