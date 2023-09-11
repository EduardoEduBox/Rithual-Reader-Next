import { GoHeart } from "react-icons/go";

export const LikeButton = ({ size }: { size?: string }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <GoHeart className={size}></GoHeart>
      <p className="text-xs">472</p>
    </div>
  );
};
// "h-7 w-auto"
