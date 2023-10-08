"use client";

import { useState } from "react";
import { PiDotsThreeOutlineThin, PiDotsThreeOutlineFill } from "react-icons/pi";
import ChaptersSection from "../ChaptersSection";

const pointsStyle: string = "h-12 w-auto ml-auto";

const Dots = ({ id }: { id: number }) => {
  const [togglePoints, setTogglePoints] = useState(false);
  const [showChaptersSection, setShowChaptersSection] = useState(false);

  const toggleBodyState = () => {
    const body = document.body;

    if (showChaptersSection) {
      body.classList.remove("overflow-hidden", "w-full");
    } else {
      body.classList.add("overflow-hidden", "w-full");
    }
  };

  const toggleChaptersSection = () => {
    setTogglePoints(!togglePoints);
    setShowChaptersSection(!showChaptersSection);
  };

  return (
    <>
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

      {/* Render ChaptersSection when showChaptersSection is true */}
      {showChaptersSection && (
        <ChaptersSection
          onClose={toggleChaptersSection}
          id={id}
          toggleBodyState={toggleBodyState}
        />
      )}
    </>
  );
};

export default Dots;
