import { CommentButton } from "../icons/CommentButton";
import { Dots } from "./Dots";
import { LikeButton } from "../icons/LikeButton";
import { ShareButton } from "../icons/ShareButton";

const Footer = ({ id }: { id: number }) => {
  return (
    <footer className="fixed bottom-0 z-50 flex items-center w-full gap-6 px-5 shadow-2xl h-14 bg-neutral-950">
      <LikeButton></LikeButton>
      <CommentButton></CommentButton>
      <ShareButton></ShareButton>
      <Dots id={id}></Dots>
    </footer>
  );
};

export default Footer;
