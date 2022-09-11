import React from "react";
import "./visitorExp.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import VisitorExpSlider from "./visitorExpSlider";
import { visitorExpData } from "../../helpers/data/visitorExpData.js";

const VisitorExpression = () => {
  return (
    <div className="visitorExp-wrapper">
      <div className="container ">
        <div className="title text-center">What Other Visitors Experienced</div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="visitorExp-slider-container "
      >
        {visitorExpData.map((data, index) => (
          <SwiperSlide key={index} className="swiper-slider">
            <VisitorExpSlider
              image1={data.image1}
              image2={data.image2}
              title={data.title}
              para1={data.para1}
              starValue={data.starValue}
              name={data.name}
              countryName={data.countryName}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VisitorExpression;
