import { UseFirestore } from "@/app/Context/FirestoreContext";
import { GoComment } from "react-icons/go";

const CommentButton = ({ id }: { id: number }) => {
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
