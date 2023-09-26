import React from 'react'
import './Main.css'
import Navbar from '../Navbar/Navbar'
import Table from '../Table/Table'
const Main = (props) => {

    const { item, id, deleteCar , setItem } = props
    return (
        <div className='bg-container'>
            <Navbar />
            <Table item={item} id={id} deleteCar={deleteCar}  setItem={setItem} />
        </div>
    )
}

export default Main