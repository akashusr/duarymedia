import React from 'react';
import './Contact.css'
function Contact() {
    return (
        <>
            <section className="contact-bg" >
                <div className="container overflow-hidden p-4 d-flex justify-content-center align-center ">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29213.342075426615!2d90.36168923052763!3d23.75922436342573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b942f7b533e3%3A0x62732791e9976ce!2sDuary%20Media%20Limited!5e0!3m2!1sen!2sbd!4v1650990309314!5m2!1sen!2sbd"
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
            <section className="container">
                <div className="row px-lg-4 flex-row-reverse ">
                    <div className="col-md-6 d-flex justify-content-center">
                        <div className="py-4" >
                            <h2 className=" pb-3">ADDRESS</h2>
                            <div className="d-flex  align-items-center">
                                <p><i className="fa-solid fa-square-phone"></i></p>
                                <div className="px-4">
                                    <p>+88-02-8833475</p>
                                    <p>+88-02-8833476</p>
                                </div>
                            </div>
                            <div className="d-flex py-4 align-items-center">
                                <p><i className="fa-solid fa-square-phone"></i></p>
                                <div className="px-4">
                                    <p>+88-02-8833475</p>
                                    <p>+88-02-8833476</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <p><i className="fa-solid fa-location-dot"></i></p>
                                <div className="px-4">
                                    <p>House-167/B, Flat-3, Road-23</p>
                                    <p>Mohakhali DOHS, Dhaka- 1206</p>
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