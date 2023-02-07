import React from "react";
import "./collage.css";
import Collage1 from "../../Assets/Collage1.jpg";
import Collage2 from "../../Assets/Collage2.jpg";
import Collage3 from "../../Assets/Collage3.jpg";
import Collage4 from "../../Assets/Collage4.jpg";
import Collage5 from "../../Assets/Collage5.jpg";
import Collage6 from "../../Assets/Collage6.jpg";
import Collage7 from "../../Assets/Collage7.jpg";
import Collage8 from "../../Assets/Collage8.jpg";
import Collage9 from "../../Assets/Collage9.jpg";
import Collage10 from "../../Assets/Collage10.jpg";
import Collage11 from "../../Assets/Collage11.jpg";
import Collage12 from "../../Assets/Collage12.jpg";
import Collage13 from "../../Assets/Collage13.jpg";
import Collage14 from "../../Assets/Collage14.jpg";

const Collage = () => {
  return (
    <>
      <div
        className="conatiner-fluid"
        style={{ backgroundColor: "#272727", paddingBottom: "50px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="row">
                <div className="col-6">
                  <a href="https://amzn.to/3x1P9vn" target="_blank">
                    <img
                      src={Collage1}
                      className="Collage1"
                      alt="Product Images"
                    />
                  </a>
                </div>
                <div className="col-6">
                  <a href="https://amzn.to/3JMnmqk" target="_blank">
                    <img
                      src={Collage2}
                      className="Collage1"
                      alt="Product Images"
                    />
                  </a>
                </div>
                <div className="col-6 mt-3">
                  <a href="https://amzn.to/3jAN8Dh" target="_blank">
                    <img
                      src={Collage3}
                      className="Collage1"
                      alt="Product Images"
                    />
                  </a>
                </div>
                <div className="col-6 mt-3">
                  <a href="https://amzn.to/3RFeswH" target="_blank">
                    <img
                      src={Collage4}
                      className="Collage1"
                      alt="Product Images"
                    />
                  </a>
                </div>
                <div className="col-12 mt-3">
                  <a href="https://amzn.to/3Xg2xGW" target="_blank">
                    <img
                      src={Collage5}
                      className="Collage1"
                      alt="Product Images"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <a href="https://amzn.to/3X4O2FW" target="_blank">
                <img src={Collage6} className="Collage2" />
              </a>
            </div>
            <div className="col-md-3">
              <div className="row">
                <div className="col-12 mb-3">
                  <a href="https://amzn.to/3YbO8g6" target="_blank">
                    <img
                      src={Collage7}
                      className="Collage1"
                      alt="Product Images"
                    />
                  </a>
                </div>
                <div className="col-6">
                  <a href="https://amzn.to/3JR4EOm" target="_blank">
                    <img
                      src={Collage8}
                      className="Collage1"
                      alt="Product Images"
                    />
                  </a>
                </div>
                <div className="col-6">
                  <a href="https://amzn.to/3I5oWCG" target="_blank">
                    <img
                      src={Collage9}
                      className="Collage1"
                      alt="Product Images"
                    />
                  </a>
                </div>
                <div className="col-6 mt-3">
                  <a href="https://amzn.to/3HyuXpG" target="_blank">
                    <img
                      src={Collage10}
                      className="Collage1"
                      alt="Product Images"
                    />
                  </a>
                </div>
                <div className="col-6 mt-3">
                  <a href="https://amzn.to/3jyve4i" target="_blank">
                    <img
                      src={Collage11}
                      className="Collage1"
                      alt="Product Images"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="row">
                <div className="col-12 mb-3">
                  <a href="https://amzn.to/3HMRHTk" target="_blank">
                    <img
                      src={Collage12}
                      className="Collage3"
                      alt="Product Images"
                    />
                  </a>
                </div>
                <div className="col-12 mb-3">
                  <a href="https://amzn.to/3I3hw2t" target="_blank">
                    <img
                      src={Collage13}
                      className="Collage4"
                      alt="Product Images"
                    />
                  </a>
                </div>
                <div className="col-12">
                  <a href="https://amzn.to/3jJNlnH" target="_blank">
                    <img
                      src={Collage14}
                      className="Collage4"
                      alt="Product Images"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collage;
