import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash, faCaretLeft, faCaretRight, faEye } from '@fortawesome/free-solid-svg-icons'

import './Table.css'
const Table = (props) => {

  const { item, id, deleteCar, } = props

  const options = { maximumFractionDigits: 2 }

  const CarUpdate = (id) => {
    window.location = '/update/' + id
  }

  const CarRead = (id) => {
    window.location = '/read/' + id
  }

  const [currentPage, setCurrentPage] = useState(1);
  const recordPerpage = 5;
  const lastIndex = currentPage * recordPerpage;
  const firstIndex = lastIndex - recordPerpage;
  const records = item.slice(firstIndex, lastIndex);
  const npage = Math.ceil(item.length / recordPerpage)
  const numbers = [...Array(npage + 1).keys()].slice(1)


  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  function changeCPage(id) {
    setCurrentPage(id)
  }

  const nextPage = () => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1)
    }
  }




  return (
    <div className='wrap-table'>
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
          {records.map((val, index) => {
            return (
              <tr key={index} className='align-middle fw-bold'>

                <th scope="row">{val.id}</th>
                <td>{val.brand}</td>
                <td>{val.name}</td>
                <td>{val.year}</td>
                <td  >${Intl.NumberFormat("en-US", options).format(val.cost)}
                </td>
                <td>
                  <div className="row-btn">
                    <button onClick={() => CarUpdate(val.id)} className='btn btn-warning'><FontAwesomeIcon icon={faPenToSquare} /></button>
                    <button onClick={() => deleteCar(val.id)} className='btn btn-danger'><FontAwesomeIcon icon={faTrash} /></button>
                    <button onClick={() => CarRead(val.id)} className='btn btn-warning' ><FontAwesomeIcon icon={faEye} /></button>
                  </div>
                </td>
              </tr>
            )
          })}

        </tbody>
      </table>
      <div className='nav-pagination'>
        <ul className='paginationui'>
          <li className='page-item'>
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
          <li className='page-item'>
            <a href="#" className='page-link' onClick={nextPage}><i><FontAwesomeIcon icon={faCaretRight} /></i></a>
          </li>
        </ul>
      </div>
    </div >
  )
}

export default Table