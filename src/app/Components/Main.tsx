import React from "react";
import { chaptersData } from "@/Api/chaptersData";

// first lets do from mobile, and then we can start making the desktop version!

const Main = () => {
  const currentChapter = chaptersData.chapters[0]; // You can adjust this based on user input

  return (
    <main className="flex flex-col items-center w-full py-24">
      <div className="w-[90%]">
        <h1 className="">{currentChapter.chapter}</h1>
        <div>
          <img src={currentChapter.advice} alt="" />
          <img src={currentChapter.prePage} alt="" />
          {currentChapter.pages.map((pageUrl, index) => (
            <img
              className="drop-shadow-lg"
              key={index}
              src={pageUrl}
              alt={`Page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
