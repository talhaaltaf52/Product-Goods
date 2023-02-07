import React, { useState } from "react";
import "./footer.css";
import FooterImg from "../../Assets/FooterLogo.png";
import { AiFillYoutube } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { SlEmotsmile } from "react-icons/sl";

const Footer = () => {
  return (
    <>
      <div
        className="container-fluid"
        style={{
          backgroundColor: "#272727",
          paddingTop: "50px",
          borderTop: "1px solid #f47f16",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src={FooterImg} className="FooterImg" alt="Footer Logo" />
            </div>
            <div className="col-md-4">
              <h4 className="footer_heading">Quick Links :</h4>
              <a
                href="https://www.youtube.com/channel/UCmIuQwAr8pIqY7SgocdscwQ?sub_confirmation=1"
                target="_blank"
              >
                <AiFillYoutube
                  className="icon"
                  color="#ff0000"
                  size="30"
                  style={{ cursor: "pointer" }}
                />
              </a>
              <a
                href="https://www.facebook.com/Product-Goods-107237268952721"
                target="_blank"
              >
                <BsFacebook color="#0676e8" size="20" className="fb_icon" />
              </a>

              <h4 className="footer_heading1">
                Subscriber to our channel
                <SlEmotsmile
                  size={20}
                  style={{ marginBottom: "7px", marginLeft: "5px" }}
                />
              </h4>
              <a
                href="https://www.youtube.com/channel/UCmIuQwAr8pIqY7SgocdscwQ?sub_confirmation=1"
                target="_blank"
              >
                <button className="footer_btn">Subscribe</button>
              </a>
            </div>
            <div className="col-md-4">
              <h4 className="footer_heading">Our Mission :</h4>
              <p className="footer_subheading">
                Share information,store details and brand content with our
                customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
