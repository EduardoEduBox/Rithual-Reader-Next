"use client";

import React from "react";
import { UseAuth } from "../Context/AuthContext";
import { MdArrowBack } from "react-icons/md";
import { HiOutlineUserCircle } from "react-icons/hi2";

const Profile = () => {
  const { user, handleSignOut } = UseAuth();

  // Navigate back like browser's back button
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="flex flex-col items-center p-4 pb-8 h-screen">
      <div className="flex items-center w-full mb-6 gap-3">
        <MdArrowBack onClick={handleBack} className="text-3xl cursor-pointer" />
        <div className="flex-grow"></div>
      </div>

      <div className="w-32 h-32 mb-4 rounded-full overflow-hidden">
        {/* User's profile picture */}
        {user?.photoURL ? (
          <img
            src={user?.photoURL}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        ) : (
          <HiOutlineUserCircle className="w-full h-full object-cover" />
        )}
      </div>

      {/* User information */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-semibold">{user?.displayName}</h1>
        <p className="text-gray-600 text-lg">{user?.email}</p>
      </div>

      <div className="w-full flex flex-col items-center h-[55%]">
        <hr className="w-5/6 opacity-50" />
        <h1 className="opacity-60 font-medium mt-3">Notificações</h1>
        <p className="opacity-20 text-sm">
          Trabalhando no sistema de notificações.
        </p>
      </div>

      {/* Action buttons */}
      <button
        onClick={handleSignOut}
        className="py-1 !mt-auto w-1/3 bg-red-500 text-white text-lg rounded-md"
      >
        Sair
      </button>
    </div>
  );
};

export default Profile;
