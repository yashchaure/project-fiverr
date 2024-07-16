import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ReviewSlides from "../components/ReviewSlides";

const GigPage = () => {
  return (
    <div className="mt-32 mx-8 flex">
      <div className="w-[60%]">
        <h1 className="text-3xl font-bold my-8">
          I will design, redesign shopify store, shopify dropshipping store,
          shopify website
        </h1>
        <div className="h-24 flex items-center">
          <img src="dp.jpeg" alt="" className="w-16 h-16 rounded-full" />
          <div className="flex flex-col ml-4">
            <div>
              <span className="text-xl font-semibold">Teachweav</span>
              <span className="border-l-2 border-gray-dark ml-4 px-4">
                level 2
              </span>
            </div>
            <div>
              <span className="text-md">
                <i class="ri-star-fill"></i> 4.9(132)
              </span>
              <span className="border-l-2 border-gray-dark ml-4 px-4">
                63 orders in queue
              </span>
            </div>
          </div>
        </div>
        <div className="swiper my-8 bg-green-dark">
          <Swiper
            navigation
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="w-full h-[500px] overflow-hidden">
                <img
                  className="bg-cover bg-center hover:scale-105 w-full"
                  src="dp.jpeg"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[500px] overflow-hidden">
                <img
                  className="bg-cover bg-center hover:scale-105 w-full"
                  src="dp.jpeg"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[500px] overflow-hidden">
                <img
                  className="bg-cover bg-center hover:scale-105 w-full"
                  src="dp.jpeg"
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        
        <ReviewSlides/>

        <div className="aboutGig my-16">
          <h3 className="text-2xl my-4 font-bold ">About this gig</h3>
          <p className="my-4">
            I am a professional Shopify designer with years of experience. I
            specialize in design redesign, custom, responsive, visually
            stunning, high-converting Shopify dropshipping stores / websites
            that are tailored to your specific business needs and generate
            significant revenue.
          </p>
        </div>
      </div>

      <div className="w-[40%]"></div>
    </div>
  );
};

export default GigPage;
