import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import BreadcrumbFixedTop from './BreadcrumbFixedTop';

const Crud = () => {

    const [column, setColumns] = useState([]);
    const [records, setRecords] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/cardata')
            .then(res => {
                setColumns(Object.keys(res.data[0]))
                setRecords(res.data)
            })
    }, [])
    
    return (
        <>
        <BreadcrumbFixedTop Title="DASHBOARD" Subtitle="Dashboard"/>
            <section>
                <div className='addProductbtntodo text-end mt-2'>
                    <Link to="/create" className='btn '>Add a Product
                    </Link>
                </div>
                <div className=" DashboardCrud">
                    <table>
                        <thead>
                            <tr>
                                {column.map((c, i) => (
                                    <th key={i}>{c}</th>
                                ))}
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                records.map((d, i) => (
                                    <tr key={i}>
                                        <td>{d.id}</td>
                                        <td>{d.ProductName}</td>
                                        <td>{d.ProductPrice}</td>
                                        <td>{d.ProductInfo1}</td>
                                        <td>{d.Discount}</td>
                                        <td>{d.color}</td>
                                        <td>{d.category}</td>
                                        <td>{d.Size}</td>
                                        <td>{d.Brands}</td>
                                        <td>{d.featured}</td>
                                        <td>{d.Availability}</td>
                                        <td><img className='img-fluid' src={"http://localhost:3001/" + d.image} alt="" /></td>
                                        <td><img className='img-fluid' src={"http://localhost:3001/" + d.LeftCardImg} alt="" /></td>
                                        <td>
                                            <div>
                                                <Link to={`/update/${d.id}`} className='btn btn-primary'>Update</Link>
                                                <button className='btn btn-danger'>Delete</button>
                                            </div>
                                        </td>

                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default Crud
