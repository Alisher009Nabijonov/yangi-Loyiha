import React from "react";
import Svg from "../assets/info_svg.svg";

const Description = ({ t, setLanguage }) => {
  return (
    <div className="info1234567">
      <div className="info12345">
        <h2>Varius tempor.</h2>
        <p>
          Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
          ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
          varius ac est bibendum. Scelerisque a, risus ac ante. Velit
          consectetur neque, elit, aliquet. Non varius proin sed urna, egestas
          consequat laoreet diam tincidunt. Magna eget faucibus cras justo,
          tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla
        </p>
        <h1>More details</h1>
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
          {/* <img src={Svg} alt="" />
          <p>
            Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
            arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
            nec. Dui, massa viverr .
          </p> */}
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
        </div>{" "}
      </div>
    </div>
  );
};

export default Description;
