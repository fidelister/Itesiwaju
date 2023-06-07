import React from 'react'
import Navbar from './navbar'
import {AiOutlineTwitter, AiOutlineLinkedin, AiOutlinePhone} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'
import {ImLocation} from 'react-icons/im'
function contact() {
  return (
    <>
    <Navbar />
        <section id="contact" className="contact bg-light">
                        <div className="container">
                            {/* <div className="section-title" data-aos="fade-up">
                                <h2>Contact Us</h2>
                            </div> */}
                            <div className="row">
                                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100}>
                                    <div className="contact-about">
                                        <h3><a href="/"><img src={require("../Assets/img/ite2.png")} height={85}/></a></h3>
                                        <p>We strive to excel by delivering first class services to our members and ensure timely and cheaper availability of funds to improve their wellbeing</p>
                                        <div className="social-links">
                                            <a href="#" className="twitter"><AiOutlineTwitter className="icofont-twitter" /></a>
                                            <a href="#" className="facebook"><FaFacebookF className="icofont-facebook" /></a>
                                            <a href="#" className="instagram"><BsInstagram className="icofont-instagram" /></a>
                                            <a href="#" className="linkedin"><AiOutlineLinkedin className="icofont-linkedin" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay={200}>
                                    <div className="info">
                                        <div className='d-flex'>
                                            <ImLocation className="" size={30} color='blue' />
                                            <p className=''>Arisekola shopping complex Bodija, Ibadan,<br /> Oyo state</p>
                                        </div>
                                        <div className='d-flex'>
                                            <HiOutlineMail className="" size={25} color='blue'  />
                                            <p className=''> support@itesiwaju.com</p>
                                        </div>
                                        <div className='d-flex'>
                                            <AiOutlinePhone className="" size={25} color='blue' />
                                            <p>+234 906 150 1290</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12" data-aos="fade-up" data-aos-delay={300}>
                                    <form action="" method="post" role="form" className="php-email-form">
                                        <div className="form-group mb-3">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                            <div className="validate" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                            <div className="validate" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                            <div className="validate" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <textarea className="form-control" name="message" rows={5} data-rule="required" data-msg="Please write something for us" placeholder="Message" defaultValue={""} />
                                            <div className="validate" />
                                        </div>
                                        <div className="mb-3">
                                            <div className="loading">Loading</div>
                                            <div className="error-message" />
                                            <div className="sent-message">Your message has been sent. Thank you!</div>
                                        </div>
                                        <div className="text-center"><button type="submit">Send Message</button></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
    </>
  )
}

export default contact