import React from 'react'
import { Link } from 'react-router-dom'
function HomeCarosel() {
    return (
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <div className=" card bg-light border-0 h-100">
                        <div className=" mx-auto w-75 card-body text-center p-5">
                            <i className=" py-2 px-3 bg-danger text-white rounded fa-solid fa-sun-plant-wilt"></i>
                            <h1 className="fs-5 pt-4 pb-2 fw-bold text-uppercaseppercase">Strategic Planning</h1>
                            <p className="pb-2 text-center ">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Porro iusto, enim repellat ducimus quo rerum?</p>

                            <Link to="/services" >
                                <button className=" my-2 my-lg-4  btn btn-danger text-white"> Learn More </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="carousel-item" data-bs-interval="2000">
                    <div className="d-block w-100 mx-auto w-75 card-body text-center p-5">
                        <i className=" py-2 px-3 bg-danger text-white rounded fa-solid fa-desktop"></i>
                        <h1 className="fs-5 pt-4 pb-2 fw-bold text-uppercase">Media Buying</h1>
                        <p className="pb-2 text-center ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro iusto, <br /> enim repellat ducimus quo rerum?</p>
                        <Link to="/services" >
                            <button className=" my-2 my-lg-4  btn btn-danger text-white"> Learn More </button>
                        </Link>
                    </div>
                </div>

                <div className="carousel-item">
                    <div className=" mx-auto w-75 card-body text-center p-5">
                        <i className=" py-2 px-3 bg-danger text-white rounded fa-solid fa-object-group"></i>
                        <h1 className="fs-5 pt-4 pb-2 fw-bold text-uppercase">Creative & Design</h1>
                        <p className="pb-2 text-center ">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Porro iusto, enim repellat ducimus quo rerum?</p>
                        <Link to="/services" >
                            <button className=" my-2 my-lg-4  btn btn-danger text-white"> Learn More </button>
                        </Link>
                    </div>
                </div>

                <div className="carousel-item">
                    <div className=" mx-auto w-75 card-body text-center p-5">
                        <i className=" py-2 px-3 bg-danger text-white rounded fa-solid fa-rocket"></i>
                        <h1 className="fs-5 pt-4 pb-2 fw-bold text-uppercase">Audiovisual Production</h1>
                        <p className="pb-2 text-center ">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Porro iusto, enim repellat ducimus quo rerum?</p>
                        <Link to="/services" >
                            <button className=" my-2 my-lg-4  btn btn-danger text-white"> Learn More </button>
                        </Link>
                    </div>
                </div>

                <div className="carousel-item">
                    <div className=" mx-auto w-75 card-body text-center p-5">
                        <i className=" py-2 px-3 bg-danger text-white rounded fa-brands icon-size fa-digital-ocean"></i>
                        <h1 className="fs-5 pt-4 pb-2 fw-bold text-uppercase">Digital Marketing</h1>
                        <p className="pb-2 text-center ">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Porro iusto, enim repellat ducimus quo rerum?</p>
                        <Link to="/services" >
                            <button className=" my-2 my-lg-4  btn btn-danger text-white"> Learn More </button>
                        </Link>
                    </div>
                </div>

                <div className="carousel-item">
                    <div className=" mx-auto w-75 card-body text-center p-5">
                        <i className=" py-2 px-3 bg-danger text-white rounded fa-solid fa-calendar-days"></i>
                        <h1 className="fs-5 pt-4 pb-2 fw-bold text-uppercase">Event Managment</h1>
                        <p className="pb-2 text-center ">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Porro iusto, enim repellat ducimus quo rerum?</p>
                        <Link to="/services" >
                            <button className=" my-2 my-lg-4  btn btn-danger text-white"> Learn More </button>
                        </Link>
                    </div>
                </div>

                <div className="carousel-item">
                    <div className=" mx-auto w-75 card-body text-center p-5">
                        <i className=" py-2 px-3 bg-danger text-white rounded fa-solid fa-code"></i>
                        <h1 className="fs-5 pt-4 pb-2 fw-bold text-uppercase">Web Development</h1>
                        <p className="pb-2 text-center ">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Porro iusto, enim repellat ducimus quo rerum?</p>
                        <Link to="/services" >
                            <button className=" my-2 my-lg-4  btn btn-danger text-white"> Learn More </button>
                        </Link>
                    </div>
                </div>

                <div className="carousel-item">
                    <div className=" mx-auto w-75 card-body text-center p-5">
                        <i className=" py-2 px-3 bg-danger text-white rounded fa-solid fa-heart"></i>
                        <h1 className="fs-5 pt-4 pb-2 fw-bold text-uppercase">public relation</h1>
                        <p className="pb-2 text-center ">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Porro iusto, enim repellat ducimus quo rerum?</p>
                        <Link to="/services" >
                            <button className=" my-2 my-lg-4  btn btn-danger text-white"> Learn More </button>
                        </Link>
                    </div>
                </div>

                <div className="carousel-item">
                    <div className=" mx-auto w-75 card-body text-center p-5">
                        <i className=" py-2 px-3 bg-danger text-white rounded fa-brands icon-size fa-watchman-monitoring"></i>
                        <h1 className="fs-5 pt-4 pb-2 fw-bold text-uppercase">Monitoring</h1>
                        <p className="pb-2 text-center ">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Porro iusto, enim repellat ducimus quo rerum?</p>
                        <Link to="/services" >
                            <button className=" my-2 my-lg-4  btn btn-danger text-white"> Learn More </button>
                        </Link>
                    </div>
                </div>


            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon bg-danger rounded" aria-hidden="true"></span>
                <span className="visually-hidden text-danger">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon bg-danger rounded " aria-hidden="true"></span>
                <span className="visually-hidden ">Next</span>
            </button>
        </div>
    )
}

export default HomeCarosel