

import Product from '../Component/Product';
import MainSmallCardItems from './MainSmallCardItems'
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

import { useProductContext } from './Context/ProductContext';
import summersale from './assets/summersale.jpg'
import HomeSaleimg from './assets/HomeSaleimg.jpg'

const HomeMainProductSection = () => {
    const { isLoading, featureProducts, products } = useProductContext();
    if (isLoading) {
        return <div>.......Loading</div>
    }

    return (
        <>
            <section className="main-wrapper-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-2">
                            <div>
                                <img className="img-fluid mb-3" src={HomeSaleimg} alt="ShopImage" width="100%" />
                            </div>
                            <div>
                                {
                                    featureProducts.slice(0, 5).map((curElem) => {
                                        return <MainSmallCardItems key={curElem.id} {...curElem} />
                                    })}
                                <div>
                                    <img className="img-fluid mb-3" src={summersale} alt="ShopImage" />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8 g-0">
                            <section className="product-cards mb-4">
                                <div className="container">
                                    <div className='d-flex justify-content-between align-items-center mb-2'>
                                        <div>
                                            <h4 className='h4color'>Our Feature Product</h4>
                                        </div>
                                        <a href="#filtercategory" className='orange-btn-btn'>All Categeory < ManageSearchIcon /></a>
                                    </div>

                                    <div className="row">
                                        {
                                            products.slice(0, 12).map((curElem) => {
                                                return <Product key={curElem.id} {...curElem} />
                                            })
                                        }
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeMainProductSection;
