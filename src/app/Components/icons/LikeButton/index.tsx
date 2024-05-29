import { useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { useLikes } from "@/app/Context/LikesContext";
import { UseAuth } from "@/app/Context/AuthContext";
import LogInWarningModal from "./LogInWarningModal";

interface LikeButtonProps {
  id: number;
}

const LikeButton: React.FC<LikeButtonProps> = ({ id }) => {
  const { likes, toggleLike, likeLoadingStates } = useLikes();
  const { user } = UseAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const userLikes = likes[id] || [];
  const email = user?.email;
  const isLiked = userLikes.includes(email || "");
  const likeCount = userLikes.length;
  const isLikeLoading = likeLoadingStates[id];

  const handleLikeClick = async () => {
    if (!email) {
      setIsModalOpen(true);
      return;
    }
    await toggleLike(id);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <button onClick={handleLikeClick} className="focus:outline-none h-full">
        {isLiked ? (
          <GoHeartFill
            className={`text-red-500 h-full cursor-pointer ${
              isLikeLoading && "opacity-30"
            }`}
          />
        ) : (
          <GoHeart
            className={`cursor-pointer h-full ${isLikeLoading && "opacity-30"}`}
          />
        )}
      </button>
      <p className={`${isLikeLoading && "opacity-30"}`}>{likeCount}</p>
      <LogInWarningModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default LikeButton;
