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
                                <label for="inputPassword" class="col-sm-2 col-form-label">Id:</label>
                                <div class="col-sm-10">
                                    <input type="text" value={values.id} onChange={e => setValues({...values, id: e.target.value})} placeholder='id' class="form-control" id="inputPassword" required />
                                </div>
                            </div>
                            <div>
                                <label for="inputPassword" class="col-sm-2 col-form-label">ProductName</label>
                                <div class="col-sm-10">
                                    <input type="text" value={values.ProductName} onChange={e => setValues({...values, ProductName: e.target.value})} placeholder='Enter ProductName' class="form-control" id="inputPassword" required />
                                </div>
                            </div>
                            <div>
                                <label for="inputPassword" class="col-sm-2 col-form-label">ProductPrice</label>
                                <div class="col-sm-10">
                                    <input type="text" value={values.ProductPrice} onChange={e => setValues({...values, ProductPrice: e.target.value})} placeholder='Enter ProductPrice' class="form-control" id="inputPassword" required />
                                </div>
                            </div>
                            <div>
                                <label for="inputPassword" class="col-sm-2 col-form-label">ProductInfo1</label>
                                <div class="col-sm-10">
                                    <input type="text" placeholder='Enter ProductInfo1' class="form-control" id="inputPassword" required />
                                </div>
                            </div>
                            <div>
                                <label for="inputPassword" class="col-sm-2 col-form-label">Discount</label>
                                <div class="col-sm-10">
                                    <input type="text" placeholder='Enter Discount' class="form-control" id="inputPassword" required />
                                </div>
                            </div>

                            <div>
                                <label for="inputPassword" class="col-sm-2 col-form-label">category</label>
                                <div class="col-sm-10">
                                    <input type="text" placeholder='Enter category' class="form-control" id="inputPassword" required />
                                </div>
                            </div>

                            <div>
                                <label for="inputPassword" class="col-sm-2 col-form-label">color</label>
                                <div class="col-sm-10">
                                    <input type="text" placeholder='Enter color' class="form-control" id="inputPassword" required />
                                </div>
                            </div>
                            <div>
                                <label for="inputPassword" class="col-sm-2 col-form-label">Size</label>
                                <div class="col-sm-10">
                                    <input type="text" placeholder='Enter Size' class="form-control" id="inputPassword" required />
                                </div>
                            </div>
                            <div>
                                <label for="inputPassword" class="col-sm-2 col-form-label">Brands</label>
                                <div class="col-sm-10">
                                    <input type="text" placeholder='Enter Brands' class="form-control" id="inputPassword" required />
                                </div>
                            </div>

                            <div>
                                <label for="inputPassword" class="col-sm-2 col-form-label">CategeoryName</label>
                                <div class="col-sm-10">
                                    <input type="text" placeholder='Enter CategeoryName' class="form-control" id="inputPassword" required />
                                </div>
                            </div>
                            <div>
                                <label for="inputPassword" class="col-sm-2 col-form-label">Availability</label>
                                <div class="col-sm-10">
                                    <input type="text" placeholder='Enter Availability' class="form-control" id="inputPassword" required />
                                </div>
                            </div>
                            <div>
                                <label for="inputPassword" class="col-sm-2 col-form-label">featured</label>
                                <div class="col-sm-10">
                                    <input type="text" placeholder='Enter featured' class="form-control" id="inputPassword" required />
                                </div>
                            </div>
                            <div>
                                <label for="inputPassword" class="col-sm-2 col-form-label">LeftCardImg</label>
                                <div class="col-sm-10">
                                    <input type="file" class="form-control" id="inputPassword" required />
                                </div>
                            </div>
                            <div>
                                <label for="inputPassword" class="col-sm-2 col-form-label">image</label>
                                <div class="col-sm-10">
                                    <input   onChange={e => setValues({...values, image: e.target.value})} type="file" class="form-control" id="inputPassword" required />
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
