import React from 'react'
import Navbar from '../Components/navbar'
import Contact from '../Components/contact'
function team() {
  return (
    <>
    <Navbar />
       <section id="team" className="team section-bg mt-5">
                        <div className="container">
                            <div className="section-title" data-aos="fade-up">
                                <h2>Team</h2>
                                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                    <div className="member" data-aos="fade-up" data-aos-delay={100}>
                                        <div className="member-img">
                                            <img src={require("../Assets/img/team/team-1.jpg")} className="img-fluid" alt />
                                            <div className="social">
                                                <a href><i className="icofont-twitter" /></a>
                                                <a href><i className="icofont-facebook" /></a>
                                                <a href><i className="icofont-instagram" /></a>
                                                <a href><i className="icofont-linkedin" /></a>
                                            </div>
                                        </div>
                                        <div className="member-info">
                                            <h4>Walter White</h4>
                                            <span>Chief Executive Officer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                    <div className="member" data-aos="fade-up" data-aos-delay={200}>
                                        <div className="member-img">
                                            <img src={require("../Assets/img/team/team-2.jpg")} className="img-fluid" alt />
                                            <div className="social">
                                                <a href><i className="icofont-twitter" /></a>
                                                <a href><i className="icofont-facebook" /></a>
                                                <a href><i className="icofont-instagram" /></a>
                                                <a href><i className="icofont-linkedin" /></a>
                                            </div>
                                        </div>
                                        <div className="member-info">
                                            <h4>Sarah Jhonson</h4>
                                            <span>Product Manager</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                    <div className="member" data-aos="fade-up" data-aos-delay={300}>
                                        <div className="member-img">
                                            <img src={require("../Assets/img/team/team-3.jpg")} className="img-fluid" alt />
                                            <div className="social">
                                                <a href><i className="icofont-twitter" /></a>
                                                <a href><i className="icofont-facebook" /></a>
                                                <a href><i className="icofont-instagram" /></a>
                                                <a href><i className="icofont-linkedin" /></a>
                                            </div>
                                        </div>
                                        <div className="member-info">
                                            <h4>William Anderson</h4>
                                            <span>CTO</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                    <div className="member" data-aos="fade-up" data-aos-delay={400}>
                                        <div className="member-img">
                                            <img src={require("../Assets/img/team/team-4.jpg")} className="img-fluid" alt />
                                            <div className="social">
                                                <a href><i className="icofont-twitter" /></a>
                                                <a href><i className="icofont-facebook" /></a>
                                                <a href><i className="icofont-instagram" /></a>
                                                <a href><i className="icofont-linkedin" /></a>
                                            </div>
                                        </div>
                                        <div className="member-info">
                                            <h4>Amanda Jepson</h4>
                                            <span>Accountant</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Contact />
    </>
  )
}

export default team