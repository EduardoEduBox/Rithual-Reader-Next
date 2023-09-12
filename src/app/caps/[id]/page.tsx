// first lets do from mobile, and then we can start making the desktop version!

// Page.js
import React from "react";
import chapters from "@/Api/chaptersData";
import Footer from "@/app/Components/Footer";
import Image from "next/image";
import Link from "next/link";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export async function generateMetadata({ params }: { params: { id: number } }) {
  const product = params.id;

  return { title: "(૨¡Ƭષαℓ Cap: " + product }; // Use the product data to set the title dynamically
}

const maxChapterId = chapters.length - 1;

const Page = ({ params }: { params: { id: number } }) => {
  const idConverted = Number(params.id);

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
      <main className="z-10 flex flex-col items-center w-full py-28">
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
            <Image
              src={currentChapter.advice}
              alt="Página de aviso de leitura"
              width={940}
              height={1315}
              className="shadow-2xl"
              placeholder="blur"
              blurDataURL={currentChapter.advice}
            />
            <Image
              src={currentChapter.prePage}
              alt={`Pré página do capítulo ${currentChapter.id}`}
              width={940}
              height={1315}
              className="shadow-2xl"
              placeholder="blur"
              blurDataURL={currentChapter.prePage}
            />
            {currentChapter.pages.map((pageUrl, index) => (
              <Image
                className="shadow-2xl"
                key={index}
                src={pageUrl}
                alt={`Página ${index + 1}`}
                width={940}
                height={1315}
                placeholder="blur"
                blurDataURL={pageUrl}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center w-full h-24 gap-8 px-5">
          <div className="flex flex-col items-center justify-center w-auto h-full ml-auto">
            {currentChapter.id > 0 ? (
              <Link href={`/caps/${currentChapter.id - 1}`}>
                <FiChevronLeft className="w-auto h-10" />
              </Link>
            ) : (
              <div className="opacity-50 cursor-not-allowed">
                <FiChevronLeft className="w-auto h-10" />
              </div>
            )}
            <h5 className="text-sm font-medium opacity-80">Ant.</h5>
          </div>
          <div className="flex flex-col items-center justify-center w-auto h-full">
            {currentChapter.id < maxChapterId ? (
              <Link href={`/caps/${currentChapter.id + 1}`}>
                <FiChevronRight className="w-auto h-10" />
              </Link>
            ) : (
              <div className="opacity-50 cursor-not-allowed">
                <FiChevronRight className="w-auto h-10" />
              </div>
            )}
            <h5 className="text-sm font-medium opacity-80">Prox.</h5>
          </div>
        </div>
      </main>
      <Footer id={idConverted}></Footer>
    </>
  );
};

export default Page;
