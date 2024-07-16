import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ReviewSlides = () => {
  return (
    <>
      <h1 className="text-2xl my-8 font-bold">
        What people loved about this freelancer
      </h1>

      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
      >
        <SwiperSlide>
          <div className="border-[1px] border-gray-dark rounded-md p-2 flex gap-4">
            <img src="dp.jpeg" className="h-10 w-10 rounded-full " alt="" />
            <div className="flex flex-col">
              <div className="flex gap-4">
                <span className="text-md font-bold ">james</span>
                <span className="font-medium border-gray-dark ">india</span>
                <span>
                  <i class="ri-star-s-fill "></i>5
                </span>
              </div>
              <p className="text-gray-dark font-medium my-2">
                "Working with Techweav was absolutely worth the cost. He
                exceeded all expectations that I had for my website, and not to
                mention building a fully-functional website, also built multiple
                additional its on the site to enhance the user experience by
                far."
              </p>
              <h6 className="text-gray-dark text-sm font-medium">
                2 weeks ago
              </h6>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border-[1px] border-gray-dark rounded-md p-2 flex gap-4">
            <img src="dp.jpeg" className="h-10 w-10 rounded-full " alt="" />
            <div className="flex flex-col">
              <div className="flex gap-4">
                <span className="text-md font-bold ">james</span>
                <span className="font-medium border-gray-dark ">india</span>
                <span>
                  <i class="ri-star-s-fill "></i>5
                </span>
              </div>
              <p className="text-gray-dark font-medium my-2">
                "Working with Techweav was absolutely worth the cost. He
                exceeded all expectations that I had for my website, and not to
                mention building a fully-functional website, also built multiple
                additional its on the site to enhance the user experience by
                far."
              </p>
              <h6 className="text-gray-dark text-sm font-medium">
                2 weeks ago
              </h6>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ReviewSlides;
