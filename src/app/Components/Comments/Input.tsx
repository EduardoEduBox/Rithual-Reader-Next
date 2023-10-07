"use client";

import { UserAuth } from "@/app/Context/AuthContext";
import { MdSend } from "react-icons/md";

const Input = ({ id }: { id: number }) => {
  const { user } = UserAuth();

  const test = async () => {
    // const response = await fetch("http://localhost:8080/comment");
    // const data = await response.json();
    // console.log(data);
    console.log(user);
  };

  if (user) {
    return (
      <div className="flex items-center w-full p-3 text-sm rounded-md bg-transparent border">
        <input
          type="text"
          placeholder="Faça um comentário"
          className="flex-grow outline-none bg-transparent"
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
