import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreadcrumbFixedTop from './BreadcrumbFixedTop';



const Crud = () => {

    const [column, setColumns] = useState([]);
    const [records, setRecords] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/cardata')
            .then(res => {
                setColumns(Object.keys(res.data[0]));
                setRecords(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <BreadcrumbFixedTop Title="DASHBOARD" Subtitle="Dashboard" />
            <section className="crud-section">
                <div className="text-end mt-3 mb-4">
                    <Link to="/create" className="btn btn-success">
                        <i className="fas fa-plus-circle"></i> Add a Product
                    </Link>
                </div>

                <div className="dashboard-crud-table">
                    <table className="table table-striped table-hover">
                        <thead className="thead-light">
                            <tr>
                                {column.map((c, i) => (
                                    <th key={i}>{c}</th>
                                ))}
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {records.map((d, i) => (
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
                                    <td><img className="img-fluid" src={`http://localhost:3001/${d.image}`} alt="" /></td>
                                    <td><img className="img-fluid" src={`http://localhost:3001/${d.LeftCardImg}`} alt="" /></td>
                                    <td className="actions">
                                        <div className="d-flex">
                                            <Link to={`/update/${d.id}`} className="btn btn-primary me-2">
                                                <i className="fas fa-pencil-alt"></i> Update
                                            </Link>
                                            <button className="btn btn-danger" onClick={() => handleDelete(d.id)}>
                                                <i className="fas fa-trash-alt"></i> Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );

    // Handle delete logic (you can implement API call here)
    const handleDelete = (id) => {
        // Implement delete logic here
        console.log("Deleting record with id:", id);
    };
}

export default Crud;
