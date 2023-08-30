// this page.tsx is like the the APP from normal react
import NavBar from "./Components/NavBar";
import Main from "./Components/Main";
// import ChapterSection from "./Components/Footer/ChaptersSection";

export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <Main></Main>
      {/* <ChapterSection></ChapterSection> */}
    </>
  );
}
