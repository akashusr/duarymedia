import React from 'react';
import { Link } from 'react-router-dom';
import akashusr from '../../image/akashusr.png';
import logo from '../../image/logoF.svg';
import './Footer.css';
function Footer() {
    let currentTime = new Date();
    let year = currentTime.getFullYear();
    return (
        <div className="f-gray ">
            <div className="container pt-3 overflow-hidden">
                <div className="row text-white py-5">
                    <div className="col-lg-3 vl">
                        <img alt=""
                            srcSet={logo}
                            width="170"
                            className="d-inline-block  pb-4" src={logo} />
                        <p className=" mb-4 sub-title">
                            In the year 2006, Duary Media Ltd Starting His Journey in This Industry, in a humble fashion with only two persons on board, Duary Media Ltd today is one of the leading full-service agencies in the country with a particular focus on Digital Marketing. Its insightful outputs had the core factor behind the success of a number of campaigns for a set of diverse brands in Bangladesh</p>
                    </div>
                    <div className="col-lg-6 text-lg-center py-lg-0 my-lg-0 my-4 py-4 vl ">
                        <h4 className="text-uppercase" >Want to make something great together?</h4>
                        <h5 className="" >Let’s talk here or email us at</h5>
                        <a className="text-white" href="mailto:duarymedialtd@gmail.com"><h3 className="py-lg-5 py-2 text-white" >duarymedialtd@gmail.com
                        </h3></a>

                        <div className="link d-lg-flex justify-content-center">
                            <Link as={Link} to="/" className="f-text pl-0 py-2 pr-2" >Home</Link>
                            <Link as={Link} to="/services" className="f-text p-2" >Services</Link>
                            <Link as={Link} to="/about" className="f-text p-2" >About</Link>
                            <Link as={Link} to="/contact" className="f-text p-2" >Contact us</Link>
                            <Link as={Link} to="/career" className="f-text p-2" >Career</Link>
                            <Link as={Link} to="/work" className="f-text p-2" >Work</Link>
                        </div>

                    </div>
                    <div className="col-lg-3 text-white">
                        <h4 className="py-lg-0 mb-4 text-uppercase" >CONTACT US</h4>
                        <div className="num">
                            <p className="mb-0 sub-title" >OFFICE LINE</p>
                            <a href="tel:+880-1534-945349"><p className="text-white sub-title" >+880 1534-945349
                            </p></a>
                        </div>
                        <div className="num py-4 ">
                            <p className="mb-0" >FAX</p>
                            <a href="tel:+880-1746-421248"><p className=" text-white sub-title" >+880 1746-421248
                            </p></a>
                        </div>
                        <p className="" >House#167, Flat-03, Road 23, <br /> DOHS Mohakhali, Dhaka 1206</p>
                    </div>
                </div>
            </div>

            <div className="f-blue" >
                <div className="container d-lg-flex align-items-center justify-content-between p-2 text-white ">
                    <div>
                        <p className="text-center mb-0">&copy; {year} <Link className="text-white cursor-pointer" to="/" >Duarymedia</Link></p>

                    </div>

                    <div className="text-center p-2 text-white d-flex justify-content-center blue">
                        <a href="https://www.facebook.com" target="_blank" className="mx-2 mx-lg-3 text-white" rel="noopener noreferrer">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href="https://www.youtube.com" target="_blank" className="mx-2 mx-lg-3  text-white" rel="noopener noreferrer">
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" className="mx-2 mx-lg-3 text-white" rel="noopener noreferrer">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="https://www.whatsapp.com" target="_blank" className="mx-2 mx-lg-3 text-white" rel="noopener noreferrer">
                            <i className="fa-brands fa-whatsapp"></i>
                        </a>
                        <a href="https://akashahmed.netlify.app" target="_blank" className="mx-2 mx-lg-3 text-white" rel="noopener noreferrer">
                            <img data-bs-toggle="tooltip" data-bs-placement="top"
                                data-bs-custom-classname="custom-tooltip"
                                title="Website Creator Akash Ahmed." className="wImg" src={akashusr} alt="websiteCreator" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer