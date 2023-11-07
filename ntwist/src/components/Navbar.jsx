import React, { useEffect, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import Button from "../page/Button";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    const navbar = document.querySelector(".header-section");
    window.onscroll = () => {
      handleScroll();
      if (window.scrollY > 50) {
        navbar.classList.add("nav-active");
      } else {
        navbar.classList.remove("nav-active");
      }
    };
  }, []);

  return (
    <div className={`home-bg-img ${isScrolled ? "scrolled" : ""}`}>
      <header className={`header-section ${isScrolled ? "scrolled" : ""}`}>
        <img
          className="logo before-scroll-img"
          src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png"
          alt="logo"
        />
        <img
          className="logo after-scroll-img"
          src="https://ntwist.com/wp-content/uploads/2021/12/ntwist-logo-dark.png"
          alt="logo"
        />
        <nav className="navbar">
          <ul className="nav-links">
            <li style={{ borderBottom: "1px solid black" }}>Home</li>
            <div
              className={`nav-item-dropdown nav-item ${
                isDropdownOpen ? "open" : ""
              }`}
              onClick={toggleDropdown}
              onMouseEnter={toggleDropdown}
              onMouseLeave={closeDropdown}
              style={{
                color: isScrolled ? "#496F88" : "#FFFFFF",
                fontWeight: "bold",
              }}
            >
              Industries <AiFillCaretDown />
              <div className="nav-item-dropdown-content">
                <a href="/project/sustainability-assistant">Sustainability</a>
                <a href="/metal-mining">Mineral Processing</a>
                <a href="/mine-to-mill-to-mine-optimization">
                  Mine-To-Mill-To-Mine Optimization
                </a>
                <a href="/oil-gas">Oil & Gas</a>
              </div>
            </div>

            <li>
              <a
                id="borderHover"
                style={{
                  textDecoration: "none",
                  color: isScrolled ? "#496F88" : "#FFFFFF",
                  fontWeight: "bold",
                }}
                href="/ai-software"
                className={isScrolled ? "scrolled" : ""}
              >
                AI Software
              </a>
            </li>
            <li id="borderHover1">Blog</li>
            <li id="borderHover2">Contact Us</li>
          </ul>
        </nav>
      </header>
      <div className="home-banner">
        <div className="home-banner-left">
          <h2>
            Data-powered solutions
            <br />
            for Industrial Excellence
          </h2>
          <Button
            text={"Read More"}
            textColor={"#fff"}
            bg={"#007aff"}
            fontSize={"0.9rem"}
            pl={"40px"}
            pr={"40px"}
            pt={"11px"}
            pb={"11px"}
          />
        </div>
        <div className="home-banner-right">
          <img
            src="https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;



