"use client";

import { useState, useRef } from "react";
import { gsap } from "gsap";
import { PiDotsThreeOutlineThin, PiDotsThreeOutlineFill } from "react-icons/pi";
import ChaptersSection from "./ChaptersSection";

const Dots = ({ id }: { id: number }) => {
  const [togglePoints, setTogglePoints] = useState(false);
  const chaptersNavegatorRef = useRef<HTMLDivElement | null>(null);

  const pointsStyle: string = "h-12 w-auto ml-auto";

  const toggleBodyState = () => {
    const body = document.body;

    if (togglePoints) {
      body.classList.remove("overflow-hidden", "w-full");
    } else {
      body.classList.add("overflow-hidden", "w-full");
    }
  };

  const toggleChaptersSection = () => {
    const chaptersNavegator = chaptersNavegatorRef.current;

    if (togglePoints) {
      gsap.to(chaptersNavegator, {
        duration: 0.5,
        opacity: 0,
        display: "none",
        ease: "power1.inOut",
      });
    } else {
      gsap.to(chaptersNavegator, {
        duration: 0.5,
        opacity: 1,
        display: "block",
        ease: "power1.inOut",
      });
    }

    setTogglePoints(!togglePoints);
  };

  return (
    <>
      <div ref={chaptersNavegatorRef} className="opacity-0 hidden">
        <ChaptersSection
          onClose={toggleChaptersSection}
          id={id}
          toggleBodyState={toggleBodyState}
        />
      </div>
      {togglePoints ? (
        <PiDotsThreeOutlineFill
          className={pointsStyle}
          onClick={() => {
            toggleChaptersSection();
            toggleBodyState();
          }}
        />
      ) : (
        <PiDotsThreeOutlineThin
          className={pointsStyle}
          onClick={() => {
            toggleChaptersSection();
            toggleBodyState();
          }}
        />
      )}
    </>
  );
};

export default Dots;
