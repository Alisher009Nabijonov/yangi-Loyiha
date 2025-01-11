import { useState } from "react";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Shoping({ shop: initialShop, totalCost, totalCost1 }) {
  const [shop, setShop] = useState(initialShop);
  const [caunter, setCaunter] = useState(() => initialShop.map(() => 1));

  const increment = (index) => {
    setCaunter((prev) =>
      prev.map((count, i) => (i === index ? count + 1 : count))
    );
  };

  const decrement = (index) => {
    setCaunter((prev) =>
      prev.map((count, i) => {
        if (i === index) {
          const newCount = count - 1;
          if (newCount <= 0) {
            removeItem(index);
          }
          return newCount > 0 ? newCount : 0;
        }
        return count;
      })
    );
  };

  const removeItem = (index) => {
    setShop((prev) => prev.filter((_, i) => i !== index));
    setCaunter((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="shoping">
      <div className="shoping_main">
        <div className="shop_title">
          <h1 className="title_h1">Shopping Cart</h1>
          <NavLink to="/">home.</NavLink>
          <NavLink to="/pages">Pages.</NavLink>
          <span className="title_span">shopping cart</span>
        </div>
        <div className="shop_item1">
          {shop.length > 0 ? (
            <div className="shopping_items">
              {shop.map((item, index) => (
                <div key={index} className="shopping_item">
                  <div className="Shoping_img">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="shopping-item-img"
                    />
                  </div>
                  <div className="divvvvvv">
                    <div>
                      <h3>{item.title}</h3>
                      <input type="color" />
                      <p>Size: XL</p>
                    </div>
                    <div className="shop_cost_caunter">
                      <div>
                        <h3>${item.cost}.00</h3>
                      </div>
                      <div className="caunter">
                        <button onClick={() => increment(index)}>+</button>
                        <p>{caunter[index]}</p>
                        <button onClick={() => decrement(index)}>-</button>
                      </div>
                      <div>
                        <h3>${item.cost1}.00</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <h1>Hozircha Savat Bo'sh!!!</h1>
          )}
        </div>
        <div className="total_cost">
          <h2 className="total_h2">Cart Totals</h2>
          <div className="total_main">
            <div className="total1">
              <h2>Subtotals:</h2>
              <h2>${totalCost}.00</h2>
            </div>
            <div className="total1">
              <h2>Totals:</h2>
              <h2>${totalCost1}.00</h2>
            </div>
            <div className="total2">
              <div className="total3">
                <input type="checkbox" />
                <p className="total_p">
                  Shipping & taxes calculated at checkout
                </p>
              </div>
              <div>
                <button className="total_btn">Proceed To Checkout</button>
              </div>
            </div>
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default Shoping;
