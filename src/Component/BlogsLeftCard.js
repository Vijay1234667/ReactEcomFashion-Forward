import React from 'react'

const BlogsLeftCard = ({Image,Heading,Paragraph,Btn }) => {
    return (
        <>
            <div className="row blog-row-cols mb-3">
                <div className="col-lg-6 col-md-6 inner">
                    <img src={Image} className='img-fluid' alt="" />
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className=''>
                        <h5>{Heading}</h5>
                        <p className='text-paragraph'>{Paragraph}</p>
                        <div>
                            <a href="" className='btn'>{Btn}</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogsLeftCard
