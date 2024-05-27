"use client";

import { useEffect, useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { UseFirestore } from "@/app/Context/FirestoreContext";
import { UseAuth } from "@/app/Context/AuthContext";
import { db } from "@/app/firebase";
import getFirebaseDocumentId from "../../FirebaseDocumentId";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import LogInWarningModal from "./LogInWarningModal";

const LikeButton = ({ id }: { id: number }) => {
  const { chapters } = UseFirestore();
  const { user } = UseAuth();

  const email = user?.email;
  const currentChapter = chapters.find((chapter) => Number(chapter.id) === id);

  const [isLiked, setIsLiked] = useState(
    currentChapter?.likes?.includes(email)
  );
  const [likeCount, setLikeCount] = useState(
    currentChapter?.likes?.length || 0
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsLiked(currentChapter?.likes?.includes(email));
    setLikeCount(currentChapter?.likes?.length || 0);
  }, [currentChapter, email]);

  const likeChapter = async () => {
    if (!email) {
      setIsModalOpen(true);
      return;
    }

    const chapterId = await getFirebaseDocumentId("Chapters", "id", id);
    const chapterRef = doc(db, "Chapters", chapterId!.toString());
    const docSnap = await getDoc(chapterRef);

    if (!docSnap.exists()) {
      console.log("Document does not exist!");
      return;
    }

    const chapterData = docSnap.data();
    const userLikes = chapterData.likes || [];
    const alreadyLiked = userLikes.includes(email);

    if (alreadyLiked) {
      const newLikes: string[] = userLikes.filter(
        (like: string) => like !== email
      );
      await updateDoc(chapterRef, { likes: newLikes });
      setIsLiked(false);
      setLikeCount(newLikes.length);
      console.log(`unliked chapter: ${id} by ${email}`);
    } else {
      const newLikes = [...userLikes, email];
      await updateDoc(chapterRef, { likes: newLikes });
      setIsLiked(true);
      setLikeCount(newLikes.length);
      console.log(`liked chapter: ${id} by ${email}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <button onClick={likeChapter} className="focus:outline-none h-full">
        {isLiked ? (
          <GoHeartFill className="text-red-500 h-full cursor-pointer" />
        ) : (
          <GoHeart className="cursor-pointer h-full" />
        )}
      </button>
      <p>{likeCount}</p>
      <LogInWarningModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default LikeButton;
