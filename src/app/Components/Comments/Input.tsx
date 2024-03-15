"use client";

import { UseAuth } from "@/app/Context/AuthContext";
import { MdSend } from "react-icons/md";

import { Timestamp, arrayUnion, collection, doc, getDoc, getDocs, getFirestore, updateDoc, where } from "firebase/firestore";
import { db } from "@/app/firebase";
import { useState } from "react";
import { query } from "firebase/database";
import firebase from "firebase/compat/app";

const Input = ({ id }: { id: number }) => {
  const [comment, setComment] = useState('');

  const { user } = UseAuth();

  const test = async () => {
    // const response = await fetch("http://localhost:8080/comment");
    // const data = await response.json();
    // console.log(data);
    
    // Timestamp do firestore para pegar o dia além do horário exato (formato 1970-01-01T00:00:00Z)
    // https://firebase.google.com/docs/reference/js/v8/firebase.firestore.Timestamp
    const timestamp = Timestamp.now();
    const createdAt = timestamp.toDate().toISOString();

    // Objeto do novo comentário
    const newComment = {
      content: comment,
      email: user!.email,
      likes: 0,
      nestedComments: [],
      profilePic: user!.photoURL,
      timePosted: createdAt,
      username: user!.displayName
    }

    // Percorre por toda a coleção, então filtra, 
    // e pega o documento do cap atual a partir do field "id"  

    var chapterId;
    const docQuery = query(collection(db, "Chapters"), where("id", "==", id));
    const querySnapshot = await getDocs(docQuery);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      chapterId = doc.id
    });

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
          onClick={test}
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
