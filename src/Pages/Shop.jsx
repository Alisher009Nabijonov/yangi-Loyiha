import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaSearchPlus } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { FaBarsProgress } from "react-icons/fa6";
import { CgMenuGridO } from "react-icons/cg";
import Ohir1 from "../assets/15.png";

function Shop({
  cards,
  headleAdd,
  handleHeartClick,
  likedCards,
  handleSelectCard,
  t1,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTerm1, setSearchTerm1] = useState("");
  const [filter, setFilter] = useState("all");
  const [cardsPerPage, setCardsPerPage] = useState(12);   

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

  // Function to handle per page change
  const handleCardsPerPageChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setCardsPerPage(value);
    }
  };

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
                    type="number"
                    value={cardsPerPage}
                    onChange={handleCardsPerPageChange}
                    placeholder="Enter number of cards"
                    min="1"
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

        <div className="shop_card">
          {searchTerm && filteredCards.length === 0 ? (
            <div>
              <h1>No results found for your search!</h1>
            </div>
          ) : (
            filteredCards.slice(0, cardsPerPage).map((item) => (
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
                    <FaHeart onClick={() => handleSelectCard(item)} />
                  </div>
                  <div>
                    <NavLink to={`/informations/${item.id}`}>
                      <FaSearchPlus />
                    </NavLink>
                  </div>
                </div>
                <h2>{item.title}</h2>
                <div className="card_cost">
                  <p>{t1("dolor1")}</p>
                  <del>{t1("dolor2")}</del>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="shop_ohir">
          {/* <img src={Ohir1} alt="Footer" /> */}
        </div>
      </div>
    </div>
  );
}

export default Shop;
