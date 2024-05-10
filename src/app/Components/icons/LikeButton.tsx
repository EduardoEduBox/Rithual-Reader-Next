"use client";

import { useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { UseFirestore } from "@/app/Context/FirestoreContext";
import { UseAuth } from "@/app/Context/AuthContext";
import { db } from "@/app/firebase";
import getFirebaseDocumentId from "../FirebaseDocumentId";
import { doc, updateDoc } from "firebase/firestore";

const LikeButton = ({ id }: { id: number }) => {
  const { chapters } = UseFirestore();
  const { user } = UseAuth();

  const email = user?.email;
  const currentChapter = chapters.find((chapter) => Number(chapter.id) === id);

  console.log(user?.email);

  const [currentLikes, setCurrentLikes] = useState(
    currentChapter?.likes?.length
  );

  const likeChapter = async () => {
    const chapterId = await getFirebaseDocumentId("Chapters", "id", id);
    const chapterRef = doc(db, "Chapters", chapterId!.toString());

    // we need to check if the user already liked the chapter
    if (currentChapter?.likes?.includes(email)) {
      // if the user already liked the chapter, we need to remove the like
      const newLikes = currentChapter?.likes?.filter((like) => like !== email);
      await updateDoc(chapterRef, { likes: newLikes });

      // update the currentLikes state
      setCurrentLikes(newLikes?.length);
      console.log("like removed");
    } else {
      // if the user didn't like the chapter, we need to add the like
      const newLikes = currentChapter?.likes?.concat(email);
      await updateDoc(chapterRef, { likes: newLikes });

      // update the currentLikes state
      setCurrentLikes(newLikes?.length);
      console.log("like added");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <button onClick={likeChapter}>
        {currentChapter?.likes?.includes(email!) ? (
          <GoHeartFill className="text-red-500 cursor-pointer"></GoHeartFill>
        ) : (
          <GoHeart className="cursor-pointer"></GoHeart>
        )}
      </button>
      <p>{currentLikes}</p>
    </div>
  );
};

export default LikeButton;
