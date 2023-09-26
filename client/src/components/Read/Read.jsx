import React, { useEffect, useState } from 'react'
import './Read.css'
import Axios from 'axios'
import { NavLink, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
const Read = () => {

    const { id } = useParams()
    const options = { maximumFractionDigits: 2 }
    const [readData, setReadData] = useState([])

    const readDate = () => {
        Axios.get("http://localhost:3002/read/" + id)
            .then((res) => {
                setReadData((res.data))
            })
    }

    useEffect(() => {
        readDate();
    })

    return (
        <div className='read-container'>
            <nav className='navbar navbar-expand-lg   d-flex text-white p-3 ps-4 pe-4 justify-content-between'>
                <h1>Manage <span className='fw-bold'>Car list</span><FontAwesomeIcon icon={faEye} style={{ marginLeft: "20px" }} /></h1>
            </nav>
            {readData.map((val, key) => {
                return (
                    <div className="data-wrap" key={key}>
                        <div className="sec1">
                            <p className='id'><span>ID </span></p>
                            <p className='brand'><span>Brand </span></p>
                            <p className='name'><span>Name </span> </p>
                            <p className='cost'><span>Cost </span> </p>
                        </div>
                        <div className="sec2">
                            <p className='id'> {val.id}</p>
                            <p className='brand'> {val.brand}</p>
                            <p className='name'> {val.name}</p>
                            <p className='cost'>$ {Intl.NumberFormat("en-US", options).format(val.cost)}</p>
                        </div>
                        <p className='text-ab'>{val.id}</p>
                    </div>
                )
            })}
          
            <NavLink to="/" className="button-link">
                <button >Close</button>
            </NavLink>


        </div>
    )
}
export default Read