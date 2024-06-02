import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { UseFirestore } from "@/app/Context/FirestoreContext";
import { formatNumber } from "../utils/numberFormatter";

type ViewsButtonProps = {
  id?: number;
};

const ViewsButton: React.FC<ViewsButtonProps> = ({ id }) => {
  const { getViews } = UseFirestore();
  const views = formatNumber(getViews(id ?? -1) ?? -1);

  return (
    <div className="flex flex-col items-center justify-center">
      <button className="h-[calc(100%+3px)] items-center justify-center">
        <IoEyeOutline className="cursor-pointer h-full" />
      </button>
      <p>{views}</p>
    </div>
  );
};

export default ViewsButton;
