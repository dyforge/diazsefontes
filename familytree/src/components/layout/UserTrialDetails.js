import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import '../DashBoard.css'


const UserTrialDetails = ({ userDat }) => {
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

    axios.get(`https://hxj0776.uta.cloud/react-backend/trial.php?role=${role}&email=${email}`).then(function (response) {
      console.log(response.data);
      setUsers(response.data);
    });
  }

  const deleteUser = (id) => {
    axios.delete(`https://hxj0776.uta.cloud/react-backend/trial.php/${id}/delete`).then(function (response) {
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
            <h6>Trials Information</h6>
            <table id="customers">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Trial Name</th>
                  <th>Defendant Name</th>
                  <th>Prosecutor Name</th>
                  <th>Expense</th>
                  <th>Status</th>
                  <th>Verdict</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map((user, index) =>
                    <tr key={index}>
                      <td>{(index + 1)}</td>
                      <td>{user.trial_name}</td>
                      <td>{user.defendant_name}</td>
                      <td>{user.prosecutor_name}</td>
                      <td>{user.trial_expense}</td>
                      <td>{user.trial_status}</td>
                      <td>{user.verdict}</td>
                      <td>
                        <Link to={`trial/edit?id=${user.trial_id}`} >Edit</Link>
                      </td>
                      <td>
                        <button onClick={() => deleteUser(user.trial_id)}>Delete</button>
                      </td>
                    </tr>
                  )}
              </tbody>
            </table>
            <div class="btn-row">
              <div class="table-btn">
                <Link to={`trial/addTrialDetails?email=${email}`}>Add Trial Details</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  else{
    return (
      <div className='centered-data'>
        <div className='user-info'>
          <div>
            <h6>Trials Information</h6>
            <table id="customers">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Trial Name</th>
                  <th>Defendant Name</th>
                  <th>Prosecutor Name</th>
                  <th>Expense</th>
                  <th>Status</th>
                  <th>Verdict</th>
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
                      <td>{user.trial_name}</td>
                      <td>{user.defendant_name}</td>
                      <td>{user.prosecutor_name}</td>
                      <td>{user.trial_expense}</td>
                      <td>{user.trial_status}</td>
                      <td>{user.verdict}</td>
                      <td>{user.email}</td>
                      <td>
                        <Link to={`trial/edit?id=${user.trial_id}`} >Edit</Link>
                      </td>
                      <td>
                        <button onClick={() => deleteUser(user.trial_id)}>Delete</button>
                      </td>
                    </tr>
                  )}
              </tbody>
            </table>
            <div class="btn-row">
              <div class="table-btn">
                <Link to={`trial/addTrialDetails?role=${role}&email=${email}`}>Add Trial Details</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
}

export default UserTrialDetails
