import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { IoIosStar } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";



import { cards } from "../Malumotlar";


const informations = () => {
  const { id } = useParams();

  const product = cards.find((pro) => pro.id == id);

  if (!product) {
    return <p>object not faund</p>;
  }
  return (
    <div className="product-card">
      <div className="images-section">
      {product.Imgs.map((item, id) =>(
            <div className="thumbnail" key={id}>
                <img src={item} alt={item} />
            </div>
        ))}
      </div>
      <div className="main-section">
        <h2>Playwood arm chair</h2>
        <div className="rating">
          <span>⭐⭐⭐⭐⭐</span> <span className="review-count">(22)</span>
        </div>
        <div className="price">
          <span className="current-price">$32.00</span>
          <span className="old-price">$39.00</span>
        </div>
        <div className="color">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>
        </div>
        <button className="add-to-cart">Add To Cart</button>
        <div className="categories">
          <p><strong>Categories:</strong></p>
        </div>
        <div className="tags">
          <p><strong>Tags:</strong></p>
        </div>
        <div className="share">
          <p><strong>Share:</strong></p>
          <div className="icons">
            <span>🔵</span>
            <span>🟣</span>
            <span>🟡</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default informations;
