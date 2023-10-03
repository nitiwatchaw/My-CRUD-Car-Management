import { useState } from "react"
import { NavLink } from "react-router-dom"
import { DataBrand } from './DataBrand/DataBrand'
import { DataYear } from "./DataBrand/DataYear"

const Formdata = ({ setBrand, setName, setYear, setCost }) => {

    const [Gen, setGen] = useState([])

    const hangleChangeValue = (e) => {
        setBrand(e.target.value)
        setGen(DataBrand.find(brn => brn.name === e.target.value).Gen)

    }



    return (
        <>
            <div className="mb-3">
                <label htmlFor="brand" className='form-label text-white fw-bold' >Brand</label>
                <select id="cars" className='form-select' aria-label="Default select  " required
                    onChange={hangleChangeValue} >
                    <option selected value=''>-- Brand --</option>
                    {DataBrand.map((val, i) => {
                        return (
                            <option key={i} value={val.name} >{val.name}</option>
                        )
                    })}

                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="name" className='form-label text-white fw-bold'>Name</label>
                <select id="cars" className='form-select' aria-label="Default select  " required onChange={(e) => { setName(e.target.value) }}>
                    <option selected value=''>-- Name --</option>
                    {Gen.map((val, i) => {
                        return (
                            <option key={i} value={val.name} >{val.name}</option>
                        )
                    })}
                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="year" className='form-label text-white fw-bold'>Year</label>
                <select id="cars" className='form-select' aria-label="Default select " required onChange={(e) => { setYear(e.target.value) }}>
                    <option selected value=''>Year</option>
                    {DataYear.map((val, i) => {
                        return (
                            <option key={i} value={val.year} >{val.year}</option>
                        )
                    })}
                </select>
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
        </>
    )




}

export default Formdata



