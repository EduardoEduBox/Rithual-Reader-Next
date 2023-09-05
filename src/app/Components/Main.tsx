import React from "react";
import { chapters } from "@/Api/chaptersData";

// first lets do from mobile, and then we can start making the desktop version!

const Main = () => {
  const currentChapter = chapters[1]; // You can adjust this based on user input

  return (
    <main className="flex flex-col items-center w-full py-24">
      <div className="w-[90%]">
        <h1
          dangerouslySetInnerHTML={{
            __html: currentChapter.chapter + currentChapter.name,
          }}
        ></h1>
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
