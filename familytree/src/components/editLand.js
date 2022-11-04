import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Navbar } from './navbar'
import Footer from './Footer/Footer'

export const EditLand = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("id");
    const role = searchParams.get("role");
    console.log(inputs);
    useEffect(() => {
        getUser();
    }, []);
    function getUser() {
        axios.get(`https://hxj0776.uta.cloud/react-backend/land.php?id=${id}`).then(function (response) {
            console.log(response.data);
            setInputs(response.data);
        });
    }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`https://hxj0776.uta.cloud/react-backend/land.php/${id}/edit`, inputs).then(function (response) {
            console.log(response.data);
            navigate('/dashboard');
        });

    }
    console.log(inputs);
    if (inputs.length !== 0) {
        if(role !== "admin"){
            return (
                <div>
                    <Navbar />
                    <br /><br /><br /><br />
                    <center>
                    <h1>Edit land details:</h1>
                    <form onSubmit={handleSubmit}>
                        <table cellSpacing="10">
                            <tbody>
                                <tr>
                                    <th>
                                        <label>Land Name: </label>
                                    </th>
                                    <td>
                                        <input value={inputs.land_name} type="text" name="land_name" onChange={handleChange} />
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <label>Land Size: </label>
                                    </th>
                                    <td>
                                        <input value={inputs.land_size} type="number" name="land_size" onChange={handleChange} />
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <label>Land Value: </label>
                                    </th>
                                    <td>
                                        <input value={inputs.land_value} type="number" name="land_value" onChange={handleChange} />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2" align="right">
                                        <button>Save</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                    </center>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br />
                <Footer />
                </div>
            )
        }else{
            return (
                <div>
                    <Navbar />
                    <br /><br /><br /><br />
                    <center>
                    <h1>Edit land details:</h1>
                    <form onSubmit={handleSubmit}>
                        <table cellSpacing="10">
                            <tbody>
                                <tr>
                                    <th>
                                        <label>Land Name: </label>
                                    </th>
                                    <td>
                                        <input value={inputs.land_name} type="text" name="land_name" onChange={handleChange} />
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <label>Land Size: </label>
                                    </th>
                                    <td>
                                        <input value={inputs.land_size} type="number" name="land_size" onChange={handleChange} />
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <label>Land Value: </label>
                                    </th>
                                    <td>
                                        <input value={inputs.land_value} type="number" name="land_value" onChange={handleChange} />
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <label>Member's email: </label>
                                    </th>
                                    <td>
                                        <input value={inputs.email} type="email" name="land_value" onChange={handleChange} />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2" align="right">
                                        <button>Save</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                    </center>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br />
                <Footer />
                </div>
            )
        }
        
    }
}