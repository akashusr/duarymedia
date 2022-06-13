// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Home.css";

// import required modules
import { Navigation, Pagination } from "swiper";

export default function Slider() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className=" card bg-light border-0 h-100">
                        <div className=" mx-auto w-75 card-body text-center p-5">
                            <i className=" py-2 px-3 bg-danger text-white rounded fa-solid fa-share-nodes"></i>
                            <h1 className="fs-5 pt-4 pb-2 fw-bold">SOCIAL MEDIA MARKETING</h1>
                            <p className="pb-2 text-center ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro iusto, enim repellat ducimus quo rerum?</p>
                            <button className="btn btn-red text-white" > Learn More</button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className=" card bg-light border-0 h-100">
                        <div className=" mx-auto w-75 card-body text-center p-5">
                            <i className=" py-2 px-3 bg-danger text-white rounded fa-solid fa-circle-video"></i>
                            <h1 className="fs-5 pt-4 pb-2 fw-bold">SOCIAL MEDIA MARKETING</h1>
                            <p className="pb-2 text-center ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro iusto, enim repellat ducimus quo rerum?</p>
                            <button className="btn btn-red text-white" > Learn More</button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className=" card bg-light border-0 h-100">
                        <div className=" mx-auto w-75 card-body text-center p-5">
                            <i className=" py-2 px-3 bg-danger text-white rounded fa-solid fa-desktop"></i>
                            <h1 className="fs-5 pt-4 pb-2 fw-bold">SOCIAL MEDIA MARKETING</h1>
                            <p className="pb-2 text-center ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro iusto, enim repellat ducimus quo rerum?</p>
                            <button className="btn btn-red text-white" > Learn More</button>
                        </div>
                    </div>
                </SwiperSlide>





            </Swiper>
        </>
    );
}

