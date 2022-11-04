import React, { useState } from 'react'
import { Navbar } from './navbar'
import './register.css'
import axios from 'axios'
import Footer from './Footer/Footer'
import { Link, useNavigate } from 'react-router-dom'

export const Register = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [ancestoremail, setAncestorEmail] = useState('')
  const [age, setAge] = useState('')
  //const [gender, setGender] = useState('')
  const [numchild, setNumChild] = useState('')
  const [error, setError] = useState('')
  const [gender, setGender] = React.useState('male');
  const [role, setRole] = React.useState('member');
  const navigate = useNavigate()

  const handleChange = (event) => {
      setGender(event.target.value)
    }

  const registerHandle = async (e) => {
    e.preventDefault()
    let config = {method:"POST",email:email,password:password,first_name:firstname,last_name:lastname,ancestor_email:ancestoremail,gender:gender,num_child:numchild,age:age,role:role}
    
    //navigate('/dashboard')
    try {
      const { data } = await axios
        .post('https://hxj0776.uta.cloud/react-backend/register.php', config)
        //.post('http://localhost/react-backend/register.php', config)
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
      <div id='registration-page' className='bodyWrapper'>
        <form className='signup-form' onSubmit={registerHandle} method='post'>
          <h3>Create Account</h3>
          <div className='form-body'>
            <div className='row'>
              <div className="input-group">
                  <label>First name </label>
                  <input type="text" name="first_name" onChange={(e) => setFirstName(e.target.value)} placeholder="First name" required/>
              </div>
              <div className="input-group">
                  <label>Last name</label>
                  <input type="text" name="last_name" onChange={(e) => setLastName(e.target.value)} placeholder="Last name" required/>
              </div>
              <div className="input-group">
                  <label>Email </label>
                  <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email address" required/>
              </div>
              <div className="input-group">
                  <label>Password </label>
                  <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
              </div>
              <div className="input-group">
                  <label>Confirm Password</label>
                  <input type="password" name="confirmpwd" placeholder="Confirm password" required/>
              </div>
              <div className="input-group">
                  <label>Ancestor's Email</label>
                  <input type="text" name="ancestor_email" onChange={(e) => setAncestorEmail(e.target.value)} placeholder="Ancestor email" required/>
              </div>
              <div className="input-group">
                  <label>Age</label>
                  <input type="number" name="age" onChange={(e) => setAge(e.target.value)} placeholder="Age" required/>
              </div>
              <div className="input-group">
                  <label>Gender:</label>
                  <div>
                      <input type="radio" checked={gender === 'male'} onChange={handleChange} value="male"/>
                      <label for="male">Male</label>
                      <input type="radio" checked={gender === 'female'} onChange={handleChange} value="female"/>
                      <label for="female">Female</label>
                      <input type="radio" checked={gender === 'other'} onChange={handleChange} value="other"/>
                      <label for="other">Other</label>
                  </div>
              </div>
              <div className="input-group">
                  <label>No of child</label>
                  <input type="text" name="num_child" onChange={(e) => setNumChild(e.target.value)} placeholder="Number of child" required/>
              </div>
            </div>
          </div>
          <div className='form-footer'>
            <input className='btn btn_primary' type='submit' value='Sign Up' />
          </div>
        </form>
      </div>
      </section>
      <Footer />
    </>
  )
}
