import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

class FooterMain extends Component {

  state = { clicked: false }
  render() {
    return (
      <>
        <footer id='footer'>
          <div className='footer_content'>
            <ul className={this.state.clicked ? 'foot-menu active' : 'foot-menu'}>
              <li>
                <Link to='/contactus'>Contact Us</Link>
              </li>
            </ul>
            <ul className='footer-links-right'>
              <li className=''>
                <a href='#'>
                  <i className='fa-brands fa-facebook'></i>
                </a>
              </li>

              <li className=''>
                <a href='#'>
                  <i className='fa-brands fa-linkedin'></i>
                </a>
              </li>

              <li className=''>
                <a href='#'>
                  <i className='fa-brands fa-instagram'></i>
                </a>
              </li>

              <li className=''>
                <a href='#'>
                  <i className='fa-brands fa-pinterest'></i>
                </a>
              </li>

              <li className=''>
                <a href='#'>
                  <i className='fa-brands fa-twitter'></i>
                </a>
              </li>
            </ul>
          </div>
          <div className='subfooter_content'>&copy; diazfontes.com | 2022 All rights reserved</div>
        </footer>
      </>
    )
  }
}

export default FooterMain
