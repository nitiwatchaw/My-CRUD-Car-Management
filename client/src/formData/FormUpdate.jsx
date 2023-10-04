import { useState, useEffect, useRef } from "react"
import { NavLink, useParams } from "react-router-dom"
import { DataBrand } from './DataBrand/DataBrand'
import { DataYear } from "./DataBrand/DataYear"
import Axios from 'axios'
const FormUpdatedata = ({ setBrand, setName, setYear, setCost }) => {

    const { id } = useParams();
    const [readData, setReadData] = useState([])

    const GetData = () => {
        Axios.get("http://localhost:3002/read/" + id)
            .then((res) => {
                setReadData((res.data))
            })
    }

    useEffect(() => {
        GetData();
        setBrand(selectRef.current.value)
        setName(selectRefName.current.value)
        setYear(selectRefYear.current.value)



    })




    const selectRef = useRef(null)
    const selectRefName = useRef(null)
    const selectRefYear = useRef(null)
    const selectCost = useRef(0)

    const [Gen, setGen] = useState([])

    const hangleChangeValue = (e) => {
        setBrand(e.target.value)

    }

    useEffect(() => {
        setGen(DataBrand.find(brn => brn.name === selectRef.current.value).Gen)
    })

    return (
        <>
            <div className="mb-3">
                <label htmlFor="brand" className='form-label text-white fw-bold' >Change Brand</label>
                <select id="cars" className='form-select' aria-label="Default select  " required ref={selectRef}
                    onClick={hangleChangeValue}  >

                    {readData.map((val, i) => {
                        return (
                            
                                <option key={i} selected value={val.brand} >{val.brand}</option>
                            
                        )
                    })}
                    {DataBrand.map((val, i) => {
                        return (
                            
                                <option key={i} value={val.name} >{val.name}</option>
                            
                        )
                    })}

                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="name" className='form-label text-white fw-bold'>Change Name</label>
                <select id="cars" className='form-select' aria-label="Default select  " required ref={selectRefName}
                    onClick={(e) => { setName(e.target.value) }}>


                    {Gen.map((val, i) => {
                        return (
                            <option key={i} value={val.name} selected >{val.name}</option>
                        )
                    })}
                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="year" className='form-label text-white fw-bold'>Change Year</label>
                <select id="cars" className='form-select' aria-label="Default select " required ref={selectRefYear}
                    onClick={(e) => { setYear(e.target.value) }}>

                    {readData.map((val, i) => {
                        return (
                          
                                <option key={i} selected value={val.year} >{val.year}</option>
                           
                        )
                    })}
                    {DataYear.map((val, i) => {
                        return (
                            <option key={i} value={val.year} >{val.year}</option>
                        )
                    })}
                </select>
            </div>
            <div className='mb-3'>
                <label htmlFor="cost" className='form-label text-white fw-bold'>Change Cost</label>

                <input type="number" className='form-control' required
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



