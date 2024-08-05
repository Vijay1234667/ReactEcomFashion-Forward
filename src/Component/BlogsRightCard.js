import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';



const BlogsRightCard = ({Image, PostName, Posttext}) => {
    return (
        <>
            <div className="card post-head mb-3 border-0 ">
                <div className="row">
                    <div className="col-3 inner">
                        <img className="img-fluid" src={Image} alt="shopimage" />
                    </div>
                    <div className="col-8">
                        <div className="card-body p-0">
                            <h6>{PostName}</h6>
                            <CalendarMonthIcon/>{Posttext}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogsRightCard
