
import './App.css'
import React, { useEffect, useState } from 'react'
import { Routes, Route, useLoaderData } from 'react-router-dom'
import Main from './components/main/Main'
import CarCreate from './components/CarCreate/CarCreate'
import Update from './components/Update/Update'
import Read from './components/Read/Read'
import Axios from 'axios'
import { useParams } from 'react-router-dom'


function App() {

  const [item, setItem] = useState([]);


  const { id } = useParams();

  const getData = () => {
    Axios.get("http://localhost:3002/")
      .then((res) => {
        setItem((res.data))
      })
  }

  useEffect(() => {
    getData();
  })

  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [cost, setCost] = useState(0);


  const addCar = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "brand": brand,
      "name": name,
      "year": year,
      "cost": cost
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:3002/create", requestOptions)
      .then(response => response.json())
      .then(result => {
        alert(`Car inserted ID ${result["insertId"]}`)
        if (result["message"] === '') {
          window.location.href = "/"
        }
      })
      .catch(error => console.log('error', error));
  }


  const deleteCar = (id) => {
    Axios.delete(`http://localhost:3002/delete/` + id)
      .then((res) => {
        setItem(
          item.filter((val) => {
            return val.id != id
          })
        )
      })
      .then(alert("ID deleted"))
  }




  return (
    <div >
      <Routes >

        <Route path="/" element={<Main item={item} setItem={setItem} id={id} deleteCar={deleteCar} />}> </Route>
        <Route path="/create" element={<CarCreate setBrand={setBrand} setName={setName} setYear={setYear} setCost={setCost} addCar={addCar} />}> </Route>
        <Route path="/update/:id" element={<Update id={id} />}> </Route>
        <Route path="/read/:id" element={<Read />}> </Route>


      </Routes>

    </div>
  )
}

export default App
