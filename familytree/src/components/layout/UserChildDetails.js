import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import '../DashBoard.css'


const UserChildDetails = ({ userDat }) => {
    const email = userDat.value[0];
    const role = userDat.value[6];
    let navigate = useNavigate()

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);


    function getUsers() {

        axios.get(`https://hxj0776.uta.cloud/react-backend/child.php?role=${role}&email=${email}`).then(function (response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }

    const deleteUser = (id) => {
        axios.delete(`https://hxj0776.uta.cloud/react-backend/child.php/${id}/delete`).then(function (response) {
            console.log(response.data);
            getUsers();
        });
    }

    console.log(users);
    if (role !== "admin") {
        return (
            <div className='centered-data'>
                <div className='user-info'>
                    <div>
                        <h6>Children Information</h6>
                        <table id="customers">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, index) =>
                                        <tr key={index}>
                                            <td>{(index + 1)}</td>
                                            <td>{user.fy_firstName}</td>
                                            <td>{user.fy_lastName}</td>
                                            <td>{user.fy_email}</td>
                                            <td>
                                                <Link to={`child/edit?id=${user.family_grp_num}`} >Edit</Link>
                                            </td>
                                            <td>
                                                <button onClick={() => deleteUser(user.family_grp_num)}>Delete</button>
                                            </td>
                                        </tr>
                                    )}
                            </tbody>
                        </table>
                        <div class="btn-row">
                            <div class="table-btn">
                                <Link to={`child/addChildDetails?email=${email}`}>Add Child Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className='centered-data'>
                <div className='user-info'>
                    <div>
                        <h6>Family Details</h6>
                        <table id="customers">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Parent's Email</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, index) =>
                                        <tr key={index}>
                                            <td>{(index + 1)}</td>
                                            <td>{user.fy_firstName}</td>
                                            <td>{user.fy_lastName}</td>
                                            <td>{user.fy_email}</td>
                                            <td>{user.ancestor_id}</td>
                                            <td>
                                                <Link to={`child/edit?id=${user.family_grp_num}`} >Edit</Link>
                                            </td>
                                            <td>
                                                <button onClick={() => deleteUser(user.family_grp_num)}>Delete</button>
                                            </td>
                                        </tr>
                                    )}
                            </tbody>
                        </table>
                        <div class="btn-row">
                            <div class="table-btn">
                                <Link to={`child/addChildDetails?role=admin&email=${email}`}>Add Child Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserChildDetails
