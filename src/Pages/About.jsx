import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

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

const About = ({ t }) => {
  const [activeSlide, setActiveSlide] = useState(1);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
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
            <NavLink to="/cantactus">
              <button>{t("about4")}</button>
            </NavLink>
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

        <div className="about_carusel">
          <h1>{t("about111")}!</h1>
          <div className="carusel_img">
            <img
              onClick={() => handleSlideChange(0)}
              className={`carusel_img_img1 ${
                activeSlide === 0 ? "active" : "inactive"
              }`}
              src={About6}
              alt=""
            />
            <img
              onClick={() => handleSlideChange(1)}
              className={`carusel_img_img2 ${
                activeSlide === 1 ? "active" : "inactive"
              }`}
              src={About7}
              alt=""
            />
            <img
              onClick={() => handleSlideChange(2)}
              className={`carusel_img_img3 ${
                activeSlide === 2 ? "active" : "inactive"
              }`}
              src={About8}
              alt=""
            />
          </div>
          <h2>
            {activeSlide === 0
              ? t("about12")
              : activeSlide === 1
              ? t("about11")
              : t("about12")}
          </h2>
          <p>
            {activeSlide === 0
              ? t("about13")
              : activeSlide === 1
              ? t("about13")
              : t("about13")}
          </p>
          <div className="chiziqlar">
            <div
              className={`chiziq ${activeSlide === 0 ? "active" : ""}`}
              onClick={() => handleSlideChange(0)}
            ></div>
            <div
              className={`chiziq ${activeSlide === 1 ? "active" : ""}`}
              onClick={() => handleSlideChange(1)}
            ></div>
            <div
              className={`chiziq ${activeSlide === 2 ? "active" : ""}`}
              onClick={() => handleSlideChange(2)}
            ></div>
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default About;
