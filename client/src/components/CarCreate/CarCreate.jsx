import React from 'react'
import './CarCreate.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons'
import Formdata from '../../formData/Formdata'

const CarCreate = (props) => {
    const { setBrand, setName, setYear, setCost, addCar } = props

    return (
        <div className='bg-container2'>
            <nav className='navbar navbar-expand-lg   d-flex text-white p-3 ps-4 pe-4 justify-content-between'>
                <h1>Manage <span className='fw-bold'> Car list</span> <FontAwesomeIcon icon={faFileCirclePlus} style={{ marginLeft: "20px" }} /></h1>
            </nav>
            <div className="information" style={{ width: "60%", margin: "0 auto" }}>
                <form action="" onSubmit={addCar}>
                    <Formdata setBrand={setBrand} setName={setName} setYear={setYear} setCost={setCost} />
                </form>
            </div>
        </div>
    )
}

export default CarCreate