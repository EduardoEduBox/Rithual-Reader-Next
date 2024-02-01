"use client";

import React from "react";
import { UseAuth } from "../Context/AuthContext";
import { MdArrowBack, MdNotifications, MdExitToApp } from "react-icons/md";
import { HiOutlineUserCircle } from "react-icons/hi2";

const Profile = () => {
  const { user, handleSignOut } = UseAuth();

  // Navigate back like browser's back button
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex items-center w-full mb-6 gap-3">
        <MdArrowBack onClick={handleBack} className="text-2xl cursor-pointer" />
        <div className="flex-grow"></div>
        <MdNotifications
          className="text-2xl cursor-pointer mx-2"
          // Add onClick to navigate to notifications
        />
        <MdExitToApp
          onClick={handleSignOut}
          className="text-2xl cursor-pointer"
        />
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
          <HiOutlineUserCircle
            className="w-full h-full object-cover"
            alt="Profile"
          />
        )}
      </div>

      {/* User information */}
      <div className="text-center mb-6">
        <h1 className="text-xl font-semibold">{user?.displayName}</h1>
        <p className="text-gray-600">{user?.email}</p>
      </div>

      {/* Action buttons */}
      <button
        className="px-4 py-2 mb-2 w-full bg-blue-500 text-white rounded-md"
        // Add onClick to navigate to notifications
      >
        Notificações
      </button>
      <button
        onClick={handleSignOut}
        className="px-4 py-2 w-full bg-red-500 text-white rounded-md"
      >
        Sair
      </button>
    </div>
  );
};

export default Profile;
