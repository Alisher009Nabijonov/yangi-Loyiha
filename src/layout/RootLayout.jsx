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


function RootLayout() {
  let [bars, setBars] = useState("close");
  const toggleBars = () => {
    setBars("open");
  };
  const toggleBarsClose = () => {
    setBars("close");
  };
  return (
    <>
      <header>
        <nav className="nav">
          <div>
            <h1 className="nav_h1">Hekto</h1>
          </div>
          <div className="nav_right">
            <div className="nav_collect">
              <div className="li">
                <NavLink to="/">Home</NavLink>
                <div className="dropdown">
                  <NavLink to="/faq">Faq</NavLink>
                </div>
              </div>
                  <NavLink to="/about">About</NavLink>
              <NavLink to="/products">Products</NavLink>
              <NavLink to="/blog">Blog</NavLink>
              <NavLink to="/shop">Shop</NavLink>
              <NavLink to="/cantactus">Contact</NavLink>
              <NavLink to="/shoping">
                <FaShoppingCart />
              </NavLink>
              <NavLink to="/login">
                {" "}
                Login
                <FaUser />
              </NavLink>
            </div>
            <i className="nav_bars" onClick={() => toggleBars()}>
              <FaBarsStaggered />
            </i>
            <div className={`sidebar ${bars}`}>
              <p className="close-sidebar" onClick={() => toggleBarsClose()}>
                x
              </p>
              <div className="li">
                <NavLink to="/" >Home</NavLink>
                <div className="dropdown">
                  <NavLink to="/faq" onClick={() => toggleBarsClose()}>Faq</NavLink>
                  <NavLink to="/about" onClick={() => toggleBarsClose()}>About</NavLink>
                  <NavLink to="/cantactus" onClick={() => toggleBarsClose()}>Contact Us</NavLink>
                </div>
              </div>
              <div className="div_sitbar">
                <div>
                  <NavLink to="/pages" onClick={() => toggleBarsClose()}>Pages</NavLink>
                </div>
                <div>
                  <NavLink to="/products" onClick={() => toggleBarsClose()}>Products</NavLink>
                </div>
                <div>
                  <NavLink to="/blog" onClick={() => toggleBarsClose()}>Blog</NavLink>
                </div>
                <div>
                  <NavLink to="/shop" onClick={() => toggleBarsClose()}>Shop</NavLink>
                </div>
                <div>
                  <NavLink to="/contact" onClick={() => toggleBarsClose()}>Contact</NavLink>
                </div>
                <div>
                  <NavLink to="/shoping" onClick={() => toggleBarsClose()}>
                    <FaShoppingCart />
                  </NavLink>
                </div>
                <div>

                <NavLink to="/login" onClick={() => toggleBarsClose()}>
                  {" "}
                  Login
                  <FaUser />
                </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="nav_ohir">
            <input type="search" pmplaceholder="Search..." />
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
          <FaFacebookF />
          </div>
          <div className="pas_right_icon">
          <FaInstagram />
          </div>
          <div className="pas_right_icon">
          <FaTwitter />
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default RootLayout;
