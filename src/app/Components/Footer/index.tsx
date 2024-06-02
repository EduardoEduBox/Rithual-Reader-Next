import CommentButton from "../icons/CommentButton";
import Dots from "./Dots";
import LikeButton from "../icons/LikeButton";
import ShareButton from "../icons/ShareButton";
import ViewsButton from "../icons/ViewsButton";

const Footer = ({ id }: { id: number }) => {
  return (
    <footer className="MyFooter fixed bottom-0 z-50 flex items-center w-full gap-5 px-5 shadow-2xl h-14 bg-neutral-950">
      <LikeButton id={id}></LikeButton>
      <CommentButton id={id}></CommentButton>
      <ShareButton></ShareButton>
      <ViewsButton id={id}></ViewsButton>
      <Dots id={id}></Dots>
    </footer>
  );
};

export default Footer;
