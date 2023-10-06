import Link from "next/link";
import { useEffect, useRef } from "react";
import { UserAuth } from "@/app/Context/AuthContext";
import { signOut } from "firebase/auth/cordova";
import Image from "next/image";

const Navigation = ({
  tracker,
  position,
}: {
  tracker: boolean;
  position: "left" | "right";
}) => {
  // variable to track login and logout
  const { user, googleSignIn, logOut } = UserAuth();

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.error("bruh, you got an error!!" + error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error("bruh, you got an error!!" + error);
    }
  };

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;

    if (sectionEl) {
      if (tracker) {
        sectionEl.style.transition = "transform 0.2s ease";
        sectionEl.style.transform = "translateX(0)"; // Slide in from the left
      } else {
        sectionEl.style.transition = "transform 0.2s ease";
        sectionEl.style.transform = `translateX(${
          position === "left" ? 0 : "calc(100% + 1.5rem)"
        })`; // Initially hidden to the right or left
      }
    }
  }, [tracker, position]);

  return (
    <section
      id="hello"
      className="Navigation w-fit bg-[#bb5387] top-[3.76rem] pl-16 right-0 pr-[2vw] absolute z-50 flex flex-col justify-between"
      ref={sectionRef}
    >
      <div>
        <ul className="navUl text-right mt-[5vh] text-xl flex flex-col gap-[5vh]">
          <Link href={`/`}>
            <li>
              <a href="#">Home</a>
            </li>
          </Link>
          <li>
            <a href="https://rithual-wiki.com.br/">Wiki</a>
          </li>

          <hr className="w-[100%] h-[3px] bg-white" />
        </ul>
      </div>
      {!user ? (
        <ul className="text-right text-xl mb-32 flex flex-col gap-3">
          <li onClick={handleSignIn} className="text-lg">
            Login
          </li>
          <li onClick={handleSignIn} className="text-lg ">
            Registrar
          </li>
        </ul>
      ) : (
        <ul className="text-right mb-32">
          <Image
            src={user.photoURL}
            alt={`User picture`}
            width={50}
            height={50}
            className="shadow-2xl rounded-full ml-auto"
          />
          <li>{user.displayName}</li>
          <li onClick={handleSignOut} className="text-lg text-black">
            Sair
          </li>
        </ul>
      )}

      <div className="absolute left-[-1.5rem] top-0 h-full right-0 w-[1.5rem] bg-gradient-to-l from-[#622c47] to-transparent"></div>
    </section>
  );
};

export default Navigation;
