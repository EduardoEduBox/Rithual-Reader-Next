import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import Modal from "./Modal";

import { GoHeart, GoHeartFill } from "react-icons/go";

// Firebase
import { UseFirestore } from "@/app/Context/FirestoreContext";
import {
  updateDoc,
  doc,
  addDoc,
  collection,
  getDoc,
  where,
  getDocs,
  query,
  deleteDoc,
} from "firebase/firestore";
import { db } from "@/app/firebase";
import { UseAuth } from "@/app/Context/AuthContext";

// tailwind ui
import getFirebaseDocumentId from "../FirebaseDocumentId";
import { MdSend } from "react-icons/md";
import Loading from "../Loading";

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

const Comments: React.FC<idProp> = async ({ id }) => {
  const { user } = UseAuth();
  const { chapters, getCurrentChapter } = UseFirestore();

  const currentChapter = getCurrentChapter(id);

  // Now you have access to the comments if the currentChapter is found
  const comments = currentChapter ? currentChapter.comments : [];

  const updateLikes = async (
    commentIndex: number,
    comment: any,
    like: boolean
  ) => {
    const commentToUpdate = comments[commentIndex];

    // Make sure to handle the scenario where likes might be undefined
    // const updatedLikes = (commentToUpdate.likes || 0) + 1;

    // Se verdadeiro, incrementar número de likes a partir do valor booleano
    // recebido a partir do state do componente Comment
    let updatedLikes = like ? ++commentToUpdate.likes : --commentToUpdate.likes;

    // Create a new comments array with the updated likes
    const updatedComments = comments.map((comment, index) => {
      if (index === commentIndex) {
        return { ...comment, likes: updatedLikes };
      }
      return comment;
    });

    try {
      // Criar referência de like para a coleção Likes
      const myCollection = collection(db, "Likes");

      const likeObj = {
        userEmail: user!.email,
        commentId: comment.id,
      };

      // se o state 'like' for false, isto significa que previamente estava verdadeiro, ou seja,
      // já existia, então remove. Caso contrário, adiciona um document.

      const chapterId = await getFirebaseDocumentId("Chapters", "id", id);
      const chapterRef = doc(db, "Chapters", chapterId!.toString());

      if (like) {
        const likeDoc = await addDoc(myCollection, likeObj);

        // se um id existe, demostra que o documento foi inserido
        if (likeDoc!.id) {
          // Se o documento obtido for compatível com o atual comentário,
          // Tanto o id quanto o email, isso significa que o valor do like
          // do atual comentário combina com o doc, ou seja, é alterado.
          const likeRef = doc(db, "Likes", likeDoc!.id);
          const likeSnap = await getDoc(likeRef);
          const like = likeSnap.data();

          // if (
          //   like!.commentId === comment.id &&
          //   like!.userEmail === user!.email
          // ) {
          //   // Update the document
          //   await updateDoc(chapterRef, {
          //     comments: updatedComments,
          //   });
          // }

          if (like!.commentId === comment.id) {
            // Update the document
            await updateDoc(chapterRef, {
              comments: updatedComments,
            });
          }
        }
      } else {
        // Lê a coleção "Likes" com o id inserido e obtém o documento desta coleção.
        const likeId = await getFirebaseDocumentId(
          "Likes",
          "userEmail",
          user!.email
        );
        await deleteDoc(doc(db, "Likes", likeId));

        // Update the document
        await updateDoc(chapterRef, {
          comments: updatedComments,
        });
      }

      console.log("Likes updated successfully!");
    } catch (error) {
      console.error("Error updating likes:", error);
    }
  };

  // Comentário componente pai para compartilhar states mutuais (modal e dropdown)

  // O algoritmo de likes a seguir está lento,
  // pois está requisitando para o firebase muitas vezes.
  const Comment = (props: any) => {
    const [openModal, setOpenModal] = useState(false);

    const [likeQt, setLikeQt] = useState(props.comment.likes);
    const [like, setLike] = useState(false);

    const [editMode, setEditMode] = useState(false);
    const [commentEditedLoading, setCommentEditedLoading] = useState(false);
    const [commentEditText, setCommentEditText] = useState(
      props.comment.content
    );

    const { user } = UseAuth();

    // Não estou usando a função FireBaseDocumentId por esta função ser singular,
    // Aqui estou obtendo todos os likes
    useEffect(() => {
      const fetchLikeStatus = async () => {
        const docQuery = query(
          collection(db, "Likes"),
          where(`userEmail`, "==", user!.email)
        );
        const querySnapshot = await getDocs(docQuery);

        querySnapshot.forEach((likeDoc) => {
          if (likeDoc !== null) {
            const like = likeDoc.data();

            if (like && like.commentId === props.comment.id) {
              setLike(true);
            }
          }
        });
      };

      fetchLikeStatus();
    }, [props.comment.id]);

    const handleLikeClick = async () => {
      setLikeQt((prevLike: number) => (like ? prevLike - 1 : prevLike + 1));

      // setLike((prevLike) => {
      //   const newLike = !prevLike;
      //   return newLike;
      // });

      setLike(!like);

      // // Passando o valor atualizado para a função updateLikes
      await updateLikes(props.index, props.comment, !like);
    };

    const sendEditedMessage = async () => {
      setCommentEditedLoading(true);

      if (props.comment.email === user!.email) {
        props.comment.content = commentEditText;
        props.comment.edited = true;

        let chapterId = await getFirebaseDocumentId("Chapters", "id", id);
        const chapterRef = doc(db, "Chapters", chapterId!.toString());

        try {
          await updateDoc(chapterRef, {
            comments: comments,
          });

          setCommentEditedLoading(false);
          setEditMode(false);
        } catch (error) {
          throw new Error(`Error while updating your comment: ${error}`);
        }
      }
    };

    // function to calculate the time posted and convert it to a readable format for the user (seconds, minutes, hours, days)
    function calculateTimePosted() {
      const timePosted = new Date(props.comment.timePosted);
      const currentTime = new Date();

      const timeDifference = currentTime.getTime() - timePosted.getTime();
      const timeDifferenceInSeconds = timeDifference / 1000;
      const timeDifferenceInMinutes = timeDifferenceInSeconds / 60;
      const timeDifferenceInHours = timeDifferenceInMinutes / 60;
      const timeDifferenceInDays = timeDifferenceInHours / 24;

      if (timeDifferenceInSeconds < 60) {
        return `${Math.floor(timeDifferenceInSeconds)} segundos atrás`;
      } else if (timeDifferenceInMinutes < 60) {
        return `${Math.floor(timeDifferenceInMinutes)} minutos atrás`;
      } else if (timeDifferenceInHours < 24) {
        return `${Math.floor(timeDifferenceInHours)} horas atrás`;
      } else {
        return `${Math.floor(timeDifferenceInDays)} dias atrás`;
      }
    }

    return (
      <div
        className={`flex ${
          commentEditedLoading ? "p-3" : "p-1 my-2"
        } w-[90%] flex-col ${
          commentEditedLoading ? "pointer-events-none cursor-default" : ""
        } relative`}
        key={props.index}
      >
        {/* Modal Component */}
        {openModal && (
          <div className="h-screen w-screen fixed flex items-center justify-center">
            <Modal
              comments={comments}
              commentId={props.comment.id}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          </div>
        )}

        <div className="flex flex-col flex-grow">
          {/* User's Name & Timestamp */}
          <div className="flex justify-between items-center">
            {/* User Profile Picture */}
            <img
              src={props.comment.profilePic}
              alt="user's profile"
              className={`w-auto h-10 rounded-full mr-3 ${
                commentEditedLoading ? "opacity-30" : ""
              }`}
            />

            <span
              className={`font-bold mr-auto truncate pr-3 ${
                commentEditedLoading ? "text-lg" : "text-base"
              }`}
            >
              {props.comment.username}
            </span>
            <span className="text-xs whitespace-nowrap text-gray-500">
              {calculateTimePosted()}
              {commentEditedLoading &&
                user &&
                user.email == props.comment.email && (
                  <Dropdown
                    commentId={props.comment.id}
                    setEditMode={setEditMode}
                    setOpenModal={setOpenModal}
                  />
                )}
            </span>
          </div>

          {/* Comment Content */}
          {commentEditedLoading ? (
            <div className="my-2 text-base opacity-30">
              {/* Content while editing is loading */}
              <div className="absolute top-[40%] left-[50%]">
                <Loading />
              </div>

              <div className="flex items-center w-full p-2 text-sm rounded-md bg-transparent border border-slate-500">
                <input
                  type="text"
                  placeholder="Faça um comentário"
                  value={commentEditText}
                  className="flex-grow outline-none bg-transparent"
                  readOnly
                />
                <MdSend className="w-6 h-6 ml-2 text-gray-500 cursor-pointer" />
              </div>
            </div>
          ) : (
            <p className="my-2 text-xs">
              {editMode ? (
                /* Input for editing a comment */
                <div className="flex items-center w-full p-2 text-sm rounded-md bg-transparent border border-slate-500">
                  <input
                    type="text"
                    placeholder="Faça um comentário"
                    value={commentEditText}
                    className="flex-grow outline-none bg-transparent"
                    onChange={(e) => setCommentEditText(e.target.value)}
                  />
                  <MdSend
                    className="w-6 h-6 ml-2 text-gray-500 cursor-pointer"
                    onClick={sendEditedMessage}
                  />
                </div>
              ) : (
                /* Display regular comment content */
                props.comment.content
              )}
            </p>
          )}

          {/* Like, Dislike & Reply Options */}
          {commentEditedLoading ? (
            <div className="flex items-center space-x-3 opacity-30">
              {/* Content while editing is loading */}
            </div>
          ) : (
            /* Regular like/dislike/reply options */
            <div className="flex items-center space-x-3">
              <button
                className="flex items-center space-x-1"
                onClick={handleLikeClick}
              >
                {like ? (
                  <GoHeartFill className="cursor-pointer text-red-500" />
                ) : (
                  <GoHeart className="text-gray-500" />
                )}
                <span className="text-xs text-gray-500">{likeQt}</span>
              </button>

              {props.comment.edited && (
                <span className="text-xs text-gray-500">
                  comentário editado
                </span>
              )}

              <span className="!ml-auto relative bottom-1">
                {user && user!.email == props.comment.email && (
                  <Dropdown
                    commentId={props.comment.id}
                    setEditMode={setEditMode}
                    setOpenModal={setOpenModal}
                  />
                )}
              </span>

              <button className="relative text-xs text-gray-500">REPLY</button>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Use return statement with the map function to render the comments
  return (
    <>
      {comments.map((comment: CommentType, index: number) => (
        <Comment
          index={index}
          comment={comment}
          key={comment.username + index}
        />
      ))}
      <hr className="w-11/12 opacity-25 my-2" />
    </>
  );
};

export default Comments;
