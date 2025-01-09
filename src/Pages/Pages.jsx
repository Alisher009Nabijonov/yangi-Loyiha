import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

import Demo1 from "../assets/43.png";
import Demo2 from "../assets/44.png";
import Demo3 from "../assets/45.png";
import Demo4 from "../assets/46.png";
import Demo5 from "../assets/47.png";

function Pages({ totalCost, totalCost1 }) {
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendToTelegramBot = async (e) => {
    e.preventDefault();
    const botToken = "7686093249:AAHrIA99271I4_uFTUk-yuehmREMjWcUqsQ";
    const chatId = "5900769240";
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
            text: text,
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
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

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
          <div className="demo_right_card">
            <div className="right_card_img">
              <div>
                <img src={Demo1} alt="" />
              </div>
              <div>
                <h3>Ut diam consequat</h3>
                <p>Color:Brown</p>
                <p>Size:XL</p>
              </div>
            </div>
            <div>
              <h3>$32.00</h3>
            </div>
          </div>
          <div className="demo_right_card">
            <div className="right_card_img">
              <div>
                <img src={Demo2} alt="" />
              </div>
              <div>
                <h3>Ut diam consequat</h3>
                <p>Color:Brown</p>
                <p>Size:XL</p>
              </div>
            </div>
            <div>
              <h3>$32.00</h3>
            </div>
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
                <button className="total_btn1">Proceed To Checkout</button>
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
