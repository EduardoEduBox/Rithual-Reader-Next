import React from "react";
import { chapters } from "@/Api/chaptersData";

// first lets do from mobile, and then we can start making the desktop version!

export const currentChapter = chapters.find((chapter) => chapter.id === 0);

const Main = () => {
  // const currentChapter = chapters[3]; // You can adjust this based on user input

  if (!currentChapter) {
    // Handle the case when currentChapter is undefined
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <p>Esse capítulo não existe</p>
      </div>
    );
  }

  return (
    <main className="flex flex-col items-center w-full py-28 z-10">
      <div className="w-[90%]">
        <h1 className="MainBehindText absolute text-6xl top-24 -z-40 text-[#121212] opacity-[15%]">
          {currentChapter.name}
        </h1>

        <h1>
          <span className="font-medium">{currentChapter.chapter}</span>

          <span
            className="font-semibold"
            style={{ color: currentChapter.style }}
          >
            {currentChapter.name}
          </span>
        </h1>
        <div>
          <img src={currentChapter.advice} alt="" className="shadow-2xl" />
          <img src={currentChapter.prePage} alt="" className="shadow-2xl" />
          {currentChapter.pages.map((pageUrl, index) => (
            <img
              className="shadow-2xl"
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
