import React from "react";
import { MdArrowBack } from "react-icons/md";
import { HiOutlineUserCircle } from "react-icons/hi2";

const Loading = () => {
  return (
    <div className="flex flex-col items-center p-4 pb-8 h-screen">
      <div className="flex items-center w-full mb-6 gap-3">
        <MdArrowBack className="text-3xl cursor-pointer" />
        <div className="flex-grow"></div>
      </div>

      <div className="w-32 h-32 mb-4 rounded-full overflow-hidden">
        <HiOutlineUserCircle className="w-full h-full object-cover" />
      </div>

      <div className="text-center mb-6">
        <h1 className="text-2xl font-semibold">Singer Faksumi</h1>
        <p className="text-gray-600 text-lg">singerfaksumi@gmail.com</p>
      </div>

      <div className="w-full flex flex-col items-center h-[55%]">
        <hr className="w-5/6 opacity-50" />
        <h1 className="opacity-60 font-medium mt-3">Notificações</h1>
        <p className="opacity-20 text-sm">
          Trabalhando no sistema de notificações.
        </p>
      </div>

      <button className="py-1 !mt-auto w-1/3 bg-red-500 text-white text-lg rounded-md">
        Sair
      </button>
    </div>
  );
};

export default Loading;
