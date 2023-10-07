"use client";

import { FiChevronUp } from "react-icons/fi";

const BottomInformation = () => {
  return (
    <div className="w-full p-6">
      <div className="flex gap-4">
        <h1 className="text-4xl">
          <span className="font-bold text-pink-200">(૨¡Ƭષαℓ</span> Reader
        </h1>
        <div className="flex flex-col items-center">
          <FiChevronUp className="w-auto h-12 -m-2" />
          <p className="text-base">Caps</p>
        </div>
      </div>
    </div>
  );
};

export default BottomInformation;
