import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import './css/FilterCategory.css';

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridViewIcon from '@mui/icons-material/GridView';

import CloseIcon from '@mui/icons-material/Close';

import galleryproduct1 from './assets/galleryproduct1.jpg'
import galleryproduct2 from './assets/galleryproduct2.jpg'
import galleryproduct3 from './assets/galleryproduct3.jpg'
import galleryproduct4 from './assets/galleryproduct4.jpg'
import galleryproduct5 from './assets/galleryproduct5.jpg'
import galleryproduct6 from './assets/galleryproduct6.jpg'
import galleryproduct7 from './assets/galleryproduct7.jpg'
import galleryproduct8 from './assets/galleryproduct8.jpg'
import galleryproduct9 from './assets/galleryproduct9.jpg'
import galleryproduct10 from './assets/galleryproduct10.jpg'

import Electronicitem1 from './assets/Electronicitem1.jpg'
import Electronicitem2 from './assets/Electronicitem2.jpg'
import Electronicitem3 from './assets/Electronicitem3.jpg'


import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';


import { Container } from 'react-bootstrap-v5';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import MainProductItemCard from './MainProductItemCard';

const FilterCategoryPage = () => {
    return (
        <>
            <div className='FilterCategoryPage'>
                <Container>
                    <div>
                        <h2>Category Product</h2>
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="/">Category</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="row">
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <div className="col-md-3">
                                <h4 className='mb-3'>Category</h4>
                                <Nav variant="pills" className="flex-column TopCategoryFilter">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">All</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Men</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="three">Women</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="four">T-Shirt</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="five">Shirt</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="six">Laptop</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="seven">Computer</Nav.Link>
                                    </Nav.Item>
                                </Nav>

                                <div className='filter-Color mt-3'>
                                    <h4>Color</h4>
                                    <ul className="d-flex p-0">
                                        <li className='me-2'>
                                            All
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" className="btn bg-success"></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" className="btn bg-primary"></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" className="btn bg-warning"></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" className="btn bg-danger"></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)" className="btn bg-info"></a>
                                        </li>
                                    </ul>
                                </div>

                                <div className='Filter-Product-Type'>
                                    <h4>Product Type</h4>
                                    <div className=' Filter-Product-Type-list d-flex justify-content-between align-items-center'>
                                        <ul className="p-0">
                                            <li className='d-flex justify-content-center align-items-center'>
                                                <input type="checkbox" />
                                                <a href="javascript:void(0)" className="btn ">Accessories</a>
                                            </li>
                                            <li className='d-flex justify-content-center align-items-center'>
                                                <input type="checkbox" />
                                                <a href="javascript:void(0)" className="btn ">Accessories</a>
                                            </li>
                                            <li className='d-flex justify-content-center align-items-center'>
                                                <input type="checkbox" />
                                                <a href="javascript:void(0)" className="btn ">Accessories</a>
                                            </li>
                                            <li className='d-flex justify-content-center align-items-center'>
                                                <input type="checkbox" />
                                                <a href="javascript:void(0)" className="btn ">Accessories</a>
                                            </li>
                                        </ul>
                                        <ul className="p-0">
                                        <li className='d-flex justify-content-center align-items-center'>
                                                <input type="checkbox" />
                                                <a href="javascript:void(0)" className="btn ">Accessories</a>
                                            </li>
                                            <li className='d-flex justify-content-center align-items-center'>
                                                <input type="checkbox" />
                                                <a href="javascript:void(0)" className="btn ">Accessories</a>
                                            </li>
                                            <li className='d-flex justify-content-center align-items-center'>
                                                <input type="checkbox" />
                                                <a href="javascript:void(0)" className="btn ">Accessories</a>
                                            </li>
                                            <li className='d-flex justify-content-center align-items-center'>
                                                <input type="checkbox" />
                                                <a href="javascript:void(0)" className="btn ">Accessories</a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                                <div>
                                    <h4 className='mt-3'>Price</h4>
                                    <span>&#8377;600000</span>
                                    <ProgressBar variant="success" now={40} />
                                </div>
                                <div className='mt-4 clear-filter-btn'>
                                    <button className='btn'>Clear Filter <CloseIcon/></button>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className='d-flex justify-content-between'>
                                    <div className='list-grid-icons'>
                                        <a href=""><FormatListBulletedIcon /></a>
                                        <a href="" className='ms-2'><GridViewIcon /></a>
                                    </div>
                                    <div className='Product-Search-input d-flex'>
                                        <input type="text" name="" placeholder='Search Product Here' id="" />
                                        <div className=''>
                                            <a href=""  className='btn ms-2'>Search</a>
                                        </div>
                                    </div>
                                </div>
                                <Tab.Content className='mt-3'>
                                    <Tab.Pane eventKey="first">
                                        <>
                                            <div className="row">
                                                <div class="col-lg-4 col-6 mb-3">
                                                    <MainProductItemCard MainImg={galleryproduct1} ProductName="Men Watch" ProductPrice="1999" ProductInfo1="3K+ viewed in past month" ProductInfo2="Get it by Sunday February 25" />
                                                </div>
                                                <div class="col-lg-4 col-6 mb-3">
                                                    <MainProductItemCard MainImg={galleryproduct2} ProductName="Men T-Shirt" ProductPrice="1699" ProductInfo1="2K+ viewed in past month" ProductInfo2="From  3000" />
                                                </div>

                                                <div class="col-lg-4 col-6 mb-3">
                                                    <MainProductItemCard MainImg={galleryproduct3} ProductName="Men Shoes" ProductPrice="1799" ProductInfo1="20k viewed in past month" />
                                                </div>

                                                <div class="col-lg-4 col-6 mb-3">
                                                    <MainProductItemCard MainImg={galleryproduct4} ProductName="Men Cap" ProductPrice="1499" ProductInfo1="3m viewed in past month" />
                                                </div>

                                                <div class="col-lg-4 col-6 mb-3">
                                                    <MainProductItemCard MainImg={galleryproduct5} ProductName="Men Shirt" ProductPrice="2799" ProductInfo1="2k viewed in past month" />
                                                </div>

                                                <div class="col-lg-4 col-6 mb-3">
                                                    <MainProductItemCard MainImg={galleryproduct6} ProductName="Men Goggles" ProductPrice="1999" ProductInfo1="1k viewed in past month" />
                                                </div>
                                            </div>
                                        </>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <div className="row">
                                            <div class="col-lg-4 col-6 mb-3">
                                                <MainProductItemCard MainImg={galleryproduct1} ProductName="Men Watch" ProductPrice="2999" ProductInfo1="3K+ viewed in past month" ProductInfo2="Get it by Sunday February 25" />
                                            </div>
                                            <div class="col-lg-4 col-6 mb-3">
                                                <MainProductItemCard MainImg={galleryproduct2} ProductName="Men T-Shirt" ProductPrice="1699" ProductInfo1="2K+ viewed in past month" ProductInfo2="From  3000" />
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="three">
                                        <div className="row">
                                            <div class="col-lg-4 col-6 mb-3">
                                                <MainProductItemCard MainImg={galleryproduct7} ProductName="Belts" ProductPrice="2299" ProductInfo1="2k viewed in past month" />
                                            </div>

                                            <div class="col-lg-4 col-6 mb-3">
                                                <MainProductItemCard MainImg={galleryproduct8} ProductName="Bag" ProductPrice="2599" ProductInfo1="4k viewed in past month" />
                                            </div>

                                            <div class="col-lg-4 col-6 mb-3">
                                                <MainProductItemCard MainImg={galleryproduct9} ProductName="Women Track" ProductPrice="1999" ProductInfo1="3k viewed in past month" />
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="four">
                                        <div className="row">
                                            <div class="col-lg-4 col-6 mb-3">
                                                <MainProductItemCard MainImg={galleryproduct8} ProductName="Bag" ProductPrice="1599" ProductInfo1="4k viewed in past month" />
                                            </div>

                                            <div class="col-lg-4 col-6 mb-3">
                                                <MainProductItemCard MainImg={galleryproduct9} ProductName="Women Track" ProductPrice="2999" ProductInfo1="3k viewed in past month" />
                                            </div>
                                            <div class="col-lg-4 col-6 mb-3">
                                                <MainProductItemCard MainImg={galleryproduct5} ProductName="Men T-Shirt" ProductPrice="1799" ProductInfo1="3k viewed in past month" />
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="five">
                                        <div className="row">
                                            <div class="col-lg-4 col-6 mb-3">
                                                <MainProductItemCard MainImg={galleryproduct9} ProductName="Women Track" ProductPrice="999" ProductInfo1="3k viewed in past month" />
                                            </div>
                                            <div class="col-lg-4 col-6 mb-3">
                                                <MainProductItemCard MainImg={galleryproduct5} ProductName="Men T-Shirt" ProductPrice="799" ProductInfo1="3k viewed in past month" />
                                            </div>
                                            <div class="col-lg-4 col-6 mb-3">
                                                <MainProductItemCard MainImg={galleryproduct6} ProductName="Men Goggles" ProductPrice="599" ProductInfo1="1k viewed in past month" />
                                            </div>
                                            <div class="col-lg-4 col-6 mb-3">
                                                <MainProductItemCard MainImg={galleryproduct5} ProductName="Men T-Shirt" ProductPrice="799" ProductInfo1="3k viewed in past month" />
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="six">
                                        <div className="row">
                                            <div class="col-lg-4 col-6 mb-3">
                                                <MainProductItemCard MainImg={galleryproduct10} ProductName="Women Tracks" ProductPrice="899" ProductInfo1="2k viewed in past month" />
                                            </div>

                                            <div class="col-lg-4 col-6 mb-3">
                                                <MainProductItemCard MainImg={galleryproduct6} ProductName="Men Goggles" ProductPrice="599" ProductInfo1="1k viewed in past month" />
                                            </div>
                                            <div class="col-lg-4 col-6 mb-3">
                                                <MainProductItemCard MainImg={galleryproduct5} ProductName="Men T-Shirt" ProductPrice="799" ProductInfo1="3k viewed in past month" />
                                            </div>
                                            <div class="col-lg-4 col-6 mb-3">
                                                <MainProductItemCard MainImg={galleryproduct5} ProductName="Men T-Shirt" ProductPrice="799" ProductInfo1="3k viewed in past month" />
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="seven">
                                        <div className="row">
                                            <div className="col-lg-4 col-6 mb-3">
                                                <MainProductItemCard MainImg={Electronicitem1} ProductName="Jacket" ProductPrice="400" Discount="30" ProductInfo1="3K+ viewed in past month" ProductInfo2="Get it by Sunday February 25" />
                                            </div>
                                            <div className="col-lg-4 col-6 mb-3">
                                                <MainProductItemCard MainImg={Electronicitem2} ProductName="Jacket" ProductPrice="400" Discount="30" ProductInfo1="3K+ viewed in past month" ProductInfo2="Get it by Sunday February 25" />
                                            </div>
                                            <div className="col-lg-4 col-6 mb-3">
                                                <MainProductItemCard MainImg={Electronicitem3} ProductName="Jacket" ProductPrice="400" Discount="30" ProductInfo1="3K+ viewed in past month" ProductInfo2="Get it by Sunday February 25" />
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                        </Tab.Container>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default FilterCategoryPage
