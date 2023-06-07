import React from 'react'
import Navbar from '../Components/navbar'
import Contact from '../Components/contact'
function login() {
  return (
    <>
      <Navbar />
      <section id="about" className="about mt-5">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Sign up</h2>
          </div>
          <form action="" method="post" role="form" className="php-email-form">
                                        <div className="form-group mb-3">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="First Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                            <div className="validate" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Last Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                            <div className="validate" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Phone number" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                            <div className="validate" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                            <div className="validate" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <input type="password" className="form-control" name="password" id="password" placeholder="Your password" data-rule="email" data-msg="Please enter a valid email" />
                                            <div className="validate" />
                                        </div>
                                        <div className="text-center"><button type="submit" className='btn btn-primary '>Register</button></div>
                                        
                                    </form>
        </div>
      </section>
      <Contact />
    </>
  )
}

export default login