import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaBarsProgress } from "react-icons/fa6";
import { AiOutlineBars } from "react-icons/ai";
import { FaShoppingCart, FaHeart, FaSearchPlus } from "react-icons/fa";
import Ohir1 from "../assets/15.png";
import { CgMenuGridO } from "react-icons/cg";

import { cards } from "../Malumotlar";

function Shop1({ headleAdd, likedCards, handleHeartClick, handleSelectCard, t1 }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTerm1, setSearchTerm1] = useState("");
  const [filter, setFilter] = useState("all");

 

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
  };

  const handleSearch1 = (event) => {
    const term1 = event.target.value;
    setSearchTerm1(term1);
  };

  const getFilteredCards = () => {
    let filteredCards = cards.filter((card) =>
      card.title.toLowerCase().includes(searchTerm)
    );

    if (searchTerm1) {
      filteredCards = filteredCards.filter((card) =>
        card.id.toString().includes(searchTerm1)
      );
    }

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
            <h1>Ecommerce Accessories & Fashion</h1>
            <p>About {filteredCards.length} results found</p>
          </div>
          <div className="glavniy_right">
            <div className="per_page_sort">
              <div className="per_page">
                <p>
                  Per Page:
                  <input
                    type="search"
                    value={searchTerm1}
                    onChange={handleSearch1}
                    placeholder="Search
                 ID"
                  />
                </p>
              </div>
              <div className="sort_by">
                <p>Sort By:</p>
                <select
                  name="sort"
                  className="davlat1"
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <option value="all">All</option>
                  <option value="a-z">Arzon</option>
                  <option value="z-a">Qimat</option>
                </select>
              </div>
            </div>
            <div className="view">
              <div className="view_ichi">
                <p>View:</p>
                <NavLink to="/shop">
                  <CgMenuGridO />
                </NavLink>
                <NavLink to="/shop1">
                  <AiOutlineBars />
                </NavLink>
              </div>
              
              <input
                type="search"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
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
                    <p>{t1("dolor1")}</p>

                    <del>{t1("dolor2")}</del>

                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Magna in est adipiscing in phasellus non in justo.
                    </p>
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
                        <FaHeart  onClick={() => handleSelectCard(item)}/>
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

        {/* <div className="shop_ohir">
          <img src={Ohir1} alt="" />
        </div> */}
      </div>
    </div>
  );
}

export default Shop1;
