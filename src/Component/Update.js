import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
    const {id} = useParams();
    
    const [values, setValues] = useState({
        id: id,
        ProductName:'',
        ProductPrice:'',
        image:''
    })
    useEffect(() =>{
        axios.get('http://localhost:3001/cardata/' + id)
        .then(res =>{
            setValues({...values, ProductName: res.data.ProductName, ProductPrice: res.data.ProductPrice, image: res.data.image})

        }).catch(err => console.log(err))

    }, [])

const  navigate = useNavigate()
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.put('http://localhost:3001/cardata/' + id, values)
        .then(res =>{
            navigate('/')
        }).catch(err => console.log(err))
    }
    return (
        <>
            <section className='UpdateCrudjsonData'>
                <div className="conatiner">
                    <div className="col-lg-5 mx-auto">
                        <form action="" onSubmit={handleSubmit}>
                            <div>
                                <label for="inputPassword" className="col-sm-2 col-form-label">Id:</label>
                                <div className="col-sm-10">
                                    <input type="text" value={values.id} onChange={e => setValues({...values, id: e.target.value})} placeholder='id' className="form-control" id="inputPassword" required />
                                </div>
                            </div>
                            <div>
                                <label for="inputPassword" className="col-sm-2 col-form-label">ProductName</label>
                                <div className="col-sm-10">
                                    <input type="text" value={values.ProductName} onChange={e => setValues({...values, ProductName: e.target.value})} placeholder='Enter ProductName' className="form-control" id="inputPassword" required />
                                </div>
                            </div>
                            <div>
                                <label for="inputPassword" className="col-sm-2 col-form-label">ProductPrice</label>
                                <div className="col-sm-10">
                                    <input type="text" value={values.ProductPrice} onChange={e => setValues({...values, ProductPrice: e.target.value})} placeholder='Enter ProductPrice' className="form-control" id="inputPassword" required />
                                </div>
                            </div>
                            <div>
                                <label for="inputPassword" className="col-sm-2 col-form-label">ProductInfo1</label>
                                <div className="col-sm-10">
                                    <input type="text" placeholder='Enter ProductInfo1' className="form-control" id="inputPassword" required />
                                </div>
                            </div>
                            <div>
                                <label for="inputPassword" className="col-sm-2 col-form-label">Discount</label>
                                <div className="col-sm-10">
                                    <input type="text" placeholder='Enter Discount' className="form-control" id="inputPassword" required />
                                </div>
                            </div>

                            <div>
                                <label for="inputPassword" className="col-sm-2 col-form-label">category</label>
                                <div className="col-sm-10">
                                    <input type="text" placeholder='Enter category' className="form-control" id="inputPassword" required />
                                </div>
                            </div>

                            <div>
                                <label for="inputPassword" className="col-sm-2 col-form-label">color</label>
                                <div className="col-sm-10">
                                    <input type="text" placeholder='Enter color' className="form-control" id="inputPassword" required />
                                </div>
                            </div>
                            <div>
                                <label for="inputPassword" className="col-sm-2 col-form-label">Size</label>
                                <div className="col-sm-10">
                                    <input type="text" placeholder='Enter Size' className="form-control" id="inputPassword" required />
                                </div>
                            </div>
                            <div>
                                <label for="inputPassword" className="col-sm-2 col-form-label">Brands</label>
                                <div className="col-sm-10">
                                    <input type="text" placeholder='Enter Brands' className="form-control" id="inputPassword" required />
                                </div>
                            </div>

                            <div>
                                <label for="inputPassword" className="col-sm-2 col-form-label">CategeoryName</label>
                                <div className="col-sm-10">
                                    <input type="text" placeholder='Enter CategeoryName' className="form-control" id="inputPassword" required />
                                </div>
                            </div>
                            <div>
                                <label for="inputPassword" className="col-sm-2 col-form-label">Availability</label>
                                <div className="col-sm-10">
                                    <input type="text" placeholder='Enter Availability' className="form-control" id="inputPassword" required />
                                </div>
                            </div>
                            <div>
                                <label for="inputPassword" className="col-sm-2 col-form-label">featured</label>
                                <div className="col-sm-10">
                                    <input type="text" placeholder='Enter featured' className="form-control" id="inputPassword" required />
                                </div>
                            </div>
                            <div>
                                <label for="inputPassword" className="col-sm-2 col-form-label">LeftCardImg</label>
                                <div className="col-sm-10">
                                    <input type="file" className="form-control" id="inputPassword" required />
                                </div>
                            </div>
                            <div>
                                <label for="inputPassword" className="col-sm-2 col-form-label">image</label>
                                <div className="col-sm-10">
                                    <input   onChange={e => setValues({...values, image: e.target.value})} type="file" className="form-control" id="inputPassword" required />
                                </div>
                            </div>

                            <div className='Updatebtn'>
                                <button className='btn'>Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Update
