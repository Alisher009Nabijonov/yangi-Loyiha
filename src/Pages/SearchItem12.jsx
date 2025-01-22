import React from "react";
import { FaShoppingCart, FaHeart, FaSearchPlus } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { FaSearch } from "react-icons/fa";


const SearchItem12 = ({
  headleAdd,
  t,
  setLanguage,
  handleHeartClick,
  likedCards,
  handleSelectCard,
  filteredCards,
}) => {
  return (
    <div className="salom">
      {filteredCards.length > 0 ? (
        filteredCards.map((item) => (
          <div key={item.id} className="search_item_div">
            <img src={item.img} alt="" />
            <h1>{item.title}</h1>
            <div className="search_item_cost">
              <h3>${item.cost}.00</h3>
              <h3>${item.cost1}.00</h3>
            </div>
            <div className="search_item_icon">
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
          </div>
        ))
      ) : (
        <div className="search_item_h11">
          <h1>
            <FaSearch />
          </h1>
          <h1 className="search_item_h1">
            The information you are looking for was not found.
          </h1>
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default SearchItem12;
