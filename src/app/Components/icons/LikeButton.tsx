"use client";

import { useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { UseFirestore } from "@/app/Context/FirestoreContext";

const LikeButton = ({ id }: { id: number }) => {
  const { chapters } = UseFirestore();
  const currentChapter = chapters.find((chapter) => Number(chapter.id) === id);

  const [like, setLike] = useState(false);

  function toggleLike() {
    setLike(!like);
  }

  return (
    <div className="flex flex-col items-center justify-center">
      {like ? (
        <GoHeartFill
          onClick={toggleLike}
          className={`cursor-pointer text-red-500`}
        ></GoHeartFill>
      ) : (
        <GoHeart onClick={toggleLike} className={`cursor-pointer`}></GoHeart>
      )}
      <p>{currentChapter?.likes}</p>
    </div>
  );
};

export default LikeButton;
