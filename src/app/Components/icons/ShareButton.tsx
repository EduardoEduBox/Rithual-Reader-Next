import React from "react";
import { PiShareFat } from "react-icons/pi";
import { UseFirestore } from "@/app/Context/FirestoreContext";

type ShareButtonProps = {
  id?: number;
};

const ShareButton: React.FC<ShareButtonProps> = ({ id }) => {
  const { chapters } = UseFirestore();
  const currentChapter = chapters.find((chapter) => Number(chapter.id) === id);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          // title: document.title,
          title: `(૨¡Ƭષαℓ Cap: ${currentChapter?.name}`,
          text: "Opaaa, você está prestes a compartilhar essa obra prima, parabéns guerreiro! Estou muito orgulhoso. 🎉🎉🎉",
          url: `${window.location.protocol}//${window.location.hostname}:3000/caps/${id}`, // this is surely temporary, since this is the development URL
        });
        console.log("Successful share");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      console.error("Web Share API not supported in this browser");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        onClick={handleShare}
        className="flex flex-col items-center justify-center"
      >
        <PiShareFat size={24} />
        <p>-</p>
      </button>
    </div>
  );
};

export default ShareButton;
