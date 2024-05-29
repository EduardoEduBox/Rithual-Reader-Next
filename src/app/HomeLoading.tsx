"use client";

import React, { useEffect, useState, useRef } from "react";
import { LuEye } from "react-icons/lu";
import Typewriter from "typewriter-effect";
import gsap from "gsap";
import { useFirstTime } from "./Context/FirstTimeContent";

const HomeLoading: React.FC = () => {
  const texts = ["Carregando.....", "Renderizando o universo.....", "Pronto!"];
  const [percentage, setPercentage] = useState(0);
  const [transitionStart, setTransitionStart] = useState(false);
  const [showBetaInfo, setShowBetaInfo] = useState(false);
  const welcomeRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { isFirstTime, setIsFirstTime } = useFirstTime();

  // Create an array of references for the beta information paragraphs
  const infoRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    let currentPercentage = 0;
    const interval = setInterval(() => {
      currentPercentage += 1;
      setPercentage(currentPercentage);
      if (currentPercentage >= 100) {
        clearInterval(interval);
        setTimeout(() => setTransitionStart(true), 1000);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (transitionStart) {
      gsap.to(".letter", {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        ease: "back.out(1.7)",
        onComplete: () => {
          setTimeout(() => {
            gsap.to(welcomeRef.current, {
              opacity: 0,
              duration: 1,
              ease: "power2.out",
              onComplete: () => {
                infoRefs.current.forEach((ref, index) => {
                  gsap.fromTo(
                    ref,
                    { opacity: 0, x: -30 },
                    { opacity: 1, x: 0, delay: index * 0.2, ease: "power2.out" }
                  );
                });
                setShowBetaInfo(true);
                if (buttonRef.current) {
                  gsap.fromTo(
                    buttonRef.current,
                    { opacity: 0, y: 30 },
                    {
                      opacity: 1,
                      y: 0,
                      delay: infoRefs.current.length * 0.2,
                      ease: "power2.out",
                    }
                  );
                }
              },
            });
          }, 1000);
        },
      });
    }
  }, [transitionStart]);

  const splitText = (text: string) => {
    return text.split("").map((letter, index) => {
      if (letter === " ") {
        return (
          <span key={index} style={{ display: "inline-block", width: "0.5em" }}>
            &nbsp;
          </span>
        );
      }
      return (
        <span
          key={index}
          className="letter"
          style={{
            display: "inline-block",
            opacity: 0,
            transform: "translateY(-100%)",
          }}
        >
          {letter}
        </span>
      );
    });
  };

  const container = useRef<HTMLDivElement>(null);
  const [stateOfContainer, setStateOfContainer] = useState(false);

  useEffect(() => {
    if (stateOfContainer) {
      setTimeout(() => {
        container.current?.classList.add("hidden");
        setIsFirstTime(false);
      }, 300);
    }
  }, [stateOfContainer]);

  if (!isFirstTime) return null;

  return (
    <>
      <div
        className={`h-screen fixed transition-opacity w-screen z-[9999] backdrop-filter backdrop-blur-sm ${
          stateOfContainer ? "opacity-0" : ""
        }`}
        ref={container}
      >
        <div
          className={`flex items-center justify-center bg-gray-950 w-full h-full transition-opacity duration-1000 ${
            transitionStart ? "opacity-0" : "opacity-100"
          }`}
        >
          {!transitionStart && (
            <div className="flex flex-col items-center justify-center">
              <LuEye className="text-white text-8xl lg:text-8xl animate-spin" />
              <div className="mt-8 text-2xl font-semibold">
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: false,
                    cursor: "",
                    delay: 20,
                    deleteSpeed: 0,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(texts[0])
                      .pauseFor(300)
                      .deleteAll()
                      .typeString(texts[1])
                      .pauseFor(300)
                      .deleteAll()
                      .typeString(texts[2])
                      .start();
                  }}
                />
              </div>
              <h1 className="mt-5 text-3xl opacity-50">{percentage}%</h1>
            </div>
          )}
        </div>
        {transitionStart && !showBetaInfo && (
          <div className="absolute -top-10 left-0 flex flex-col items-center justify-center w-full h-full">
            <h1
              className="px-5 leading-5 text-4xl font-semibold text-center text-shadow-darker lg:text-5xl"
              ref={welcomeRef}
            >
              {splitText("Seja bem vindo ao ")}
              <br />
              <span className="text-pink-200 text-glow-pink">
                {splitText("(૨¡Ƭષαℓ ")}
              </span>
              {splitText("Reader!")}
            </h1>
          </div>
        )}
        <div
          className={`absolute -top-10 px-4 left-0 opacity-0 flex flex-col items-center justify-center w-full h-full ${
            showBetaInfo && "opacity-100"
          }`}
        >
          <div className="mt-8 text-center text-lg text-gray-300 space-y-2">
            <p
              ref={(el) => (infoRefs.current[0] = el!)}
              className="font-semibold mb-10 text-shadow"
            >
              O Reader ainda está em versão beta, várias funcionalidades ainda
              não estão disponíveis, como por exemplo:
            </p>

            <ul className="flex flex-col text-left gap-3 items-start px-7 list-disc">
              <li
                ref={(el) => (infoRefs.current[1] = el!)}
                className="text-shadow"
              >
                Versão de desktop
              </li>
              <li
                ref={(el) => (infoRefs.current[2] = el!)}
                className="text-shadow"
              >
                Número de compartilhamentos dos capítulos
              </li>
              <li
                ref={(el) => (infoRefs.current[3] = el!)}
                className="text-shadow"
              >
                Responder comentários
              </li>
              <li
                ref={(el) => (infoRefs.current[4] = el!)}
                className="text-shadow"
              >
                Sistema de notificações na aba de perfil
              </li>
              <li
                ref={(el) => (infoRefs.current[5] = el!)}
                className="text-shadow"
              >
                Páginas animadas
              </li>
            </ul>
          </div>
          <button
            ref={buttonRef}
            onClick={() => {
              setStateOfContainer(true);
            }}
            className="px-6 mt-20 flex py-2 text-lg font-semibold text-white bg-transparent border border-white rounded-lg"
          >
            Entendi!
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeLoading;
