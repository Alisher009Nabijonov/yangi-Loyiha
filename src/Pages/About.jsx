import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import About1 from "../assets/34.png";
import About2 from "../assets/35.png";
import About3 from "../assets/36.png";
import About4 from "../assets/37.png";
import About5 from "../assets/38.png";

import About6 from "../assets/39.png";
import About7 from "../assets/40.png";
import About8 from "../assets/41.png";

const About = () => {
  return (
    <div className="about">
      <div className="shop_title1">
        <div className="shop_title2">
          <h1 className="title_h11">Shop Grid Default</h1>
          <NavLink to="/">home.</NavLink>
          <NavLink to="/pages">Pages.</NavLink>
          <span className="title_span">Shop Grid Default</span>
        </div>
      </div>
      <div className="about_main">
        <div className="about_card">
          <div className="about_left">
            <img src={About1} alt="" />
          </div>
          <div className="about_right">
            <h1>Know About Our Ecomerce Business, History</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
              tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
              vitae lobortis quis bibendum quam.
            </p>
            <button>Contact us</button>
          </div>
        </div>

        <div className="about_our">
          <h1>Our Features</h1>
          <div className="our_cards">
            <div className="our_card">
              <img src={About2} alt="" />
              <h2>Free Delivery</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida.
              </p>
            </div>
            <div className="our_card">
              <img src={About3} alt="" />
              <h2>100% Cash Back</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida.
              </p>
            </div>
            <div className="our_card">
              <img src={About4} alt="" />
              <h2>Quality Product</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida.
              </p>
            </div>
            <div className="our_card">
              <img src={About5} alt="" />
              <h2>24/7 Support</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida.
              </p>
            </div>
          </div>
        </div>

        <div className="about_carusel">
          <h1>Our Client Say!</h1>
          <div className="carusel_img">
            <img src={About6} alt="" />
            <img src={About7} alt="" />
            <img src={About8} alt="" />
          </div>
          <h2>Selina Gomez</h2>
          <p>Ceo At Webecy Digital</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis
            ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim
            nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam
            lacus volutpat praesent.
          </p>
          <div className="chiziqlar">
            <div className="chiziq"></div>
            <div className="chiziq"></div>
            <div className="chiziq"></div>
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default About;
