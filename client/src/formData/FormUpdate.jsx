import { useState } from "react"
import { NavLink } from "react-router-dom"
import { DataBrand } from './DataBrand/DataBrand'
import { DataYear } from "./DataBrand/DataYear"
import Axios from 'axios'
const FormUpdatedata = ({ setBrand, setName, setYear, setCost }) => {

    const [Gen, setGen] = useState([])





    const hangleChangeValue = (e) => {
        setBrand(e.target.value)
        setGen(DataBrand.find(brn => brn.name === e.target.value).Gen)
    }

    return (
        <>
            <div className="mb-3">
                <label htmlFor="brand" className='form-label text-white fw-bold' >Change Brand</label>
                <select id="cars" className='form-select' aria-label="Default select  " required 
                    onClick={hangleChangeValue}  >
                   <option value="" key={1}  disabled defaultValue='BRAND' selected  label="--Brand--"></option>
                    {DataBrand.map((val, i) => {
                        return (
                            <>
                                <option key={i} value={val.name} >{val.name}</option>
                            </>
                        )
                    })}

                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="name" className='form-label text-white fw-bold'>Change Name</label>
                <select id="cars" className='form-select' aria-label="Default select  " required
                    onClick={(e) => { setName(e.target.value) }}>
                          <option value=""  key={1}  selected   disabled label="--Name--"></option>
                    {Gen.map((val, i) => {
                        return (
                            <option key={i} value={val.name}  >{val.name}</option>
                        )
                    })}
                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="year" className='form-label text-white fw-bold'>Change Year</label>
                <select id="cars" className='form-select' aria-label="Default select " required
                    onClick={(e) => { setYear(e.target.value) }}>
                    <option value="" selected key={1}  disabled  label="--Year--"></option>
                    {DataYear.map((val, i) => {
                        return (
                            <option key={i} value={val.year} >{val.year}</option>
                        )
                    })}
                </select>
            </div>
            <div className='mb-3'>
                <label htmlFor="cost" className='form-label text-white fw-bold'>Change Cost</label>
                <input type="number" className='form-control' required placeholder='Enter Cost'
                    onChange={(e) => { setCost(e.target.value) }} />
            </div>


            <div className='mb-3 d-flex wrapper-btn' >
                <NavLink to="/">
                    <button className='btn btn-danger'>Cancle</button>
                </NavLink>
                <button className='btn btn-success'   >Update Car</button>
            </div>
        </>
    )




}

export default FormUpdatedata



