import { GoHeart, GoHeartFill } from "react-icons/go";
import { UseFirestore } from "@/app/Context/FirestoreContext";
import {
  updateDoc,
  doc,
  increment,
  setDoc,
  addDoc,
  collection,
  getDoc,
  getDocFromCache,
  where,
  getDocs,
  query,
  deleteDoc,
} from "firebase/firestore";
import { db } from "@/app/firebase";
import { UseAuth } from "@/app/Context/AuthContext";

// tailwind ui
import { Fragment, useEffect, useId, useRef, useState } from "react";
import { Menu, Dialog, Transition } from "@headlessui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import getFirebaseDocumentId from "../FirebaseDocumentId";
import { Noto_Sans_Rejang } from "next/font/google";
import { MdSend } from "react-icons/md";
import Loading from "../Loading";

const Modal = ({ comments, commentId, openModal, setOpenModal }: any) => {
  const cancelButtonRef = useRef(null);

  const deleteComment = async () => {
    const updatedComments = [...comments];

    const restingComments = updatedComments.filter(
      (comment) => comment.id !== commentId
    );

    // const likeId = await getFirebaseDocumentId('Chapters', 'userEmail', user!.email);
    // await deleteDoc(doc(db, "Likes", likeId));

    // // Update the document
    // await updateDoc(chapterRef, {
    //   comments: updatedComments,
    // });
  };

  return (
    <Transition.Root show={openModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => setOpenModal(true)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-stone-950 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden bg-neutral-950 rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-neutral-950 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon
                        className="h-6 w-6 text-red-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-100"
                      >
                        Excluir Comentário?
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Tem certeza de que deseja excluir esse comentário?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-neutral-950 shadow-xs px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={() => deleteComment(commentId)}
                  >
                    Excluir
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-200 shadow-sm hover:bg-gray-700 sm:mt-0 sm:w-auto"
                    onClick={() => setOpenModal(false)}
                    ref={cancelButtonRef}
                  >
                    Cancelar
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

const Dropdown = ({
  setEditMode,
  setOpenModal,
}: {
  setEditMode: (value: boolean) => void;
  setOpenModal: (value: boolean) => void;
}) => {
  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button>
        <EllipsisHorizontalIcon
          className="mr-2 relative top-[10px] h-8 w-8 text-gray-400"
          aria-hidden="false"
        />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="bg-neutral-950 shadow-xl absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  onClick={() => setEditMode(true)}
                  className={classNames(
                    active ? "bg-gray-800 text-gray-200" : "text-gray-300",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Editar
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  onClick={() => setOpenModal(true)}
                  className={classNames(
                    active ? "bg-gray-800 text-gray-200" : "text-gray-300",
                    "block px-4 py-2 text-sm cursor-pointer"
                  )}
                >
                  Excluir
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

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
  const { chapters } = UseFirestore();

  // Find the chapter by ID
  const currentChapter = chapters.find((chapter) => Number(chapter.id) === id);

  // Now you have access to the comments if the currentChapter is found
  const comments = currentChapter ? currentChapter.comments : [];

  const updateLikes = async (
    commentIndex: number,
    comment: any,
    like: boolean
  ) => {
    const commentToUpdate = comments[commentIndex];

    // // Make sure to handle the scenario where likes might be undefined
    // // const updatedLikes = (commentToUpdate.likes || 0) + 1;

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

          if (
            like!.commentId === comment.id &&
            like!.userEmail === user!.email
          ) {
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

    // Não estou usando a função FireBaseDocumentId por esta ser singular,
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

            if (
              like &&
              like.commentId === props.comment.id &&
              like.userEmail === user!.email
            ) {
              setLike(true);
            }
          }
        });
      };

      fetchLikeStatus();
    }, [props.comment.id]);

    const handleLikeClick = async () => {
      setLikeQt((prevLike: number) => (like ? prevLike - 1 : prevLike + 1));

      setLike((prevLike) => {
        const newLike = !prevLike;
        return newLike;
      });

      // Passando o valor atualizado para a função updateLikes
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

    return commentEditedLoading ? (
      <div
        className="flex p-3 w-[90%] pointer-events-none cursor-default relative"
        key={props.index}
      >
        {/* User Profile Picture */}
        <img
          src={props.comment.profilePic}
          alt="user's profile"
          className="w-auto h-10 rounded-full mr-3 opacity-30"
        />

        <div className="absolute top-[40%] left-[50%]">
          <Loading />
        </div>

        <div className="flex flex-col flex-grow opacity-30">
          {/* User's Name & Timestamp */}
          <div className="flex justify-between items-center">
            <span className="font-bold">{props.comment.username}</span>
            <span className="text-xs text-gray-500">
              {user && user!.email == props.comment.email && <Dropdown />}
              {props.comment.timePosted}
            </span>
          </div>

          {/* Comment Content */}
          <p className="my-2 text-base opacity-30">
            <div className="flex items-center w-full p-2 text-sm rounded-md bg-transparent border border-slate-500">
              <input
                type="text"
                placeholder="Faça um comentário"
                value={commentEditText}
                className="flex-grow outline-none bg-transparent"
              />
              <MdSend className="w-6 h-6 ml-2 text-gray-500 cursor-pointer" />
            </div>
          </p>

          {/* Like, Dislike & Reply Options */}
          <div className="flex items-center space-x-3 opacity-30">
            {/* Removido o formulário em volta do botão de like */}
            <button className="flex items-center space-x-1">
              {like ? (
                <GoHeartFill className="cursor-pointer text-red-500" />
              ) : (
                <GoHeart className="text-gray-500" />
              )}
              <span className="text-xs text-gray-500">{likeQt}</span>
            </button>

            {props.comment.edited && (
              <span className="text-xs text-gray-500 relative left-[-5px]">
                comentário editado
              </span>
            )}

            <button className="Reply text-xs text-gray-500">REPLY</button>
          </div>
        </div>
      </div>
    ) : (
      <div className="flex p-3 w-[90%]" key={props.index}>
        {/* User Profile Picture */}
        <img
          src={props.comment.profilePic}
          alt="user's profile"
          className="w-auto h-10 rounded-full mr-3"
        />

        <Modal
          comments={comments}
          commentId={props.comment.id}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />

        <div className="flex flex-col flex-grow">
          {/* User's Name & Timestamp */}
          <div className="flex justify-between items-center">
            <span className="font-bold">{props.comment.username}</span>
            <span className="text-xs text-gray-500">
              {user && user!.email == props.comment.email && (
                <Dropdown
                  commentId={props.comment.id}
                  setEditMode={setEditMode}
                  setOpenModal={setOpenModal}
                />
              )}
              {props.comment.timePosted}
            </span>
          </div>

          {/* Comment Content */}
          <p className="my-2 text-base">
            {editMode ? (
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
              props.comment.content
            )}
          </p>

          {/* Like, Dislike & Reply Options */}
          <div className="flex items-center space-x-3">
            {/* Removido o formulário em volta do botão de like */}
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
              <span className="text-xs text-gray-500 relative left-[-5px]">
                comentário editado
              </span>
            )}

            <button className="Reply text-xs text-gray-500">REPLY</button>
          </div>
        </div>
      </div>
    );
  };

  // Use return statement with the map function to render the comments
  return (
    <>
      {comments.map((comment: CommentType, index: number) => (
        <Comment index={index} comment={comment} />
      ))}
      <hr className="w-11/12 opacity-25 my-2" />
    </>
  );
};

export default Comments;
