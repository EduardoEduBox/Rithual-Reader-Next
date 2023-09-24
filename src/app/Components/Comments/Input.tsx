"use client";

import { UserAuth } from "@/app/Context/AuthContext";

const Input = () => {
  const { user } = UserAuth();

  if (user) {
    return (
      <input
        type="text"
        placeholder="Faça um comentário"
        className="w-full p-3 text-sm rounded-md bg-transparent border"
      />
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
