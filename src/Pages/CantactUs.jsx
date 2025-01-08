import React, { useState } from "react"; 
import { NavLink, Outlet } from "react-router-dom";
import CantactUs1 from "../assets/42.png";
import { Toaster, toast } from "react-hot-toast";

const CantactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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

    const text = `Get In Touch
😀 Name: ${formData.name}\n📧 Email: ${formData.email}\n📄 Subject: ${formData.subject}\n📨 Message: ${formData.message}`;

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
        toast.success("Successfully sent!");
        setFormData({ name: "", email: "", subject: "", message: "" }); 
      } else {
        toast.error("Failed to send. Please try again!"); 
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send. Please try again!"); 

    }
  };

  return (
    <div className="cantactus">
      <div className="shop_title1">
        <div className="shop_title2">
          <h1 className="title_h11">Contact Us</h1>
          <NavLink to="/">home.</NavLink>
          <NavLink to="/pages">Pages.</NavLink>
          <span className="title_span">Contact us</span>
        </div>
      </div>
      <div className="cantactus_main">
        <Toaster />
        <div className="cantactus1">
          <div className="cantactus_left">
            <h1>Information About us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mattis neque ultrices mattis aliquam, malesuada diam est.
              Malesuada sem tristique amet erat vitae eget dolor lobortis.
              Accumsan faucibus vitae lobortis quis bibendum quam.
            </p>
            <div className="dumoloqlar1">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="cantactus_right">
            <h1>Contact Way</h1>
            <div className="right_cards">
              <div className="cards_left1">
                <div className="cantactus_card">
                  <div className="ichi">
                    <div className="rang1"></div>
                  </div>
                  <div className="ichi1">
                    <p>Tel: 877-67-88-99</p>
                    <p>E-Mail: shop@store.com</p>
                  </div>
                </div>
                <div className="cantactus_card">
                  <div className="ichi">
                    <div className="rang2"></div>
                  </div>
                  <div className="ichi1">
                    <p>Tel: 877-67-88-99</p>
                    <p>E-Mail: shop@store.com</p>
                  </div>
                </div>
              </div>
              <div className="cards_left1">
                <div className="cantactus_card">
                  <div className="ichi">
                    <div className="rang3"></div>
                  </div>
                  <div className="ichi1">
                    <p>Tel: 877-67-88-99</p>
                    <p>E-Mail: shop@store.com</p>
                  </div>
                </div>
                <div className="cantactus_card">
                  <div className="ichi">
                    <div className="rang4"></div>
                  </div>
                  <div className="ichi1">
                    <p>Tel: 877-67-88-99</p>
                    <p>E-Mail: shop@store.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cantactus_get">
          <div className="get_left">
            <h1>Get In Touch</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mattis neque ultrices tristique amet erat vitae eget dolor los
              vitae lobortis quis bibendum quam.
            </p>
            <form onSubmit={sendToTelegramBot}>
              <div className="input1">
                <input
                  type="text"
                  name="name" 
                  placeholder="Your Name*"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="subject" 
                  placeholder="Your Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <input
                type="email"
                name="email" 
                placeholder="Your E-mail"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <textarea
                name="message" 
                id="get_textarea"
                placeholder="Type Your Message*"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
              <button type="submit" className="get_btn">
                Send Mail
              </button>
            </form>
          </div>
          <div className="get_right">
            <img src={CantactUs1} alt="Contact Us" />
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default CantactUs;
