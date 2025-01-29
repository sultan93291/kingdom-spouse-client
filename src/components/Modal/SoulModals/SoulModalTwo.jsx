import React from "react";
import PopupImgThree from "../../../assets/Images/sm--proBadge.png";

export default function SoulModalTwo() {
  return (
    <div>
      <div className="w-[280px] h-[250px] mx-auto">
        <img
          src={PopupImgThree}
          alt=""
          className="w-full max-w-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-y-[10px] w-full items-center my-[30px]">
        <h3 className="text-[#b27409] text-[40px] font-bold font-Inria">
          Congratulations
        </h3>
        <h6 className="text-[#795d2b] text-lg font-normal font-Inter text-center">
          You have earned PRO badges in recognition of actively using Limelight
          five times.
        </h6>
      </div>

      <div className="w-full flex flex-col gap-y-[10px] px-[30px] mt-[30px]">
        <button
          type="button"
          className="text-white text-base font-medium text-center w-full h-[46px] leading-[46px] relative bg-[#b27409] rounded-xl shadow-[inset_-5px_5px_5px_0px_rgba(255,255,255,0.74)] border-2 border-[#c69748]"
        >
          Claim 1 Limelight Boost
        </button>
      </div>
    </div>
  );
}
