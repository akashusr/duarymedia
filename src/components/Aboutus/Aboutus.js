import React from 'react';
import aboutImg from '../../image/aboutus.jpeg'
import ceo from '../../image/ceo.jpg'
import './Aboutus.css'
function Aboutus() {
    return (
        <section className="" >
            <section className="container " >
                <div className="title py-4  w-75 m-auto ">
                    <h2 className=" text-center blue " >What Duary Does</h2>
                    <hr className="w-25 m-auto " />
                </div>

                <div className="row flex-row-reverse p-4 ">
                    <div className="col-md-6 ">
                        <div className="d-flex  justify-content-center">
                            <img src={aboutImg} alt="" className="img-fluid mb-4" />
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <div>
                            <p>In the year 2006, Duary Media Ltd Starting it's Journey in This Industry, in a humble fashion with only two persons on board, Duary Media Ltd today is one of the leading full-service agencies in the country with a particular focus on Digital Marketing. Its insightful outputs had the core factor behind the success of a number of campaigns for a set of diverse brands in Bangladesh.</p>
                            <br />
                            <p>Infrastructural, Prionty has all the components client service, research, creative, media (including cinema, outdoor and other non-conventional media), event management, production and administration & finance that a full-service advertising agency could have. In addition, it has a multimedia division that includes functions like film production and video editing.The team consists of a unique blend of the calm wisdom of the veteran and the enthusiasm of the youth.</p>
                        </div>
                    </div>
                </div>

                <div className="title py-4  w-75 m-auto ">
                    <h2 className=" text-center blue " >Message from MD</h2>
                    <hr className="w-25 m-auto " />
                </div>
                <div className="row p-4 ">
                    <div className="col-md-6 ">
                        <div className="d-flex justify-content-center">
                            <img src={ceo} alt="" className="img-fluid mb-4 w-75" />
                        </div>
                        <h4 className="blue text-center" >Sabiha Akhter Tora
                        </h4>
                        <p className="text-center" >Managing Director</p>
                    </div>
                    <div className="col-md-6 d-flex align-items-start">
                        <div>
                            <p>Through a Dynamic and Visionary Leadership and his Inherent inspiring personality, Mis. Sabiha Akhter Tora has given a new Dimension in the field of media marketing. She has Broken the traditional media-marketing theme and added him one of the most successful personality in the media arena in Bangladesh an idol to the Newcomers.
                            </p>
                            <br />
                            <p>After completing his study in Rajshahi University she started Construction Business under the name of Anik Construction ltd in 2000 with office located at Moghbazar Commercial Area. In 2006 She started Advertising Agency under the name of Duary Media ltd. Presently the office located at the third floor of House#167, Flat-03, Road 23,DOHS Mohakhali, Dhaka 1206.The all related  facilities for production, pre-production and expertise manpower for full fledged support to the clients in its every wings.
                            </p>
                            <br />
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Aboutus