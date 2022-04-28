/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'
import career1 from '../../image/career1.png'
import './Career.css'
function Career() {
    return (
        <>
            <section>
                <div className="bg">
                    <div className="container h-100">
                        <div className="row align-items-center h-100">
                            <div className="col-12 mx-auto">
                                <h1 className=" uppercase text-white text-center" >if you read 100 mind per second</h1>
                                <h1 className=" uppercase text-white text-center" >we want you</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="light-blue mt">
                    <div className="row p-4 ">
                        <div className="col-md-6 ">
                            <div className="d-flex justify-content-center">
                                <img src={career1} alt="" className="img-fluid mb-4 w-50" />
                            </div>
                        </div>
                        <div className="col-md-6 d-flex align-items-start">
                            <div>
                                <h1>Servicing
                                    Account Executive</h1>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Career