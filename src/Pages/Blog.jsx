import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { NavLink, Outlet } from "react-router-dom";

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

  const posts = [
    {
      id: 1,
      title: "Mauris at orci non vulputate diam tincidunt nec.",
      date: "Aug 09 2020",
      category: "Fashion",
      image: Blog1,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    },
    {
      id: 2,
      title: "Aenean vitae in aliquam ultricies lectus. Etiam.",
      date: "Aug 09 2020",
      category: "Travel",
      image: Blog2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    },
    {
      id: 3,
      title: "Sit non congue feugiat nisl, mauris amet nisi.",
      date: "Aug 09 2020",
      category: "Surf Auxion",
      image: Blog3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    },
  ];

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
            <Swiper
              pagination={pagination}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
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
                        <p>{post.description}</p>
                        <a href="#">Read More...</a>
                      </div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
              <SwiperSlide>
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
                        <p>{post.description}</p>
                        <a href="#">Read More...</a>
                      </div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
              <SwiperSlide>
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
                        <p>{post.description}</p>
                        <a href="#">Read More...</a>
                      </div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
              <SwiperSlide>
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
                        <p>{post.description}</p>
                        <a href="#">Read More...</a>
                      </div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            </Swiper>

            <div className="blog_pas_right">
              <div className="blog_search">
                <h2>Search</h2>
                <input type="search" placeholder="Search..." />
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
                <div className="blog_card1">
                  <div>
                    <img src={blog4} alt="" />
                  </div>
                  <div>
                    <h3>It is a long established fact</h3>
                    <p>Aug 09 2020</p>
                  </div>
                </div>
                <div className="blog_card1">
                  <div>
                    <img src={blog5} alt="" />
                  </div>
                  <div>
                    <h3>It is a long established fact</h3>
                    <p>Aug 09 2020</p>
                  </div>
                </div>
                <div className="blog_card1">
                  <div>
                    <img src={blog6} alt="" />
                  </div>
                  <div>
                    <h3>It is a long established fact</h3>
                    <p>Aug 09 2020</p>
                  </div>
                </div>
                <div className="blog_card1">
                  <div>
                    <img src={blog7} alt="" />
                  </div>
                  <div>
                    <h3>It is a long established fact</h3>
                    <p>Aug 09 2020</p>
                  </div>
                </div>
              </div>

              {/*  */}
              <div className="recent">
                <h2>Sale Product</h2>
                <div className="blog_card1">
                  <div>
                    <img src={blog8} alt="" />
                  </div>
                  <div>
                    <h3>Elit ornare in enim mauris.</h3>
                    <p>Aug 09 2020</p>
                  </div>
                </div>
                <div className="blog_card1">
                  <div>
                    <img src={blog9} alt="" />
                  </div>
                  <div>
                    <h3>Elit ornare in enim mauris.</h3>
                    <p>Aug 09 2020</p>
                  </div>
                </div>
                <div className="blog_card1">
                  <div>
                    <img src={blog10} alt="" />
                  </div>
                  <div>
                    <h3>Elit ornare in enim mauris.</h3>
                    <p>Aug 09 2020</p>
                  </div>
                </div>
              </div>

              <div className="ofer">
                <h2>Offer product</h2>
                <div className="ofer_cards">
                  <div className="ofer_cards_left">
                    <div className="ofer_caard">
                      <img src={blog11} alt="" />
                      <h3>Duis lectus est.</h3>
                      <p>$12.00 - $15.00</p>
                    </div>
                    <div className="ofer_caard">
                      <img src={blog12} alt="" />
                      <h3>Sed placerat.</h3>
                      <p>$12.00 - $15.00</p>
                    </div>
                  </div>
                  <div className="ofer_cards_left">
                    <div className="ofer_caard">
                      <img src={blog13} alt="" />
                      <h3>Netus proin.</h3>
                      <p>$12.00 - $15.00</p>
                    </div>
                    <div className="ofer_caard">
                      <img src={blog14} alt="" />
                      <h3>Platea in.</h3>
                      <p>$12.00 - $15.00</p>
                    </div>
                  </div>
                </div>
              </div>

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
            <img src={blog15} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
