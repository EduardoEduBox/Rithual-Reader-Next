"use client";

import { useState } from "react";
import { PiDotsThreeOutlineThin, PiDotsThreeOutlineFill } from "react-icons/pi";
import ChaptersSection from "../ChaptersSection";

const pointsStyle: string = "h-12 w-auto ml-auto";

export const Dots = () => {
  const [togglePoints, setTogglePoints] = useState(false);
  const [showChaptersSection, setShowChaptersSection] = useState(false);

  const toggleChaptersSection = () => {
    setTogglePoints(!togglePoints);
    setShowChaptersSection(!showChaptersSection);
  };

  return (
    <>
      {togglePoints ? (
        // Render PiDotsThreeOutlineFill when togglePoints is true
        <PiDotsThreeOutlineFill
          className={pointsStyle}
          onClick={toggleChaptersSection}
        />
      ) : (
        // Render PiDotsThreeOutlineThin when togglePoints is false
        <PiDotsThreeOutlineThin
          className={pointsStyle}
          onClick={toggleChaptersSection}
        />
      )}

      {/* Render ChaptersSection when showChaptersSection is true */}
      {showChaptersSection && (
        <ChaptersSection onClose={toggleChaptersSection} />
      )}
    </>
  );
};
