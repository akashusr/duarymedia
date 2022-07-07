import React from 'react';
import './Contact.css'
function Contact() {
    return (
        <>
            <section className="contact-bg" >



                <div className="container overflow-hidden p-4 d-flex justify-content-center align-center ">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1990.7411921439045!2d90.39361496091355!3d23.781741395492748!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c76a3e3252f9%3A0xd100efd864ec3c7a!2zMjPCsDQ2JzU0LjkiTiA5MMKwMjMnNDEuNiJF!5e0!3m2!1sen!2sbd!4v1657199049152!5m2!1sen!2sbd"
                        width="950"
                        height="350"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        aria-hidden="true"
                        tabIndex="0"
                        title="map"

                    />
                </div>
            </section>
            <section className="container py-5 ">
                <div className="row px-lg-4 flex-row-reverse ">
                    <div className="col-md-6 d-flex justify-content-center">
                        <div className="py-4" >
                            <h2 className=" pb-3">ADDRESS</h2>

                            <div className="d-flex py-3 align-items-center">
                                <p><i className="fa-solid fa-square-phone"></i></p>
                                <div className="px-4">
                                    <a href="tel:+880-1746-421248"><p className="text-black" >+880 1746-421248
                                    </p></a>
                                    <a href="tel:+880-1534-945349"><p className="text-black" >+880 1534-945349
                                    </p></a>
                                </div>
                            </div>

                            <div className="d-flex py-4 align-items-center">
                                <p><i className="fa-solid fa-envelope"></i></p>
                                <div className="px-4  ">
                                    <p>duarymedialtd@gmail.com</p>
                                    <p>info@duarymedia.com</p>
                                </div>
                            </div>

                            <div className="d-flex py-2 align-items-center">
                                <p><i className="fa-solid fa-location-dot"></i></p>
                                <div className="px-4">
                                    <p>House#167, Flat-03, Road 23, DOHS Mohakhali, Dhaka 1206</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 ">
                        <div className="p-4">
                            <h2 className="">HELLO!</h2>
                            <p>We’ve been expecting you.Fill in the form or just send us an email</p>
                        </div>
                        <form className="px-4">
                            <div className="form-group">
                                <label >Your Name</label>
                                <input type="name" className="form-control" id="name" placeholder="" />
                            </div>

                            <div className="form-group">
                                <label >Your Email</label>
                                <input type="email" className="form-control" id="email" placeholder="" />
                            </div>

                            <div className="form-group">
                                <label >Your Mobile</label>
                                <input type="tel" className="form-control" id="number" placeholder="" />
                            </div>

                            <div className="form-group">
                                <label>Subject</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
                            </div>


                            <div className="form-group">
                                <label>Your message (optional) </label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className="form-group py-2">
                                <button type="submit" className="btn py-2 px-4 bg-blue text-black hover:text-black">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact