import React from 'react'
import './css/Categories.css'
import Toptitlehead from './Toptitlehead'
import { Container } from 'react-bootstrap-v5'


const CategoriesPage = () => {
    return (
        <>
            <Toptitlehead title="Categories" />
            <Container>
                <section>
                    <div className="categeory-main-wrapper mt-2 mb-2">
                        <div className="row">
                            <div className="col-md-6 p-2">
                                <div className="categories-bg-img mb-3">
                                    <div className="categories-bg-img-body">
                                        <h4 className="mb-2 fw-bold">Men T-shirt</h4>
                                        <span>150 items</span>
                                        <div className="mt-3">
                                            <a href="index.html" className="btn">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 p-2">
                                <div className="categories-bg-img-jacket mb-3">
                                    <div className="categories-bg-img-body">
                                        <h4 className="mb-2 fw-bold">Jackets</h4>
                                        <span>350 items</span>
                                        <div className="mt-3">
                                            <a href="index.html" className="btn">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="categories-bg-img-shoes mb-3">
                                    <div className="categories-bg-img-body">
                                        <h4 className="mb-2 fw-bold">Sunglasses</h4>
                                        <span>250 items</span>
                                        <div className="mt-3">
                                            <a href="index.html" className="btn">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="categories-bg-img-Sunglasses mb-3">
                                    <div className="categories-bg-img-body">
                                        <h4 className="mb-2 fw-bold">Cargos</h4>
                                        <span>200 items</span>
                                        <div className="mt-3">
                                            <a href="index.html" className="btn">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="categories-bg-img-winter mb-3">
                                    <div className="categories-bg-img-body">
                                        <h4 className="mb-2 fw-bold">Shoes</h4>
                                        <span>250 items</span>
                                        <div className="mt-3">
                                            <a href="index.html" className="btn">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="categories-bg-img-item-1 mb-3">
                                    <div className="categories-bg-img-body">
                                        <h4 className="mb-2 fw-bold">Winter</h4>
                                        <span>250 items</span>
                                        <div className="mt-3">
                                            <a href="index.html" className="btn">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="categories-bg-img-item-2 mb-3">
                                    <div className="categories-bg-img-body">
                                        <h4 className="mb-2 fw-bold">Casual Trousers</h4>
                                        <span>250 items</span>
                                        <div className="mt-3">
                                            <a href="index.html" className="btn">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="categories-bg-img-item-3 mb-3">
                                    <div className="categories-bg-img-body">
                                        <h4 className="mb-2 fw-bold">Shoes</h4>
                                        <span>250 items</span>
                                        <div className="mt-3">
                                            <a href="index.html" className="btn">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="categories-bg-img-item-4 mb-3">
                                    <div className="categories-bg-img-body">
                                        <h4 className="mb-2 fw-bold">Sweatshirts</h4>
                                        <span>250 items</span>
                                        <div className="mt-3">
                                            <a href="index.html" className="btn">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </>

    )
}

export default CategoriesPage
