import React from 'react'
import { FaSearch } from "react-icons/fa";
import { NavLink, Outlet } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function RootLayout() {
    return (
        <>
            <header>
                <nav className='nav'>
                    <div>

                        <h1 className='nav_h1'>Hekto</h1>
                    </div>
                    <div className='nav_right'>

                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/pages">Pages</NavLink>
                        <NavLink to="/products">Products</NavLink>
                        <NavLink to="/blog">Blog</NavLink>
                        <NavLink to="/shop">Shop</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </div>
                    <div className='nav_ohir'>
                        <input type="search" placeholder='Search...' />
                        <button><FaSearch /></button>

                    </div>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <div className="footer_main">
                    <div className="footer1">
                        <h1>Hekto</h1>
                        <input type="text" placeholder='Enter Email Address' />
                        <button>Sign Up</button>
                        <p>Contact Info</p>
                        <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                    </div>
                    <div className="footer2">
                        <h2>Catagories</h2>
                        <p>Laptops & Computers</p>
                        <p>background: #8A8FB9;</p>
                        <p>Smart Phones & Tablets</p>
                        <p>Video Games & Consoles</p>
                        <p>Waterproof Headphones</p>
                    </div>
                    <div className="footer2">
                        <h2>Customer Care</h2>
                        <p>Waterproof Headphones</p>
                        <p>Discount</p>
                        <p>Returns</p>
                        <p>Orders History</p>
                        <p>Order Tracking</p>
                    </div>
                    <div className="footer2">
                        <h2>Pages</h2>
                        <p>Blog</p>
                        <p>Browse the Shop</p>
                        <p>Category</p>
                        <p>Pre-Built Pages</p>
                        <p>Visual Composer Elements</p>
                        <p>WooCommerce Pages</p>
                    </div>
                </div>
                <div className='footer_pas'>
                    <div className="pas_left">
                        <p>©Webecy - All Rights Reserved</p>
                    </div>
                    <div className="pas_right">
                        <FaFacebookF />
                        <FaInstagram />
                        <FaTwitter />
                    </div>

                </div>
            </footer>
        </>
    )
}

export default RootLayout