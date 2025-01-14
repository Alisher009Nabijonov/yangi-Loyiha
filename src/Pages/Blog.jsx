import React, { useRef, useState } from "react";

import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

import Blog1 from "../assets/20.png";
import Blog2 from "../assets/21.png";
import Blog3 from "../assets/22.png";

import blog4 from "../assets/23.png";
import blog5 from "../assets/24.png";
import blog6 from "../assets/25.png";
import blog7 from "../assets/26.png";

import blog8 from "../assets/27.png";
import blog9 from "../assets/28.png";
import blog10 from "../assets/29.png";

import blog11 from "../assets/30.png";
import blog12 from "../assets/31.png";
import blog13 from "../assets/32.png";
import blog14 from "../assets/33.png";

import blog15 from "../assets/15.png";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

export default function App() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Mauris at orci non vulputate diam tincidunt nec.",
      date: "Aug 09 2020",
      category: "Fashion",
      image: Blog1,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum.Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
      extraText:
        "Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
      showMore: false,
    },
    {
      id: 2,
      title: "Aenean vitae in aliquam ultricies lectus. Etiam.",
      date: "Aug 09 2020",
      category: "Travel",
      image: Blog2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum.",
      extraText:
        "Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
      showMore: false,
    },
    {
      id: 3,
      title: "Sit non congue feugiat nisl, mauris amet nisi.",
      date: "Aug 09 2020",
      category: "Surf Auxion",
      image: Blog3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum.",
      extraText:
        "Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
      showMore: false,
    },
  ]);

  const toggleShowMore = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, showMore: !post.showMore } : post
      )
    );
  };

  const [searchText, setSearchText] = useState("");

  const recentPosts = [
    {
      id: 1,
      title: "It is a long established fact",
      date: "Aug 09 2020",
      image: blog4,
    },
    {
      id: 2,
      title: "It is a long established fact",
      date: "Aug 09 2020",
      image: blog5,
    },
    {
      id: 3,
      title: "It is a long established fact",
      date: "Aug 09 2020",
      image: blog6,
    },
    {
      id: 4,
      title: "It is a long established fact",
      date: "Aug 09 2020",
      image: blog7,
    },
  ];

  const saleProducts = [
    {
      id: 1,
      title: "Elit ornare in enim mauris.",
      date: "Aug 09 2020",
      image: blog8,
    },
    {
      id: 2,
      title: "Elit ornare in enim mauris.",
      date: "Aug 09 2020",
      image: blog9,
    },
    {
      id: 3,
      title: "Elit ornare in enim mauris.",
      date: "Aug 09 2020",
      image: blog10,
    },
  ];

  const handleSearchChange = (e) => {
    setSearchText(e.target.value.toLowerCase());
  };

  const filteredRecentPosts = recentPosts.filter((post) =>
    post.title.toLowerCase().includes(searchText)
  );

  const filteredSaleProducts = saleProducts.filter((product) =>
    product.title.toLowerCase().includes(searchText)
  );

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const offerProducts = [
    {
      id: 1,
      title: "Duis lectus est.",
      price: "$12.00 - $15.00",
      image: blog11,
    },
    { id: 2, title: "Sed placerat.", price: "$12.00 - $15.00", image: blog12 },
    { id: 3, title: "Netus proin.", price: "$12.00 - $15.00", image: blog13 },
    { id: 4, title: "Platea in.", price: "$12.00 - $15.00", image: blog14 },
  ];

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [likedCards, setLikedCards] = useState([]);

  const handleHeartClick = (id) => {
    setLikedCards((prev) =>
      prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
    );
  };

  return (
    <>
      <div className="blog">
        <div className="blog_main">
          <div className="shop_title">
            <h1 className="title_h1">Blog Page</h1>
            <NavLink to="/">home.</NavLink>
            <NavLink to="/pages">Pages.</NavLink>
            <span className="title_span">Blog Page</span>
          </div>
          <div className="blog_pas_katta">
            <div className="blog_pas_left">
              <div className="blog_pas">
                {posts.map((post) => (
                  <div className="blog_post" key={post.id}>
                    <img src={post.image} alt={post.title} />
                    <div className="blog-content">
                      <p className="blog-meta">
                        <div className="blog_data">
                          <span>{post.category}</span>
                          <span>{post.date}</span>
                        </div>
                      </p>
                      <h3>{post.title}</h3>
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
                  </div>
                ))}
              </div>
            </div>
            <div className="blog_pas_right">
              <div className="blog_search">
                <h2>Search</h2>
                <input
                  type="search"
                  placeholder="Search..."
                  value={searchText}
                  onChange={handleSearchChange}
                />
              </div>
              <div className="blog_catigoriy">
                <h2>Categories</h2>
                <div className="catigoriy1">
                  <div className="catigoriy2">
                    <p className="catigoriy_pas_p">Hobbies (14)</p>
                    <p>Women (21)</p>
                    <p>Women (21)</p>
                  </div>
                  <div className="catigoriy3">
                    <p>Women (21)</p>
                    <p>Women (21)</p>
                    <p>Women (21)</p>
                  </div>
                </div>
              </div>

              <div className="recent">
                <h2>Recent Post</h2>
                {filteredRecentPosts.map((post) => (
                  <div className="blog_card1" key={post.id}>
                    <div>
                      <img src={post.image} alt={post.title} />
                    </div>
                    <div>
                      <h3>{post.title}</h3>
                      <p>{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="recent">
                <h2>Sale Product</h2>
                {filteredSaleProducts.map((product) => (
                  <div className="blog_card1" key={product.id}>
                    <div>
                      <img src={product.image} alt={product.title} />
                    </div>
                    <div>
                      <h3>{product.title}</h3>
                      <p>{product.date}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="ofer">
                <h2>Offer product</h2>
                <div className="ofer_cards">
                  <div className="ofer_cards_left">
                    {offerProducts.slice(0, 2).map((product) => (
                      <div
                        className="ofer_caard"
                        key={product.id}
                        onClick={() => openModal(product)}
                      >
                        <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p>{product.price}</p>
                      </div>
                    ))}
                  </div>
                  <div className="ofer_cards_left">
                    {offerProducts.slice(2).map((product) => (
                      <div
                        className="ofer_caard"
                        key={product.id}
                        onClick={() => openModal(product)}
                      >
                        <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p>{product.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {isModalOpen && selectedProduct && (
                <div className="modal">
                  <div className="modal_content">
                    <button className="close_modal" onClick={closeModal}>
                      X
                    </button>
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.title}
                    />
                    <h1>{selectedProduct.title}</h1>
                    <h3>{selectedProduct.price}</h3>
                    <div className="modal_icon">
                      <h1>
                        <FaShoppingCart />
                      </h1>
                      <h1>
                        {" "}
                        <FaHeart
                          onClick={() => handleHeartClick(offerProducts.id)}
                          style={{
                            cursor: "pointer",
                            color: likedCards.includes(offerProducts.id)
                              ? "red"
                              : "black",
                            fontSize: "24px",
                            transition: "color 0.3s ease-in-out",
                          }}
                        />
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
                  height: 400px;
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
                  height: auto;
                }
              `}</style>

              <div className="follower">
                <h2>Follow</h2>
                <div className="follower_icon">
                  <FaFacebookF />
                  <FaInstagram />
                  <FaTwitter />
                </div>
              </div>
              <div className="tags">
                <h2>Tages</h2>
                <div className="tags_a">
                  <div>
                    <a href="#">General</a>
                    <a href="#">Atsanil</a>
                    <a href="#">Insas.</a>
                  </div>
                  <div>
                    <a href="#">Bibsaas</a>
                    <a href="#">Nulla.</a>
                  </div>
                </div>
              </div>
            </div>
            <Outlet />
          </div>
          <div className="blog_img_ohir">
            {/* <img src={blog15} alt="" /> */}
          </div>
        </div>
      </div>
    </>
  );
}
