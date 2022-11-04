import React, { useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './navbar.css'
import { UserContext } from './AppContext/Usercontext'

export const Navbar = () => {
let navigate = useNavigate();

  const userDat = useContext(UserContext)
  const { value, setValue } = useContext(UserContext)

const logoutHandler = (e)=>{
  e.preventDefault();
  setValue(null)
  navigate("/loginscreen")
}
  let navobjLeft = [
    {
      title: 'Home',
      url: '/',
      clsName: 'nav-links',
    },
    {
      title: 'About Us',
      url: '/aboutus',
      clsName: 'nav-links',
    },
    {
      title: 'Blog',
      url: '/blog',
      clsName: 'nav-links',
    },
  ]

  let navobjRight = [
    {
      title: 'Sign Up',
      url: '/register',
      clsName: 'nav-links',
    },
    {
      title: 'Log In',
      url: '/loginscreen',
      clsName: 'nav-links',
    },
    {
      title: 'Log Out',
      url: '/loginscreen',
      clsName: 'nav-links',
    }
  ]
  return (
    <nav className='navbarItems'>
      <ul className='navLinksLeft'>
        {navobjLeft?.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.clsName} to={item.url}>
                {item.title}
              </Link>
            </li>
          )
        })}
      </ul>
      <div className='DIAZSIFONTES'>DIAZSIFONTES</div>
      <ul className='navLinksRight'>
        {userDat && userDat.value === null ?
        <>
            <li>
              <Link className={navobjRight[0].clsName} to={navobjRight[0].url}>
                {navobjRight[0].title}
              </Link>
            </li>
            <li>
            <Link className={navobjRight[1].clsName} to={navobjRight[1].url}>
              {navobjRight[1].title}
            </Link>
          </li>
          </>:
          <>
          <li>
            <Link className={navobjRight[2].clsName} to="/dashboard" >
              {userDat.value.first_name}
            </Link>
          </li>
          <li>
            <Link className={navobjRight[2].clsName} to={navobjRight[1].url} onClick={(e)=>logoutHandler(e)} >
              {navobjRight[2].title} 
            </Link>
          </li>
          </>
}
      </ul>
    </nav>
  )
}
