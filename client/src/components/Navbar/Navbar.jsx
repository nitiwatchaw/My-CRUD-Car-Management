import React, { useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus  , faFileLines} from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {

    const [toggle, setToggle] = useState(false)


    return (
        <nav className='navbar navbar-expand-lg   d-flex text-white p-3 ps-4 pe-4 justify-content-between'>
            <h1>Manage <span className='fw-bold'> Car list</span> <FontAwesomeIcon icon={faFileLines} style={{marginLeft:"20px"}} /></h1>
            <button className={`navbar-toggler ${toggle ? "active" : ""}`}
                onClick={() => { setToggle(!toggle) }}
                type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="btn-wrap  ms-auto d-flex gap-3">
                    <NavLink to="/create">
                        <button className='btn btn-success' href="/create"><i className='me-1'><FontAwesomeIcon icon={faPlus} /></i>Add New Car</button>
                    </NavLink>
                </div>
            </div>
        </nav>


    )
}

export default Navbar