import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import { IoIosStar } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import Dalniy1 from '../assets/16.png'
import Dalniy2 from '../assets/17.png'
import Dalniy3 from '../assets/18.png'
import Dalniy4 from '../assets/19.png'

const informations = ({ cards }) => {
    return (
        <div className='information'>
            <div className="information_main">
                <div className='shop_title'>
                    <h1 className='title_h1'>Product Details</h1>
                    <NavLink to="/">home.</NavLink>
                    <NavLink to="/pages">Pages.</NavLink>
                    <span className='title_span'>Product Details</span>
                </div>
                <div className="catd_dalniy">
                    <div className='dalniy0'>
                        <div className="dalniy1">
                            <img src={Dalniy1} alt="" />
                            <img src={Dalniy2} alt="" />
                            <img src={Dalniy3} alt="" />
                        </div>
                        <div className="dalniy2">
                            <img src={Dalniy4} alt="" />
                        </div>
                    </div>
                    <div className="dalniy3">
                        <h1>Playwood arm chair</h1>
                        <div className='dalniy_icon'>
                            <i><IoIosStar />
                            <IoIosStar />
                            <IoIosStar />
                            <IoIosStar />
                            <IoIosStar /></i>
                            <p>(22)</p>
                        </div>
                        <div className="dalniy_cost">
                            <p>$32.00</p>
                            <del>$32.00</del>
                        </div>
                        <h2>color</h2>

                        <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>
                        <button>Add To cart <i className='heart'><FaHeart /></i></button>
                        <h2>Categories:</h2>
                        <h2>Tags</h2>
                        <div className='dalniy_share'>

                            <h2>Share:</h2>
                            <FaFacebookF />
                            <FaInstagram />
                            <FaTwitter />
                        </div>
                    </div>

                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default informations