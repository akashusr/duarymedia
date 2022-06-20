import React from 'react';
import { Link } from 'react-router-dom';
// import "swiper/css";
import client from '../../image/client.png';
import home1 from '../../image/home1.png';
import './Home.css';
import HomeCarosel from './HomeCarosel';
function Home() {
    return (
        <>
            <div className="bg-common">
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                        <div className="col-md-12 p-3 mx-auto">
                            <p className=" text-white text-center" >Duary Media started it’s jounery from early 2022</p>
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
                                    Starting its voyage in the year 2000 as a sister concern of Advent Enterprise which was established in 1986, in a humble fashion with only two persons on board, Prionty Edit & Effects today is one of the leading full-service agencies in the country with a particular focus on media buying. Its insightful outputs had the core factor behind the success of a number of campaigns for a set of diverse brands in Bangladesh. No wonder, Prionty became a veritable dark horse in the Bangladesh communication industry after being awarded for its commendable success in different areas of its operation.
                                </p>
                                <Link to="/about" >
                                    <button className=" my-2 my-lg-4  btn btn-primary text-white"> About Us </button>
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

            <div className="container h-100">
                <div className="row py-3 align-items-center h-100">
                    <div className="col-md-12 p-3 mx-auto">
                        <h4 className=" text-black text-center" >SOME OF OUR</h4>
                        <h1 className=" text-black font-bold text-center" >VALUABLE CLIENTS </h1>
                        <p className="text-black text-center" >With our always on communications we help client solve business
                            problems by fusing creativity, innovation, strategy and craft.
                        </p>
                    </div>
                </div>
            </div>
            <img className='img-fluid' src={client} alt="" />

        </>
    )
}



export default Home