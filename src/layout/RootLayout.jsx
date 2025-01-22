import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Toaster } from "react-hot-toast";
import { FaUser } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephonePlusFill } from "react-icons/bs";

function RootLayout({
  t,
  setLanguage,
  language,
  filteredCards,
  setSearchQuery,
  searchQuery,
  shop,
  selectedCards,
}) {
  let [bars, setBars] = useState("close");
  const toggleBars = () => {
    setBars("open");
  };
  const toggleBarsClose = () => {
    setBars("close");
  };
  return (
    <>
      <div className="navbar">
        <div className="navbar_main">
          <div className="navbar_left">
            <p>
              <MdEmail /> nabijonov093@gmail.com
            </p>
            <p>
              <a href="tel:+998948895355">
                <BsFillTelephonePlusFill /> +(998)77 324 30 09{" "}
              </a>
            </p>
          </div>
          <div className="navbar_right">
            <div className="nav_item_wish_til_dav_login">
              <div className="tillar">
                <div className="language_selector">
                  <select
                    className="language_dropdown"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                  >
                    <option value="en">English</option>
                    <option value="ru">Русский</option>
                    <option value="uz">O'zbek</option>
                  </select>
                </div>
              </div>
              <div className="som_selector">
                <select name="Davlat" className="davlat">
                  <option value="USD">USD</option>
                  <option value="USD1">USD1</option>
                  <option value="English1">English1</option>
                </select>
              </div>
            </div>
            <div className="nav_item_wish_til_dav_login">
              <NavLink to="/wishlist" onClick={() => toggleBarsClose()}>
                Wishlis
                <FaHeart />
              </NavLink>
              <div className="caunter_wishlist">
              <p>{selectedCards.length}</p>
              </div>
              <NavLink to="/login" onClick={() => toggleBarsClose()}>
                Login
                <FaUser />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <header>
        <nav className="nav">
          <div>
            <h1 className="nav_h1">{t("nav7")}</h1>
          </div>
          <div className="nav_right">
            <div className="nav_collect">
              <div className="li">
                <NavLink to="/">{t("nav1")}</NavLink>
              </div>
              <NavLink to="/about">{t("nav2")}</NavLink>
              <NavLink to="/faq">{t("nav3")}</NavLink>
              <NavLink to="/blog">{t("nav4")}</NavLink>
              <NavLink to="/shop">{t("nav5")}</NavLink>
              <NavLink to="/cantactus">{t("nav6")}</NavLink>
              <NavLink to="/shoping">
                <FaShoppingCart />
              </NavLink>
              <div className="caunter_shoping_length">
                <p>{shop.length}</p>
              </div>
            </div>
            <i className="nav_bars" onClick={() => toggleBars()}>
              <FaBarsStaggered />
            </i>
            <div className={`sidebar ${bars}`}>
              <p className="close-sidebar" onClick={() => toggleBarsClose()}>
                x
              </p>
              <div className="li">
                <NavLink to="/" onClick={() => toggleBarsClose()}>
                  {t("nav1")}
                </NavLink>
                <div className="dropdown"></div>
              </div>
              <div className="div_sitbar">
                <NavLink to="/about" onClick={() => toggleBarsClose()}>
                  {t("nav2")}
                </NavLink>
                <div></div>
                <NavLink to="/faq" onClick={() => toggleBarsClose()}>
                  {t("nav3")}
                </NavLink>
                <div>
                  <NavLink to="/blog" onClick={() => toggleBarsClose()}>
                    {t("nav4")}
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/shop" onClick={() => toggleBarsClose()}>
                    {t("nav5")}
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/cantactus" onClick={() => toggleBarsClose()}>
                    {t("nav6")}
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/shoping" onClick={() => toggleBarsClose()}>
                    <FaShoppingCart />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="nav_ohir">
            <NavLink to="/searchitem12">
              {" "}
              <input
                type="search"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </NavLink>
            <button>
              <FaSearch />
            </button>
          </div>
        </nav>
      </header>

      <main>
        <Toaster />
        <Outlet />
      </main>
      <footer>
        <div className="footer_main">
          <div className="footer1">
            <div className="footer11">
              <h1>Hekto</h1>
              <div className="footer_input_btn">
                <input type="text" placeholder="Enter Email Address" />
                <button>Sign Up</button>
              </div>
              <p>Contact Info</p>
              <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>
            <div className="footer2">
              <h2>Catagories</h2>
              <p>Laptops &</p>
              <p>background:</p>
              <p>Smart Phones &</p>
              <p>Video Games &</p>
              <p>Waterproof</p>
            </div>
          </div>
          <div className="footer22">
            <div className="footer2">
              <h2>Customer </h2>
              <p>Waterproof</p>
              <p>Discount</p>
              <p>Returns</p>
              <p>Orders </p>
              <p>Order </p>
            </div>
            <div className="footer2">
              <h2>Pages</h2>
              <p>Blog</p>
              <p>Browse the Shop</p>
              <p>Category</p>
              <p>Pre-Built Pages</p>
              <p>Visual Composer </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer_pas">
        <div className="footer_pas_main">
          <div className="pas_left">
            <p>©Webecy - All Rights Reserved</p>
          </div>
          <div className="pas_right">
            <div className="pas_right_icon">
              <a
                href="https://www.instagram.com/nabijonov_5355?igsh=MTBlMDdkbnd4ZHYzcA=="
                target="_blank"
              >
                <FaFacebookF />
              </a>
            </div>
            <div className="pas_right_icon">
              <a
                href="https://www.instagram.com/nabijonov_5355?igsh=MTBlMDdkbnd4ZHYzcA=="
                target="_blank"
              >
                <FaInstagram />
              </a>
            </div>
            <div className="pas_right_icon">
              <a
                href="https://www.instagram.com/nabijonov_5355?igsh=MTBlMDdkbnd4ZHYzcA=="
                target="_blank"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RootLayout;
