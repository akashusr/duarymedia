import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../image/logoF.svg'
import './Footer.css'
function Footer() {
    return (
        <div className=" f-gray">
            <div className="container overflow-hidden">
                <div className="row  text-white py-4">
                    <div className="col vl">
                        <img alt=""
                            srcSet={logo}
                            width="170"
                            className="d-inline-block align-center pb-4" src={logo} />
                        <p className=" mb-4 sub-title">
                            Starting its voyage in the year 2000 as a sister concern of Advent Enterprise which was established in 1986, in a humble fashion with only two persons on board, Prionty Edit & Effects today is one of the leading full-service agencies in the country with a particular focus on media buying.</p>
                    </div>
                    <div className="col-lg-6 text-lg-center py-lg-0 my-lg-0 my-4 py-4 vl ">
                        <h4 className="text-uppercase" >Want to make something great together?</h4>
                        <h5 className="" >Let’s talk here or email us at</h5>
                        <a className="text-white" href="mailto:Info@duarymedia.com"><h3 className="py-lg-5 py-2 text-white" >Info@duarymedia.com</h3></a>

                        <div className="link d-lg-flex justify-content-center">
                            <Link as={Link} to="/" className="f-text p-2" >HOME</Link>
                            <Link as={Link} to="/services" className="f-text p-2" >SERVICES</Link>
                            <Link as={Link} to="/aboutUs" className="f-text p-2" >ABOUT US</Link>
                            <Link as={Link} to="/contactUs" className="f-text p-2" >CONTACT US</Link>
                            <Link as={Link} to="/career" className="f-text p-2" >CAREER</Link>
                        </div>

                    </div>
                    <div className="col text-white">
                        <h4 className="py-lg-0 mb-4 text-uppercase" >CONTACT US</h4>
                        <div className="num">
                            <p className="mb-0 sub-title" >OFFICE LINE</p>
                            <a href="tel:+88-02-8833475-6"><p className="text-white sub-title" >+88-02-8833475-6</p></a>
                        </div>
                        <div className="num py-4 ">
                            <p className="mb-0" >FAX</p>
                            <a href="tel:+880-2-9895730"><p className=" text-white sub-title" >+880-2-9895730</p></a>
                        </div>
                        <p className=" text-uppercase sub-title" >House-167/b, flat-3, Road-23,
                            Mohakhali DOHS, Dahaka- 1206</p>
                    </div>
                </div>
            </div>

            <div className="f-blue" >
                <div className="container d-lg-flex align-items-center justify-content-between p-2 text-white ">
                    <div>
                        <p className="text-center mb-0">&copy; 2021 <a className="text-white " href="https://duarymedia.com" > Duarymedia.com</a></p>

                    </div>

                    <div className="text-center p-2 text-white f-blue">
                        <a href="https://www.facebook.com" target="_blank" class="me-4 text-white" rel="noreferrer">
                            <i class="fa-brands fa-facebook"></i>
                        </a>
                        <a href="https://www.youtube.com" target="_blank" class="me-4 text-white" rel="noreferrer">
                            <i class="fa-brands fa-youtube"></i>
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" class="me-4 text-white" rel="noreferrer">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="https://www.whatsapp.com" target="_blank" class="me-4 text-white" rel="noreferrer">
                            <i class="fa-brands fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer