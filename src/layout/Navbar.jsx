import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { MdEmail } from "react-icons/md";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";



const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar_main">
                <div className="navbar_left">
                    <p><MdEmail /> nabijonov093@gmail.com</p>
                    <p><BsFillTelephonePlusFill /> +(998)77 324 30 09</p>
                </div>
                <div className='navbar_right'>
                    <select name="Till" className='til'>
                        <option value="English">English</option>
                        <option value="English1">English1</option>
                        <option value="English1">English1</option>
                    </select>
                    <select name="Davlat" className='davlat'>
                        <option value="USD">USD</option>
                        <option value="USD1">USD1</option>
                        <option value="English1">English1</option>
                    </select>

                   
                    <p>Wishlist<FaHeart /></p>
                </div>
            </div>
           
        </div>
    )
}

export default Navbar;
