import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { UseFirestore } from "@/app/Context/FirestoreContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

interface HiddenDivProps {
  animateHiddenDiv: () => void;
}

const HiddenDiv: React.FC<HiddenDivProps> = ({ animateHiddenDiv }) => {
  const { chapters } = UseFirestore();

  return (
    <>
      <div className="flex mb-4">
        <h1 className="text-4xl">Capítulos</h1>
        <span className="absolute right-10" onClick={animateHiddenDiv}>
          <IoCloseSharp className="w-10 h-10" />
        </span>
      </div>

      <Swiper
        spaceBetween={10}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        className="mySwiper"
      >
        {chapters.map((chapter, index) => (
          <SwiperSlide key={index}>
            {/* Wrap the image and text in a div to control their layout */}
            <div className="flex flex-col justify-between h-full">
              <img
                src={chapter.prePage}
                alt={chapter.name}
                className="w-44 h-auto"
              />
              {/* Use flex-grow to push the text to the bottom */}
              <div className="flex-grow flex flex-col justify-end">
                <h1 className="text-center">{chapter.name}</h1>
                <p className="text-center text-xs px-10">
                  {chapter.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HiddenDiv;
