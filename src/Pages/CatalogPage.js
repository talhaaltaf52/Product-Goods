import React from "react";
import Header from "../Components/Header/Header";
import MainNavbar from "../Components/MainNavbar/MainNavbar";
import Product from "../Components/Products/Product";
import Footer from "../Components/Footer/Footer";

const CatalogPage = () => {
  return (
    <>
      <Header />
      <MainNavbar />
      <Product />
      <Footer />
    </>
  );
};

export default CatalogPage;
