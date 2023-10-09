import chapters from "@/Api/chaptersData";
import LikeButton from "../icons/LikeButton";
import ShareButton from "../icons/ShareButton";
import { useState } from "react";
import Link from "next/link";
import { ChaptersSectionProps } from ".";

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

const ChaptersNavegator: React.FC<ChaptersSectionProps> = ({
  toggleBodyState,
  id,
}) => {
  const currentChapter = chapters.find((chapter) => chapter.id === id);

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
      <div className="flex items-center justify-center w-full mb-4">
        <input
          type="text"
          className="w-11/12 px-4 py-2 text-base text-black border-2 rounded-lg bg-neutral-100 border-neutral-500"
          placeholder="Procurar capítulo..."
          value={filterQuery}
          onChange={(e) => setFilterQuery(e.target.value)}
        />
      </div>
      <div className="w-full h-full px-4 overflow-y-auto ChaptersNavegator">
        {filteredChapters.length === 0 ? (
          <div className="font-bold text-center text-gray-500">
            Esse capítulo não existe
          </div>
        ) : (
          filteredChapters.map((el, index) => {
            const isCurrentChapter = el.id === currentChapter?.id;
            return (
              <div
                key={index}
                className="flex w-full my-4 border-b-2 h-44 text-neutral-50 border-neutral-700"
              >
                <div className="flex items-center justify-center w-1/3 h-full ">
                  <img
                    src={el.prePage}
                    className="w-auto h-auto max-h-[95%] rounded-lg drop-shadow-xl"
                    alt=""
                  />
                </div>
                <div className="flex flex-col w-2/3 h-full pb-4 pl-3 ">
                  <h5 className="mb-2 text-lg font-semibold">
                    <span>{el.chapter}</span>
                    <span style={{ color: el.style }}>{el.name}</span>
                  </h5>
                  <p className="pr-6 overflow-y-auto text-xs font-medium max-h-20">
                    {el.description}
                  </p>
                  <div className="flex mt-auto relative">
                    {isCurrentChapter ? (
                      <button className="px-2 py-1 text-xs bg-pink-600 rounded text-pink-50">
                        Cap atual
                      </button>
                    ) : (
                      <Link href={`/caps/${el.id}`} onClick={toggleBodyState}>
                        <button className="px-2 py-1 text-xs bg-purple-600 rounded text-purple-50">
                          Ver cap
                        </button>
                      </Link>
                    )}
                    <div
                      className="flex h-9 absolute -bottom-2 right-0 text-3xl gap-1"
                      style={{ width: "calc(100% - 70px)" }}
                    >
                      <LikeButton></LikeButton>
                      <ShareButton></ShareButton>

                      {/* later on we'll put the views count here! */}
                    </div>
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

export default ChaptersNavegator;
