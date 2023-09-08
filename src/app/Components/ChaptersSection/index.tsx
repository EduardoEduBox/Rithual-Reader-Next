import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { currentChapter } from "../Main";
import { ChaptersNavegator } from "./ChaptersNavegator";

type ChaptersSectionProps = {
  onClose?: () => void; // Optional prop
};

const ChaptersSection: React.FC<ChaptersSectionProps> = ({ onClose }) => {
  if (!currentChapter) {
    // Handle the case when currentChapter is undefined
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <p>Esse capítulo não existe</p>
      </div>
    );
  }

  return (
    <section className="ToolTip w-full bg-neutral-900 bottom-[56px] left-0 absolute z-40">
      <div
        className="relative w-full h-[30%] px-6 py-[3vh] bg-no-repeat bg-center bg-cover border-double border-b-8 border-neutral-400"
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
              <span
                className="font-semibold drop-shadow-xl"
                style={{ color: currentChapter.style }}
              >
                {currentChapter?.name}
              </span>
            </h1>
            {onClose && (
              <MdOutlineClose onClick={onClose} className="w-auto h-8 ml-auto">
                Close ChaptersSection
              </MdOutlineClose>
            )}
          </div>

          {/* Apply styling to limit the height and enable scrolling */}
          <div className="max-h-[14.5vh] overflow-y-auto">
            <p className="text-base drop-shadow-xl">
              {currentChapter.description}
            </p>
          </div>
        </div>
      </div>

      <ChaptersNavegator></ChaptersNavegator>
    </section>
  );
};

export default ChaptersSection;
