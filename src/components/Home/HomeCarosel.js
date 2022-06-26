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
                            <p className="pb-2 text-center ">Strategic planning is a process in which an organization's leaders define their <br /> vision for the future and identify their organization's goals and objectives...</p>

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
                        <p className="pb-2 text-center ">This is the Agency’s hard-dealing, street-wise section. The ever-vigilant members <br /> of the Media Department are tuned into the latest updates in the local media industry...</p>
                        <Link to="/services" >
                            <button className=" my-2 my-lg-4  btn btn-danger text-white"> Learn More </button>
                        </Link>
                    </div>
                </div>

                <div className="carousel-item">
                    <div className=" mx-auto w-75 card-body text-center p-5">
                        <i className=" py-2 px-3 bg-danger text-white rounded fa-solid fa-object-group"></i>
                        <h1 className="fs-5 pt-4 pb-2 fw-bold text-uppercase">Creative & Design</h1>
                        <p className="pb-2 text-center ">The members of this team keep the creative juice flowing through the <br /> sinews of the entire agency. At our Creative Department all the creative energy and...</p>
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
                        <p className="pb-2 text-center ">Digital marketing is marketing that takes place via Internet-connected devices. <br /> Email marketing, content marketing, social media marketing, and many other...</p>
                        <Link to="/services" >
                            <button className=" my-2 my-lg-4  btn btn-danger text-white"> Learn More </button>
                        </Link>
                    </div>
                </div>

                <div className="carousel-item">
                    <div className=" mx-auto w-75 card-body text-center p-5">
                        <i className=" py-2 px-3 bg-danger text-white rounded fa-solid fa-calendar-days"></i>
                        <h1 className="fs-5 pt-4 pb-2 fw-bold text-uppercase">Event Managment</h1>
                        <p className="pb-2 text-center ">From product launching to contract signing ceremonies, to press conferences <br /> to plant tours or any type of event or non-traditional promotions, our experienced...</p>
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