import { GoComment } from "react-icons/go";

export const CommentButton = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <GoComment></GoComment>
      <p className="text-xs">42</p>
    </div>
  );
};
