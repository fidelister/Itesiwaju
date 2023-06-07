import React from 'react'
import Navbar from '../Components/navbar'
import Contact from "../Components/contact"
// import Faq from "./faq"
import {Link } from "react-router-dom"
import {TbCurrencyNaira} from "react-icons/tb"
import {GrMoney} from "react-icons/gr"
import {MdCurrencyExchange} from "react-icons/md"
import {AiFillLock} from "react-icons/ai"
import {GiMoneyStack} from "react-icons/gi"
import {FaMoneyCheck} from "react-icons/fa"
// import "../Assets/css/style.css"
function home() {
    return (
        <>
            <div>
                <Navbar />
                <section id="hero" className="d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                                <h1 data-aos="fade-up">The Best Cooperative</h1>
                                {/* <h2 data-aos="fade-up" data-aos-delay={400}>Today, Tomorrow, always with you.<br/> Join us today!</h2> */}
                                <h2 data-aos="fade-up" data-aos-delay={400}>We strive to excel by delivering first class services to our members and ensure timely <br/> and cheaper availability of funds to improve their wellbeing</h2>
                                <div data-aos="fade-up" data-aos-delay={800}>
                                    <a href="/register" className="btn-get-started scrollto">Get Started</a>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay={200}>
                                <img src={require("../Assets/img/land.jpg")} className="img-fluid animated " style={{marginTop:"4rem"}} alt />
                            </div>
                        </div>
                    </div>
                </section>{/* End Hero */}
                <main id="main">
                    {/* ======= Clients Section ======= */}
                    {/* <section id="clients" className="clients clients">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2 col-md-4 col-6">
                                    <img src={require("../Assets/img/clients/client-1.png")} className="img-fluid" alt data-aos="zoom-in" />
                                </div>
                                <div className="col-lg-2 col-md-4 col-6">
                                    <img src={require("../Assets/img/clients/client-2.png")} className="img-fluid" alt data-aos="zoom-in" data-aos-delay={100} />
                                </div>
                                <div className="col-lg-2 col-md-4 col-6">
                                    <img src={require("../Assets/img/clients/client-3.png")} className="img-fluid" alt data-aos="zoom-in" data-aos-delay={200} />
                                </div>
                                <div className="col-lg-2 col-md-4 col-6">
                                    <img src={require("../Assets/img/clients/client-4.png")} className="img-fluid" alt data-aos="zoom-in" data-aos-delay={300} />
                                </div>
                                <div className="col-lg-2 col-md-4 col-6">
                                    <img src={require("../Assets/img/clients/client-5.png")} className="img-fluid" alt data-aos="zoom-in" data-aos-delay={400} />
                                </div>
                                <div className="col-lg-2 col-md-4 col-6">
                                    <img src={require("../Assets/img/clients/client-6.png")} className="img-fluid" alt data-aos="zoom-in" data-aos-delay={500} />
                                </div>
                            </div>
                        </div>
                    </section> */}
                <section id="about" className="about">
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
                    </section>
                    <section id="counts" className="counts">
                        <div className="container">
                            <div className="row">
                                <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start" data-aos="fade-right" data-aos-delay={150}>
                                    <img src={require("../Assets/img/celeb2.jpg")} alt="show" className="img-fluid" />
                                </div>
                                <div className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0" data-aos="fade-left" data-aos-delay={300}>
                                    <div className="content d-flex flex-column justify-content-center">
                                        <div className="row">
                                            <div className="col-md-6 d-md-flex align-items-md-stretch">
                                                <div className="count-box">
                                                    <i className="icofont-simple-smile" />
                                                    <span data-toggle="counter-up">65</span>
                                                    <p><strong>Active loans</strong> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, quaerat!</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 d-md-flex align-items-md-stretch">
                                                <div className="count-box">
                                                    <i className="icofont-document-folder" />
                                                    <span data-toggle="counter-up">85</span>
                                                    <p><strong>Loans approved</strong> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, quaerat!</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 d-md-flex align-items-md-stretch">
                                                <div className="count-box">
                                                    <i className="icofont-clock-time" />
                                                    <span data-toggle="counter-up">12</span>
                                                    <p><strong>Investments</strong> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, quaerat!</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 d-md-flex align-items-md-stretch">
                                                <div className="count-box">
                                                    <i className="icofont-award" />
                                                    <span data-toggle="counter-up">15</span>
                                                    <p><strong>Savings</strong> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, quaerat!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/* End .content*/}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="services" className="services ">
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
               
                    {/* <section id="features" className="features">
                        <div className="container">
                            <div className="section-title" data-aos="fade-up">
                                <h2>Features</h2>
                                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
                            </div>
                            <div className="row" data-aos="fade-up" data-aos-delay={300}>
                                <div className="col-lg-3 col-md-4">
                                    <div className="icon-box">
                                        <i className="ri-store-line" style={{ color: '#ffbb2c' }} />
                                        <h3><a href>Lorem Ipsum</a></h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                                    <div className="icon-box">
                                        <i className="ri-bar-chart-box-line" style={{ color: '#5578ff' }} />
                                        <h3><a href>Dolor Sitema</a></h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                                    <div className="icon-box">
                                        <i className="ri-calendar-todo-line" style={{ color: '#e80368' }} />
                                        <h3><a href>Sed perspiciatis</a></h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                                    <div className="icon-box">
                                        <i className="ri-paint-brush-line" style={{ color: '#e361ff' }} />
                                        <h3><a href>Magni Dolores</a></h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i className="ri-database-2-line" style={{ color: '#47aeff' }} />
                                        <h3><a href>Nemo Enim</a></h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i className="ri-gradienter-line" style={{ color: '#ffa76e' }} />
                                        <h3><a href>Eiusmod Tempor</a></h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i className="ri-file-list-3-line" style={{ color: '#11dbcf' }} />
                                        <h3><a href>Midela Teren</a></h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i className="ri-price-tag-2-line" style={{ color: '#4233ff' }} />
                                        <h3><a href>Pira Neve</a></h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i className="ri-anchor-line" style={{ color: '#b2904f' }} />
                                        <h3><a href>Dirada Pack</a></h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i className="ri-disc-line" style={{ color: '#b20969' }} />
                                        <h3><a href>Moton Ideal</a></h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i className="ri-base-station-line" style={{ color: '#ff5828' }} />
                                        <h3><a href>Verdo Park</a></h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i className="ri-fingerprint-line" style={{ color: '#29cc61' }} />
                                        <h3><a href>Flavor Nivelanda</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                    <section id="testimonials" className="testimonials section-bg">
                        <div className="container">
                            <div className="section-title" data-aos="fade-up">
                                <h2>Testimonials</h2>
                                <p>Magnam dolores commodi suscipit eum quidem consectetur velit</p>
                            </div>
                            <div className="owl-carousel testimonials-carousel" data-aos="fade-up" data-aos-delay={200}>
                                <div className="testimonial-wrap">
                                    <div className="testimonial-item">
                                        <img src={require("../Assets/img/testimonials/testimonials-1.jpg")} className="testimonial-img" alt />
                                        <h3>Saul Goodman</h3>
                                        <h4>Ceo &amp; Founder</h4>
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left" />
                                            Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                            <i className="bx bxs-quote-alt-right quote-icon-right" />
                                        </p>
                                    </div>
                                </div>
                                <div className="testimonial-wrap">
                                    <div className="testimonial-item">
                                        <img src={require("../Assets/img/testimonials/testimonials-2.jpg")} className="testimonial-img" alt />
                                        <h3>Sara Wilsson</h3>
                                        <h4>Designer</h4>
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left" />
                                            Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                            <i className="bx bxs-quote-alt-right quote-icon-right" />
                                        </p>
                                    </div>
                                </div>
                                <div className="testimonial-wrap">
                                    <div className="testimonial-item">
                                        <img src={require("../Assets/img/testimonials/testimonials-3.jpg")} className="testimonial-img" alt />
                                        <h3>Jena Karlis</h3>
                                        <h4>Store Owner</h4>
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left" />
                                            Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                            <i className="bx bxs-quote-alt-right quote-icon-right" />
                                        </p>
                                    </div>
                                </div>
                                <div className="testimonial-wrap">
                                    <div className="testimonial-item">
                                        <img src={require("../Assets/img/testimonials/testimonials-4.jpg")} className="testimonial-img" alt />
                                        <h3>Matt Brandon</h3>
                                        <h4>Freelancer</h4>
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left" />
                                            Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                            <i className="bx bxs-quote-alt-right quote-icon-right" />
                                        </p>
                                    </div>
                                </div>
                                <div className="testimonial-wrap">
                                    <div className="testimonial-item">
                                        <img src={require("../Assets/img/testimonials/testimonials-5.jpg")} className="testimonial-img" alt />
                                        <h3>John Larson</h3>
                                        <h4>Entrepreneur</h4>
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left" />
                                            Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                            <i className="bx bxs-quote-alt-right quote-icon-right" />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                 
                    {/* <section id="pricing" className="pricing">
                        <div className="container">
                            <div className="section-title">
                                <h2>Pricing</h2>
                                <p>Sit sint consectetur velit nemo qui impedit suscipit alias ea</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="box" data-aos="zoom-in-right" data-aos-delay={200}>
                                        <h3>Free</h3>
                                        <h4><sup>$</sup>0<span> / month</span></h4>
                                        <ul>
                                            <li>Aida dere</li>
                                            <li>Nec feugiat nisl</li>
                                            <li>Nulla at volutpat dola</li>
                                            <li className="na">Pharetra massa</li>
                                            <li className="na">Massa ultricies mi</li>
                                        </ul>
                                        <div className="btn-wrap">
                                            <a href="#" className="btn-buy">Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
                                    <div className="box recommended" data-aos="zoom-in" data-aos-delay={100}>
                                        <h3>Business</h3>
                                        <h4><sup>$</sup>19<span> / month</span></h4>
                                        <ul>
                                            <li>Aida dere</li>
                                            <li>Nec feugiat nisl</li>
                                            <li>Nulla at volutpat dola</li>
                                            <li>Pharetra massa</li>
                                            <li className="na">Massa ultricies mi</li>
                                        </ul>
                                        <div className="btn-wrap">
                                            <a href="#" className="btn-buy">Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                                    <div className="box" data-aos="zoom-in-left" data-aos-delay={200}>
                                        <h3>Developer</h3>
                                        <h4><sup>$</sup>29<span> / month</span></h4>
                                        <ul>
                                            <li>Aida dere</li>
                                            <li>Nec feugiat nisl</li>
                                            <li>Nulla at volutpat dola</li>
                                            <li>Pharetra massa</li>
                                            <li>Massa ultricies mi</li>
                                        </ul>
                                        <div className="btn-wrap">
                                            <a href="#" className="btn-buy">Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                    <section id="faq" className="faq">
                        <div className="container">
                            <div className="section-title" data-aos="fade-up">
                                <h2>Frequently Asked Questions</h2>
                            </div>
                            <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
                                <div className="col-lg-5">
                                    <i className="ri-question-line" />
                                    <h4>Non consectetur a erat nam at lectus urna duis?</h4>
                                </div>
                                <div className="col-lg-7">
                                    <p>
                                        Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                                    </p>
                                </div>
                            </div>{/* End F.A.Q Item*/}
                            <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={200}>
                                <div className="col-lg-5">
                                    <i className="ri-question-line" />
                                    <h4>Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?</h4>
                                </div>
                                <div className="col-lg-7">
                                    <p>
                                        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim.
                                    </p>
                                </div>
                            </div>{/* End F.A.Q Item*/}
                            <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={300}>
                                <div className="col-lg-5">
                                    <i className="ri-question-line" />
                                    <h4>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?</h4>
                                </div>
                                <div className="col-lg-7">
                                    <p>
                                        Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus.
                                    </p>
                                </div>
                            </div>{/* End F.A.Q Item*/}
                            <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={400}>
                                <div className="col-lg-5">
                                    <i className="ri-question-line" />
                                    <h4>Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?</h4>
                                </div>
                                <div className="col-lg-7">
                                    <p>
                                        Aperiam itaque sit optio et deleniti eos nihil quidem cumque. Voluptas dolorum accusantium sunt sit enim. Provident consequuntur quam aut reiciendis qui rerum dolorem sit odio. Repellat assumenda soluta sunt pariatur error doloribus fuga.
                                    </p>
                                </div>
                            </div>{/* End F.A.Q Item*/}
                            <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={500}>
                                <div className="col-lg-5">
                                    <i className="ri-question-line" />
                                    <h4>Tempus quam pellentesque nec nam aliquam sem et tortor consequat?</h4>
                                </div>
                                <div className="col-lg-7">
                                    <p>
                                        Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
                                    </p>
                                </div>
                            </div>{/* End F.A.Q Item*/}
                        </div>
                    </section>
                    <Contact />
                
                </main>
            </div>

        </>
    )
}

export default home