import React, { useState, useContext } from 'react'
import { Navbar } from './navbar'
import { UserContext } from './AppContext/Usercontext'
import utils from './apiUtils/utils'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import './loginScreen.css'
import Footer from './Footer/Footer'

export const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [pass, setPassword] = useState('')
  const [error, setError] = useState('')
  const { value, setValue } = useContext(UserContext)
  const [isLoggedin, setLogin] = useState(false)
  const navigate = useNavigate()
  const loginHandle = async (e) => {
    e.preventDefault()
    let config = { method: 'POST', email: email, password: pass }

    //navigate('/dashboard')
    try {
      // debugger
      await axios
        //.post('http://localhost/react-backend/login.php', config)
        .post('https://hxj0776.uta.cloud/react-backend/login.php', config)
        .then((response) => {
          // debugger
          console.log(response.data)

          setLogin(true)
          if (Object.keys(response.data.userData).length > 0) {
            let obj = {...response.data.userData}
            obj = {...obj, isLogged: isLoggedin}
            setValue(obj)
            navigate('/dashboard')
          }
        })
        .catch((error) => {
          console.log('no authorization', error)
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
        <div className='loginForm'>
          <div className='formBox'>
            <form className='login-form' onSubmit={loginHandle} method='post'>
              <h1>Login</h1>

              <div className='form-body'>
                <div className='column'>
                  <div className='input-group'>
                    <label>
                      <i className='fas fa-user'></i>Username
                    </label>
                    <input
                      type='email'
                      name='email'
                      placeholder='Username'
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className='input-group'>
                    <label>
                      <i className='fas fa-lock'></i>Password{' '}
                    </label>
                    <input
                      type='password'
                      name='password'
                      placeholder='Password'
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className='input-group three'>
                    <Link to='/forgotpassword'>Forgot Password?</Link>
                    <Link to='/register'>Sign Up</Link>
                  </div>
                </div>
              </div>
              <div className='form-footer'>
                <input className='btn' type='submit' value='Login' />
              </div>
            </form>
          </div>
        </div>
      </div>
      </section>
      <Footer />
    </>
  )
}
