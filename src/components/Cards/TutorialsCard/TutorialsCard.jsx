import React from "react";
import Bro from "../../../assets/Images/Bro.png";
import { VideoPlay } from "../../../assets/Svg/Svg";

const TutorialsCard = () => {
  return (
    <div className="w-[289px] relative rounded-[10px]  h-auto ">
      <div
        className="w-full relative h-[269px] overflow-hidden rounded-tr-[10px] rounded-tl-[10px] flex items-center justify-center   "
        style={{
          backgroundImage: `url(${Bro})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <VideoPlay />
        <p className="text-[14px] font-Inter font-medium mb-[16px] text-white absolute bottom-0 right-1/2 translate-x-1/2 opacity-85">
          23:12
        </p>
      </div>
      <div className="h-auto  flex flex-row gap-x-1 items-center w-full p-5 rounded-br-[10px] rounded-bl-[10px] bg-[#B27409]  ">
        <div className="flex flex-row gap-x-1 ">
          <h2 className="ont-bold items-center gap-x-1 flex flex-row text-white capitalize leading-[24px] text-[16px] font-Inria">
            How can I create an account?
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TutorialsCard;
