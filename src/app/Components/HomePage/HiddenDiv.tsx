import React, { useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { UseFirestore } from "@/app/Context/FirestoreContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import gsap from "gsap";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

interface HiddenDivProps {
  animateHiddenDiv: () => void;
}

const HiddenDiv: React.FC<HiddenDivProps> = ({ animateHiddenDiv }) => {
  const { chapters } = UseFirestore();
  const [chapterIndex, setChapterIndex] = useState(0);
  const chapterTitleRef = useRef<HTMLHeadingElement>(null);
  const chapterDescriptionRef = useRef<HTMLParagraphElement>(null);

  const chaptersInOrder = chapters.sort((a, b) => Number(a.id) - Number(b.id));

  // Function to animate text change
  const animateTextChange = (index: number) => {
    const chapter = chaptersInOrder[index];
    if (!chapter) return;

    setChapterIndex(index);

    const titleAnimation = gsap.timeline();
    titleAnimation
      .to(chapterTitleRef.current, { opacity: 0, duration: 0.2 })
      .call(() => {
        if (chapterTitleRef.current)
          chapterTitleRef.current.textContent = chapter.name;
      })
      .to(chapterTitleRef.current, { opacity: 1, duration: 0.2 });

    const descriptionAnimation = gsap.timeline();
    descriptionAnimation
      .to(chapterDescriptionRef.current, { opacity: 0, duration: 0.2 })
      .call(() => {
        if (chapterDescriptionRef.current)
          chapterDescriptionRef.current.textContent = chapter.description;
      })
      .to(chapterDescriptionRef.current, { opacity: 1, duration: 0.2 });
  };

  return (
    <>
      <section className="flex flex-col py-10 h-[100svh]">
        <div className="flex items-center justify-center mb-4 w-full relative">
          <h1 className="text-3xl font-bold">
            {`Capítulo - ${chaptersInOrder[chapterIndex]?.id}`}
          </h1>
          <IoCloseSharp
            onClick={animateHiddenDiv}
            className="w-10 h-10 cursor-pointer absolute right-5"
          />
        </div>

        <hr className="w-5/6 mx-auto mb-4" />

        <div className="w-full flex flex-col h-full">
          <h1
            ref={chapterTitleRef}
            className="text-4xl text-center text-purple-300 font-semibold mb-5"
          >
            {chapters.length ? chapters[0].name : "Loading..."}
          </h1>

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 180,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
            onSlideChange={(swiper) => animateTextChange(swiper.activeIndex)}
          >
            {chaptersInOrder.map((chapter, index) => (
              <SwiperSlide key={index}>
                <div className="w-full flex flex-col items-center justify-center">
                  <img
                    src={chapter.prePage}
                    alt={`Capa do capítulo ${chapter.name}`}
                    className="shadow-2xl w-[55%] h-auto rounded-lg"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <p
            ref={chapterDescriptionRef}
            className="text-center text-base mt-6 px-10"
          >
            {chapters.length
              ? chapters[0].description
              : "Description loading..."}
          </p>

          <div className="w-full mt-auto flex items-center justify-center">
            <Link href={`/caps/${chaptersInOrder[chapterIndex]?.id}`} passHref>
              <button className="px-10 mx-auto bg-gradient-to-r from-purple-400 to-pink-400 text-white text-xl py-1 rounded-lg">
                Ler
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HiddenDiv;
