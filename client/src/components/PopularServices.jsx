import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const services = [
  {
    id: 1,
    title: "Web Developer",
    img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156479/voice-over.png",
  },
  {
    id: 2,
    title: "Web Developer",
    img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156479/voice-over.png",
  },
  {
    id: 3,
    title: "Web Developer",
    img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156479/voice-over.png",
  },
  {
    id: 4,
    title: "Web Developer",
    img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156479/voice-over.png",
  },
  {
    id: 5,
    title: "Web Developer",
    img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156479/voice-over.png",
  },
  {
    id: 6,
    title: "Web Developer",
    img: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156479/voice-over.png",
  },
];

const PopularServices = () => {
  return (
    <>
      <div className=" m-8">
        <Swiper
        pagination={{ clickable: true }}
          slidesPerView={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {services.map((service) => {
            return (
              <SwiperSlide>
                <div
                  key={service.id}
                  className="bg-gray-dark rounded-lg flex flex-col justify-around p-2 pl-2 w-fit"
                >
                  <h4 className="text-white text-xl font-semibold my-8">
                    {service.title}
                  </h4>
                  <img src={service.img} className="w-48 h-40" alt="" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default PopularServices;
