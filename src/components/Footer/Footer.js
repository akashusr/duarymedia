import React from 'react'
import logo from '../../image/logoF.svg'
import './Footer.css'
function Footer() {
    return (
        <div className=" bg-dark py-4">
            <div className="container">
                <div className="row  text-white py-4">
                    <div className="col">
                        <img alt=""
                            srcSet={logo}
                            width="170"
                            // height="30"
                            className="d-inline-block align-center pb-4" src={logo} alt="footerLogo" />
                        <p className="sub-title ">
                            Starting its voyage in the year 2000 as a sister concern of Advent Enterprise which was established in 1986, in a humble fashion with only two persons on board, Prionty Edit & Effects today is one of the leading full-service agencies in the country with a particular focus on media buying.</p>
                    </div>
                    <div className="col-lg-6  text-lg-center py-lg-0 py-4 ">
                        <h4 className="text-uppercase" >Want to make something great together?</h4>
                        <h5 className="" >Let’s talk here or email us at</h5>
                        <a className="text-white" href="mailto:Info@duarymedia.com"><h3 className="py-lg-5 py-2 text-white" >Info@duarymedia.com</h3></a>

                        <div className="link d-lg-flex justify-content-center">
                            <a href="HOME"><p className="f-text p-1 " >HOME</p> </a>
                            <a href="HOME"><p className="f-text p-1 " >ABOUT US</p> </a>
                            <a href="HOME"><p className="f-text p-1 " >OUR BUSINESS </p></a>
                            <a href="HOME"><p className="f-text p-1 " >OUR BUSINESS</p></a>
                            <a href="HOME"><p className="f-text p-1 " >SERVICES </p></a>
                            <a href="HOME"><p className="f-text p-1 " >OUR WORK </p></a>
                            <a href="HOME"><p className="f-text p-1 " >BUSINESSWALL </p></a>
                            <a href="HOME"><p className="f-text p-1 " >CONTACT US</p></a>
                            <a href="HOME"><p className="f-text p-1 " >CAREER</p></a>
                        </div>

                    </div>
                    <div className="col  text-white">
                        <h4 className="py-lg-0 py-2 text-uppercase" >CONTACT US</h4>
                        <div className="num">
                            <p>OFFICE LINE</p>
                            <a href="tel:+88-02-8833475-6"><p className="text-white" >+88-02-8833475-6</p></a>
                        </div>
                        <div className="num py-2">
                            <p className="" >FAX</p>
                            <a href="tel:+880-2-9895730"><p className=" text-white" >+880-2-9895730</p></a>
                        </div>
                        <p className="text-uppercase" >House-167/b, flat-3, Road-23,
                            Mohakhali DOHS, Dahaka- 1206</p>
                    </div>
                </div>
                <div className="d-lg-flex justify-content-between ">                <div className="text-center p-2 text-white bg-dark" >
                    &copy; 2021 Copyright:
                    <a className="text-white " href="https://duarymedia.com/" > Duarymedia.com</a>
                </div>

                    <div className="text-center p-2 text-white bg-dark">
                        <a href="" class="me-4 text-white">
                            <i class="fa-brands fa-facebook"></i>
                        </a>
                        <a href="" class="me-4 text-white">
                            <i class="fa-brands fa-youtube"></i>
                        </a>
                        <a href="" class="me-4 text-white">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="" class="me-4 text-white">
                            <i class="fa-brands fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer