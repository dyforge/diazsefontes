import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from './AppContext/Usercontext'
import { Navbar } from './navbar'
import { Link, useNavigate } from 'react-router-dom'
import './DashBoard.css'
import Footer from './Footer/Footer'
import dsf from '../assets/images/dsf.png'
import UserLandDetails from './layout/UserLandDetails'
import UserProjectDetails from './layout/UserProjectDetails'
import UserTrialDetails from './layout/UserTrialDetails'
import UserChildDetails from './layout/UserChildDetails'
import UserDataAdmin from './layout/userDataAdmin'

export const DashBoard = () => {
  // debugger;
  let navigate = useNavigate()
  // debugger
  const userDat = useContext(UserContext)
  const [user, setUser] = useState('')
  const [userRole, setRole] = useState('')
  const {email, first_name, last_name, gender, age, role}  = userDat.value
  const changePassHandler = (e) => {
    e.preventDefault()
    navigate('/ChangePassword')
  }
  const openFamilyTree = (e) => {
    e.preventDefault()
    navigate('/OpenFamilyTree')
  }

  useEffect(() => {
    return () => {
      if (userDat) {
        setUser(userDat.value.first_name)
        setRole(userDat.value.role)
      }
    }
  }, [user, userRole])
  return (
    <>
      <Navbar />
      {/* {isAdmin? <AdminData /> : <UserData />} */}
      <section className='mainbody'>
      <div className='bodyWrapper'>
        {userDat && userDat.value.role === 'admin' ? (
          <main>
            <div className='user-details'>
              <figure className='user-img'>
                <img className='rounded-img' src={dsf} alt='profile image' />
              </figure>
              <div className='prof-details'>
                <h1>
                  {'Welcome '} {user || first_name}
                </h1>
                <div className='inf'>
                  <div className='det-group'>
                    <label>Username: </label>
                    <div className='details'>{email}</div>
                  </div>
                  <div className='det-group'>
                    <label>First Name: </label>
                    <div className='details'>{user || first_name}</div>
                  </div>
                  <div className='det-group'>
                    <label>Last Name: </label>
                    <div className='details'>{last_name}</div>
                  </div>
                  <div className='det-group'>
                    <label>Gender: </label>
                    <div className='details'>{gender}</div>
                  </div>
                  <div className='det-group'>
                    <label>Role: </label>
                    <div className='details'>{userRole || role}</div>
                  </div>
                </div>
                <div className='change-info'>
                  <div className='btn-chg'>
                    <input
                      type='button'
                      className='chgpwd-btn'
                      onClick={changePassHandler}
                      value='Change Password'
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            <UserDataAdmin userDat={userDat} />
          </main>
        ) : (
          <main>
            <div className='user-details'>
              <figure className='user-img'>
                <img className='rounded-img' src={dsf} alt='profile image' />
              </figure>
              <div className='prof-details'>
                <h1>
                  {'Welcome '} {user || first_name}
                </h1>
                <div className='inf'>
                  <div className='det-group'>
                    <label>Username: </label>
                    <div className='details'>{email}</div>
                  </div>
                  <div className='det-group'>
                    <label>First Name: </label>
                    <div className='details'>{user || first_name}</div>
                  </div>
                  <div className='det-group'>
                    <label>Last Name: </label>
                    <div className='details'>{last_name}</div>
                  </div>
                  <div className='det-group'>
                    <label>Gender: </label>
                    <div className='details'>{gender}</div>
                  </div>
                  <div className='det-group'>
                    <label>Role: </label>
                    <div className='details'>{userRole || role}</div>
                  </div>
                </div>
                <div className='change-info'>
                  <div className='btn-chg'>
                    <input
                      type='button'
                      className='chgpwd-btn'
                      onClick={changePassHandler}
                      value='Change Password'
                    ></input>
                  </div>
                  <div className='btn-chg'>
                    <input
                      type='button'
                      className='chgpwd-btn'
                      onClick={openFamilyTree}
                      value='Open Family Tree'
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            <UserLandDetails userDat={userDat} />
            <UserProjectDetails userDat={userDat} />
            <UserTrialDetails userDat={userDat} />
            <UserChildDetails userDat={userDat} />
          </main>
        )}
      </div>
      </section>

      <Footer />
    </>
  )
}
