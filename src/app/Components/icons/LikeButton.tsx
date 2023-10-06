"use client"

import { useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";

export const LikeButton = ({ size }: { size?: string }) => {
  const [like, setLike] = useState(false)

  function toggleLike() {
    setLike(!like)
  }

  return (
    <div className="flex flex-col items-center justify-center">
      {
        like ? 
        <GoHeartFill onClick={toggleLike} className={`${size} cursor-pointer text-red-500`}></GoHeartFill>
        :
        <GoHeart onClick={toggleLike} className={`${size} cursor-pointer`}></GoHeart>
      }
      <p className="text-xs">472</p>
    </div>
  );
};
// "h-7 w-auto"
