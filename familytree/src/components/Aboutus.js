import React from 'react'
import { Navbar } from './navbar'
import Footer from './Footer/Footer'
import map from '../assets/images/map.png'
import './Aboutus.css'

const Aboutus = () => {
  return (
    <>
      <Navbar />
      <div className='bodyWrapper'>
        <div class='banner'>
          <div class='banner-text'>
            <div className='map'>
              <img src={map} alt='map' className='map' />
            </div>
            <div className='content'>
              <h1>Diaz-Sifontes’s</h1>
              <h3>Family Tree</h3>
              <h4>No matter how many lines of text you use.</h4>
            </div>
          </div>
        </div>
      </div>
      <article className='aboutUsContent'>
        <p>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
          into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
          of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </article>
      <Footer />
    </>
  )
}

export default Aboutus
