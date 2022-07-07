import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import home1 from '../../image/Office Photo.jpg';
import client1 from '../../image/Client Logo/Client Logo-01.png';
import client2 from '../../image/Client Logo/Client Logo-02.png';
import client3 from '../../image/Client Logo/Client Logo-03.png';
import client4 from '../../image/Client Logo/Client Logo-04.png';
import client5 from '../../image/Client Logo/Client Logo-05.png';
import client6 from '../../image/Client Logo/Client Logo-06.png';
import client7 from '../../image/Client Logo/Client Logo-07.png';
import client8 from '../../image/Client Logo/Client Logo-08.png';
import client9 from '../../image/Client Logo/Client Logo-09.png';
import client10 from '../../image/Client Logo/Client Logo-10.png';
import client11 from '../../image/Client Logo/Client Logo-11.png';
import client12 from '../../image/Client Logo/Client Logo-12.png';
import './Home.css';
import HomeCarosel from './HomeCarosel';
function Home() {
    return (
        <>
            <div className="bg-home">
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                        <div className="col-md-12 p-3 mx-auto">
                            <p className=" text-white text-center" >Duary Media started it’s jounery from early 2006</p>
                            <h1 className=" text-white py-2 font-bold text-center" >CONCEPT | CREATIVE | SOLUTION </h1>
                            <p className="text-white text-center" >Connecting customer with your brand</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container" >
                <HomeCarosel />
            </div>

            <div className="light-blue">
                <div className="container">
                    <div className="row flex-row-reverse py-5 px-4 px-lg-0">
                        <div className="col-md-6 d-flex align-items-start">
                            <div>
                                <h2 className=" font-bold text-dark ">WHO ARE WE</h2>
                                <p className="py-2 py-lg-4 Dwidth">
                                    In the year 2006, Duary Media Ltd Starting it's Journey in This Industry, in a humble fashion with only two persons on board, Duary Media Ltd today is one of the leading full-service agencies in the country with a particular focus on Digital Marketing. Its insightful outputs had the core factor behind the success of a number of campaigns for a set of diverse brands in Bangladesh
                                </p>
                                <Link to="/about" >
                                    <button className=" my-2 my-lg-4  btn btn-outline-primary text-blue fw-bold"> About Us </button>
                                </Link>
                            </div>
                        </div>

                        <div className="col-md-6 py-4 py-lg-0  ">
                            <div className="w-100 d-flex align-items-center justify-content-center">
                                <img src={home1} alt="" className="img-fluid customImg " />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="py-5">
                <div className="container h-100">
                    <div className="row py-3 align-items-center h-100">
                        <div className="col-md-12 p-3 mx-auto">
                            <h4 className=" text-black text-center" >SOME OF OUR</h4>
                            <h1 className=" text-black font-bold text-center" >VALUABLE CLIENTS </h1>
                            <p className="text-black text-center" >With our always on communications we help client solve business <br />
                                problems by fusing creativity, innovation, strategy and craft.
                            </p>
                        </div>
                    </div>
                </div>

                <Marquee>
                    <img src={client1} alt="" className="img-fluid mb-4 c-size bg-light " />
                    <img src={client2} alt="" className="img-fluid mb-4 c-size bg-light " />
                    <img src={client3} alt="" className="img-fluid mb-4 c-size bg-light " />
                    <img src={client4} alt="" className="img-fluid mb-4 c-size bg-light " />
                    <img src={client5} alt="" className="img-fluid mb-4 c-size bg-light " />
                    <img src={client6} alt="" className="img-fluid mb-4 c-size bg-light " />
                    <img src={client7} alt="" className="img-fluid mb-4 c-size bg-light " />
                    <img src={client8} alt="" className="img-fluid mb-4 c-size bg-light " />
                    <img src={client9} alt="" className="img-fluid mb-4 c-size bg-light " />
                    <img src={client10} alt="" className="img-fluid mb-4 c-size bg-light " />
                    <img src={client11} alt="" className="img-fluid mb-4 c-size bg-light " />
                    <img src={client12} alt="" className="img-fluid mb-4 c-size bg-light " />
                </Marquee>
            </section>
        </>
    )
}



export default Home