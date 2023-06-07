import React from 'react'
import Navbar from '../Components/navbar'
import Contact from '../Components/contact'
function about() {
  return (
    <>
      <Navbar />
      <section id="about" className="about mt-5">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>About Us</h2>
          </div>
          <div className="row content">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={150}>
              <p>
                Itesiwaju multipurpose cooperative society limited is registered under the cooperative law of Oyo State and was founded in the year 2020 with the sole Objective of providing quality and efficient service to her Memebers, in other to improve their economic and social well -being.
              </p>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-up" data-aos-delay={300}>
              <p>
                The Society started operation with membership strength of about 8 Members but today has grown to over 1000 members spread across the state. The cooperative draws its membership from the community which it was registered and outside the community and beyond.
              </p>
              <a href="/about" className="btn-learn-more">Learn More</a>
            </div>
          </div>
        </div>
        <div className="container d-flex mt-5">
          <div className="obj">
            <h3 className='fw-bold'>Objectives</h3>
              <p> - Fear of God: Recognising God in what we do as the giver of life </p>
              <p>- Integrity: Openness and honesty our Ethics</p>
              <p>- Team work: Togetherness Every one achieve more</p>
              <p>- Supportive: providing excellence driven Organisational Culture to meet the aspirations of our members.</p>
          </div>
          <div className="vision">
           <h3 className='fw-bold'>Our vision</h3>
           <p>
           To be the best Cooperative Society in Nigeria and to nurture a winning network of cooperative and Members
           </p>
           <h3 className='fw-bold'>Our mission</h3>
           <p>We strive to excel by delivering first class services to our members and ensure timely and cheaper availability of funds to improve their wellbeing</p>
          </div>
        </div>
      </section>
      <Contact />
    </>
  )
}

export default about