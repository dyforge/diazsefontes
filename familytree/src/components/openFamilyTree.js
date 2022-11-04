import { useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Navbar } from './navbar'
import Footer from './Footer/Footer'
import { Tree } from 'react-tree-graph';




export const OpenFamilyTree = () => {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({})
    const [searchParams, setSearchParams] = useSearchParams();
    const email = searchParams.get("email");
    const role = searchParams.get("role");
    inputs.email = email;
    inputs.role = role;

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post(`https://hxj0776.uta.cloud/react-backend/project.php`, inputs).then(function (response) {
            console.log(response.data);
            navigate('/dashboard');

        });
    }
    let data = {
        name: 'Parent',
        children: [{
            name: 'Child One',
            children: [{
                name: 'Child One'
            }, {
                name: 'Child Two'
            }, {
                name: 'Child Two'
            }, {
                name: 'Child Two'
            }]
        }, {
            name: 'Child Two'
        }]
    };
    return (
        <div>
            <Navbar />
            <Tree
                data={data}
                height={400}
                width={400} />);
            <Footer />
        </div>
    )
}