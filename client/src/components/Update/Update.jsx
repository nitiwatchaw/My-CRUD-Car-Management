import './Update.css'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import FormUpdatedata from '../../formData/FormUpdate'
const Update = ({ brand, name, year, cost,  setBrand, setName, setYear, setCost }) => {
    const { id } = useParams()

    const handleSubmit = event => {
        event.preventDefault();

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "id": id,
            "brand": brand,
            "name": name,
            "year": year,
            "cost": cost,
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3002/update/" + id, requestOptions)
            .then(response => response.json())
            .then(result => {
                alert(`Car ID ${id} is Updated`)
                window.location.href = "/"
            })
            .catch(error => console.log('error', error));
    }

    return (
        <div className='bg-container3'>
            <nav className='navbar navbar-expand-lg   d-flex text-white p-3 ps-4 pe-4 justify-content-between'>
                <h1>Manage <span className='fw-bold'>Car list</span><FontAwesomeIcon icon={faPenToSquare} style={{ marginLeft: "20px" }} /></h1>
            </nav>
            <div className="informationUpdate" style={{ width: "60%", margin: "0 auto" }}>
                <form action="" onSubmit={handleSubmit}>
                    <FormUpdatedata setBrand={setBrand} setName={setName} setYear={setYear} setCost={setCost} />
                </form>
            </div>
        </div>
    )
}

export default Update