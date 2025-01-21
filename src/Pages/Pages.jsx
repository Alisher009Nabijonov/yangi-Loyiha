import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

function Pages({ shop: initialShop, totalCost, totalCost1 }) {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    country: "",
    postalCode: "",
  });
  const [shop, setShop] = useState(initialShop || []);
  const [caunter, setCaunter] = useState(() => (initialShop || []).map(() => 1));
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const navigate = useNavigate();
  const sendToTelegramBot = async (e) => {
    e.preventDefault();
    const botToken = "7686093249:AAHrIA99271I4_uFTUk-yuehmREMjWcUqsQ";
    const chatId = "5900769240  ";
    const text = `Hekto Demo\n\n😀 Email: ${formData.email}\n📄 First Name: ${formData.firstName}\n📄 Last Name: ${formData.lastName}\n📄 Address: ${formData.address}\n📄 Apartment: ${formData.apartment}\n📄 City: ${formData.city}\n📄 Country: ${formData.country}\n📄 Postal Code: ${formData.postalCode}`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text,
          }),
        }
      );

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({
          email: "",
          firstName: "",
          lastName: "",
          address: "",
          apartment: "",
          city: "",
          country: "",
          postalCode: "",
        });
        navigate("/order");

      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

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

  const handelnavigationShop = () =>{
    toast.success("Contact Informationni to'ldiring!!!");

  }

  return (
    <div className="demo">
      <div className="demo1">
        <Toaster />

        <h1>Hekto Demo</h1>
      </div>

      <div className="demo_main">
        <div className="demo_left">
          <h1>Hekto Demo</h1>
          <p>Cart/ Information/ Shipping/ Payment</p>
          <form onSubmit={sendToTelegramBot}>
            <div className="demo_card1">
              <div className="card1_tepa">
                <h2>Contact Information</h2>
                <p>
                  Already have an account? <NavLink to="/login"> Login</NavLink>
                </p>
              </div>
              <input
                type="email"
                placeholder="Email or mobile phone number"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />

              <p>Keep me up to date on news and exclusive offers</p>

              <div className="card1_pas1">
                <h2>Shipping address</h2>
                <div className="card1_pas1_1">
                  <input
                    type="text"
                    placeholder="First name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <input
                  type="text"
                  placeholder="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  placeholder="Apartment, suite, etc. (optional)"
                  name="apartment"
                  value={formData.apartment}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="City"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
                <div className="card1_checkbox_pasi">
                  <input
                    type="text"
                    placeholder="Country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Postal Code"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    required
                  />
                </div>
        <button type="submit">Continue Shipping</button>
              </div>
            </div>
          </form>
        </div>

        <div className="demo_right">
        <div className="demo_item1">
          {shop.length > 0 ? (
            <div className="demo_items">
              {shop.map((item, index) => (
                <div key={index} className="demo_item">
                  <div className="demo_img">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="demo-item-img"
                    />
                  </div>
                  <div className="demo_divvvvvv">
                    <div>
                      <h3>{item.title}</h3>
                      <input type="color" />
                      <p>Size: XL</p>
                    </div>
                    <div className="demo_cost_caunter">
                      <div>
                        <h3>${item.cost}.00</h3>
                      </div>
                      <div className="_demo_caunter">
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

         
          <div className="total_main1">
            <div className="total11">
              <h2>Subtotals:</h2>
              <h2>${totalCost}.00</h2>
            </div>
            <div className="total11">
              <h2>Totals:</h2>
              <h2>${totalCost1}.00</h2>
            </div>
            <div className="total21">
              <div className="total31">
                <input type="checkbox" />
                <p className="total_p1">
                  Shipping & taxes calculated at checkout
                </p>
              </div>
              <div>
                <button onClick={handelnavigationShop} className="total_btn1">Proceed To Checkout</button>
              </div>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Pages;
