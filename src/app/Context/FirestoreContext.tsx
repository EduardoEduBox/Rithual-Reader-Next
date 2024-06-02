"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import getFirebaseDocumentId from "../Components/FirebaseDocumentId";

interface Comment {
  content: string;
  email: string;
  likes: number;
  nestedComments: [];
  profilePic: string;
  timePosted: string;
  username: string;
}

// Define the structure for a single chapter
interface Chapter {
  id: string; // Firestore document ID is a string
  chapter: string;
  name: string;
  description: string;
  likes?: string[]; // Add a question mark to make it optional
  bcImage: string;
  advice: string;
  prePage: string;
  pages: string[];
  comments: Comment[]; // Add this line assuming comments is an array of Comment objects
  views: number;
}

// Define the type for the Firestore context
interface FirestoreContextType {
  chapters: Chapter[];
  getChapters: () => Promise<void>;
  getCurrentChapter: (id: number) => Chapter | undefined;
  getViews: (id: number) => number | undefined;
  updateViews: (id: number) => Promise<void>;
}

interface FirestoreContextProviderProps {
  children: ReactNode;
}

const FirestoreContext = createContext<FirestoreContextType | undefined>(
  undefined
);

export const FirestoreContextProvider: React.FC<
  FirestoreContextProviderProps
> = ({ children }) => {
  const [chapters, setChapters] = useState<Chapter[]>([]);

  const getChapters = async () => {
    const chaptersCol = collection(db, "Chapters");
    const chapterSnapshot = await getDocs(chaptersCol);
    const chapterList = chapterSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Chapter[];
    setChapters(chapterList);
  };

  useEffect(() => {
    getChapters();
  }, []);

  const getCurrentChapter = (id: number) => {
    return chapters.find((chapter) => Number(chapter.id) === id);
  };

  const getViews = (id: number): number | undefined => {
    const chapter = getCurrentChapter(id);
    if (chapter) {
      return Number(chapter.views);
    }
  };

  const updateViews = async (id: number) => {
    const localStorageKey = `chapter_${id}_last_viewed`;
    const lastViewed = localStorage.getItem(localStorageKey);
    const currentTime = new Date().getTime();
    const thirtyMinutesInMillis = 30 * 60 * 1000;

    if (lastViewed) {
      const lastViewedTime = parseInt(lastViewed, 10);
      const timeDiff = currentTime - lastViewedTime;

      if (timeDiff < thirtyMinutesInMillis) {
        console.log(`Chapter ${id} was viewed recently. No update needed.`);
        return; // Do not update if last viewed within 30 minutes
      }
    }

    localStorage.setItem(localStorageKey, currentTime.toString());

    const chapterId = await getFirebaseDocumentId("Chapters", "id", id);
    const chapterRef = doc(db, "Chapters", chapterId!.toString());
    const chapterDoc = await getDoc(chapterRef);

    if (chapterDoc.exists()) {
      const currentViews = chapterDoc.data().views || 0;
      await updateDoc(chapterRef, { views: currentViews + 1 });

      // Update the local state
      setChapters((prevChapters) =>
        prevChapters.map((chapter) =>
          chapter.id === id.toString()
            ? { ...chapter, views: currentViews + 1 }
            : chapter
        )
      );

      console.log(`Updated views for chapter ${id}: ${currentViews + 1}`);
    } else {
      console.log(`Chapter ${id} does not exist in the database.`);
    }
  };

  return (
    <FirestoreContext.Provider
      value={{
        chapters,
        getChapters,
        getCurrentChapter,
        getViews,
        updateViews,
      }}
    >
      {children}
    </FirestoreContext.Provider>
  );
};

export const UseFirestore = (): FirestoreContextType => {
  const context = useContext(FirestoreContext);
  if (!context) {
    throw new Error(
      "useFirestore must be used within a FirestoreContextProvider"
    );
  }
  return context;
};
