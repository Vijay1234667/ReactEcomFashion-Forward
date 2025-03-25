import React from 'react';
import TopCatItem from './TopCatItem';


const TopCategory = () => {

    return (
        <>
            <section className='Top-Categories-Carousel mb-5'>
                <div className="container">
                    <div>
                        <div className='text-center mt-4'>
                            <h4 className='h4color'>Top Categories</h4>
                            <p className='text-paragraph'>Select Your Favorite Categories And Purchase</p>
                        </div>
                        <div className="row">
                            <TopCatItem />
                        </div>
                    </div>
                </div>
            </section>
        </>


    )
}

export default TopCategory
