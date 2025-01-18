import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import Ohir1 from "../assets/15.png";



const Faq = ({ t, setLanguage}) => {

  const [formData, setFormData] = useState({
    name: "",
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
    const text = `Ask a Question
😀:Name: ${formData.name}

📄:Subject: ${formData.subject}

📄:Message: ${formData.message}`;

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
        toast.success("Successfully send!");
        setFormData({ name: "", subject: "", message: "" });
      } else {
        toast.error("error saved!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="faq">
     
      <div className="faq_main">
        <Toaster />
        <div className="faq_title">
          <h1 className="title_h1">{t("faq1")}</h1>
          <NavLink to="/">home.</NavLink>
          <NavLink to="/pages">Pages.</NavLink>
          <span className="title_span">Faq</span>
        </div>
        <div className="faq_generel">
          <div className="generel_1">
            <h1>{t("faq2")}</h1>
            <h2>{t("faq3")}</h2>
            <p className="generel_p">{t("faq4")}</p>

            <h2>{t("faq5")}</h2>
            <p className="generel_p">{t("faq4")}</p>

            <h2>{t("faq6")}</h2>
            <p className="generel_p">{t("faq4")}</p>

            <h2>{t("faq7")}</h2>
            <p className="generel_p">{t("faq4")}</p>
          </div>
          <div className="faq_form">
            <h2>{t("faq8")}</h2>
            <form onSubmit={sendToTelegramBot}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  id="faq_textarea"
                  placeholder="Type Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button type="submit">{t("faq9")}</button>
            </form>
          </div>
        </div>
        <div className="faq_pas">
          <img src={Ohir1} alt="" />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Faq;
