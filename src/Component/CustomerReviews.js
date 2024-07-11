import React from 'react'
import './css/AddToCart.css'

import StarIcon from '@mui/icons-material/Star';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import StarHalfIcon from '@mui/icons-material/StarHalf';




const CustomerReviews = ({CustomerImg, CustomerName, ReviewsDescription,  }) => {
    return (
        <>
            <div className="d-flex">
                <div>
                    <img className="img-fluid " src={CustomerImg} alt="" width="50px" />
                </div>
                <div className=" ms-3">
                    <h6 className="fw-bold">{CustomerName}</h6>
                    <div className="left-sidebar-yellow-star mb-2">
                        <StarIcon />
                        <StarBorderPurple500Icon />
                        <StarIcon />
                        <StarHalfIcon />
                    </div>
                    <p>
                        {ReviewsDescription}
                    </p>
                </div>
            </div>
            <hr />
        </>
    )
}

export default CustomerReviews
