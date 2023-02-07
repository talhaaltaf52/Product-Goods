import React from "react";
import "./maincarousel.css";
import { Carousel } from "antd";

const MainCarousel = () => {
  return (
    <>
      <Carousel autoplay effect="fade">
        <div>
          <div className="slide1">
            <div className="container">
              <h1 className="heading">
                get <span style={{ color: "#f47f16" }}>start</span>
              </h1>
              <h1 className="heading_1">your favourite shoping</h1>
              <div style={{ marginLeft: "auto", marginRight: "auto" }}>
                <button className="buy_button">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="slide2"></div>
        </div>
        <div>
          <div className="slide3"></div>
        </div>
        <div>
          <div className="slide4"></div>
        </div>
        <div>
          <div className="slide5"></div>
        </div>
      </Carousel>
    </>
  );
};

export default MainCarousel;
