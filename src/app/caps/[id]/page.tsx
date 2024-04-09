"use client";

import Link from "next/link";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { UseFirestore } from "@/app/Context/FirestoreContext";

// import chapters from "@/Api/chaptersData";
import Navbar from "@/app/Components/NavBar";
import Footer from "@/app/Components/Footer";
import Input from "@/app/Components/Comments/Input";
import Comments from "@/app/Components/Comments";
import { useEffect, useState } from "react";
import Loading from "@/app/Components/Loading";

const Page = async ({ params }: { params: { id: number } }) => {
  const { chapters } = UseFirestore();
  const [loading, setLoading] = useState(true); // Added loading state

  const maxChapterId = chapters.length - 1;
  const idConverted = Number(params.id);

  const currentChapter = chapters.find(
    (chapter) => Number(chapter.id) === idConverted
  );

  // Generate metadata based on the current chapter
  const metaTitle = currentChapter
    ? `(૨¡Ƭષαℓ Cap: ${currentChapter.name}`
    : "Capítulo não encontrado";

  useEffect(() => {
    document.title = metaTitle;
  }, [metaTitle]);

  useEffect(() => {
    // Check if the chapters have loaded
    if (chapters.length > 0) {
      setLoading(false);
    }
  }, [chapters]);

  if (loading) {
    // Show a loading message or spinner
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  if (!currentChapter) {
    // Now this will only show if the chapters have loaded and the current chapter is indeed missing
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <p>Esse capítulo não existe</p>{" "}
        {/* Localized: This chapter does not exist */}
      </div>
    );
  }

  return (
    <>
      {/* Include the Navbar component here */}

      <Navbar />

      <main className="z-10 flex flex-col items-center w-full py-28">
        <div className="w-[95%]">
          <h1 className="MainBehindText absolute text-6xl top-24 -z-40 text-[#121212] opacity-[15%]">
            {currentChapter.name}
          </h1>

          <h1>
            <span className="font-medium">{currentChapter.chapter}</span>

            <span className="font-semibold text-purple-300">
              {currentChapter.name}
            </span>
          </h1>
          <div>
            <Image
              src={currentChapter.advice}
              alt="Página de aviso de leitura"
              width={940}
              height={1315}
              quality={100}
              className="shadow-2xl min-w-[95%]"
              placeholder="blur"
              blurDataURL={currentChapter.advice}
            />
            <Image
              src={currentChapter.prePage}
              alt={`Pré página do capítulo ${currentChapter.id}`}
              width={940}
              height={1315}
              quality={100}
              className="shadow-2xl min-w-[95%]"
              placeholder="blur"
              blurDataURL={currentChapter.prePage}
            />
            {currentChapter.pages.map((pageUrl, index) => (
              <Image
                className="shadow-2xl min-w-[95%]"
                key={index}
                src={pageUrl}
                alt={`Página ${index + 1}`}
                width={940}
                quality={100}
                height={1315}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center w-full h-24 px-5 overflow-hidden gap-3">
          {/* here i am gonna put the component */}
          <div className="w-full max-w-[68%]">
            <Input id={idConverted}></Input>
          </div>

          <div className="flex w-fit ml-auto gap-4">
            <div className="flex flex-col items-center justify-center w-auto h-full">
              {+currentChapter.id > 0 ? (
                <Link href={`/caps/${+currentChapter.id - 1}`}>
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
              {+currentChapter.id < maxChapterId ? (
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
        </div>
        <Comments id={idConverted}></Comments>
      </main>
      <Footer id={idConverted}></Footer>
    </>
  );
};

export default Page;
