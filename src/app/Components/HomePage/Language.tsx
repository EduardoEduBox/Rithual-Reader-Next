"use client";

const Language = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-8 pr-4">
      {/* later on we'll make this dynamic, so the user is gonna have the hability to change the language */}
      <p className="text-base">pt-br</p>
      <h1 className="text-lg text-pink-200">&#9679;</h1>
    </div>
  );
};

export default Language;
