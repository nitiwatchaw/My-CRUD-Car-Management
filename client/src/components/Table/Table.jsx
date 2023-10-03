import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash, faCaretLeft, faCaretRight, faEye } from '@fortawesome/free-solid-svg-icons'
import SyncLoader from "react-spinners/SyncLoader";
import './Table.css'
const Table = (props) => {

  const { item, deleteCar } = props

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [])

  // for search
  const [query, setQuery] = useState("")
  const [disablebtnLeft, setDisablebtnLeft] = useState(false)
  const [disablebtnRight, setDisablebtnRight] = useState(false)


  //format number F
  const options = { maximumFractionDigits: 2 }

  const CarUpdate = (id) => {
    window.location = '/update/' + id
  }

  const CarRead = (id) => {
    window.location = '/read/' + id
  }

  useEffect(() => {
    if (currentPage === 1) {
      setDisablebtnLeft(true)
    } else {
      setDisablebtnLeft(false)
    }
    if (currentPage === npage) {
      setDisablebtnRight(true)
    } else {
      setDisablebtnRight(false)
    }
  })

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerpage = 5;
  const lastIndex = currentPage * recordPerpage;
  const firstIndex = lastIndex - recordPerpage;
  const records = item.slice(firstIndex, lastIndex);
  const npage = Math.ceil(item.length / recordPerpage)
  const numbers = [...Array(npage + 1).keys()].slice(1)


  const prePage = (e) => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
      e.preventDefault();
    }
  }

  function changeCPage(id) {
    setCurrentPage(id)
    id.preventDefault();
  }

  const nextPage = (e) => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1)
      e.preventDefault();
    }
  }


  return (
    <div className='sec-table'>
      {loading
        ?
        <SyncLoader
          color={"#dedede"}
          size={20}
          className='loader'
        />
        :

        <div className='wrap-table'>

          <input type="search" placeholder='serach brand (lowercase)' className='form-control' onChange={(e) => setQuery(e.target.value)} />

          <table className="table table-hover text-center ">
            <thead>
              <tr className='text-white'>

                <th scope="col">ID</th>
                <th scope="col">Brand</th>
                <th scope="col">Name</th>
                <th scope="col">Year</th>
                <th scope="col">Cost</th>
                <th scope='col' >Action</th>
              </tr>
            </thead>
            <tbody >
              {records.filter(val => val.brand.toLowerCase().includes(query)).map((val, index) => {
                return (
                  <tr key={index} className=' fw-bold'>
                    <th scope="row">{val.id}</th>
                    <td>{val.brand}</td>
                    <td>{val.name}</td>
                    <td>{val.year}</td>
                    <td  >${Intl.NumberFormat("en-US", options).format(val.cost)}
                    </td>
                    <td>
                      <div className="row-btn">
                        <button onClick={() => CarUpdate(val.id)} className='btn '><FontAwesomeIcon icon={faPenToSquare} /></button>
                        <button onClick={() => CarRead(val.id)} className='btn btn-warning' ><FontAwesomeIcon icon={faEye} /></button>
                        <button onClick={() => deleteCar(val.id)} className='btn btn-danger'><FontAwesomeIcon icon={faTrash} /></button>
                      </div>
                    </td>
                  </tr>
                )
              })}

            </tbody>
          </table>

          <div className='nav-pagination'>
            <ul className='paginationui'>
              <li className={`page-item ${disablebtnLeft ? "disable" : " "}`}>
                <a href="#" className='page-link' onClick={prePage}><i><FontAwesomeIcon icon={faCaretLeft} /></i></a>
              </li>
              <div className="number-wrapper">
                {
                  numbers.map((n, i) => (
                    <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                      <a href="#" className='page-link' onClick={() => changeCPage(n)} >{n}</a>
                    </li>

                  ))
                }
              </div>
              <li className={`page-item ${disablebtnRight ? "disable" : " "}`}>
                <a href="#" className='page-link' onClick={nextPage}><i><FontAwesomeIcon icon={faCaretRight} /></i></a>
              </li>
            </ul>
          </div>
        </div >

      }

    </div>
  )
}

export default Table