import { LuEye } from "react-icons/lu";

const Loading = () => {
  const loadingElements = [];

  for (let index = 0; index < 20; index++) {
    loadingElements.push(
      <div
        key={index}
        style={{ aspectRatio: "9/16" }}
        className="max-w-[100%] flex-col bg-neutral-900 flex items-center justify-center animate-pulse"
      >
        <LuEye className="text-7xl text-neutral-200 animate-spin" />
        <p className="opacity-50">Carregando...</p>
      </div>
    );
  }

  return (
    <main className="z-10 flex flex-col items-center w-full py-28">
      <div className="w-[90%]">
        <h1 className="MainBehindText absolute text-6xl top-24 -z-40 text-[#121212] opacity-[15%]">
          Carregando...
        </h1>

        <h1>
          <span className="font-medium">Carregando...</span>
        </h1>
        <div>{loadingElements}</div>
      </div>
    </main>
  );
};

export default Loading;
