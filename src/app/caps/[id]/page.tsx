// first lets do from mobile, and then we can start making the desktop version!

// Page.js
import React from "react";
import chapters from "@/Api/chaptersData";
import Footer from "@/app/Components/Footer";

export async function generateMetadata({ params }: { params: { id: number } }) {
  const product = params.id;

  return { title: "(૨¡Ƭષαℓ Cap: " + product }; // Use the product data to set the title dynamically
}

let idConverted = 0;

const Page = ({ params }: { params: { id: number } }) => {
  idConverted = Number(params.id);

  const currentChapter = chapters.find((chapter) => chapter.id === idConverted);

  if (!currentChapter) {
    // Handle the case when currentChapter is undefined
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <p>Esse capítulo não existe</p>
      </div>
    );
  }

  return (
    <>
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
      <Footer id={idConverted}></Footer>
    </>
  );
};

export default Page;
