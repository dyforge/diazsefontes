import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import '../DashBoard.css'


const UserProjectDetails = ({ userDat }) => {
  const email = userDat.value[0];
  const role = userDat.value[6];

  let navigate = useNavigate()
  const changePassHandler = (e) => {
    e.preventDefault()
    navigate('/ChangePassword')
  }
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);


  function getUsers() {

    axios.get(`https://hxj0776.uta.cloud/react-backend/project.php?role=${role}&email=${email}`).then(function (response) {
      console.log(response.data);
      setUsers(response.data);
    });
  }

  const deleteUser = (id) => {
    axios.delete(`https://hxj0776.uta.cloud/react-backend/project.php/${id}/delete`).then(function (response) {
      console.log(response.data);
      getUsers();
    });
  }

  console.log(users);
  if(role !== "admin"){
    return (
      <div className='centered-data'>
        <div className='user-info'>
          <div>
            <h6>Projects Information</h6>
            <table id="customers">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Project Name</th>
                  <th>Country</th>
                  <th>Expense</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map((user, index) =>
                    <tr key={index}>
                      <td>{(index + 1)}</td>
                      <td>{user.project_name}</td>
                      <td>{user.country}</td>
                      <td>{user.expense}</td>
                      <td>
                        <Link to={`project/edit?id=${user.project_id}`} >Edit</Link>
                      </td>
                      <td>
                        <button onClick={() => deleteUser(user.project_id)}>Delete</button>
                      </td>
                    </tr>
                  )}
              </tbody>
            </table>
            <div class="btn-row">
              <div class="table-btn">
                <Link to={`project/addProjectDetails?email=${email}`}>Add Project Details</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}else{
      return (
        <div className='centered-data'>
          <div className='user-info'>
            <div>
              <h6>Projects Information</h6>
              <table id="customers">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Project Name</th>
                    <th>Country</th>
                    <th>Expense</th>
                    <th>Member's email</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    users.map((user, index) =>
                      <tr key={index}>
                        <td>{(index + 1)}</td>
                        <td>{user.project_name}</td>
                        <td>{user.country}</td>
                        <td>{user.expense}</td>
                        <td>{user.email}</td>
                        <td>
                          <Link to={`project/edit?id=${user.project_id}`} >Edit</Link>
                        </td>
                        <td>
                          <button onClick={() => deleteUser(user.project_id)}>Delete</button>
                        </td>
                      </tr>
                    )}
                </tbody>
              </table>
              <div class="btn-row">
                <div class="table-btn">
                  <Link to={`project/addProjectDetails?role=${role}&email=${email}`}>Add Project Details</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
  

export default UserProjectDetails
