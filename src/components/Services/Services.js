import React from 'react';
import '../../App.css'
import serviceimg1 from '../../image/serviceimg1.png'
import serviceimg2 from '../../image/serviceimg2.png'
import serviceimg3 from '../../image/serviceimg3.png'
import serviceimg4 from '../../image/serviceimg4.png'
import serviceimg5 from '../../image/serviceimg5.png'
import serviceimg6 from '../../image/serviceimg6.png'
import serviceimg7 from '../../image/serviceimg7.png'
import serviceimg8 from '../../image/serviceimg8.png'
import serviceimg9 from '../../image/serviceimg9.png'
import './Services.css'

function Services() {
    return (
        <div>
            <section>
                <div className="bg-common">
                    <div className="container h-100">
                        <div className="row align-items-center h-100">
                            <div className="col-12 mx-auto">
                                <h2 className=" text-center text-uppercase text-white " >if you read 100 mind per second</h2>
                                <h2 className=" text-center text-uppercase text-white " >we want you</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" p-5">
                    <div className="container w-lg-75 overflow-hidden">
                        <div className="row gy-3">
                            <div className="col-md-6 col-lg-4 col-sm-6">
                                <a href="#strategic" >
                                    <div className="bg-light d-flex  gap-4 align-items-center p-3 text-uppercase text-blue border ">
                                        <i className="text-blue icon-size rounded fa-solid fa-sun-plant-wilt"></i> <p>1. Strategic Planning</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4 col-sm-6">
                                <a href="#media">
                                    <div className="bg-light d-flex  gap-4 align-items-center p-3 text-uppercase text-blue border ">
                                        <i className="text-blue rounded icon-size fa-solid fa-desktop"></i>
                                        <p>2. Media Buying</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4 col-sm-6">
                                <a href="#creative" >
                                    <div className="bg-light d-flex  gap-4 align-items-center p-3 text-uppercase text-blue border ">
                                        <i className="text-blue rounded icon-size fa-solid fa-object-group"></i>
                                        <p>3. Creative & Design</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4 col-sm-6">
                                <a href="#audiovisual" >
                                    <div className="bg-light d-flex  gap-4 align-items-center p-3 text-uppercase text-blue border ">
                                        <i className="text-blue rounded icon-size fa-solid fa-rocket"></i>
                                        <p>4. Audiovisual Production</p>
                                    </div>
                                </a>

                            </div>
                            <div className="col-md-6 col-lg-4 col-sm-6">
                                <a href="#digital" >
                                    <div className="bg-light d-flex  gap-4 align-items-center p-3 text-uppercase text-blue border ">
                                        <i className="text-blue rounded icon-size fa-brands fa-digital-ocean"></i>
                                        <p>5. Digital Marketing</p>
                                    </div>
                                </a>

                            </div>
                            <div className="col-md-6 col-lg-4 col-sm-6">
                                <a href="#event" >
                                    <div className="bg-light d-flex  gap-4 align-items-center p-3 text-uppercase text-blue border ">
                                        <i className="text-blue rounded icon-size fa-solid fa-calendar-days"></i>
                                        <p>6. Event Management</p>
                                    </div>
                                </a>

                            </div>
                            <div className="col-md-6 col-lg-4 col-sm-6">
                                <a href="#web" >
                                    <div className="bg-light d-flex  gap-4 align-items-center p-3 text-uppercase text-blue border ">
                                        <i className="text-blue rounded icon-size fa-solid fa-code"></i>
                                        <p>7. Web Development</p>
                                    </div>
                                </a>

                            </div>
                            <div className="col-md-6 col-lg-4 col-sm-6">
                                <a href="#pr" >
                                    <div className="bg-light d-flex  gap-4 align-items-center p-3 text-uppercase text-blue border ">
                                        <i className="text-blue rounded icon-size fa-solid fa-heart"></i>
                                        <p>8. pr</p>
                                    </div>
                                </a>

                            </div>
                            <div className="col-md-6 col-lg-4 col-sm-6">
                                <a href="#monitoring" >
                                    <div className="bg-light d-flex  gap-4 align-items-center p-3 text-uppercase text-blue border ">
                                        <i className="text-blue rounded fa-brands icon-size fa-watchman-monitoring"></i>
                                        <p>9. Monitoring</p>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>


                <div id="strategic" className="bg-lightBlue py-4">
                    <div className="container">
                        <div className="row flex-row-reverse p-4 ">
                            <div className="col-md-6 ">
                                <div className="d-flex  justify-content-center">
                                    <img src={serviceimg1} alt="" className="img-fluid img mb-4" />
                                </div>
                            </div>
                            <div className="col-md-6  mr-lg-5">
                                <div className='' >
                                    <h2 className='text-uppercase text-primary mb-4'>1. Strategic Planning</h2>
                                    <p className='py-2' >Strategic planning is a process in which an organization's leaders define their vision for the future and identify their organization's goals and objectives. The process includes establishing the sequence in which those goals should be realized so that the organization can reach its stated vision.he product of strategic planning is a strategic plan. It is often reflected in a plan document or other media. These plans can be easily shared, understood and followed by various people including employees, customers, business partners and investors.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id='media' className="bg-light py-4">
                    <div className="container">
                        <div className="row  p-4 ">
                            <div className="col-md-6 ">
                                <div className="d-flex  justify-content-center">
                                    <img src={serviceimg2} alt="" className="img-fluid img mb-4" />
                                </div>
                            </div>

                            <div className="col-md-6 ">
                                <div>
                                    <h2 className='text-uppercase text-primary mb-4'>2. Media Buying</h2>
                                    <p className='py-2' >This is the Agency’s hard-dealing, street-wise section. The ever-vigilant members of the Media Department are tuned into the latest updates in the local media industry. And their motto is to get our clients the most effective media deals at the most competitive prices. Through its excellent media connections and constant media research, our media department is quick to spot new media opportunities and discern emerging media consumption trends.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div id='creative' className="bg-lightBlue py-4">
                    <div className="container">
                        <div className="row flex-row-reverse p-4 ">
                            <div className="col-md-6 ">
                                <div className="d-flex justify-content-center">
                                    <img src={serviceimg3} alt="" className="img-fluid img mb-4" />
                                </div>
                            </div>
                            <div className="col-md-6 ">
                                <div>
                                    <h2 className='text-uppercase text-primary mb-4'>3. CREATIVE & DESIGN</h2>
                                    <p className='py-2' >The members of this team keep the creative juice flowing through the sinews of the entire agency. At our Creative Department all the creative energy and passion is directed towards the creation of ads that are true to the brand’s strategic positioning and personality.
                                        Intent observers of the drama of human life and emotion, our creative team members thrive on the challenge of crafting ads that spark off the flames of a passionate brand-consumer love story in the minds of the consumers.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id='audiovisual' className="bg-light py-4">
                    <div className="container">
                        <div className="row  p-4 ">

                            <div className="col-md-6 ">
                                <div className="d-flex  justify-content-center">
                                    <img src={serviceimg4} alt="" className="img-fluid img mb-4" />
                                </div>
                            </div>

                            <div className="col-md-6 ">
                                <div>
                                    <h2 className='text-uppercase text-primary mb-4'>4. AUDIOVISUAL PRODUCTION</h2>
                                    <p className='py-2' >This program is intended to produce professionals capable of working in different areas related to the processes of content production for the main audiovisual means, including cinema, television, video and internet. Audiovisual Production Technologists deal with the creation, designing and management of audiovisual projects and operation of image and sound equipment (cameras, lighting, recorders, microphones, editors) in analog or digital environments.</p></div>
                            </div>

                        </div>
                    </div>
                </div>


                <div id='digital' className="bg-lightBlue py-4">
                    <div className="container">
                        <div className="row flex-row-reverse p-4 ">
                            <div className="col-md-6 ">
                                <div className="d-flex  justify-content-center">
                                    <img src={serviceimg5} alt="" className="img-fluid img mb-4" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div>
                                    <h2 className='text-uppercase text-primary mb-4'>5. DIGITAL MARKETING</h2>
                                    <p className='py-2' >Digital marketing is marketing that takes place via Internet-connected devices. Email marketing, content marketing, social media marketing, and many other facets of digital marketing are essential for today’s entrepreneurs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id='event' className="bg-light py-4">
                    <div className="container">
                        <div className="row  p-4 ">

                            <div className="col-md-6 ">
                                <div className="d-flex  justify-content-center">
                                    <img src={serviceimg6} alt="" className="img-fluid img mb-4" />
                                </div>
                            </div>

                            <div className="col-md-6 ">
                                <div>
                                    <h2 className='text-uppercase text-primary mb-4'>6. EVENT MANAGEMENT</h2>
                                    <p className='py-2' >From product launching to contract signing ceremonies, to press conferences to plant tours or any type of event or non-traditional promotions, our experienced and dedicated team along with a support team provides complete worry-free event management that meets the clients’ end promotion objectives. With their quintessential never-say-die attitude, our event management team members have moved the standards in the local event management scene a few notches higher.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div id='web' className="bg-lightBlue py-4">
                    <div className="container">
                        <div className="row flex-row-reverse p-4 ">
                            <div className="col-md-6 ">
                                <div className="d-flex  justify-content-center">
                                    <img src={serviceimg7} alt="" className="img-fluid img mb-4" />
                                </div>
                            </div>
                            <div className="col-md-6 ">
                                <div>
                                    <h2 className='text-uppercase text-primary mb-4'>7. WEB DEVELOPMENT</h2>
                                    <p className='py-2' >Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet a private Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services. A more comprehensive list of tasks to which Web development commonly refers, may include Web engineering, Web design, Web content development, client liaison, client-side/server-side scripting, Web server and network security configuration, and e-commerce development.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id='pr' className="bg-light py-4">
                    <div className="container">
                        <div className="row  p-4 ">

                            <div className="col-md-6 ">
                                <div className="d-flex  justify-content-center">
                                    <img src={serviceimg8} alt="" className="img-fluid img mb-4" />
                                </div>
                            </div>

                            <div className="col-md-6 ">
                                <div>
                                    <h2 className='text-uppercase text-primary mb-4'>8. public relation</h2>
                                    <p className='py-2' >Public relations (PR) is the practice of managing and disseminating information from an individual or an organization such as a business, government agency, or a nonprofit organization to the public in order to affect their public perception. Public relations (PR) and publicity differ in that PR is controlled internally, whereas publicity is not controlled and contributed by external parties. Public relations may include an organization or individual gaining exposure to their audiences using topics of public interest and news items that do not require direct payment. The exposure mostly is media-based. This differentiates it from advertising as a form of marketing communications. Public relations aims to create or obtain coverage for clients for free, also known as earned media, rather than paying for marketing or advertising also known as paid media. But in the early 21st century, advertising is also a part of broader PR activities.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div id='monitoring' className="bg-lightBlue py-4">
                    <div className="container">
                        <div className="row flex-row-reverse p-4 ">
                            <div className="col-md-6 ">
                                <div className="d-flex  justify-content-center">
                                    <img src={serviceimg9} alt="" className="img-fluid img mb-4" />
                                </div>
                            </div>
                            <div className="col-md-6 ">
                                <div>
                                    <h2 id='ser' className='text-uppercase text-primary mb-4'>9. MONITORING</h2>
                                    <p className='py-2' >Monitoring is the systematic process of collecting, analyzing and using information to track a programmer's progress toward reaching its objectives and to guide management decisions. Monitoring usually focuses on processes, such as when and where activities occur, who delivers them and how many people or entities they reach.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </section>
        </div>
    )
}

export default Services