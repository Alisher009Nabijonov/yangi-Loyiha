import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";
import Order1 from "../assets/order1.png";
import Order2 from "../assets/order2.png";
const Order = ({ t, setLanguage }) => {
  return (
    <div className="oreder">
      <div className="order_tepa">
        <div className="order_tepa_main">
          <h1>{t("order1")}</h1>
          <div className="order_link">
            <NavLink to="/home">home.</NavLink>
            <NavLink to="/pages">pages.</NavLink>
            <p>{t("order1")}</p>
          </div>
        </div>
      </div>
      <div className="order_main">
          <div className="order_img1">
            <img src={Order1} alt="" />
          </div>
        <div className="order_main1">

          <div className="order_text">
            <FaCheck />
            <h1>{t("order2")}</h1>
            <p>{t("order3")}</p>
            <button>{t("order4")}</button>
          </div>

        </div>
          <div className="order_img2">
            <img src={Order2} alt="" />
          </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Order;
