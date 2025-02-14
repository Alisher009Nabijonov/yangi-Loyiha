import React from "react";
import Svg from "../assets/info_svg.svg";

const Reviews = ({ t, setLanguage}) => {
  return (
    <div className="info1234567">
      <div className="info12345">
        <h2>{t("info5")}</h2>
        <p>
         {t("info6")}
        </p>
        <h1>{t("info7")}</h1>
        {/* <div className="info12345_pas1">
          <img src={Svg} alt="" />
          <p>
            Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
            arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
            nec. Dui, massa viverr .
          </p>
        </div>{" "}
        <div className="info12345_pas1">
          <img src={Svg} alt="" />
          <p>
            Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
            arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
            nec. Dui, massa viverr .
          </p>
        </div>{" "} */}
        <div className="info12345_pas1">
        <details>
            <summary className="read_morea">
              <img src={Svg} alt="" />
              <p>
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                vulputate nunc nec. Dui, massa viverr .
              </p>
            </summary>
            <p>
              Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
              arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
              nunc nec. Dui, massa viverr .
            </p>
          </details>
        </div>{" "}
        <div className="info12345_pas1">
        <details>
            <summary className="read_morea">
              <img src={Svg} alt="" />
              <p>
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                vulputate nunc nec. Dui, massa viverr .
              </p>
            </summary>
            <p>
              Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
              arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
              nunc nec. Dui, massa viverr .
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
