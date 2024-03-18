"use client";

import { UseAuth } from "@/app/Context/AuthContext";
import { MdSend } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';

import { Timestamp, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "@/app/firebase";
import { useState } from "react";
import getFirebaseDocumentId from "../FirebaseDocumentId";

const Input = ({ id }: { id: number }) => {
  const [comment, setComment] = useState('');
  const { user } = UseAuth();

  const sendMessage = async () => {
    const timestamp = Timestamp.now();
    const createdAt = timestamp.toDate().toISOString();

    // Objeto do novo comentário
    const newComment = {
      id: uuidv4(),
      content: comment,
      email: user!.email,
      likes: 0,
      nestedComments: [],
      profilePic: user!.photoURL,
      timePosted: createdAt,
      username: user!.displayName,
      edited: false
    }

    let chapterId = await getFirebaseDocumentId('Chapters', 'id', id);
    const chapterRef = doc(db, "Chapters", chapterId!.toString());

    await updateDoc(chapterRef, {
      comments: arrayUnion(newComment)
    });

    // Terminar tratamento...
  };

  if (user) {
    return (
      <div className="flex items-center w-full p-2 text-sm rounded-md bg-transparent border">
        <input
          type="text"
          placeholder="Faça um comentário"
          className="flex-grow outline-none bg-transparent"
          onChange={(e) => setComment(e.target.value)}
        />
        <MdSend
          className="w-6 h-6 ml-2 text-gray-500 cursor-pointer"
          onClick={sendMessage}
        />
      </div>
    );
  } else {
    return (
      <input
        type="text"
        placeholder="Você não está logado"
        className="w-full p-3 text-sm rounded-md bg-transparent border opacity-50 cursor-no-drop"
        disabled
      />
    );
  }
};

export default Input;
