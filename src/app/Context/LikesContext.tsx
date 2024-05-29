"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/app/firebase";
import { UseAuth } from "@/app/Context/AuthContext";
import { UseFirestore } from "@/app/Context/FirestoreContext";
import getFirebaseDocumentId from "../Components/FirebaseDocumentId";

interface LikesContextType {
  likes: { [key: number]: string[] };
  toggleLike: (chapterId: number) => Promise<void>;
  likeLoadingStates: { [key: number]: boolean };
}

const LikesContext = createContext<LikesContextType | undefined>(undefined);

interface LikesProviderProps {
  children: ReactNode;
}

export const LikesContextProvider: React.FC<LikesProviderProps> = ({
  children,
}) => {
  const { chapters } = UseFirestore();
  const { user } = UseAuth();
  const [likes, setLikes] = useState<{ [key: number]: string[] }>({});
  const [likeLoadingStates, setLikeLoadingStates] = useState<{
    [key: number]: boolean;
  }>({});

  useEffect(() => {
    const likesData: { [key: number]: string[] } = {};
    chapters.forEach((chapter) => {
      likesData[Number(chapter.id)] = chapter.likes || [];
    });
    setLikes(likesData);
  }, [chapters]);

  const toggleLike = async (id: number) => {
    const chapterId = await getFirebaseDocumentId("Chapters", "id", id);

    const email = user?.email;
    if (!email) return; // Handle the case where the user is not logged in

    setLikeLoadingStates((prevStates) => ({
      ...prevStates,
      [id]: true,
    })); // Set loading to true for the specific chapter

    const chapterRef = doc(db, "Chapters", chapterId!.toString());
    const docSnap = await getDoc(chapterRef);

    if (!docSnap.exists()) {
      console.log("Document does not exist!");
      setLikeLoadingStates((prevStates) => ({
        ...prevStates,
        [id]: false,
      })); // Set loading to false if the document doesn't exist
      return;
    }

    const chapterData = docSnap.data();
    const userLikes = chapterData.likes || [];
    const alreadyLiked = userLikes.includes(email);

    let newLikes;
    if (alreadyLiked) {
      newLikes = userLikes.filter((like: string) => like !== email);
    } else {
      newLikes = [...userLikes, email];
    }

    await updateDoc(chapterRef, { likes: newLikes });
    setLikes((prevLikes) => ({
      ...prevLikes,
      [id]: newLikes,
    }));

    setLikeLoadingStates((prevStates) => ({
      ...prevStates,
      [id]: false,
    })); // Set loading to false after the like has been toggled
  };

  return (
    <LikesContext.Provider value={{ likes, toggleLike, likeLoadingStates }}>
      {children}
    </LikesContext.Provider>
  );
};

export const useLikes = (): LikesContextType => {
  const context = useContext(LikesContext);
  if (context === undefined) {
    throw new Error("useLikes must be used within a LikesProvider");
  }
  return context;
};
