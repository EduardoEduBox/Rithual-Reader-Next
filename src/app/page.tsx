// this page.tsx is like the the APP from normal react
import NavBar from "./Components/NavBar";
import Main from "./Components/Main";
import ChapterSection from "./Components/ChapterSection";

export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <div className="flex">
        <Main></Main>
        <ChapterSection></ChapterSection>
      </div>
    </>
  );
}
