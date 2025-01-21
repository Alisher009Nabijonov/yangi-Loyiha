import React, { useState, useEffect } from "react";
import "./App.css";
// malumotlar /////////
import { cards } from "./Malumotlar";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Home from "./layout/Home";
import Pages from "./Pages/Pages";
import Products from "./Pages/Products";
import Blog from "./Pages/Blog";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import Shoping from "./Pages/Shoping";
import Informations from "./layout/informations";
import Faq from "./Pages/Faq";
// import Navbar from "./layout/Navbar";
import About from "./Pages/About";
import CantactUs from "./Pages/CantactUs";
import Shop1 from "./Pages/Shop1";
import Login from "./Pages/Login";
import RootLayout from "./layout/RootLayout";
import Home12 from "./Help/Home12";
import Home13 from "./Help/Home13";
import Home14 from "./Help/Home14";

import ru from "./Languig/homeru";
import en from "./Languig/homeen";
import uz from "./Languig/homeuz";
import Description from "./HelpLink/Description";
import Info from "./HelpLink/Info";
import Reviews from "./HelpLink/Reviews";
import Video from "./HelpLink/Video";
import Wishlist from "./Pages/wishlist";
import Order from "./Pages/Order"
import { Dropdown } from "rsuite";
import { Toaster, toast } from "react-hot-toast";
import SearchItem from "./Pages/SearchItem";

const languages = { en, uz, ru };

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCards, setSelectedCards] = useState([]);

  
  const handleSelectCard = (item) => {
    setSelectedCards([...selectedCards, item]);
    toast.success('Mahsulot Sevimlilar bolimiga qoshildi')
  };

  const RemoveItem = (index) => {
    setSelectedCards(selectedCards.filter((item, i) => index !== i));
  };


  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedMode);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode);
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  const [shop, setShop] = useState([]);

  const [language, setLanguage] = useState("en");

  const t = (key) => languages[language]?.[key] || ` ${key}`;

  const headleAdd = (item) => {
    toast.success('Successfully toasted!')
    setShop((prevShop) => {
      const existingItem = prevShop.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevShop.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevShop, { ...item, quantity: 1 }];
      }
    });
  };
  let totalCost = shop.reduce((item, index) => item + parseInt(index.cost), 0);
  let totalCost1 = shop.reduce(
    (item, index) => item + parseInt(index.cost1),
    0
  );


  const [likedCards, setLikedCards] = useState([]);

  const handleHeartClick = (id) => {
    setLikedCards((prev) =>
      prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
    );
  };


  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout shop={shop} setLanguage={setLanguage} t={t}/>}>
        <Route
          path="/"
          element={
            <Home
              cards={cards}
              headleAdd={headleAdd}
              setLanguage={setLanguage}
              t={t}
              handleHeartClick={handleHeartClick}
              likedCards={likedCards}
              handleSelectCard={handleSelectCard} 
            />
          }
        >
          <Route path="home12" element={<Home12 />} />
          <Route path="home13" element={<Home13 />} />
          <Route path="home14" element={<Home14 />} />
        </Route>

        <Route
          path="pages"
          element={<Pages 
            shop={shop}
          totalCost={totalCost}
          totalCost1={totalCost1}/>}
        
        />
        <Route path="products" element={<Products />} />
        <Route path="blog" element={<Blog />} />
        <Route
          path="shop"
          element={
            <Shop
              cards={cards}
              headleAdd={headleAdd}
              setLanguage={setLanguage}
              t={t}
              handleHeartClick={handleHeartClick}
              likedCards={likedCards}
              handleSelectCard={handleSelectCard} 

            />
          }
        />
        <Route path="contact" element={<Contact />} />
        <Route
          path="shoping"
          element={
            <Shoping
              shop={shop}
              totalCost={totalCost}
              totalCost1={totalCost1}
            />
          }
        />
        <Route
          path="informations/:id"
          element={<Informations setLanguage={setLanguage} t={t}    headleAdd={headleAdd}/>}
        >
          <Route
            path="description"
            element={<Description setLanguage={setLanguage} t={t} />}
          />
          <Route
            path="info"
            element={<Info setLanguage={setLanguage} t={t} />}
          />
          <Route
            path="reviews"
            element={<Reviews setLanguage={setLanguage} t={t} />}
          />
          <Route
            path="video"
            element={<Video setLanguage={setLanguage} t={t} />}
          />
        </Route>
        <Route path="faq" element={<Faq setLanguage={setLanguage} t={t} />} />
        <Route
          path="about"
          element={<About setLanguage={setLanguage} t={t} />}
        />
        <Route path="cantactus" element={<CantactUs />} />
        <Route
          path="shop1"
          element={<Shop1 cards={cards} headleAdd={headleAdd} handleHeartClick={handleHeartClick}
          likedCards={likedCards}
          handleSelectCard={handleSelectCard} 

          />}
        />
        <Route path="login" element={<Login />} />
        <Route path="wishlist" element={<Wishlist selectedCards={selectedCards}  RemoveItem={RemoveItem} setLanguage={setLanguage} t={t}/>} />
        <Route path="order" element={<Order setLanguage={setLanguage} t={t}/>}/>
      </Route>
    )
  );

  // const CustomDropdown = ({ ...props }) => (
  //   <Dropdown {...props}>
  //    <div className="dropdovn1">
  //    <Dropdown.Item className="dropdovn1_btn">
  //       <button className="sdssesfgdsgr" onClick={() => setLanguage("uz")}>
  //         O'zbek
  //       </button>

  //     </Dropdown.Item>
  //     <Dropdown.Item className="dropdovn1_btn">
  //     <button className="sdssesfgdsgr" onClick={() => setLanguage("ru")}>
  //         Русский
  //       </button>
  //     </Dropdown.Item>
  //     <Dropdown.Item className="dropdovn1_btn">
  //     <button className="sdssesfgdsgr" onClick={() => setLanguage("en")}>
  //             English
  //           </button>
  //     </Dropdown.Item>
  //    </div>

  //   </Dropdown>
  // );
  return (
    <>
      <div className="App">
        {/* <SearchItem/> */}
        <Toaster position="top-center" reverseOrder={true} />

        {/* <Navbar /> */}
        {/* <div className="App">
          <button onClick={toggleTheme} className="theme-toggle-btn">
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div> */}

        <RouterProvider router={routes} />
      </div>
    </>
  );
}

export default App;
