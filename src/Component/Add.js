import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {

    const [inputData, setInputData] = useState({ ProductName: '', ProductPrice: '',ProductInfo1:'',Discount:'',category:'',color:'',Size:'',Brands:'',CategeoryName:'',Availability:'',featured:'',LeftCardImg:'',image:'' })

    const navigat = useNavigate();

    function handleSubmit(event) {
        event.preventDefault()
        axios.post('http://localhost:3001/cardata', inputData)
            .then(res => {
                alert("data added");
                navigat('/')
            }).catch(err => console.log(err));
    }
    
    return (
        <>
            <section className='AddCrudjsonData'>
                <div className="conatiner">
                    <div className="col-lg-5 mx-auto">
                        <form action="" onSubmit={handleSubmit}>
                            <div>
                                <label for="inputPassword" class="col-sm-2 col-form-label">ProductName</label>
                                <div class="col-sm-10">
                                    <input type="text" placeholder='Enter ProductName' onChange={e => setInputData({ ...inputData, ProductName: e.target.value })} class="form-control" id="inputPassword"required />
                                </div>
                            </div>

                            <div>
                                <label for="inputPassword" class="col-sm-2 col-form-label">ProductPrice</label>
                                <div class="col-sm-10">
                                    <input type="text" placeholder='Enter ProductPrice' onChange={e => setInputData({ ...inputData, ProductPrice: e.target.value })} class="form-control" id="inputPassword"required />
                                </div>
                            </div>
                            <div>
                                <label for="inputPassword" class="col-sm-2 col-form-label">ProductInfo1</label>
                                <div class="col-sm-10">
                                    <input type="text" placeholder='Enter ProductInfo1' onChange={e => setInputData({ ...inputData, ProductInfo1: e.target.value })} class="form-control" id="inputPassword" required/>
                                </div>
                            </div>
                            <div>
                                <label for="inputPassword" class="col-sm-2 col-form-label">Discount</label>
                                <div class="col-sm-10">
                                    <input type="text" placeholder='Enter Discount' onChange={e => setInputData({ ...inputData, Discount: e.target.value })} class="form-control" id="inputPassword" required/>
                                </div>
                            </div>

                            <div>
                                <label for="inputPassword" class="col-sm-2 col-form-label">category</label>
                                <div class="col-sm-10">
                                    <input type="text" placeholder='Enter category' onChange={e => setInputData({ ...inputData, category: e.target.value })} class="form-control" id="inputPassword" required/>
                                </div>
                            </div>

                            <div>
                                <label for="inputPassword" class="col-sm-2 col-form-label">color</label>
                                <div class="col-sm-10">
                                    <input type="text" placeholder='Enter color' onChange={e => setInputData({ ...inputData, color: e.target.value })} class="form-control" id="inputPassword" required/>
                                </div>
                            </div>
                            <div>
                                <label for="inputPassword" class="col-sm-2 col-form-label">Size</label>
                                <div class="col-sm-10">
                                    <input type="text" placeholder='Enter Size' onChange={e => setInputData({ ...inputData, Size: e.target.value })} class="form-control" id="inputPassword" required/>
                                </div>
                            </div>

                            <div>
                                <label for="inputPassword" class="col-sm-2 col-form-label">Brands</label>
                                <div class="col-sm-10">
                                    <input type="text" placeholder='Enter Brands' onChange={e => setInputData({ ...inputData, Brands: e.target.value })} class="form-control" id="inputPassword" required/>
                                </div>
                            </div>

                            <div>
                                <label for="inputPassword" class="col-sm-2 col-form-label">CategeoryName</label>
                                <div class="col-sm-10">
                                    <input type="text" placeholder='Enter CategeoryName' onChange={e => setInputData({ ...inputData, CategeoryName: e.target.value })} class="form-control" id="inputPassword" required/>
                                </div>
                            </div>
                            <div>
                                <label for="inputPassword" class="col-sm-2 col-form-label">Availability</label>
                                <div class="col-sm-10">
                                    <input type="text" placeholder='Enter Availability' onChange={e => setInputData({ ...inputData, Availability: e.target.value })} class="form-control" id="inputPassword" required/>
                                </div>
                            </div>
                            <div>
                                <label for="inputPassword" class="col-sm-2 col-form-label">featured</label>
                                <div class="col-sm-10">
                                    <input type="text" placeholder='Enter featured' onChange={e => setInputData({ ...inputData, featured: e.target.value })} class="form-control" id="inputPassword" required/>
                                </div>
                            </div>
                            <div>
                                <label for="inputPassword" class="col-sm-2 col-form-label">LeftCardImg</label>
                                <div class="col-sm-10">
                                    <input type="file" onChange={e => setInputData({ ...inputData, LeftCardImg: e.target.value })} class="form-control" id="inputPassword" required/>
                                </div>
                            </div>
                            <div>
                                <label for="inputPassword" class="col-sm-2 col-form-label">image</label>
                                <div class="col-sm-10">
                                    <input type="file" onChange={e => setInputData({ ...inputData, image: e.target.value })} class="form-control" id="inputPassword" required/>
                                </div>
                            </div>
                            
                            <div className='submitbtn'>
                                <button className='btn'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Add
