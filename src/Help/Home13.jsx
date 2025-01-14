import React from "react";
import { FaCheck } from "react-icons/fa";
import home_kata1 from "../assets/home_kata1.png";


const Home12 = () => {
  const Home12 = [
    {
      id: 1,
      title: "20% Discount Of All Products",
      title1: "Eams Sofa Compact",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.",
      lorem1: "Material expose like metals",
      lorem2: "Simple neutral colours.",
      lorem3: "Clear lines and geomatric figures",
      lorem4: "Material expose like metals",
      btn: "Shop Now",
      img: home_kata1,
    },
  ];
  return (
    <div>
      {Home12.map((item) => (
        <div key={item.id} className="home12_divv">
          <div className="home12_leftt">
            <h1>{item.title}</h1>
            <h3>{item.title1}</h3>
            <p>{item.lorem}</p>
            <div className="home12_loremm">
              <div className="home12_lorem1">
                <p><FaCheck />{item.lorem1}</p>
                <p><FaCheck />{item.lorem2}</p>
              </div>
              <div className="home12_lorem1">
                <p><FaCheck />{item.lorem3}</p>
                <p><FaCheck />{item.lorem4}</p>
              </div>
            </div>
            <button>{item.btn}</button>
          </div>
          <div className="home12_rightt">
            <img src={item.img} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home12;
