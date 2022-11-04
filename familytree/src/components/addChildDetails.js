import { useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Navbar } from './navbar'
import Footer from './Footer/Footer'

export const AddChildDetails = () => {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({})
    const [searchParams, setSearchParams] = useSearchParams();
    const email = searchParams.get("email");
    const role = searchParams.get("role");
    inputs.email = email;
    inputs.role = role;
    console.log(inputs);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post(`https://hxj0776.uta.cloud/react-backend/child.php`, inputs).then(function (response) {
            console.log(response.data);
            navigate('/dashboard');

        });
    }
    if (role !== "admin") {
        return (
            <div>
                <Navbar />
                <div>
                    <center>
                        <br /><br /><br /><br />
                        <h1>Add Child Details</h1>
                        <form onSubmit={handleSubmit}>
                            <table cellSpacing="10">
                                <tbody>
                                    <tr>
                                        <th>
                                            <label>First Name: </label>
                                        </th>
                                        <td>
                                            <input type="text" name="fy_firstName" onChange={handleChange} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <label>Last Name: </label>
                                        </th>
                                        <td>
                                            <input type="text" name="fy_lastName" onChange={handleChange} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <label>Email: </label>
                                        </th>
                                        <td>
                                            <input type="email" name="fy_email" onChange={handleChange} />
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
                </div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
                <Footer />
            </div>
        )
    } else {
        return (

            <div>

                <Navbar />

                <div>
                    <center>
                        <br /><br /><br /><br />
                        <h1>Add Land Details</h1>
                        <form onSubmit={handleSubmit}>
                            <table cellSpacing="10">
                            <tbody>
                                    <tr>
                                        <th>
                                            <label>First Name: </label>
                                        </th>
                                        <td>
                                            <input type="text" name="fy_firstName" onChange={handleChange} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <label>Last Name: </label>
                                        </th>
                                        <td>
                                            <input type="text" name="fy_lastName" onChange={handleChange} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <label>Email: </label>
                                        </th>
                                        <td>
                                            <input type="email" name="fy_email" onChange={handleChange} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <label>Parent's Email </label>
                                        </th>
                                        <td>
                                            <input type="email" name="ancestor_id" onChange={handleChange} />
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
                </div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
                <Footer />
            </div>
        )
    }

}