// later on we'll make this the home page of our application

import BottomInformation from "./Components/HomePage/BottomInformation";
import Language from "./Components/HomePage/Language";
import UserInfo from "./Components/HomePage/UserInfo";

export default function Home() {
  return (
    <section className="w-full h-[100svh] flex flex-col justify-between text-shadow">
      <div
        className="absolute w-full h-full -z-10 bg-cover bg-right"
        style={{
          backgroundImage: "url('/Singer Background Home Page Reader.png')",
        }}
      />

      <div className="flex">
        <UserInfo />
        <Language />
      </div>
      <BottomInformation />
    </section>
  );
}
