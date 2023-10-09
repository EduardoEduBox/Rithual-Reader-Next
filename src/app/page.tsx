// later on we'll make this the home page of our application

import BottomInformation from "./Components/HomePage/BottomInformation";
import Language from "./Components/HomePage/Language";
import UserInfo from "./Components/HomePage/UserInfo";

export default function Home() {
  return (
    <section className="w-full h-[100svh] flex flex-col justify-between text-shadow">
      <div className="flex">
        <UserInfo />
        <Language />
      </div>
      <BottomInformation />
    </section>
  );
}
