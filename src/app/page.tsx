// this page.tsx is like the the APP from normal react
import Navbar from "./Components/NavBar";
import Main from "./Components/Main";
import { Footer } from "./Components/Footer";
// import ChapterSection from "./Components/Footer/ChaptersSection";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Main></Main>
      {/* <ChapterSection></ChapterSection> */}
      <Footer></Footer>
    </>
  );
}
