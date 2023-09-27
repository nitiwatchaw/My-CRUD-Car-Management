import React from 'react'
import './CarCreate.css'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons'

const CarCreate = (props) => {
    const { setBrand, setName, setYear, setCost, addCar } = props

    return (
        <div className='bg-container2'>
            <nav className='navbar navbar-expand-lg   d-flex text-white p-3 ps-4 pe-4 justify-content-between'>
                <h1>Manage <span className='fw-bold'> Car list</span> <FontAwesomeIcon icon={faFileCirclePlus} style={{ marginLeft: "20px" }} /></h1>
            </nav>
            <div className="information" style={{ width: "60%", margin: "0 auto" }}>
                <form action="" onSubmit={addCar}>
                    <div className='mb-3'>
                        <label htmlFor="brand" className='form-label text-white fw-bold' >Brand</label>
                        <input type="text" className='form-control' required placeholder='Enter Brand' onChange={(e) => { setBrand(e.target.value) }} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="name" className='form-label text-white fw-bold'>Name</label>
                        <input type="text" className='form-control' required placeholder='Enter Name' onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="year" className='form-label text-white fw-bold'>Year</label>
                        <input type="number" className='form-control' max="2023" required placeholder='Enter Year' onChange={(e) => { setYear(e.target.value) }} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="cost" className='form-label text-white fw-bold'>Cost</label>
                        <input type="number" className='form-control' required placeholder='Enter Cost' onChange={(e) => { setCost(e.target.value) }} />
                    </div>
                    <div className='mb-3 d-flex wrapper-btn' >
                        <NavLink to="/">
                            <button className='btn btn-danger'>Cancle</button>
                        </NavLink>
                        <button className='btn btn-success' >Add Car</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CarCreate