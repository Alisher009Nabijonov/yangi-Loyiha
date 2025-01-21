import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import { cards } from "../Malumotlar";

const informations = ({ t, setLanguage, headleAdd}) => {
  const { id } = useParams();

  const product = cards.find((pro) => pro.id == id);

  if (!product) {
    return <p>object not faund</p>;
  }
  return (
    <div className="informativ">
      <div className="information_tepa">
        <h1>Product Details</h1>
        <div className="information_tepa_link">
          <NavLink to="/home">Home. </NavLink>
          <NavLink to="/pages">Pages </NavLink>
          <span>Product Details</span>
        </div>
      </div>
      <div className="information">
        <div className="information-left">
          <div className="gallery">
            {product.Imgs.map((item, id) => (
              <div className={id === 3 ? "main-image" : "thumbnail"} key={id}>
                <img src={item} alt={`Thumbnail ${id}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="information_right">
          <h1>{product.title}</h1>
          <div className="information_icon_right">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <p>(22)</p>
          </div>
          <div className="information_cost_right">
            <h2>${product.cost}.00</h2>
            <del>${product.cost1}.00 </del>
          </div>
          <h2 className="color">Color</h2>
          <p className="color_p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            tellus porttitor purus, et volutpat sit.
          </p>
          <button className="information_btn1" onClick={() => headleAdd(item)}>Add To cart <CiHeart/></button>
          <h2 className="catigoriy_info">Categories:</h2>
          <h2 className="catigoriy_info">Tags</h2>
          <h2 className="catigoriy_info">Share</h2>
        </div>
      </div>
      
       <div className="informaton_navlink">
        <div className="nav_link_link">
          <NavLink to='description'>{t("info1")}</NavLink>
          <NavLink to='info'>{t("info2")}</NavLink>
          <NavLink to='reviews'>{t("info3")}</NavLink>
          <NavLink to='video'>{t("info4")}</NavLink>
        </div>
       </div>
    <Outlet/>
    </div>
  );
};

export default informations;
