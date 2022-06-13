import React from 'react'
import aboutImg from '../../image/aboutus.png'
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
                            <p>Starting its voyage in the year 2000 as a sister concern of Advent Enterprise which was established in 1986, in a humble fashion with only two persons on board, Prionty Edit & Effects today is one of the leading full-service agencies in the country with a particular focus on media buying. Its insightful outputs had the core factor behind the success of a number of campaigns for a set of diverse brands in Bangladesh. No wonder, Prionty became a veritable dark horse in the Bangladesh communication industry after being awarded for its commendable success in different areas of its operation.</p>
                            <br />
                            <p>Infrastructural, Prionty has all the components client service, research, creative, media (including cinema, outdoor and other non-conventional media), event management, production and administration & finance that a full-service advertising agency could have. In addition, it has a multimedia division that includes functions like film production and video editing.The team consists of a unique blend of the calm wisdom of the veteran and the enthusiasm of the youth.</p>
                        </div>
                    </div>
                </div>

                <div className="title py-4  w-75 m-auto ">
                    <h2 className=" text-center blue " >Message from CEO</h2>
                    <hr className="w-25 m-auto " />
                </div>
                <div className="row p-4 ">
                    <div className="col-md-6 ">
                        <div className="d-flex justify-content-center">
                            <img src={ceo} alt="" className="img-fluid mb-4 w-75" />
                        </div>
                        <h4 className="blue text-center" >Akash (Akash Ahmed)</h4>
                        <p className="text-center" >CEO & Proprietor</p>
                    </div>
                    <div className="col-md-6 d-flex align-items-start">
                        <div>
                            <p>Through a dynamic and visionary leadership and his inherent inspiring personality, Mr Pathan has given a new dimension in the field of media marketing. He has broken the traditional media-marketing theme and added innovative ideas, which has made him one of the most successful personalities in the media arena in Bangladesh and an idol to the newcomers.
                            </p>
                            <br />
                            <p>After completion his study from Dhaka University he started Advertising Business in 1986 under the name of Advent Enterprise with office located at 53 Motijheel Commercial Area, and shifted to 60/D Purana Paltan in 2000. He diversified into media buying and production unit under the name and title Prionty Edit & Effects in the same year at the same premises.
                            </p>
                            <br />
                            <p>Presently the office is located at the third floor of House 48, Road 11, Block C, Banani, Dhaka 1213. The owned premise is equipped with all the related facilities for production, pre-production and expertise manpower for full-fledged support to the clients in it’s e very wings.</p>
                        </div>
                    </div>

                </div>
            </section>
        </section>
    )
}

export default Aboutus