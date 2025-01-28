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
import Order from "./Pages/Order";
import { Dropdown } from "rsuite";
import { Toaster, toast } from "react-hot-toast";
import SearchItem from "./Pages/SearchItem";
import SearchItem12 from "./Pages/SearchItem12";
import SignUp from "./Pages/SignUp";
import dolor from "./Valyuta/Dolor";
import som from "./Valyuta/Som";
import ColorItem from './Pages/color-item'
const languages1 = { dolor, som };
import rang1 from "./assets/rang1.png";
import rang2 from "./assets/rang2.png";
import home_kata1 from "./assets/home_kata1.png";


const languages = { en, uz, ru };
function App() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter cards by title based on the search query
  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCards, setSelectedCards] = useState([]);

  const handleSelectCard = (item) => {
    setSelectedCards([...selectedCards, item]);
    toast.success("Mahsulot Sevimlilar bolimiga qoshildi");
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
    toast.success("Mahsulot Savatchaga saqlandi!");
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

  const [language1, setLanguage1] = useState("dolor");

  const t1 = (key) => languages1[language1]?.[key] || ` ${key}`;




  const colors = [
    "pink",
    "#06e8f8",
    "#be2edd",
    "#f9ca24",
    "#6ab04c",
    "rgb(211, 209, 209)",
  ];

  const setTheme = (color) => {
    document.documentElement.style.setProperty("--bg-color", color);
  };
  const setColor = (event) => {
    const currentColor = event.target.style.getPropertyValue("--bg-color");
    setTheme(currentColor);
    console.log(currentColor);
  };



  const [selectedCards1, setSelectedCards1] = useState([]);

  const handleSelectCard1= (item) => {
    setSelectedCards1([...selectedCards1, item]);
    toast.success("Mahsulot sevatchaga qoshildi");
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


  // const kataData = {
  //   leftImage: {
  //     src: selectedImage,
  //     alt: "Kata Preview",
  //   },
  //   rightContent: {
  //     title: t("kata1"),
  //     options: [
  //       { id: "rangli1", className: "rangli2", text: t("kata2") },
  //       { id: "rangli2", className: "rangli1", text: t("kata3") },
  //       { id: "rangli3", className: "rangli3", text: t("kata4") },
  //     ],
  //     button: {
  //       text: t("kata5"),
  //       link: "/shop",
  //     },
  //     cost: {
  //       title: t("kata6"),
  //       price: "$32.00",
  //     },
  //   },
  // };
  const kataData = [
    {
      id: 1,
      KataImg: selectedImage, 
      KataTitle: "Unique Features Of leatest &Trending Poducts",
      KataP1: "All frames constructed with hardwood solids and laminates",
      KataP2: "Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails",
      KataP3: "Arms, backs and seats are structurally reinforced",
      KataBtn: "Add To Cart",
      KataP4: "B&B Italian Sofa ",
      KataCost: "$32.00",
    }
  ]

  
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <RootLayout
            language1={language1}
            t1={t1}
            shop={shop}
            setLanguage={setLanguage}
            setLanguage1={setLanguage1}
            t={t}
            language={language}
            setSearchQuery={setSearchQuery}
            filteredCards={filteredCards}
            searchQuery={searchQuery}
            selectedCards={selectedCards}
            selectedCards1={selectedCards1}
            
            />
          }
          >
        <Route
          path="/"
          element={
            <Home
            cards={cards}
            headleAdd={headleAdd}
            setLanguage={setLanguage}
            t={t}
            t1={t1}
            handleHeartClick={handleHeartClick}
            likedCards={likedCards}
            handleSelectCard={handleSelectCard}
            handleImageChange={handleImageChange}
            kataData={kataData}
            handleSelectCard1={handleSelectCard1}
            />
          }
        >
          <Route path="home12" element={<Home12 />} />
          <Route path="home13" element={<Home13 />} />
          <Route path="home14" element={<Home14 />} />
        </Route>

        <Route
          path="pages"
          element={
            <Pages shop={shop} totalCost={totalCost} totalCost1={totalCost1} />
          }
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
              t1={t1}
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
              t1={t1}
              RemoveItem={RemoveItem}
              selectedCards1={selectedCards1}


            />
          }
        />
        <Route
          path="informations/:id"
          element={
            <Informations
              setLanguage={setLanguage}
              t={t}
              headleAdd={headleAdd}
            />
          }
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
          element={
            <Shop1
              cards={cards}
              t1={t1}
              headleAdd={headleAdd}
              handleHeartClick={handleHeartClick}
              likedCards={likedCards}
              handleSelectCard={handleSelectCard}
            />
          }
        />
        <Route path="login" element={<Login />} />
        <Route
          path="wishlist"
          element={
            <Wishlist
              selectedCards={selectedCards}
              RemoveItem={RemoveItem}
              setLanguage={setLanguage}
              t={t}
            />
          }
        />
        <Route
          path="order"
          element={<Order setLanguage={setLanguage} t={t} />}
        />
        <Route
          path="searchitem12"
          element={
            <SearchItem12
              headleAdd={headleAdd}
              setLanguage={setLanguage}
              t={t}
              handleHeartClick={handleHeartClick}
              likedCards={likedCards}
              handleSelectCard={handleSelectCard}
              filteredCards={filteredCards}
            />
          }
        />
        <Route path="signup" element={<SignUp />} />
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


    let [bars, setBars] = useState("close1");
    const [isOpen, setIsOpen] = useState(false);
    const toggleBars = () => {
      setBars("open1");
      setIsOpen(true);
    };
    const toggleBarsClose = () => {
      setBars("close1");
      setIsOpen(false);
    };
  return (
    <>
      <div className="App">
        <Toaster position="top-center" reverseOrder={true} />
        <div className={`color-switcher ${bars}`}>
        {!isOpen ? (
          <button className="color_btn_change" onClick={toggleBars}>
            <i className="fa-solid fa-gear"></i>
          </button>
        ) : (
          <button className="color_btn_change" onClick={toggleBarsClose}>
            <i className="fa-solid fa-times"></i>
          </button>
        )}
        
        {isOpen && (
          <>
            <h1 className="heading">Select Color</h1>
            <div className="color-list">
              {colors.map((color, id) => (
                <ColorItem key={id} setColor={setColor} color={color} />
              ))}
            </div>
          </>
        )}
      </div>

        <RouterProvider router={routes} />
      </div>
    </>
  );
}

export default App;
