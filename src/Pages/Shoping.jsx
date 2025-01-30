import { useState } from "react";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

function Shoping({
  shop: initialShop,
  totalCost,
  totalCost1,
  t1,
  selectedCards1,
}) {
  const [shop, setShop] = useState(initialShop);
  const [caunter, setCaunter] = useState(() => initialShop.map(() => 1));
  const [promoCode, setPromoCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);
  const [totals, setTotals] = useState(totalCost1);

  const increment = (index) => {
    setCaunter((prev) =>
      prev.map((count, i) => (i === index ? count + 1 : count))
    );

    // Narxni yangilash
    totalCost += parseInt(shop[index].cost);
    const updatedTotals = totals + parseInt(shop[index].cost1);
    setTotals(updatedTotals);
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

    // Narxni yangilash
    totalCost -= parseInt(shop[index].cost);
    const updatedTotals = totals - parseInt(shop[index].cost1);
    setTotals(updatedTotals);
  };

  const removeItem = (index) => {
    setShop((prev) => prev.filter((_, i) => i !== index));
    setCaunter((prev) => prev.filter((_, i) => i !== index));
  };

  const handlePromoCode = () => {
    if (promoCode === "salom" && !discountApplied) {
      setTotals((prev) => prev - 12);
      setDiscountApplied(true);
      toast.success("Siz chegirmaga ega boldingiz!");
    } else if (discountApplied) {
      toast.error("Kodni tekshiring yoki ikkinchi marta foydalanmang!!!");
    } else {
      toast.error("Kodni tekshiring yoki ikkinchi marta foydalanmang!!!");
    }
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
        <div className="shop_pas_card123">
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
                        <p>Code: salom</p>
                      </div>
                      <div className="shop_cost_caunter">
                        <div>
                          <h3> {t1("dolor1")} </h3>
                        </div>
                        <div className="caunter">
                          <button onClick={() => decrement(index)}>-</button>
                          <p>{caunter[index]}</p>
                          <button onClick={() => increment(index)}>+</button>
                        </div>
                        <div>
                          <del>{t1("dolor2")}</del>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <p>{}</p>
              </div>
            ) : (
              <h1></h1>
            )}

            {/* <div className="home_kata_page1">
              {selectedCards1.map((item) => (
                <div key={item.id} className="home_kata_page_main1">
                  <div className="home_kata_page_left1">
                    <img src={item.KataImg} alt={item.KataTitle} />
                  </div>
                  <div className="home_kata_page_right1">
                    <h2>{item.KataTitle}</h2>

                    <div>
                      <h4>{item.KataP4}</h4>
                      <p>{item.KataCost}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
          <div className="cost_code">
            <div className="total_cost">
              <h2 className="total_h2">Cart Totals</h2>
              <div className="total_main">
                <div className="total1">
                  <h2>Subtotals:</h2>
                  <h2>${totals}.00</h2>
                </div>
                <div className="promo_code">
                <input
                  type="text"
                  placeholder="Code..."
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
              </div>
              <button className="promo_btn2" onClick={handlePromoCode}>
                  Check
                </button>
                <div className="total1">
                  <h2>Totals:</h2>
                  <h2>${totals}.00</h2>
                </div>
                <div className="total2">
                  <div className="total3">
                    <input type="checkbox" />
                    <p className="total_p">
                      Shipping & taxes calculated at checkout
                    </p>
                  </div>
                  <div>
                    <NavLink to="/pages">
                      {" "}
                      <button className="total_btn">Proceed To Checkout</button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="promo">
              <h1>Promo Code</h1>
             
              <div className="promo_btn1">
                <button className="promo_btn" onClick={handlePromoCode}>
                  Check the code
                </button>
              </div>
            </div> */}
          </div>
        </div>

        <Outlet />
        <Toaster />
      </div>
    </div>
  );
}

export default Shoping;
