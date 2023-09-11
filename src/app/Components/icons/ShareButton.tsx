import { PiShareFat } from "react-icons/pi";

export const ShareButton = ({ size }: { size?: string }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <PiShareFat className={size}></PiShareFat>
      <p className="text-xs">17</p>
    </div>
  );
};
