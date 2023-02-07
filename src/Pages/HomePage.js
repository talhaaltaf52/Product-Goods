import React from "react";
import Collage from "../Components/Collage/Collage";
import FeaturedProducts from "../Components/FeaturedProducts/FeaturedProducts";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import MainCarousel from "../Components/MainCarousel/MainCarousel";
import MainNavbar from "../Components/MainNavbar/MainNavbar";

const HomePage = () => {
  return (
    <>
      <Header />
      <MainNavbar />
      <MainCarousel />
      <FeaturedProducts />
      <Collage />
      <Footer />
    </>
  );
};

export default HomePage;
