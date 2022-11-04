import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import '../DashBoard.css'


const UserLandDetails = ({ userDat }) => {
  const email = userDat.value[0];
  const role = userDat.value[6];
  console.log(role);
  
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);


  function getUsers() {

    axios.get(`https://hxj0776.uta.cloud/react-backend/land.php?role=${role}&email=${email}`).then(function (response) {
      console.log(response.data);
      setUsers(response.data);
    });
  }

  const deleteUser = (id) => {
    axios.delete(`https://hxj0776.uta.cloud/react-backend/land.php/${id}/delete`).then(function (response) {
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
            <h6>Land Information</h6>
            <table id="customers">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Land Name</th>
                  <th>Land Size</th>
                  <th>Land Value</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map((user, index) =>
                    <tr key={index}>
                      <td>{(index + 1)}</td>
                      <td>{user.land_name}</td>
                      <td>{user.land_size}</td>
                      <td>{user.land_value}</td>
                      <td>
                        <Link to={`land/edit?id=${user.land_id}`} >Edit</Link>
                      </td>
                      <td>
                        <button onClick={() => deleteUser(user.land_id)}>Delete</button>

                      </td>
                    </tr>
                  )}
              </tbody>
            </table>
            <div class="btn-row">
              <div class="table-btn">
                <Link to={`land/addLandDetails?email=${email}`}>Add Land Details</Link>
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
            <h6>Land Information</h6>
            <table id="customers">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Land Name</th>
                  <th>Land Size</th>
                  <th>Land Value</th>
                  <th>Member's Email</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map((user, index) =>
                    <tr key={index}>
                      <td>{(index + 1)}</td>
                      <td>{user.land_name}</td>
                      <td>{user.land_size}</td>
                      <td>{user.land_value}</td>
                      <td>{user.email}</td>

                      <td>
                        <Link to={`land/edit?id=${user.land_id}`} >Edit</Link>
                      </td>
                      <td>
                        <button onClick={() => deleteUser(user.land_id)}>Delete</button>

                      </td>
                    </tr>
                  )}
              </tbody>
            </table>
            <div class="btn-row">
              <div class="table-btn">
              <Link to={`land/addLandDetails?role=${role}&email=${email}`}>Add Land Details</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default UserLandDetails
