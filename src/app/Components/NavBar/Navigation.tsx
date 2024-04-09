import Link from "next/link";
import { useEffect, useRef } from "react";
import { UseAuth } from "@/app/Context/AuthContext";

const Navigation = ({
  tracker,
  position,
}: {
  tracker: boolean;
  position: "left" | "right";
}) => {
  // variable to track login and logout
  const { user, handleSignIn, handleSignOut } = UseAuth();

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
      className="Navigation w-fit bg-[#bb5387] top-[3.76rem] pl-16 right-0 pr-[2vw] absolute z-50 flex flex-col justify-between"
      ref={sectionRef}
    >
      <div>
        <ul className="navUl text-right mt-[5vh] text-xl flex flex-col gap-[5vh]">
          <Link href={`/`}>
            <li>Home</li>
          </Link>
          <li>
            <a href="https://rithual-wiki.com.br/">Wiki</a>
          </li>

          {user ? (
            <>
              <Link href={`/profile`}>
                <li>Perfil</li>
              </Link>
              <li onClick={handleSignOut}>Sair</li>
            </>
          ) : (
            <li onClick={handleSignIn}>Login</li>
          )}

          <hr className="w-[100%] h-[3px] bg-white" />
        </ul>
      </div>

      <div className="absolute left-[-1.5rem] top-0 h-full right-0 w-[1.5rem] bg-gradient-to-l from-[#622c47] to-transparent" />
    </section>
  );
};

export default Navigation;
