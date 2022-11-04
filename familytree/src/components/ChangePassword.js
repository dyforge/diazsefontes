import React, { useState, useContext } from 'react'
import { Navbar } from './navbar'
import './ChangePassword.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer/Footer'
import { UserContext } from './AppContext/Usercontext'


export const ChangePassword = () => {
  const userDat = useContext(UserContext)
  const [email, setEmail] = useState('')
  const [oldpassword, setOldPassword] = useState('')
  const [password, setPassword] = useState('')
  const [cnfpassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { value, setValue } = useContext(UserContext)

  const contactHandle = async (e) => {
    e.preventDefault()
    let config = {method:"POST",email:userDat.value.email,oldpassword:oldpassword,password:password}
    
    //navigate('/dashboard')
    try {
      const { data } = await axios
        //.post('http://localhost/react-backend/changepassword.php', config)
        .post('https://hxj0776.uta.cloud/react-backend/changepassword.php', config)
        .then((response) => {
          setValue(null)
          navigate("/loginscreen")
        })
        .catch((error) => {
          console.log(error)
        })
    } catch (error) {
      setTimeout(() => {
        setError('Invalid credentials...')
      }, 10)
    }
  }
  return (
    <>
      <Navbar />
      <section className='mainbody'>
      <div className='bodyWrapper'>
        <section id='chgnpassword-page'>
          <form className='chgnpassword-form' onSubmit={contactHandle} method='post'>
            <h3>Change Password</h3>
            <div className='form-body'>
              <div className='column'>
                <div className='input-group'>
                  <label>Old Password </label>
                  <input type='password' name='oldpassword' onChange={(e) => setOldPassword(e.target.value)} placeholder='Enter your password' required />
                </div>
                <div className='input-group'>
                  <label>New Password </label>
                  <input type='password' name='password' onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' required />
                </div>
                <div className='input-group'>
                  <label>Confirm Password </label>
                  <input type='password' name='cnfpassword' onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Enter your password' required />
                </div>
              </div>
            </div>
            <div className='form-footer'>
              <input className='btn btn_primary' type='submit' value='Update' />
              <Link to='/dashboard'>Back to dashboard</Link>
            </div>
          </form>
        </section>
      </div>
      </section>
      <Footer />
    </>
  )
}
