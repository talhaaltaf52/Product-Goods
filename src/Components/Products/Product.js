import React, { useState } from "react";
import "./products.css";
import ProductData from "./ProductData";

const Product = () => {
  const [name, setName] = useState("");
  return (
    <>
      <div style={{ backgroundColor: "#272727", paddingBottom: "40px" }}>
        <h1 className="heading_style"> products </h1>
        <input
          type="text"
          placeholder="Search By Name"
          className="card_input"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          autoComplete="off"
        />
        <div className="main_div">
          {ProductData.filter((val) => {
            if (name === "") {
              return val;
            } else if (val.sname.toLowerCase().includes(name.toLowerCase())) {
              return val;
            }
          }).map((val) => {
            return (
              <>
                <div className="card_item col-md-4 ">
                  <img src={val.imgscr} alt="dp" className="card_image" />
                  <h3 className="card_title"> {val.sname} </h3>
                  <span className="card_subtitle">$</span>
                  <span className="card_subtitle1">{val.price1} </span>
                  <span className="card_subtitle2">{val.price2}</span>
                  <a href={val.link} target="_blank">
                    <button className="button">shop now</button>
                  </a>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
