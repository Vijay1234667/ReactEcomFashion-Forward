

import Product from './Product';
import MainSmallCardItems from './MainSmallCardItems'
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

import { useProductContext } from './Context/ProductContext';
import summersale from './assets/summersale.jpg'
import homebigsale from './assets/homebigsale.webp'
import { Link } from 'react-router-dom';

const HomeMainProductSection = () => {
    const { isLoading , products } = useProductContext();
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
                                <img className="img-fluid mb-3" src={homebigsale} alt="ShopImage" width="100%" />
                            </div>
                            <div>
                                {
                                    products.slice(0, 6).map((curElem) => {
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
                                            <h4>Our Feature Product</h4>
                                        <Link to="/filtercategory" className='orange-btn-btn'>All Categeory < ManageSearchIcon /></Link>
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
