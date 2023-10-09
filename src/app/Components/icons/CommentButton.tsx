import { GoComment } from "react-icons/go";

const CommentButton = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <GoComment></GoComment>
      <p>42</p>
    </div>
  );
};

export default CommentButton;
