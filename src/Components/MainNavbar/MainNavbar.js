import React from "react";
import "./mainnavbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarLogo from "../../Assets/NavbarLogo.png";
import { Link, useLocation } from "react-router-dom";
import { AiFillYoutube } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const MainNavbar = () => {
  const location = useLocation();

  return (
    <Navbar
      expand="lg"
      style={{
        background: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
      }}
    >
      <Container>
        <Navbar.Brand>
          <img src={NavbarLogo} className="NavbarLogo" alt="Navbar Logo" />
          <span className="Nav_Heading">Product </span>
          <span className="Nav_Heading_1">&</span>
          <span className="Nav_Heading_2"> Goods</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="home_link">
              <span className={location.pathname === "/" ? "active" : ""}>
                Home
              </span>
            </Link>
            <Link to="/catalog" className="catalog_link">
              <span
                className={location.pathname === "/catalog" ? "active" : ""}
              >
                Catalog
              </span>
            </Link>
          </Nav>
          <Nav className="ml-auto">
            <div>
              <a
                className="yt_icon"
                href="https://www.youtube.com/channel/UCmIuQwAr8pIqY7SgocdscwQ?sub_confirmation=1"
                target="_blank"
              >
                <AiFillYoutube
                  color="#ff0000"
                  size="25"
                  style={{ cursor: "pointer" }}
                />
              </a>
              <a
                href="https://www.facebook.com/Product-Goods-107237268952721 "
                target="_blank"
              >
                <BsFacebook
                  color="#0676e8"
                  size="20"
                  style={{ cursor: "pointer" }}
                />
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
