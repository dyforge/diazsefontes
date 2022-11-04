import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Navbar } from './navbar'
import Footer from './Footer/Footer'

export const EditChild = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("id");
    useEffect(() => {
        getUser();
    }, []);
    function getUser() {
        axios.get(`https://hxj0776.uta.cloud/react-backend/child.php?id=${id}`).then(function (response) {
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
        axios.put(`https://hxj0776.uta.cloud/react-backend/child.php/${id}/edit`, inputs).then(function (response) {
            console.log(response.data);
            navigate('/dashboard');
        });

    }
    console.log(inputs);
    if (inputs.length !== 0) {
        return (
            <div>
                <Navbar />
                <br /><br /><br /><br />
                <center>
                <h1>Edit Child details:</h1>
                <form onSubmit={handleSubmit}>
                <table cellSpacing="10">
                            <tbody>
                                <tr>
                                    <th>
                                        <label>First Name: </label>
                                    </th>
                                    <td>
                                        <input value = {inputs.fy_firstName} type="text" name="fy_firstName" onChange={handleChange} />
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <label>Last Name: </label>
                                    </th>
                                    <td>
                                        <input value = {inputs.fy_lastName} type="text" name="fy_lastName" onChange={handleChange} />
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <label>Email: </label>
                                    </th>
                                    <td>
                                        <input value = {inputs.fy_email} type="email" name="fy_email" onChange={handleChange} />
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