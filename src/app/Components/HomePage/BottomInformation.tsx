"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { FiChevronUp } from "react-icons/fi";
import HiddenDiv from "./HiddenDiv";

const BottomInformation = () => {
  const hiddenDivRef = useRef(null);
  const [checker, setChecker] = useState(false);

  useEffect(() => {
    gsap.set(hiddenDivRef.current, {
      scaleY: 0,
      transformOrigin: "bottom",
    });
  }, []);

  const animateHiddenDiv = () => {
    if (!checker) {
      gsap.to(hiddenDivRef.current, {
        scaleY: 1,
        ease: "power2.inOut",
      });
      setChecker(true);
    } else {
      gsap.to(hiddenDivRef.current, {
        scaleY: 0,
        ease: "power2.inOut",
      });
      setChecker(false);
    }
  };

  return (
    <>
      <div
        ref={hiddenDivRef}
        className="w-[100vw] h-[100svh] absolute backdrop-blur bg-black/40 z-50 overflow-hidden flex flex-col items-center"
      >
        <HiddenDiv animateHiddenDiv={animateHiddenDiv} />
      </div>
      <div className="w-full p-6 bg-gradient-to-t from-black transparent">
        <div className="flex gap-4 mb-8">
          <h1 className="text-4xl">
            <span className="font-bold text-pink-200">(૨¡Ƭષαℓ</span> Reader
          </h1>
          <div className="flex flex-col items-center">
            <FiChevronUp
              onClick={animateHiddenDiv}
              className="w-auto h-12 -m-3 animate-bounce"
            />
            <p className="text-base">Caps</p>
          </div>
        </div>
        <div>
          <p className="text-base mb-10">
            Boas-vindas ao Rithual Reader, o local onde a imaginação ganha vida.
            Explore um universo enigmático de demônios, humanos e poderes
            ocultos.
          </p>
        </div>
      </div>
    </>
  );
};

export default BottomInformation;
