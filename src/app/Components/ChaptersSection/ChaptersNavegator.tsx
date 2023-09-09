import { currentChapter } from "../Main";
import { chapters } from "@/Api/chaptersData";
import { LikeButton } from "../Footer/LikeButton";
import { ShareButton } from "../Footer/ShareButton";
import { CommentButton } from "../Footer/CommentButton";
import { useState } from "react";

// Function to remove special characters and spaces from a string
const replaceAccentedCharacters = (str: string): string => {
  return str
    .replace(/á/g, "a")
    .replace(/à/g, "a")
    .replace(/â/g, "a")
    .replace(/ã/g, "a")
    .replace(/é/g, "e")
    .replace(/è/g, "e")
    .replace(/ê/g, "e")
    .replace(/í/g, "i")
    .replace(/ì/g, "i")
    .replace(/î/g, "i")
    .replace(/ó/g, "o")
    .replace(/ò/g, "o")
    .replace(/ô/g, "o")
    .replace(/õ/g, "o")
    .replace(/ú/g, "u")
    .replace(/ù/g, "u")
    .replace(/û/g, "u")
    .toLowerCase();
};

const removeSpecialCharsAndSpaces = (str: string) => {
  const withoutAccents = replaceAccentedCharacters(str);
  return withoutAccents.replace(/\s+/g, "");
};

export const ChaptersNavegator = () => {
  const [filterQuery, setFilterQuery] = useState(""); // State to store filter query

  // Filter chapters based on the filterQuery
  const filteredChapters = chapters.filter((el) => {
    // Remove special characters and spaces from both filterQuery and chapter/name strings
    const normalizedFilterQuery = removeSpecialCharsAndSpaces(filterQuery);
    const normalizedChapter = removeSpecialCharsAndSpaces(el.chapter);
    const normalizedName = removeSpecialCharsAndSpaces(el.name);

    // Check if normalizedChapter or normalizedName includes normalizedFilterQuery
    return (
      normalizedChapter.includes(normalizedFilterQuery) ||
      normalizedName.includes(normalizedFilterQuery)
    );
  });

  return (
    <section className="w-full h-[70%] px-1 pt-4 z-30">
      <div className="w-full flex items-center justify-center mb-4">
        <input
          type="text"
          className="w-11/12 py-2 px-4 bg-neutral-100 rounded-lg text-base text-black border-2 border-neutral-500"
          placeholder="Procurar capítulo..."
          value={filterQuery}
          onChange={(e) => setFilterQuery(e.target.value)} // Update filterQuery state on input change
        />
      </div>
      <div className="ChaptersNavegator h-full overflow-y-auto w-full px-4">
        {filteredChapters.length === 0 ? (
          // Display a message when no chapters match the filter
          <div className="text-center text-gray-500 font-bold">
            Esse capítulo não existe
          </div>
        ) : (
          filteredChapters.map((el, index) => {
            // Define isCurrentChapter to check if the current chapter is the same as el, if true, change the button
            const isCurrentChapter = el.id === currentChapter?.id;
            return (
              <div
                key={index}
                className="w-full h-44  flex text-neutral-50 border-b-2 border-neutral-700 my-4"
              >
                <div className=" h-full w-1/3 flex items-center justify-center">
                  <img
                    src={el.prePage}
                    className="w-full h-auto rounded-lg drop-shadow-xl"
                    alt=""
                  />
                </div>
                <div className="h-full w-2/3  flex flex-col pl-3 pb-4">
                  <h5 className="text-lg mb-2 font-semibold">
                    <span>{el.chapter}</span>
                    <span style={{ color: el.style }}>{el.name}</span>
                  </h5>
                  <p className="text-xs pr-6 font-medium overflow-y-auto max-h-20">
                    {el.description}
                  </p>
                  <div className="flex mt-auto">
                    {/* Use the isCurrentChapter variable in the ternary operator */}
                    {isCurrentChapter ? (
                      <button className=" rounded py-1 px-2 bg-pink-600 text-pink-50 text-xs">
                        Cap atual
                      </button>
                    ) : (
                      <button className="rounded py-1 px-2 bg-purple-600 text-purple-50 text-xs">
                        Ver cap
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};
