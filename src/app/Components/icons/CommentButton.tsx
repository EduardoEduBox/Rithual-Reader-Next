import { UseFirestore } from "@/app/Context/FirestoreContext";
import { GoComment } from "react-icons/go";

type ShareButtonProps = {
  id: number;
};

const CommentButton: React.FC<ShareButtonProps> = ({ id }) => {
  const { chapters } = UseFirestore();
  const currentChapter = chapters.find((chapter) => Number(chapter.id) === id);

  return (
    <div className="flex flex-col items-center justify-center">
      <GoComment></GoComment>
      <p>{currentChapter?.comments.length}</p>
    </div>
  );
};

export default CommentButton;
