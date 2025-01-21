import React from "react";

const wishlist = ({ selectedCards, RemoveItem, setLanguage, t }) => {
  return (
    <div className="wishlist">
      {selectedCards.length === 0 ? (
        <h1 className="wishlist_empty">{t("wishlist1")}</h1>
      ) : (
        selectedCards.map((item, index) => (
          <div key={index} className="wishlist_carDivShop">
            <img
              src={item.img || "/placeholder.svg"}
              alt=""
              className="wishlist_cardDivImg"
            />
            <h2>{item.title}</h2>
            <p>{item.cost}</p>
            <button
              className="wishlist_deleteBtn"
              onClick={() => RemoveItem(index)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default wishlist;
