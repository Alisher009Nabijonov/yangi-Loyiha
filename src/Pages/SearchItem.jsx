import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaSearchPlus } from "react-icons/fa";
// import {Cards} from '../Malumotlar'
const SearchItem = ({ cards, headleAdd }) => {
  return (
    <div className="home_cards_shop11">
      {cards.map((item) => (
        <div key={item.id} className="shop_card_main">
          <img src={item.img} alt={item.title} className="cardDivImg" />
          <div className="shop_icon">
            <div>
              <FaShoppingCart onClick={() => headleAdd(item)} />
            </div>
            <div
              onClick={() => handleHeartClick(item.id)}
              style={{
                cursor: "pointer",
                color: likedCards.includes(item.id) ? "red" : "black",
                fontSize: "24px",
                transition: "color 0.3s ease-in-out",
              }}
            >
              <FaHeart />
            </div>
            <div>
              <NavLink to={`/informations/${item.id}`}>
                <FaSearchPlus />
              </NavLink>
            </div>
          </div>
          <h2>{item.title}</h2>
          <div className="home_color">
            <div className="home_color1"></div>
            <div className="home_color2"></div>
            <div className="home_color3"></div>
          </div>
          <div className="card_cost">
            <p>${item.cost}.00</p>
            <del>${item.cost1}.00</del>
            <Outlet/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchItem;
