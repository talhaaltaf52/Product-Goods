import React from "react";
import "./featuredproducts.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product1 from "../../Assets/FP1.jpg";
import Product2 from "../../Assets/FP2.jpg";
import Product3 from "../../Assets/FP3.jpg";
import Product4 from "../../Assets/FP4.jpg";
import Product5 from "../../Assets/FP5.jpg";
import Product6 from "../../Assets/FP6.png";
import Product7 from "../../Assets/FP7.jpg";
import Product8 from "../../Assets/FP8.jpg";
import Product9 from "../../Assets/FP9.jpg";
import Product10 from "../../Assets/FP10.jpg";
import Product11 from "../../Assets/FP11.png";
import Product12 from "../../Assets/FP12.jpg";
import Product13 from "../../Assets/FP13.jpg";
import Product14 from "../../Assets/FP14.jpg";
import Product15 from "../../Assets/FP15.jpg";

const FeaturedProducts = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="container-fluid FP_Fluid">
        <div className="container">
          <h3 className="slider_heading">Featured Products :</h3>
          <div>
            <Slider {...settings}>
              <div>
                <a href="https://amzn.to/3DNV2A9" target="_blank">
                  <img src={Product1} className="product_1" alt="Slider Img" />
                </a>
              </div>
              <div>
                <a href="https://amzn.to/3I37rTn" target="_blank">
                  <img
                    src={Product2}
                    className="product_1"
                    alt="Slider Image"
                  />
                </a>
              </div>
              <div>
                <a href="https://amzn.to/3jFyDOH" target="_blank">
                  <img
                    src={Product3}
                    className="product_1"
                    alt="Slider Image"
                  />
                </a>
              </div>
              <div>
                <a href="https://amzn.to/3X9ufFk" target="_blank">
                  <img
                    src={Product4}
                    className="product_1"
                    alt="Slider Image"
                  />
                </a>
              </div>
              <div>
                <a href="https://amzn.to/3I4OAaG" target="_blank">
                  <img
                    src={Product5}
                    className="product_1"
                    alt="Slider Image"
                  />
                </a>
              </div>
              <div>
                <a href="https://amzn.to/3RACQ2J" target="_blank">
                  <img
                    src={Product6}
                    className="product_1"
                    alt="Slider Image"
                  />
                </a>
              </div>
              <div>
                <a href="https://amzn.to/3HHqhxN" target="_blank">
                  <img
                    src={Product7}
                    className="product_1"
                    alt="Slider Image"
                  />
                </a>
              </div>
              <div>
                <a href="https://amzn.to/3HIL5Fe" target="_blank">
                  <img
                    src={Product8}
                    className="product_1"
                    alt="Slider Image"
                  />
                </a>
              </div>
              <div>
                <a href="https://amzn.to/3YpCT3m" target="_blank">
                  <img
                    src={Product9}
                    className="product_1"
                    alt="Slider Image"
                  />
                </a>
              </div>
              <div>
                <a href="https://amzn.to/3DOl0Dz" target="_blank">
                  <img
                    src={Product10}
                    className="product_1"
                    alt="Slider Image"
                  />
                </a>
              </div>
              <div>
                <a href="https://amzn.to/3Ybt7lY" target="_blank">
                  <img
                    src={Product11}
                    className="product_1"
                    alt="Slider Image"
                  />
                </a>
              </div>
              <div>
                <a href="https://amzn.to/3Y8BiQ3" target="_blank">
                  <img
                    src={Product12}
                    className="product_1"
                    alt="Slider Image"
                  />
                </a>
              </div>
              <div>
                <a href="https://amzn.to/40u24Ux" target="_blank">
                  <img
                    src={Product13}
                    className="product_1"
                    alt="Slider Image"
                  />
                </a>
              </div>
              <div>
                <a href="https://amzn.to/3Ygepdl" target="_blank">
                  <img
                    src={Product14}
                    className="product_1"
                    alt="Slider Image"
                  />
                </a>
              </div>
              <div>
                <a href="https://amzn.to/3RFMpgP" target="_blank">
                  <img
                    src={Product15}
                    className="product_1"
                    alt="Slider Image"
                  />
                </a>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
