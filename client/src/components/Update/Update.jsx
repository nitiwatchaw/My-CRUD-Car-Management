import React, { useState } from 'react'
import './Update.css'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
const Update = () => {
    const { id } = useParams()

    const [brand, setBrand] = useState("");
    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [cost, setCost] = useState(0);

    const handleSubmit = event => {
        event.preventDefault();

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "id": id,
            "brand": brand,
            "name": name,
            "year": year,
            "cost": cost,
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3002/update/" + id, requestOptions)
            .then(response => response.json())
            .then(result => {
                alert(`Car ID ${id} is Updated`)
                window.location.href = "/"
            })
            .catch(error => console.log('error', error));
    }

    return (
        <div className='bg-container3'>
            <nav className='navbar navbar-expand-lg   d-flex text-white p-3 ps-4 pe-4 justify-content-between'>
                <h1>Manage <span className='fw-bold'>Car list</span><FontAwesomeIcon icon={faPenToSquare} style={{ marginLeft: "20px" }} /></h1>
            </nav>
            <div className="informationUpdate" style={{ width: "60%", margin: "0 auto" }}>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="brand" className='form-label'>Change brand</label>
                        <input type="text" className='form-control' required placeholder='Enter Brand' onChange={(e) => { setBrand(e.target.value) }} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="name" className='form-label'>Change name</label>
                        <input type="text" className='form-control' required placeholder='Enter Name' onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="year" className='form-label'>Change year</label>
                        <input type="number" className='form-control' max="2023" required placeholder='Enter Year' onChange={(e) => { setYear(e.target.value) }} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="cost" className='form-label'>Change cost</label>
                        <input type="number" className='form-control' required placeholder='Enter Cost' onChange={(e) => { setCost(e.target.value) }} />
                    </div>
                    <div className='mb-3 d-flex wrapper-btn' >
                        <NavLink to="/">
                            <button className='btn btn-danger'>Cancle</button>
                        </NavLink>
                        <button className='btn btn-info text-white' type='submit'>Update Car</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Update