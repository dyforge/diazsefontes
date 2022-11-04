import React, { useState } from 'react'
import { Navbar } from './navbar'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer/Footer'
import './Forgotpassword.css'

export const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const forgotHandle = async (e) => {
    e.preventDefault()
    let config = {method:"POST",email:email}
    
    //navigate('/dashboard')
    try {
      const { data } = await axios
        .post('https://hxj0776.uta.cloud/react-backend/forgotpassword.php', config)
        //.post('http://localhost/react-backend/forgotpassword.php', config)
        .then((response) => {
          //console.log(response.data)
          navigate('/loginscreen')
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
      <section id='frgpassword-page'>
        <form className='frgpassword-form' onSubmit={forgotHandle} method='post'>
          <h3>Forgot Password</h3>
          <div className='form-body'>
            <div className='column'>
              <div className='input-group'>
                <label>Email </label>
                <input type='email' name='email' onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email id' required />
              </div>
            </div>
          </div>
          <div className='form-footer'>
            <input className='btn' type='submit' value='Submit' />
          </div>
        </form>
      </section>
      </section>
      <Footer />
    </>
  )
}
