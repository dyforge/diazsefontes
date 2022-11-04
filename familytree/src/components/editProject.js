import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Navbar } from './navbar'
import Footer from './Footer/Footer'

export const EditProject = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("id");
    useEffect(() => {
        getUser();
    }, []);
    function getUser() {
        axios.get(`https://hxj0776.uta.cloud/react-backend/project.php?id=${id}`).then(function (response) {
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
        axios.put(`https://hxj0776.uta.cloud/react-backend/project.php/${id}/edit`, inputs).then(function (response) {
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
                <h1>Edit Project details:</h1>
                <form onSubmit={handleSubmit}>
                    <table cellSpacing="10">
                        <tbody>
                            <tr>
                                <th>
                                    <label>Project Name: </label>
                                </th>
                                <td>
                                    <input value={inputs.project_name} type="text" name="project_name" onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label>Country: </label>
                                </th>
                                <td>
                                    <input value={inputs.country} type="text" name="country" onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label>Expense: </label>
                                </th>
                                <td>
                                    <input value={inputs.expense} type="number" name="expense" onChange={handleChange} />
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