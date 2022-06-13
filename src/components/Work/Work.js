import React from 'react';
import '../../App.css'
import image1 from '../../image/gallery1.png'
import image2 from '../../image/gallery2.png'
import image3 from '../../image/gallery3.png'
import './Work.css'

function Work() {
    return (
        <div>
            <section>
                <div className="bg-common">
                    <div className="container h-100">
                        <div className="row align-items-center h-100">
                            <div className="col-md-12 mx-auto">
                                <h1 className="text-white text-center" >OUR LATEST WORK</h1>
                                <p className="p-4 p-text text-white text-center" >Prionty always look for clients satisfaction by any means. Not everyone looks for the same goal. But we always give our valuable time to make things much more flexible to you. We give proper knowledge to our client so they can feel comfort and we can proceed our mission to accomplish. So please explore us for your ultimate need.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="gallery-container-bg p-5">
                    <h1 className=" text-uppercase pb-4 text-center gray">GALLERY</h1>
                    <div class="container w-lg-75 overflow-hidden">
                        <div class="row gy-3">
                            <div class="col-md-4 col-sm-6">
                                <div class="bg-light">
                                    <img className='img-thumbnail img-bg' src={image1} alt="" />
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <div class="bg-light">
                                    <img className='img-thumbnail img-bg' src={image2} alt="" />
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <div class="bg-light">
                                    <img className='img-thumbnail img-bg' src={image3} alt="" />
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <div class="bg-light">
                                    <img className='img-thumbnail img-bg' src={image1} alt="" />
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <div class="bg-light">
                                    <img className='img-thumbnail img-bg' src={image2} alt="" />
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <div class="bg-light">
                                    <img className='img-thumbnail img-bg' src={image3} alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Work