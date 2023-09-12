"use client";

import { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import { RiEyeCloseLine } from "react-icons/ri";
import Navigation from "./Navigation";

const Navbar = () => {
  const [isActive, setActive] = useState(false);
  const [tracker, setTracker] = useState(false);
  const [isScrollActive, setScrollActive] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [showNavigation, setShowNavigation] = useState(false);

  const navClass = "ml-auto h-[75%] w-auto z-[999] active";

  const toggleNav = () => {
    if (isActive && tracker) {
      setActive(false);
      setTracker(false);
    } else {
      setTracker(true);
      setActive(true);
    }
  };

  useEffect(() => {
    // the navigation component renders weirdly the first time, so this logic ensures that it will render just when
    // the whole navbar renders!
    if (!showNavigation) {
      setTimeout(() => {
        setShowNavigation(true);
      }, 200);
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (!isActive) {
        if (scrollY > prevScrollY) {
          setScrollActive(false);
        } else {
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
      className={`fixed top-0 w-full h-[3.8rem] bg-[#bb5387] opacity-90 z-20 flex items-center px-[3vw] transform transition-transform duration-300 ${
        isScrollActive ? "" : "-translate-y-[5.3rem]"
      }`}
    >
      <img
        src="/icons/logo.png"
        alt="rithual logo"
        className="h-[70%] w-auto rounded-lg border-rose-100 border-2"
      />

      <div className="w-[94vw] h-full absolute flex items-center justify-center">
        <h1 className="absolute text-3xl font-bold">(૨¡Ƭષαℓ</h1>
      </div>

      {showNavigation && (
        <Navigation tracker={tracker} position={isActive ? "left" : "right"} />
      )}

      {tracker ? (
        <RiEyeCloseLine className={navClass} onClick={toggleNav} />
      ) : (
        <FaEye className={navClass} onClick={toggleNav} />
      )}

      <div className="absolute bottom-[-1.48rem] left-0 right-0 h-[1.5rem] bg-gradient-to-b from-[#622c47] to-transparent"></div>
    </nav>
  );
};

export default Navbar;
