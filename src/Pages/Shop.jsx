
import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaBarsProgress } from "react-icons/fa6";
import { AiOutlineBars } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";


import Kreslo1 from '../assets/4.png';
import Kreslo2 from '../assets/5.png';
import Kreslo3 from '../assets/6.png';
import Sumka1 from '../assets/7.png';
import Soat1 from '../assets/8.png';
import Soat2 from '../assets/9.png';
import Quloqchin1 from '../assets/10.png';
import Kreslo4 from '../assets/11.png';
import Soat3 from '../assets/12.png';
import Kamera1 from '../assets/13.png';
import Quloqchin2 from '../assets/14.png';
import Ohir from '../assets/15.png'
function Shop() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCards, setFilteredCards] = useState([]);

  const cards = [
    { id: 1, img: Kreslo1, title: "Vel elit euismod", cost: 26.00, cost1: 42.00 },
    { id: 2, img: Kreslo2, title: "Ultricies condimentum imperdiet", cost: 26.00, cost1: 42.00 },
    { id: 3, img: Kreslo3, title: "Vitae suspendisse sed", cost: 26.00, cost1: 42.00 },
    { id: 4, img: Sumka1, title: "Sed at fermentum", cost: 26.00, cost1: 42.00 },
    { id: 5, img: Soat1, title: "Fusce pellentesque at", cost: 26.00, cost1: 42.00 },
    { id: 6, img: Soat2, title: "Vestibulum magna laoreet", cost: 26.00, cost1: 42.00 },
    { id: 7, img: Quloqchin1, title: "Sollicitudin amet orci", cost: 26.00, cost1: 42.00 },
    { id: 8, img: Kreslo4, title: "Ultrices mauris sit", cost: 26.00, cost1: 42.00 },
    { id: 9, img: Soat3, title: "Pellentesque condimentum ac", cost: 26.00, cost1: 42.00 },
    { id: 10, img: Kamera1, title: "Cras scelerisque velit", cost: 26.00, cost1: 42.00 },
    { id: 11, img: Quloqchin2, title: "Lectus vulputate faucibus", cost: 26.00, cost1: 42.00 },
    { id: 12, img: Sumka1, title: "Purus risus, ut", cost: 26.00, cost1: 42.00 },
  ];

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredCards(
      cards.filter((card) =>
        card.title.toLowerCase().includes(term)
      )
    );
  };

  return (
    <div className='shop'>
      <div className="shop_main">
        <div className='shop_title'>
          <h1 className='title_h1'>Shop Grid Default</h1>
          <NavLink to="/">home.</NavLink>
          <NavLink to="/pages">Pages.</NavLink>
          <span className='title_span'>Shop Grid Default</span>
        </div>


        <div className='glavniy_main'>
          <div className='glavniy_left'>
            <h1>Ecommerce Acceories & Fashion item</h1>
            {/* <p>About {filteredCards.length || 0} results found</p> */}
            <p></p>
            <p></p>
          </div>
          <div className='glavniy_right'>
            <p>Per Page:</p>
            <p>Sort By:</p>
            <select name="Davlat" className='davlat1'>
              <option value="Best Match">Best Match</option>
              <option value="USD1">USD1</option>
              <option value="English1">English1</option>
            </select>
            <p>View: <FaBarsProgress /> <AiOutlineBars /></p>
            <input
              type="search"
              placeholder='Search...'
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
          <div className="shop_card">
            {searchTerm && filteredCards.length === 0 ? (
              <div>
                <h1>Siz qidirgan malumot yo'q!!!</h1>
              </div>
            ) : (
              (filteredCards.length ? filteredCards : cards).map((item) => (
                <div key={item.id} className='shop_card_main'>
                
                    

                    <img src={item.img} alt="" className='cardDivImg' />
                  <div className="shop_icon">
                      <FaShoppingCart />
                      <FaHeart />
                    </div>
                  
                  <h2>{item.title}</h2>
                  <div className="card_cost">
                    <p>${item.cost}.00</p>
                    <del>${item.cost1}.00</del>
                  </div>
                </div>
              ))
            )}
          </div>
        <div className="shop_ohir">
          <img src={Ohir} alt="" />
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Shop;