import React, { useState, useEffect } from 'react';
import Product from './Product';
import { useProductContext } from './Context/ProductContext';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridViewIcon from '@mui/icons-material/GridView';
import CloseIcon from '@mui/icons-material/Close';
import { Container } from 'react-bootstrap-v5';
import BreadcrumbFixedTop from './BreadcrumbFixedTop';
import HomeNewslaterSection from './HomeNewslaterSection';
import SALE1 from "./assets/SALE1.png";

const FilterCategoryPage = () => {
    const { featureProducts } = useProductContext();
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedColor, setSelectedColor] = useState('All');
    const [selectedSize, setSelectedSize] = useState('All');
    const [selectedBrands, setSelectedBrands] = useState('All');
    const [selectedAvailability, setSelectedAvailability] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(featureProducts);

    useEffect(() => {
        if (selectedCategory === 'All') {
            setFilteredProducts(featureProducts);
        } else {
            setFilteredProducts(featureProducts.filter(product => product.category === selectedCategory));
        }
    }, [selectedCategory, featureProducts]);
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    useEffect(() => {
        if (selectedColor === 'All') {
            setFilteredProducts(featureProducts);
        } else {
            setFilteredProducts(featureProducts.filter(product => product.color === selectedColor));
        }
    }, [selectedColor, featureProducts]);

    const handleColorClick = (color) => {
        setSelectedColor(color);
    };


    useEffect(() => {
        if (selectedSize === 'All') {
            setFilteredProducts(featureProducts);
        } else {
            setFilteredProducts(featureProducts.filter(product => product.Size === selectedSize));
        }
    }, [selectedSize, featureProducts]);

    const handleSizeClick = (Size) => {
        setSelectedSize(Size);
    };

    useEffect(() => {
        if (selectedBrands === 'All') {
            setFilteredProducts(featureProducts);
        } else {
            setFilteredProducts(featureProducts.filter(product => product.Brands === selectedBrands));
        }
    }, [selectedBrands, featureProducts]);

    const handleBrandClick = (Brands) => {
        setSelectedBrands(Brands);
    };


    useEffect(() => {
        if (selectedAvailability === 'All') {
            setFilteredProducts(featureProducts);
        } else {
            setFilteredProducts(featureProducts.filter(product => product.Availability === selectedAvailability));

        }
    }, [selectedAvailability, featureProducts]);

    const handleAvailabilityClick = (Availability) => {
        setSelectedAvailability(Availability);
    };


    useEffect(() => {
        let filtered = featureProducts;
        if (searchQuery) {
            filtered = filtered.filter(product => product.ProductName.toLowerCase().includes(searchQuery.toLowerCase()));
        }

        setFilteredProducts(filtered);
    }, [searchQuery, featureProducts]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <>
            <BreadcrumbFixedTop Title="Category" Subtitle="Category" />
            <section className='FilterCategoryPage'>
                <Container>
                    <div className="row">
                        <div className="col-md-3">
                            <h4 className='mb-3'>Filter Category</h4>
                            <div className='filterallproductcss'>
                                <ul className='p-0'>
                                    <li>
                                        <button className='btn' onClick={() => handleCategoryClick('All')}>All</button>
                                    </li>
                                    <li>
                                        <button className='btn' onClick={() => handleCategoryClick('Men')}>Men</button>
                                    </li>
                                    <li>
                                        <button className='btn' onClick={() => handleCategoryClick('Women')}>Women</button>
                                    </li>
                                    <li>
                                        <button className='btn' onClick={() => handleCategoryClick('Kids')}>Kid's</button>
                                    </li>
                                </ul>
                            </div>

                            <div className=' mt-3'>
                                <h4>Color</h4>
                                <div className='filter-Color filterallproductcss'>
                                    <ul className=" d-flex p-0">
                                        <li>
                                            <button href="/" onClick={() => handleColorClick('All')} className=" px-1 me-2">All</button>
                                        </li>
                                        <li>
                                            <button href="/" onClick={() => handleColorClick('green')} className="btn bg-success me-2"></button>
                                        </li>
                                        <li>
                                            <button href="/" onClick={() => handleColorClick('blue')} className="btn bg-primary me-2"></button>
                                        </li>
                                        <li>
                                            <button href="/" onClick={() => handleColorClick('yellow')} className="btn bg-warning me-2"></button>
                                        </li>
                                        <li>
                                            <button href="/" onClick={() => handleColorClick('red')} className="btn bg-danger me-2"></button>
                                        </li>
                                        <li>
                                            <button href="/" onClick={() => handleColorClick('orange')} className="btn bg-info"></button>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className='Filter-Product-Type '>
                                <h4>Size</h4>
                                <div className='Filter-Product-Type-list filterallproductcss d-flex justify-content-between align-items-center'>
                                    <ul className="p-0">
                                        <li>
                                            <button href="/" onClick={() => handleSizeClick('M')} className="btn ">M</button>
                                        </li>
                                        <li>
                                            <button href="/" onClick={() => handleSizeClick('L')} className="btn ">L</button>
                                        </li>
                                        <li>
                                            <button href="/" onClick={() => handleSizeClick('XL')} className="btn ">XL</button>
                                        </li>
                                        <li>
                                            <button href="/" onClick={() => handleSizeClick('XXL')} className="btn ">XXL</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className='Filter-Brand-Type'>
                                <h4>Product Type</h4>
                                <div className=' Filter-Brand-Type-list filterallproductcss d-flex justify-content-between align-items-center'>
                                    <ul className="p-0">
                                        <li>
                                            <button href="/" onClick={() => handleBrandClick('H&M')} className="btn ">Zara</button>
                                        </li>
                                        <li>
                                            <button href="/" onClick={() => handleBrandClick('Levis')} className="btn ">Levis</button>
                                        </li>
                                        <li>
                                            <button href="/" onClick={() => handleBrandClick('Adidas')} className="btn ">Adidas</button>
                                        </li>
                                    </ul>
                                    <ul className="p-0">
                                        <li>
                                            <button href="/" onClick={() => handleBrandClick('Zara')} className="btn ">H&M</button>
                                        </li>
                                        <li>
                                            <button href="/" onClick={() => handleBrandClick('Nike')} className="btn ">Nike</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className='Filter-Availability-Type'>
                                <h4>Availability</h4>
                                <div className=' Filter-Availability-Type-list filterallproductcss d-flex justify-content-between align-items-center'>
                                    <ul className="p-0">
                                        <li>
                                            <button href="/" onClick={() => handleAvailabilityClick('In stock')} className="btn ">In stock</button>
                                        </li>
                                        <li>
                                            <button href="/" onClick={() => handleAvailabilityClick('Out Of stock')} className="btn ">Out Of stock</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className=''>
                              
                                <h4 className='mt-3'>Price</h4>
                                <span className='fw-bold fs-6'>&#8377;600000</span>
                                <div><input className='w-100' type="range" name="" id="" /></div>
                                
                            </div>

                            <div className='mt-4 transparent-btn'>
                                <button className='btn' onClick={() => handleCategoryClick('All')}>Clear Filter <CloseIcon /></button>
                            </div>
                            <>
                                <div>
                                    <img className='img-fluid' src={SALE1} alt="" />
                                </div>
                                </>
                        </div>
                        <div className="col-md-9">
                            <div className='d-flex justify-content-between mb-2'>
                                <div className='list-grid-icons'>
                                    <button className='btn'><FormatListBulletedIcon /></button>
                                    <button className='btn'><GridViewIcon /></button>
                                </div>
                                <div className='Product-Search-input d-flex'>
                                    <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder='Search Product Here' id="" />
                                    <div className=''>
                                        <a href="" className='btn ms-2'>Search</a>
                                    </div>
                                </div>
                            </div>
                            <div className='filtersalebgimg mb-4'>
                            </div>
                            <div className="row">
                                {filteredProducts.slice(0, 9).map((curElem) => {
                                    return <Product key={curElem.id} {...curElem} />;
                                })}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <HomeNewslaterSection />
        </>
    );
}

export default FilterCategoryPage;
