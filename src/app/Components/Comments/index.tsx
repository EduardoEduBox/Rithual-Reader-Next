import { GoHeart } from "react-icons/go";
import { UseFirestore } from "@/app/Context/FirestoreContext";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "@/app/firebase";

type idProp = {
  id: number;
};

type CommentType = {
  profilePic: string;
  username: string;
  timePosted: string;
  content: string;
  likes: number;
};

const Comments: React.FC<idProp> = ({ id }) => {
  const { chapters } = UseFirestore();

  console.log("chapters", chapters);

  // Find the chapter by ID
  const currentChapter = chapters.find((chapter) => Number(chapter.id) === id);

  // Now you have access to the comments if the currentChapter is found
  const comments = currentChapter ? currentChapter.comments : [];

  console.log("comments", comments);

  const updateLikes = async (commentIndex: number) => {
    const commentToUpdate = comments[commentIndex];

    // Make sure to handle the scenario where likes might be undefined
    const updatedLikes = (commentToUpdate.likes || 0) + 1;

    // Create a new comments array with the updated likes
    const updatedComments = comments.map((comment, index) => {
      if (index === commentIndex) {
        return { ...comment, likes: updatedLikes };
      }
      return comment;
    });

    try {
      // Get a reference to the chapter document
      const chapterRef = doc(db, "Chapters", String(id));

      // Update the document
      await updateDoc(chapterRef, {
        comments: updatedComments,
      });

      console.log("Likes updated successfully!");
    } catch (error) {
      console.error("Error updating likes:", error);
    }
  };

  // Use return statement with the map function to render the comments
  return (
    <>
      {comments.map((comment: CommentType, index: number) => (
        <div className="flex p-3 w-[90%]" key={index}>
          {/* User Profile Picture */}
          <img
            src={comment.profilePic}
            alt="user's profile"
            className="w-auto h-10 rounded-full mr-3"
          />

          <div className="flex flex-col flex-grow">
            {/* User's Name & Timestamp */}
            <div className="flex justify-between items-center">
              <span className="font-bold">{comment.username}</span>
              <span className="text-xs text-gray-500">
                {comment.timePosted}
              </span>
            </div>

            {/* Comment Content */}
            <p className="my-2 text-base">{comment.content}</p>

            {/* Like, Dislike & Reply Options */}
            <div className="flex items-center space-x-3">
              <button
                className="flex items-center space-x-1"
                onClick={() => updateLikes(index)}
              >
                <GoHeart className="text-gray-500" />
                <span className="text-xs text-gray-500">{comment.likes}</span>
              </button>

              <button className="Reply text-xs text-gray-500">REPLY</button>
            </div>
          </div>
        </div>
      ))}
      <hr className="w-11/12 opacity-25 my-2" />
    </>
  );
};

export default Comments;
