import React, { useRef, useState } from "react";
import { FaShoppingCart, FaHeart, FaSearchPlus } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import HomeImg1 from "../assets/2.png";
import { Pagination, Autoplay } from "swiper/modules";

export default function App({ cards }) {
  const [likedCards, setLikedCards] = useState([]);

  const handleHeartClick = (id) => {
    setLikedCards((prev) =>
      prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
    );
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="banner">
            <div className="banner_center">
              <h3>Best Furniture For Your Castle....</h3>
              <h1>New Furniture Collection Trends in 2020</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
              <button>Shop Now</button>
            </div>
            <div className="banner_right">
              <img src={HomeImg1} alt="HOMEIMG1" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner">
            <div className="banner_center">
              <h3>Best Furniture For Your Castle....</h3>
              <h1>New Furniture Collection Trends in 2020</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
              <button>Shop Now</button>
            </div>
            <div className="banner_right">
              <img src={HomeImg1} alt="HOMEIMG1" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner">
            <div className="banner_center">
              <h3>Best Furniture For Your Castle....</h3>
              <h1>New Furniture Collection Trends in 2020</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
              <button>Shop Now</button>
            </div>
            <div className="banner_right">
              {/* <img src={HomeImg1} alt="HOMEIMG1" /> */}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <h1 className="home_shop_h1">Featured Products</h1>
      <Swiper
        pagination={pagination}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <div className="home_cards_shop1">
          <SwiperSlide>
            <div className="home_cards_shop11">
              {cards.slice(0, 4).map((item) => (
                <div key={item.id} className="shop_card_main">
                  <img src={item.img} alt={item.title} className="cardDivImg" />
                  <div className="shop_icon">
                    <div>
                      <FaShoppingCart onClick={() => headleAdd(item)} />
                    </div>
                    <div
                      onClick={() => handleHeartClick(item.id)}
                      style={{
                        cursor: "pointer",
                        color: likedCards.includes(item.id) ? "red" : "black",
                        fontSize: "24px",
                        transition: "color 0.3s ease-in-out",
                      }}
                    >
                      <FaHeart />
                    </div>
                    <div>
                      <NavLink to={`/informations/${item.id}`}>
                        <FaSearchPlus />
                      </NavLink>
                    </div>
                  </div>
                  <h2>{item.title}</h2>
                  <div className="home_color">
                    <div className="home_color1"></div>
                    <div className="home_color2"></div>
                    <div className="home_color3"></div>
                  </div>
                  <div className="card_cost">
                    <p>${item.cost}.00</p>
                    <del>${item.cost1}.00</del>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home_cards_shop11">
              {cards.slice(4, 8).map((item) => (
                <div key={item.id} className="shop_card_main">
                  <img src={item.img} alt={item.title} className="cardDivImg" />
                  <div className="shop_icon">
                    <div>
                      <FaShoppingCart onClick={() => headleAdd(item)} />
                    </div>
                    <div
                      onClick={() => handleHeartClick(item.id)}
                      style={{
                        cursor: "pointer",
                        color: likedCards.includes(item.id) ? "red" : "black",
                        fontSize: "24px",
                        transition: "color 0.3s ease-in-out",
                      }}
                    >
                      <FaHeart />
                    </div>
                    <div>
                      <NavLink to={`/informations/${item.id}`}>
                        <FaSearchPlus />
                      </NavLink>
                    </div>
                  </div>
                  <h2>{item.title}</h2>
                  <div className="home_color">
                    <div className="home_color1"></div>
                    <div className="home_color2"></div>
                    <div className="home_color3"></div>
                  </div>
                  <div className="card_cost">
                    <p>${item.cost}.00</p>
                    <del>${item.cost1}.00</del>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home_cards_shop11">
              {cards.slice(8, 12).map((item) => (
                <div key={item.id} className="shop_card_main">
                  <div className="dddddd">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="cardDivImg"
                    />
                  </div>
                  <div className="shop_icon">
                    <div>
                      <FaShoppingCart onClick={() => headleAdd(item)} />
                    </div>
                    <div
                      onClick={() => handleHeartClick(item.id)}
                      style={{
                        cursor: "pointer",
                        color: likedCards.includes(item.id) ? "red" : "black",
                        fontSize: "24px",
                        transition: "color 0.3s ease-in-out",
                      }}
                    >
                      <FaHeart />
                    </div>
                    <div>
                      <NavLink to={`/informations/${item.id}`}>
                        <FaSearchPlus />
                      </NavLink>
                    </div>
                  </div>

                  <h2>{item.title}</h2>
                  <div className="home_color">
                    <div className="home_color1"></div>
                    <div className="home_color2"></div>
                    <div className="home_color3"></div>
                  </div>
                  <div className="card_cost">
                    <p>${item.cost}.00</p>
                    <del>${item.cost1}.00</del>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
      <div className="home_card111">
        <h1>Leatest Products</h1>
        <div className="home_cards_shop1111">
              {cards.slice(0, 3).map((item) => (
                <div key={item.id} className="shop_card_main">
                  <div className="dddddd">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="cardDivImg"
                    />
                  </div>
                  <div className="shop_icon">
                    <div>
                      <FaShoppingCart onClick={() => headleAdd(item)} />
                    </div>
                    <div
                      onClick={() => handleHeartClick(item.id)}
                      style={{
                        cursor: "pointer",
                        color: likedCards.includes(item.id) ? "red" : "black",
                        fontSize: "24px",
                        transition: "color 0.3s ease-in-out",
                      }}
                    >
                      <FaHeart />
                    </div>
                    <div>
                      <NavLink to={`/informations/${item.id}`}>
                        <FaSearchPlus />
                      </NavLink>
                    </div>
                  </div>

                  <h2>{item.title}</h2>
                 
                  <div className="card_cost">
                    <p>${item.cost}.00</p>
                    <del>${item.cost1}.00</del>
                  </div>
                </div>
              ))}
            </div>
            <div className="home_cards_shop1111">
              {cards.slice(3, 6).map((item) => (
                <div key={item.id} className="shop_card_main">
                  <div className="dddddd">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="cardDivImg"
                    />
                  </div>
                  <div className="shop_icon">
                    <div>
                      <FaShoppingCart onClick={() => headleAdd(item)} />
                    </div>
                    <div
                      onClick={() => handleHeartClick(item.id)}
                      style={{
                        cursor: "pointer",
                        color: likedCards.includes(item.id) ? "red" : "black",
                        fontSize: "24px",
                        transition: "color 0.3s ease-in-out",
                      }}
                    >
                      <FaHeart />
                    </div>
                    <div>
                      <NavLink to={`/informations/${item.id}`}>
                        <FaSearchPlus />
                      </NavLink>
                    </div>
                  </div>

                  <h2>{item.title}</h2>
                 
                  <div className="card_cost">
                    <p>${item.cost}.00</p>
                    <del>${item.cost1}.00</del>
                  </div>
                </div>
              ))}
            </div>
      </div>
    </>
  );
}
