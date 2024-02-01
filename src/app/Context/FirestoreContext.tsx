"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

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
  style: string;
  bcImage: string;
  advice: string;
  prePage: string;
  pages: string[];
  comments: Comment[]; // Add this line assuming comments is an array of Comment objects
}

// Define the type for the Firestore context
interface FirestoreContextType {
  chapters: Chapter[];
  getChapters: () => Promise<void>;
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

  return (
    <FirestoreContext.Provider value={{ chapters, getChapters }}>
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
