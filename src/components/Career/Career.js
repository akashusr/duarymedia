/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'
import '../../App.css'
import career1 from '../../image/career1.png'
import career2 from '../../image/career2.png'
import career3 from '../../image/career3.png'
import './Career.css'
function Career() {
    return (
        <>
            <section>
                <div className="bg-common">
                    <div className="container h-100">
                        <div className="row align-items-center h-100">
                            <div className="col-12 mx-auto">
                                <h1 className=" text-uppercase text-white text-center" >if you read 100 mind per second</h1>
                                <h1 className=" text-uppercase text-white text-center" >we want you</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="light-blue mt">
                    <div className="container">
                        <div className="row py-4 px-4 px-lg-0">
                            <div className="col-md-6 py-4 py-lg-0  ">
                                <div className="w-100 d-flex align-items-center justify-content-center">
                                    <img src={career1} alt="" className="img-fluid customImg " />
                                </div>
                            </div>
                            <div className="col-md-6 d-flex align-items-start">
                                <div>
                                    <h2 className="font-bold text-dark ">SERVICING <br />ACCOUNT EXECUTIVE</h2>
                                    <p className="py-2 py-lg-4 Dwidth">
                                        Ideal candidate should have experience in developing and executing marketing campaigns while managing and inspiring a team.
                                    </p>
                                    <button className=" my-2 my-lg-4  btn btn-dark text-white"> FULL DESCRIPTION </button>
                                    <br />
                                    <button className=" btn btn-dark text-white"> APPLY HERE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row py-4 px-4 px-lg-0">

                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <div>
                                <h2 className=" font-bold text-text-uppercase blue ">Creative Visualizer</h2>
                                <p className="py-2 py-lg-4 Dwidth">
                                    Our ideal candidate will have expert knowledge of current design software and skilled with every step of the design process from concept to the final deliverable.
                                </p>
                                <button className=" my-2 my-lg-4  btn btn-dark text-white"> FULL DESCRIPTION </button>
                                <br />
                                <button className=" btn btn-dark text-white"> APPLY HERE</button>
                            </div>
                        </div>

                        <div className="col-md-6 py-4 py-lg-0 d-flex align-items-center justify-content-center ">
                            <div className="w-100">
                                <img src={career2} alt="" className="img-fluid customImg " />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="light-blue">
                    <div className="container">
                        <div className="row flex-row-reverse py-4 px-4 px-lg-0">
                            <div className="col-md-6 d-flex align-items-start">
                                <div>
                                    <h2 className=" font-bold text-dark ">CREATIVE <br />STRATEGIC PLANNER</h2>
                                    <p className="py-2 py-lg-4 Dwidth">
                                        Strategic planners at WebAble are the foundation of any creative project, and provide the team with information gleaned from studying markets for relevant data.
                                    </p>
                                    <button className=" my-2 my-lg-4  btn btn-dark text-white"> FULL DESCRIPTION </button>
                                    <br />
                                    <button className=" btn btn-dark text-white"> APPLY HERE</button>
                                </div>
                            </div>

                            <div className="col-md-6 py-4 py-lg-0  ">
                                <div className="w-100 d-flex align-items-center justify-content-center">
                                    <img src={career3} alt="" className="img-fluid customImg " />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container py-4">
                <div className="row px-lg-4 ">
                    <div className="col-md-6 d-flex justify-content-start">
                        <div className="p-4" >
                            <h2 className=" font-bold">INTERSTED?</h2>
                            <p className=" pb-3">Fill in the form or just send us an email?</p>

                        </div>
                    </div>
                    <div className="col-md-6 ">
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
                                <label>Subject</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
                            </div>


                            <div className="form-group">
                                <label>Your message (optional) </label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className="form-group">
                                <label>Submit cv/resume</label>
                                <input type="file" className="form-control" id="exampleFormControlInput1" placeholder="" />
                            </div>
                            <div className="form-group py-2 ">
                                <button type="submit" className="btn px-4 text-white py-2 bg-blue">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Career