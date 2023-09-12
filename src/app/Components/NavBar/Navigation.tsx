import { useEffect, useRef } from "react";

const Navigation = ({
  tracker,
  position,
}: {
  tracker: boolean;
  position: "left" | "right";
}) => {
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
      className="w-fit bg-[#bb5387] h-[100vh] top-[3.76rem] pl-16 right-0 pr-[2vw] absolute z-50"
      ref={sectionRef}
    >
      <ul className="navUl text-right mt-[5vh] text-xl flex flex-col gap-[5vh]">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="https://rithual-wiki.com.br/">Wiki</a>
        </li>

        <hr className="w-[100%] h-[3px] bg-white" />
      </ul>

      <div className="absolute left-[-1.5rem] top-0 h-full right-0 w-[1.5rem] bg-gradient-to-l from-[#622c47] to-transparent"></div>
    </section>
  );
};

export default Navigation;
