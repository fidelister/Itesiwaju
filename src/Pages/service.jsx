import React from 'react'
import Navbar from '../Components/navbar'
import Contact from '../Components/contact'
import {TbCurrencyNaira} from "react-icons/tb"
import {GrMoney} from "react-icons/gr"
import {MdCurrencyExchange} from "react-icons/md"
import {AiFillLock} from "react-icons/ai"
import {GiMoneyStack} from "react-icons/gi"
import {FaMoneyCheck} from "react-icons/fa"

function service() {
  return (
    <>
    <Navbar />
    <section id="services" className="services my-5">
                        <div className="container">
                            <div className="section-title" data-aos="fade-up">
                                <h2>Services</h2>
                                <p>These are what we specialize in</p>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                                    <div className="icon-box" data-aos="fade-up" data-aos-delay={100}>
                                        <div className="icon"><TbCurrencyNaira size={45} className="p-1" /></div>
                                        <h4 className="title"><a href>Financial services</a></h4>
                                        <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                                    <div className="icon-box" data-aos="fade-up" data-aos-delay={200}>
                                        <div className="icon"><GrMoney size={42} className=" p-1" /></div>
                                        <h4 className="title"><a href>Loan procurement</a></h4>
                                        <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                                    <div className="icon-box" data-aos="fade-up" data-aos-delay={300}>
                                        <div className="icon"><MdCurrencyExchange  size={42} className=" p-1" /></div>
                                        <h4 className="title"><a href>Stock/Shares Exchange</a></h4>
                                        <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                                    <div className="icon-box" data-aos="fade-up" data-aos-delay={100}>
                                        <div className="icon"><AiFillLock size={42} className=" p-1" /></div>
                                        <h4 className="title"><a href>Safe lock</a></h4>
                                        <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                                    <div className="icon-box" data-aos="fade-up" data-aos-delay={200}>
                                        <div className="icon"><GiMoneyStack size={42} className="p-1" /></div>
                                        <h4 className="title"><a href>Investment</a></h4>
                                        <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                                    <div className="icon-box" data-aos="fade-up" data-aos-delay={300}>
                                        <div className="icon"><FaMoneyCheck  size={42} className="p-1" /></div>
                                        <h4 className="title"><a href>Financial advises</a></h4>
                                        <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Contact />
                    {/* <section id="more-services" className="more-services">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 d-flex align-items-stretch">
                                    <div className="card" style={{ backgroundImage: 'url("Assets/img/more-services-1.jpg")' }} data-aos="fade-up" data-aos-delay={100}>
                                        <div className="card-body">
                                            <h5 className="card-title"><a href>Lobira Duno</a></h5>
                                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                                            <div className="read-more"><a href="#"><i className="icofont-arrow-right" /> Read More</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                                    <div className="card" style={{ backgroundImage: 'url("Assets/img/more-services-2.jpg")' }} data-aos="fade-up" data-aos-delay={200}>
                                        <div className="card-body">
                                            <h5 className="card-title"><a href>Limere Radses</a></h5>
                                            <p className="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem.</p>
                                            <div className="read-more"><a href="#"><i className="icofont-arrow-right" /> Read More</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex align-items-stretch mt-4">
                                    <div className="card" style={{ backgroundImage: 'url("Assets/img/more-services-3.jpg")' }} data-aos="fade-up" data-aos-delay={100}>
                                        <div className="card-body">
                                            <h5 className="card-title"><a href>Nive Lodo</a></h5>
                                            <p className="card-text">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores.</p>
                                            <div className="read-more"><a href="#"><i className="icofont-arrow-right" /> Read More</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex align-items-stretch mt-4">
                                    <div className="card" style={{ backgroundImage: 'url("Assets/img/more-services-4.jpg")' }} data-aos="fade-up" data-aos-delay={200}>
                                        <div className="card-body">
                                            <h5 className="card-title"><a href>Pale Treda</a></h5>
                                            <p className="card-text">Nostrum eum sed et autem dolorum perspiciatis. Magni porro quisquam laudantium voluptatem.</p>
                                            <div className="read-more"><a href="#"><i className="icofont-arrow-right" /> Read More</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
    </>
  )
}

export default service