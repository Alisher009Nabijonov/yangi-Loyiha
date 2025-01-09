import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import HomeImg1 from '../assets/2.png'
import { Pagination } from 'swiper/modules';

export default function App() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + '</span>';
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="banner">
           
            <div className="banner_center">
              <h3>Best Furniture For Your Castle....</h3>
              <h1>New Furniture Collection
                Trends in 2020</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                in phasellus non in justo.</p>
              <button>Shop Now</button>
            </div>
            <div className="banner_right">
              <img src={HomeImg1} alt="HOMEIMG1" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner">
          
            <div className="banner_center">
              <h3>Best Furniture For Your Castle....</h3>
              <h1>New Furniture Collection
                Trends in 2020</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                in phasellus non in justo.</p>
              <button>Shop Now</button>
            </div>
            <div className="banner_right">
              <img src={HomeImg1} alt="HOMEIMG1" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner">
      
            <div className="banner_center">
              <h3>Best Furniture For Your Castle....</h3>
              <h1>New Furniture Collection
                Trends in 2020</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                in phasellus non in justo.</p>
              <button>Shop Now</button>
            </div>
            <div className="banner_right">
              {/* <img src={HomeImg1} alt="HOMEIMG1" /> */}
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
