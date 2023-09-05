"use client";

import { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import { RiEyeCloseLine } from "react-icons/ri";
import Navigation from "./Navigation";

const Navbar = () => {
  // State to track whether the icon is active or not
  const [isActive, setActive] = useState(false);
  const [tracker, setTracker] = useState(false);
  const [isScrollActive, setScrollActive] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const navClass: string = "ml-auto h-[75%] w-auto z-[999] active";

  const toggleNav = () => {
    if (isActive && tracker) {
      setTimeout(() => {
        setActive(false);
      }, 300);
      setTracker(false);
    } else {
      setTracker(true);
      setActive(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (!isActive) {
        // Check if isValid is false, if it is, then apply the scroll logic
        if (scrollY > prevScrollY) {
          // Scrolling down
          setScrollActive(false);
        } else {
          // Scrolling up
          setScrollActive(true);
        }
      }

      setPrevScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY, isActive]);

  return (
    <nav
      className={`fixed top-0 w-full h-[3.8rem] bg-[#bb5387] opacity-90 z-50 flex items-center px-[3vw] transform transition-transform duration-300 ${
        isScrollActive ? "" : "-translate-y-[5.3rem]"
      }`}
    >
      <img
        src="/icons/logo.png"
        alt="rithual logo"
        className="h-[70%] w-auto rounded-lg border-rose-100 border-2"
      />

      <div className="w-[94vw] h-full absolute flex items-center justify-center">
        <h1 className="absolute font-bold text-3xl">(૨¡Ƭષαℓ</h1>
      </div>

      {/* Conditionally render the icon based on isActive */}
      {tracker ? (
        <RiEyeCloseLine className={navClass} onClick={toggleNav} />
      ) : (
        <FaEye className={navClass} onClick={toggleNav} />
      )}

      {/* Conditionally render the Navigation component */}
      {isActive && <Navigation tracker={tracker} />}

      {/* here we have the div to simulate the after effect that we have in the Wiki */}
      <div className="absolute bottom-[-1.48rem] left-0 right-0 h-[1.5rem] bg-gradient-to-b from-[#622c47] to-transparent"></div>
    </nav>
  );
};

export default Navbar;
