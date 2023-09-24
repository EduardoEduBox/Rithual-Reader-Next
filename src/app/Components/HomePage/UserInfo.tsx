"use client";

import { UserAuth } from "@/app/Context/AuthContext";
import Image from "next/image";

const UserInfo = () => {
  const { user, googleSignIn, logOut } = UserAuth();

  if (user) {
    return (
      <div className="flex pl-3 p-3 mr-auto">
        <div className="flex flex-col items-center">
          <Image
            src={user.photoURL}
            alt={`User picture`}
            width={50}
            height={50}
            className="shadow-2xl rounded-full ml-auto"
          />
          <p onClick={logOut} className="text-sm">
            Sair
          </p>
        </div>
        <div className="flex justify-center text-base ml-3 pt-3">
          {user.displayName}
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center flex-col mr-auto pl-4 pt-3 w-fit gap-2">
        <p onClick={googleSignIn} className="text-sm">
          Login
        </p>
        <p onClick={googleSignIn} className="text-sm">
          Registrar
        </p>
      </div>
    );
  }
};

export default UserInfo;
