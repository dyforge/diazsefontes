import React, { useState, useContext, useEffect } from 'react'
import { Navbar } from './navbar'
import Footer from './Footer/Footer'
import './Contactus.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from './AppContext/Usercontext'

export const Contactus = () => {
  //debugger
  const userDat = useContext(UserContext)
  const [email, setEmail] = useState('')
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [contactnumber, setContactHumber] = useState('')
  const [error, setError] = useState('')
  const [description, setDescription] = useState('')
  const [ctdata, setContactData] = useState('')
  const navigate = useNavigate()


  const getStatus = async () =>{

    if (userDat.value != null && userDat.value.role === 'admin') {
      let config = {method:"POST",email:userDat.value.email}
      try {
        await axios
          .post('https://hxj0776.uta.cloud/react-backend/admincontact.php', config)
          //.post('http://localhost/react-backend/admincontact.php', config)
          .then((response) => {
            //debugger
            setContactData(response.data.contactData)
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
  }

  useEffect(() => {

      getStatus()

  }, [])

  const contactHandle = async (e) => {
    e.preventDefault()
    let config = {method:"POST",email:email,first_name:firstname,last_name:lastname,contact_number:contactnumber,description:description}
    
    //navigate('/dashboard')
    try {
      const { data } = await axios
        .post('https://hxj0776.uta.cloud/react-backend/contactus.php', config)
        //.post('http://localhost/react-backend/contactus.php', config)
        .then((response) => {
          console.log(response.data)
          navigate('/contactus')
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
      {userDat.value !== null && userDat.value.role === 'admin' ?
        <>
        <section className='mainbody'>
        <div className='bodyWrapper'>
          <div className='centered-data'>
            <div className='user-info'>
              <h6>Contact Us Form Information</h6>
              <div className='table'>
                <div className='tr th'>
                  <div className='td'>Contact ID</div>
                  <div className='td'>First Name</div>
                  <div className='td'>Last Name</div>
                  <div className='td'>Email</div>
                  <div className='td'>Contact Number</div>
                  <div className='td'>Description</div>
                </div>
                    { ctdata && ctdata.value !== null && ctdata.map((item,index)=>{
                      return(
                        <div key={index} className='tr table-total'>
                          <div className='td'>
                            <b>{item.contact_id}</b>
                          </div>
                          <div className='td'>
                            <b>{item.first_name}</b>
                          </div>
                          <div className='td'>
                            <b>{item.last_name}</b>
                          </div>
                          <div className='td'>
                            <b>{item.email}</b>
                          </div>
                          <div className='td'>
                            <b>{item.contact_number}</b>
                          </div>
                          <div className='td'>
                            <b>{item.description}</b>
                          </div>
                        </div>
                      )
                    })}
              </div>
            </div>
          </div>
        </div>
        </section>
        </>:
        <>
        <section className='mainbody'>
        <div className='bodyWrapper'>
          <div className='contact-container'>
            <section className='info-details'>
              <h3>Reach out to us</h3>
              <h4>Email: hxk0776@mavs.uta.edu</h4>
              <h4>Phone:+1-1234567891</h4>
              <h4>Address: UTA, Arlington<br></br>
                  Texas, US
              </h4>
            </section>
            <section className='form-details'>
              <h3>Send your query</h3>
              <form className='contact-us-form' onSubmit={contactHandle} method='post'>
                <div className='form-body'>
                  <div className='row'>
                    <div className='input-group'>
                      <label>First name </label>
                      <input type='text' name='first_name' onChange={(e) => setFirstName(e.target.value)} placeholder='First name' required />
                    </div>
                    <div className='input-group'>
                      <label>Last name</label>
                      <input type='text' name='last_name' onChange={(e) => setLastName(e.target.value)} placeholder='Last name' required />
                    </div>
                    <div className='input-group'>
                      <label>Email </label>
                      <input type='email' name='email' onChange={(e) => setEmail(e.target.value)} placeholder='Email address' required />
                    </div>
                    <div className='input-group'>
                      <label>Contact Number </label>
                      <input type='text' name='contact_number' onChange={(e) => setContactHumber(e.target.value)} placeholder='Contact number' />
                    </div>
                    <div className='input-group'>
                      <label for='description'>Message</label>
                      <textarea name='description' id='message' onChange={(e) => setDescription(e.target.value)} placeholder='Enter your message here'></textarea>
                    </div>
                  </div>
                </div>
                <div className='form-footer'>
                  <input className='btn' type='submit' value='Submit' />
                </div>
              </form>
            </section>
          </div>
        </div>
        </section>
        </>
      }
      

      <Footer />
    </>
  )
}
