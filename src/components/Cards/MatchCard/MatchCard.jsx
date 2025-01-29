import React, { useState } from "react";
import Bro from "../../../assets/Images/Bro.png";
import { Active, ImageLogo, Verified } from "../../../assets/Svg/Svg";
import VerifiedStar from "../../../assets/Images/VerifiedStar.png";

const MatchCard = () => {
  return (
    <div className="w-[289px] relative rounded-[10px]  h-auto ">
      <div
        className="w-[289px] relative h-[269px] overflow-hidden rounded-tr-[10px] rounded-tl-[10px]   "
        style={{
          backgroundImage: `url(${Bro})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col gap-y-[10px] absolute top-0 right-0 mt-[10px] mr-[10px] ">
          <Verified />
          <img src={VerifiedStar} alt="not found" />
        </div>
        <div className="flex mb-[10px] px-[10px] w-full flex-row justify-between absolute bottom-0 left-0 ">
          <div className="h-[29px] flex items-center justify-center w-[109px] px-[10px] py-[6px] bg-rgbaBlack rounded-[60px] relative">
            <h5 className="text-white text-[14px] font-Inter font-normal">
              34,1 km away
            </h5>
            <div className="absolute mr-[-4px] top-[50%] right-0 transform -translate-y-1/2">
              <Active />
            </div>
          </div>
          <div className="flex items-center flex-row gap-x-2">
            <ImageLogo />
            <h5 className="text-[14px] text-white font-normal font-Inter  ">
              33
            </h5>
          </div>
        </div>
      </div>
      <div className="h-auto  flex flex-row gap-x-1 items-center w-full p-5 rounded-br-[10px] rounded-bl-[10px] bg-[#B27409]  ">
        <div className="flex flex-row gap-x-1 ">
          <h4 className="font-bold items-center gap-x-1 flex flex-row text-white capitalize leading-[24px] text-[16px] font-Inria  ">
            {" "}
            Christopher Austin,
          </h4>
          <h2 className="ont-bold items-center gap-x-1 flex flex-row text-white capitalize leading-[24px] text-[24px] font-Inria">
            24
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
