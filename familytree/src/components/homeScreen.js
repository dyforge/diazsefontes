import React,{useContext} from 'react'
import { Navbar } from './navbar'
import Footer from './Footer/Footer'
import './homeScreen.css'


const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <section className='mainbody'>
      <div className='bodyWrapper'>
        <div className='homeScreenWrapper'>
          <section>
            <div className='centered'>
              <section className='flashcards'>
                <article className='card'>
                  <p>
                    What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                    only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                    Ipsum.
                  </p>
                </article>
                {/* card-one  */}
                <article className='card'>
                  <p>
                    What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                    only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                    Ipsum.
                  </p>
                </article>
                {/* <!-- /card-two --> */}
                <article className='card'>
                  <p>
                    What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                    only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                    Ipsum.
                  </p>
                </article>
                {/* <!-- /card-three --> */}
              </section>
            </div>
          </section>
        </div>
      </div>
      </section>
      <Footer />
    </>
  )
}

export default HomeScreen
