import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import About1 from "../assets/34.png";
import About2 from "../assets/35.png";
import About3 from "../assets/36.png";
import About4 from "../assets/37.png";
import About5 from "../assets/38.png";

import About6 from "../assets/39.png";
import About7 from "../assets/40.png";
import About8 from "../assets/41.png";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";


const About = ({ t, setLanguage }) => {

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  return (
    <div className="about">
      <div className="shop_title1">
        <div className="shop_title2">
          <h1 className="title_h11">{t("about1")}</h1>
          <NavLink to="/">home.</NavLink>
          <NavLink to="/pages">Pages.</NavLink>
          <span className="title_span">{t("about1")}</span>
        </div>
      </div>
      <div className="about_main">
        <div className="about_card">
          <div className="about_left">
            <img src={About1} alt="" />
          </div>
          <div className="about_right">
            <h1>{t("about2")}</h1>
            <p>{t("about3")}</p>
            <button>{t("about4")}</button>
          </div>
        </div>

        <div className="about_our">
          <h1>{t("about5")}</h1>
          <div className="our_cards">
            <div className="our_card">
              <img src={About2} alt="" />
              <h2>{t("about6")}</h2>
              <p>{t("about10")}</p>
            </div>
            <div className="our_card">
              <img src={About3} alt="" />
              <h2>{t("about7")}</h2>
              <p>{t("about10")}</p>
            </div>
            <div className="our_card">
              <img src={About4} alt="" />
              <h2>{t("about8")}</h2>
              <p>{t("about10")}</p>
            </div>
            <div className="our_card">
              <img src={About5} alt="" />
              <h2>{t("about9")}</h2>
              <p>{t("about10")}</p>
            </div>
          </div>
        </div>
        <Swiper
          pagination={pagination}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="about_carusel">
              <h1>{t("about111")}!</h1>
              <div className="carusel_img">
                <img className="carusel_img_img1" src={About6} alt="" />
                <img className="carusel_img_img2" src={About7} alt="" />
                <img className="carusel_img_img3" src={About8} alt="" />
              </div>
              <h2>{t("about11")}</h2>
              <p>{t("about12")}</p>
              <p>{t("about13")}</p>
              <div className="chiziqlar">
                <div className="chiziq1"></div>
                <div className="chiziq2"></div>
                <div className="chiziq3"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="about_carusel">
              <h1>{t("about111")}!</h1>
              <div className="carusel_img">
                <img className="carusel_img_img4" src={About6} alt="" />
                <img className="carusel_img_img5" src={About7} alt="" />
                <img className="carusel_img_img6" src={About8} alt="" />
              </div>
              <h2>{t("about11")}</h2>
              <p>{t("about12")}</p>
              <p>{t("about13")}</p>
              <div className="chiziqlar">
                <div className="chiziq4"></div>
                <div className="chiziq5"></div>
                <div className="chiziq6"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="about_carusel">
              <h1>{t("about111")}!</h1>
              <div className="carusel_img">
                <img className="carusel_img_img7" src={About6} alt="" />
                <img className="carusel_img_img8" src={About7} alt="" />
                <img className="carusel_img_img9" src={About8} alt="" />
              </div>
              <h2>{t("about11")}</h2>
              <p>{t("about12")}</p>
              <p>{t("about13")}</p>
              <div className="chiziqlar">
                <div className="chiziq7"></div>
                <div className="chiziq8"></div>
                <div className="chiziq9"></div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <Outlet />
      </div>
    </div>
  );
};

export default About;
