import React from "react";
import Svg from "../assets/info_svg.svg";

const Description = ({ t, setLanguage}) => {
  return (
    <div className="info1234567">
      <div className="info12345">
        <h2>{t("info5")}</h2>
        <p>
         {t("info6")}
        </p>
        <h1>More details</h1>
        <div className="info12345_pas1">
          <img src={Svg} alt="" />
          <p>
         {t("info7")}
        </p>
        </div>{" "}
        <div className="info12345_pas1">
          <img src={Svg} alt="" />
          <p>
         {t("info7")}
        </p>
        </div>{" "}
        <div className="info12345_pas1">
          <img src={Svg} alt="" />
          <p>
         {t("info7")}
        </p>
        </div>{" "}
        <div className="info12345_pas1">
          <img src={Svg} alt="" />
          <p>
         {t("info7")}
        </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
