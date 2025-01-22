import React, { useRef, useState } from "react";
import { FaShoppingCart, FaHeart, FaSearchPlus } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

import About2 from "../assets/35.png";
import About3 from "../assets/36.png";
import About4 from "../assets/37.png";
import About5 from "../assets/38.png";
import home_kata1 from "../assets/home_kata1.png";

import salom1 from "../assets/salom1.png";
import salom2 from "../assets/salom2.png";
import salom3 from "../assets/salom3.png";
import salom4 from "../assets/salom4.png";
import salom5 from "../assets/salom5.png";

import top1 from "../assets/top1.png";
import top2 from "../assets/top2.png";
import top3 from "../assets/top3.png";
import top4 from "../assets/top4.png";

import late1 from "../assets/late.png";
import late2 from "../assets/late2.png";
import late3 from "../assets/late3.png";
import rang1 from "../assets/rang1.png";
import rang2 from "../assets/rang2.png";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import HomeImg1 from "../assets/2.png";
import { Pagination, Autoplay } from "swiper/modules";
import { NavLink, Outlet } from "react-router-dom";

export default function App({
  cards,
  headleAdd,
  t,
  setLanguage,
  handleHeartClick,
  likedCards,
  handleSelectCard,
}) {
  // const [imgrang, setImgrang] = useState({home_kata1});

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "23% off in all products",
      description: "Lorem ipsum dolor ",
      extraText: "BU SOAT",
      showMore: false,
      image: salom1,
    },
    {
      id: 2,
      title: "23% off in all products",
      description: "Lorem ipsum dolor",
      extraText: "BU JAVON",
      showMore: false,
      image: salom2,
    },
  ]);

  const toggleShowMore = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, showMore: !post.showMore } : post
      )
    );
  };

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const offerProducts = [
    {
      id: 1,
      title: "Duis lectus est.",
      price: "$12.00 - $15.00",
      image: salom3,
    },
    { id: 2, title: "Sed placerat.", price: "$12.00 - $15.00", image: salom4 },
    { id: 3, title: "Netus proin.", price: "$12.00 - $15.00", image: salom5 },
  ];

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const topcardhome = [
    {
      id: 1,
      img1: top1,
      title: "Mini LCW Chair",
      costt: "$56.00",
    },
    {
      id: 2,
      img1: top2,
      title: "Mini LCW Chair",
      costt: "$56.00",
    },
    {
      id: 3,
      img1: top3,
      title: "Mini LCW Chair",
      costt: "$56.00",
    },
    {
      id: 4,
      img1: top4,
      title: "Mini LCW Chair",
      costt: "$56.00",
    },
    {
      id: 5,
      img1: top4,
      title: "Mini LCW Chair",
      costt: "$56.00",
    },
    {
      id: 6,
      img1: top3,
      title: "Mini LCW Chair",
      costt: "$56.00",
    },
    {
      id: 7,
      img1: top2,
      title: "Mini LCW Chair",
      costt: "$56.00",
    },
    {
      id: 8,
      img1: top1,
      title: "Mini LCW Chair",
      costt: "$56.00",
    },
    {
      id: 9,
      img1: top1,
      title: "Mini LCW Chair",
      costt: "$56.00",
    },
    {
      id: 10,
      img1: top2,
      title: "Mini LCW Chair",
      costt: "$56.00",
    },
    {
      id: 11,
      img1: top3,
      title: "Mini LCW Chair",
      costt: "$56.00",
    },
    {
      id: 12,
      img1: top4,
      title: "Mini LCW Chair",
      costt: "$56.00",
    },
  ];

  const [posts1, setPosts1] = useState([
    {
      id: 1,
      pp: "SaberAli",
      pp1: "21 August,2020",
      title: "Top esssential Trends in 2021",
      description:
        "More off this less hello samlande lied muchover tightly circa horse taped mightly",
      extraText:
        "More off this less hello samlande lied muchover tightly circa horse taped mightly",
      showMore: false,
      image: late1,
    },
    {
      id: 2,
      pp: "SaberAli",
      pp1: "21 August,2020",
      title: "Top esssential Trends in 2021",
      description:
        "More off this less hello samlande lied muchover tightly circa horse taped mightly",
      extraText:
        "More off this less hello samlande lied muchover tightly circa horse taped mightly",
      showMore: false,
      image: late2,
    },
    {
      id: 3,
      pp: "SaberAli",
      pp1: "21 August,2020",
      title: "Top esssential Trends in 2021",
      description:
        "More off this less hello samlande lied muchover tightly circa horse taped mightly",
      extraText:
        "More off this less hello samlande lied muchover tightly circa horse taped mightly",
      showMore: false,
      image: late3,
    },
  ]);

  const toggleShowMore1 = (id) => {
    setPosts1((prevPosts) =>
      prevPosts.map((post1) =>
        post1.id === id ? { ...post1, showMore: !post1.showMore } : post1
      )
    );
  };

  const [selectedImage, setSelectedImage] = useState(home_kata1);

  const images = {
    rangli1: home_kata1,
    rangli2: rang1,
    rangli3: rang2,
  };

  const handleImageChange = (key) => {
    setSelectedImage(images[key]);
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
              <h3>{t("greeting")}</h3>
              <h1>{t("welcome")}</h1>
              <p>{t("changeLanguage")}</p>
              <NavLink to="shoping">
                <button>{t("btn")}</button>
              </NavLink>
            </div>
            <div className="banner_right">
              <img src={HomeImg1} alt="HOMEIMG1" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner">
            <div className="banner_center">
              <h3>{t("greeting")}</h3>
              <h1>{t("welcome")}</h1>
              <p>{t("changeLanguage")}</p>
              <NavLink to="shoping">
                <button>{t("btn")}</button>
              </NavLink>
            </div>
            <div className="banner_right">
              <img src={HomeImg1} alt="HOMEIMG1" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner">
            <div className="banner_center">
              <h3>{t("greeting")}</h3>
              <h1>{t("welcome")}</h1>
              <p>{t("changeLanguage")}</p>
              <NavLink to="shoping">
                <button>{t("btn")}</button>
              </NavLink>
            </div>
            <div className="banner_right">
              {/* <img src={HomeImg1} alt="HOMEIMG1" /> */}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <h1 className="home_shop_h1">{t("Featured")}</h1>
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
                      <FaHeart onClick={() => handleSelectCard(item)} />
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
                      <FaHeart onClick={() => handleSelectCard(item)} />
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
                      <FaHeart onClick={() => handleSelectCard(item)} />
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
        <h1 className="home_card111_h1">{t("Leatest")}</h1>

        <div className="home_card111_link">
          <p>{t("link1")}</p>
          <p>{t("link2")}</p>
          <p>{t("link3")}</p>
          <p>{t("link4")}</p>
        </div>
        <div className="home_cards_shop11112">
          {cards.slice(0, 3).map((item) => (
            <div key={item.id} className="shop_card_main">
              <div className="dddddd12">
                <img src={item.img} alt={item.title} className="cardDivImg" />
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
                  <FaHeart onClick={() => handleSelectCard(item)} />
                </div>
                <div>
                  <NavLink to={`/informations/${item.id}`}>
                    <FaSearchPlus />
                  </NavLink>
                </div>
              </div>
              <div className="home_shop_ticost">
                <h2>{item.title}</h2>

                <div className="card_cost">
                  <p>${item.cost}.00</p>
                  <del>${item.cost1}.00</del>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="home_cards_shop11112">
          {cards.slice(3, 6).map((item) => (
            <div key={item.id} className="shop_card_main">
              <div className="dddddd">
                <img src={item.img} alt={item.title} className="cardDivImg" />
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
                  <FaHeart onClick={() => handleSelectCard(item)} />
                </div>
                <div>
                  <NavLink to={`/informations/${item.id}`}>
                    <FaSearchPlus />
                  </NavLink>
                </div>
              </div>

              <div className="home_shop_ticost">
                <h2>{item.title}</h2>

                <div className="card_cost">
                  <p>${item.cost}.00</p>
                  <del>${item.cost1}.00</del>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="about_our">
        <h1>{t("whot1")}</h1>
        <div className="our_cards">
          <div className="our_card">
            <img src={About2} alt="" />
            <h2>{t("whot2")}</h2>
            <p>{t("whot3")}</p>
          </div>
          <div className="our_card">
            <img src={About3} alt="" />
            <h2>{t("whot2")}</h2>
            <p>{t("whot3")}</p>
          </div>
          <div className="our_card">
            <img src={About4} alt="" />
            <h2>{t("whot2")}</h2>
            <p>{t("whot3")}</p>
          </div>
          <div className="our_card">
            <img src={About5} alt="" />
            <h2>{t("whot2")}</h2>
            <p>{t("whot3")}</p>
          </div>
        </div>
      </div>

      {/* <div className="home_kata_page">
        <div className="home_kata_page_main">
          <div className="home_kata_page_left">
            <img src={home_kata1} alt="" />
          </div>
          <div className="home_kata_page_right">
            <h1>{t("kata1")}</h1>
            <div className="rang_text">
              <div className="rangli1"></div>
              <p>{t("kata2")}</p>
            </div>
            <div className="rang_text">
              <div 
                
              className="rangli2"></div>
              <p>{t("kata3")}</p>
            </div>
            <div className="rang_text">
              <div className="rangli3"></div>
              <p>{t("kata4")}</p>
            </div>
            <div className="btn_home_cost1">
              <NavLink to="/shoping">
                <button>{t("kata5")}</button>
              </NavLink>
              <div>
                <h3>{t("kata6")}</h3>
                <p>$32.00</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="home_kata_page">
        <div className="home_kata_page_main">
          <div className="home_kata_page_left">
            <img src={selectedImage} alt="Kata Preview" />
          </div>
          <div className="home_kata_page_right">
            <h1>{t("kata1")}</h1>
            <div
              className="rang_text"
              onClick={() => handleImageChange("rangli1")}
              style={{ cursor: "pointer" }}
            >
              <div className="rangli2"></div>
              <p>{t("kata2")}</p>
            </div>
            <div
              className="rang_text"
              onClick={() => handleImageChange("rangli2")}
              style={{ cursor: "pointer" }}
            >
              <div className="rangli1"></div>
              <p>{t("kata3")}</p>
            </div>
            <div
              className="rang_text"
              onClick={() => handleImageChange("rangli3")}
              style={{ cursor: "pointer" }}
            >
              <div className="rangli3"></div>
              <p>{t("kata4")}</p>
            </div>
            <div className="btn_home_cost1">
              <NavLink to="/shoping">
                <button>{t("kata5")}</button>
              </NavLink>
              <div>
                <h3>{t("kata6")}</h3>
                <p>$32.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="treding_page">
        <h1>{t("treding1")}</h1>
        <div className="home_cards_shop111123">
          {cards.slice(0, 4).map((item) => (
            <div key={item.id} className="shop_card_main23">
              <div className="dddddd123">
                <img src={item.img} alt={item.title} className="cardDivImg" />
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
                  <FaHeart onClick={() => handleSelectCard(item)} />
                </div>
                <div>
                  <NavLink to={`/informations/${item.id}`}>
                    <FaSearchPlus />
                  </NavLink>
                </div>
              </div>

              <h2 className="qaley">{item.title}</h2>

              <div className="card_cost123">
                <p>${item.cost}.00</p>
                <del>${item.cost1}.00</del>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="home_card80">
        {posts.map((post) => (
          <div className="blog_post11" key={post.id}>
            <div className="blog-content1">
              <p className="blog-meta1">
                <div className="blog_data1">
                  <span>{post.category}</span>
                  <span>{post.date}</span>
                </div>
              </p>
              <h1>{post.title}</h1>
              <p>
                {post.description}
                {post.showMore && <span> {post.extraText}</span>}
              </p>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleShowMore(post.id);
                }}
              >
                {post.showMore ? "Read Less..." : "Read More..."}
              </a>
            </div>
            <div className="blog_post12">
              <img src={post.image} alt={post.title} />
            </div>
          </div>
        ))}

        <div className="ofer1">
          <div className="ofer_cards1">
            <div className="ofer_cards_left">
              {offerProducts.slice(0, 2).map((product) => (
                <div
                  className="ofer_caard12"
                  key={product.id}
                  onClick={() => openModal(product)}
                >
                  <img src={product.image} alt={product.title} />
                  <div>
                    <h3>{product.title}</h3>
                    <p>{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="ofer_cards_left">
              {offerProducts.slice(2).map((product) => (
                <div
                  className="ofer_caard12"
                  key={product.id}
                  onClick={() => openModal(product)}
                >
                  <img src={product.image} alt={product.title} />
                  <div>
                    <h3>{product.title}</h3>
                    <p>{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {isModalOpen && selectedProduct && (
          <div className="modal" onClick={closeModal}>
            <div className="modal_content">
              <button className="close_modal" onClick={closeModal}>
                X
              </button>
              <img src={selectedProduct.image} alt={selectedProduct.title} />
              <h1>{selectedProduct.title}</h1>
              <h3>{selectedProduct.price}</h3>
              <div className="modal_icon">
                <h1>{/* <FaShoppingCart /> */}</h1>
                <h1>
                  {/* <div
                  onClick={() => handleHeartClick(item.id)}
                  style={{
                    cursor: "pointer",
                    color: likedCards.includes(item.id) ? "red" : "black",
                    fontSize: "24px",
                    transition: "color 0.3s ease-in-out",
                  }}
                >
                  <FaHeart  onClick={() => handleSelectCard(item)}/>
                </div> */}
                </h1>
              </div>
            </div>
          </div>
        )}

        <style jsx>{`
          .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
          }
          .modal_content {
            width: 350px;
            height: 500px;
            background: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            position: relative;
          }
          .close_modal {
            position: absolute;
            top: 10px;
            right: 10px;
            border: none;
            padding: 5px 10px;
            cursor: pointer;
          }
          .modal_content img {
            width: 100%;
            height: 30vh;
          }
        `}</style>
      </div>

      <div className="home121314_page">
        <h1>{t("treding2")}</h1>
        <div className="home121314_link">
          <NavLink to="/home12">{t("link5")}</NavLink>
          <NavLink to="/home13">{t("link6")}</NavLink>
          <NavLink to="/home14">{t("link7")}</NavLink>
        </div>
      </div>

      <Outlet />
      <div className="topcard">
        <h1>{t("top1")}</h1>
        <Swiper
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="topcard_row">
              {topcardhome.slice(0, 4).map((item) => (
                <div key={item.id} className="topcard_main">
                  <div className="topcard_img">
                    <img src={item.img1} alt={item.title} />
                    <div className="icon_overlay">
                      <FaShoppingCart
                        onClick={() => headleAdd(item)}
                        className="icon shopping_cart"
                      />
                    </div>
                  </div>
                  <h2>{item.title}</h2>
                  <h3>{item.costt}</h3>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="topcard_row">
              {topcardhome.slice(0, 4).map((item) => (
                <div key={item.id} className="topcard_main">
                  <div className="topcard_img">
                    <img src={item.img1} alt={item.title} />
                    <div className="icon_overlay">
                      <FaShoppingCart
                        onClick={() => headleAdd(item)}
                        className="icon shopping_cart"
                      />
                    </div>
                  </div>
                  <h2>{item.title}</h2>
                  <h3>{item.costt}</h3>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="topcard_row">
              {topcardhome.slice(0, 4).map((item) => (
                <div key={item.id} className="topcard_main">
                  <div className="topcard_img">
                    <img src={item.img1} alt={item.title} />
                    <div className="icon_overlay">
                      <FaShoppingCart
                        onClick={() => headleAdd(item)}
                        className="icon shopping_cart"
                      />
                    </div>
                  </div>
                  <h2>{item.title}</h2>
                  <h3>{item.costt}</h3>
                </div>
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="homeget">
        <div className="homeget_main">
          <h1 className="homeget_main_h1">{t("get1")}</h1>
          <NavLink to="/shoping">
            <button>{t("btn")}</button>
          </NavLink>
        </div>
      </div>
      <div className="leatest1">
        <h1 className="leatest1_h1">{t("get2")}</h1>
        <div className="leatest">
          {posts1.map((post1) => (
            <div className="leatest_post1" key={post1.id}>
              <div className="leatest-content1">
                <div className="leatest_post12">
                  <img src={post1.image} alt={post1.title} />
                </div>
                <p className="leatest-meta1">
                  <div className="leatest_data1">
                    <span>
                      <i className="iiiiiii">
                        <FaPencil />
                      </i>
                      {post1.pp}
                    </span>
                    <span>
                      <i className="iiiiiii1">
                        <FaCalendarAlt />
                      </i>
                      {post1.pp1}
                    </span>
                  </div>
                </p>
                <h1>{post1.title}</h1>
                <p>
                  {post1.description}
                  {post1.showMore && <span> {post1.extraText}</span>}
                </p>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleShowMore1(post1.id);
                  }}
                >
                  {post1.showMore ? "Read Less..." : "Read More..."}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
