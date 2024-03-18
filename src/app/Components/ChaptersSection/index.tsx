"use client";

import React, { useState, useLayoutEffect, useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";
import ChaptersNavegator from "./ChaptersNavegator";
import { UseFirestore } from "@/app/Context/FirestoreContext";

export type ChaptersSectionProps = {
  onClose?: () => void; // Optional prop
  toggleBodyState: () => void;
  id: number;
};

const ChaptersSection: React.FC<ChaptersSectionProps> = ({
  onClose,
  toggleBodyState,
  id,
}) => {
  const { chapters } = UseFirestore();

  useEffect(() => {
    console.log("chapters", chapters);
    console.log("id", id);
  }, [chapters, id]);

  const currentChapter = chapters.find((chapter) => Number(chapter.id) === id);

  if (!currentChapter) {
    // Handle the case when currentChapter is undefined
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <p>Esse capítulo não existe</p>
      </div>
    );
  }

  /////////////////////////////////////////////////////////////////////

  const [tooltipHeight, setTooltipHeight] = useState(0);

  const updateHeight = () => {
    const updatedVH = window.innerHeight;
    setTooltipHeight(updatedVH - 56);
  };

  useLayoutEffect(() => {
    // Calculate the actual viewport height
    const actualVH = window.innerHeight;

    // Subtract 56px from it
    const desiredHeight = actualVH - 56;

    // Set the height state
    setTooltipHeight(desiredHeight);

    // Add event listener
    window.addEventListener("resize", updateHeight);

    // Cleanup the event listener
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <section
      className="w-full bottom-[56px] left-0 absolute z-40 overflow-hidden text-shadow bg-black/80 backdrop-blur"
      style={{ height: `${tooltipHeight}px` }}
    >
      <div
        className="relative w-full h-[30%] px-6 py-[3vh] bg-no-repeat bg-center bg-cover border-b-8 border-neutral-400"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), transparent), url(${currentChapter.bcImage})`,
          boxShadow: "0px -36px 225px -9px rgba(0, 0, 0, 0.68)",
        }}
      >
        {/* Dark overlay div */}
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

        <div className="relative z-10">
          <div className="flex pb-4 items-center">
            <h1>
              <span className="font-medium drop-shadow-xl text-white">
                {currentChapter?.chapter}
              </span>
              <span className="font-semibold drop-shadow-xl text-purple-300">
                {currentChapter?.name}
              </span>
            </h1>
            {onClose && (
              <MdOutlineClose
                onClick={() => {
                  onClose(), toggleBodyState();
                }}
                className="w-auto h-8 ml-auto"
              >
                Close ChaptersSection
              </MdOutlineClose>
            )}
          </div>

          {/* Apply styling to limit the height and enable scrolling */}
          <div className="max-h-[14.5vh] overflow-y-auto text-base drop-shadow-xl">
            {currentChapter.description}
          </div>
        </div>
      </div>

      <ChaptersNavegator
        id={id}
        toggleBodyState={toggleBodyState}
      ></ChaptersNavegator>
    </section>
  );
};

export default ChaptersSection;
