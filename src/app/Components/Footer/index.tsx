import { CommentButton } from "../icons/CommentButton";
import { Dots } from "./Dots";
import { LikeButton } from "../icons/LikeButton";
import { ShareButton } from "../icons/ShareButton";

const Footer = ({ id }: { id: number }) => {
  return (
    <footer className="fixed bottom-0 w-full h-14 bg-neutral-950 z-50 flex items-center px-5 gap-6 shadow-2xl">
      <LikeButton></LikeButton>
      <CommentButton></CommentButton>
      <ShareButton></ShareButton>
      <Dots id={id}></Dots>
    </footer>
  );
};

export default Footer;
