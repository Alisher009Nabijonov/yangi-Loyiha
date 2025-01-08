import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaBarsProgress } from "react-icons/fa6";
import { AiOutlineBars } from "react-icons/ai";
import { FaShoppingCart, FaHeart, FaSearchPlus } from "react-icons/fa";
import Ohir1 from "../assets/15.png";

import { cards } from "../Malumotlar"; // Import qilish

function Shop1({ headleAdd }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [likedCards, setLikedCards] = useState([]);
  const [filter, setFilter] = useState("all");

  const handleHeartClick = (id) => {
    setLikedCards((prev) =>
      prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
    );
  };

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
  };

  const getFilteredCards = () => {
    let filteredCards = cards.filter((card) =>
      card.title.toLowerCase().includes(searchTerm)
    );

    if (filter === "a-z") {
      return filteredCards.slice(0, 6);
    } else if (filter === "z-a") {
      return filteredCards.slice(6, 12);
    }
    return filteredCards;
  };

  const filteredCards = getFilteredCards();

  return (
    <div className="shop">
      <div className="shop_main">
        <div className="shop_title">
          <h1 className="title_h1">Shop Grid Default</h1>
          <NavLink to="/">home.</NavLink>
          <NavLink to="/pages">Pages.</NavLink>
          <span className="title_span">Shop Grid Default</span>
        </div>

        <div className="glavniy_main">
          <div className="glavniy_left">
            <h1>Ecommerce Accessories & Fashion item</h1>
            <p>About {filteredCards.length} results found</p>
          </div>
          <div className="glavniy_right">
            <p>Per Page:</p>
            <p>Sort By:</p>
            <select
              name="sort"
              className="davlat1"
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All</option>
              <option value="a-z">A-Z</option>
              <option value="z-a">Z-A</option>
            </select>
            <p>
              View:
              <NavLink to="/shop">
                <FaBarsProgress />
              </NavLink>
              <AiOutlineBars />
            </p>
            <input
              type="search"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>

        <Outlet />

        <div className="shop_card1">
          {searchTerm && filteredCards.length === 0 ? (
            <div>
              <h1>Siz qidirgan malumot yo'q!!!</h1>
            </div>
          ) : (
            filteredCards.map((item) => (
              <div key={item.id} className="shop_card_main1">
                <img src={item.img} alt="" className="cardDivImg1" />

                <div className="card_cost1">
                  <div>
                    <h2>{item.title}</h2>
                    <div className="card_cost2">
                      <p>${item.cost}.00</p>
                      <del>${item.cost1}.00</del>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Magna in est adipiscing in phasellus non in justo.
                      </p>
                    </div>
                    <div className="shop_icon1">
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
                        <NavLink to="/informations">
                          <FaSearchPlus />
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="shop_ohir">
          <img src={Ohir1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Shop1;
