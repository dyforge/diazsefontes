import { useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Navbar } from './navbar'
import Footer from './Footer/Footer'

export const AddLandDetails = () => {
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

        axios.post(`https://hxj0776.uta.cloud/react-backend/land.php`, inputs).then(function (response) {
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
                        <h1>Add Land Details</h1>
                        <form onSubmit={handleSubmit}>
                            <table cellSpacing="10">
                                <tbody>
                                    <tr>
                                        <th>
                                            <label>Land Name: </label>
                                        </th>
                                        <td>
                                            <input type="text" name="land_name" onChange={handleChange} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <label>Land Size: </label>
                                        </th>
                                        <td>
                                            <input type="number" name="land_size" onChange={handleChange} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <label>Land Value: </label>
                                        </th>
                                        <td>
                                            <input type="number" name="land_value" onChange={handleChange} />
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
                                            <label>Land Name: </label>
                                        </th>
                                        <td>
                                            <input type="text" name="land_name" onChange={handleChange} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <label>Land Size: </label>
                                        </th>
                                        <td>
                                            <input type="number" name="land_size" onChange={handleChange} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <label>Land Value: </label>
                                        </th>
                                        <td>
                                            <input type="number" name="land_value" onChange={handleChange} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <label>Member's Email </label>
                                        </th>
                                        <td>
                                            <input type="email" name="member_email" onChange={handleChange} />
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