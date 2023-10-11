import { GoHeart } from "react-icons/go";

const Comment = () => {
  return (
    <>
      <div className="flex p-3">
        {/* User Profile Picture */}
        <img
          src="/icons/logo.png"
          alt="user's profile"
          className="w-auto h-10 rounded-full mr-3"
        />

        <div className="flex flex-col flex-grow">
          {/* User's Name & Timestamp */}
          <div className="flex justify-between items-center">
            <span className="font-bold">Username</span>
            <span className="text-xs text-gray-500">2 horas atras</span>
          </div>

          {/* Comment Content */}
          <p className="my-2 text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
            recusandae sit impedit itaque, rem voluptate dicta harum quibusdam.
            Voluptates sint culpa minima nobis accusamus laborum reiciendis
            dicta aperiam nam enim.
          </p>

          {/* Like, Dislike & Reply Options */}
          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-1">
              <GoHeart className="text-gray-500" />
              <span className="text-xs text-gray-500">123</span>
            </button>

            <button className="Reply text-xs text-gray-500">REPLY</button>
          </div>
        </div>
      </div>
      <hr className="w-11/12 opacity-25 my-2" />
    </>
  );
};

const Comments = () => {
  return (
    <>
      {Array.from({ length: 10 }).map((_, index) => (
        <Comment key={index} />
      ))}
    </>
  );
};
export default Comments;
