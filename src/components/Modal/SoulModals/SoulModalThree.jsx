import React from "react";
import LimeLight from "../../../assets/Images/sm--spotlight.png";
import LimeLightUser from "../../../assets/Images/sm--limeLightUser.png";
import LimeLightUserFrame from "../../../assets/Images/sm--limelightUserFrame.png";
import LimeLightUserStar from "../../../assets/Images/sm--limeLightUserStar.png";
import { IoMdShareAlt } from "react-icons/io";
import { BiSolidBellRing } from "react-icons/bi";
import { GoStarFill } from "react-icons/go";

export default function SoulModalThree() {
  return (
    <div>
      <div>
        <img
          src={LimeLight}
          alt=""
          className="absolute top-0 left-1/2 -translate-x-1/2"
        />
      </div>
      <div className="w-[200px] h-[200px] mx-auto relative mt-10">
        <img
          src={LimeLightUserFrame}
          alt=""
          className="w-full max-w-full object-cover"
        />
        <img
          src={LimeLightUser}
          alt=""
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130px] h-[130px] rounded-full"
        />
        <img
          src={LimeLightUserStar}
          alt=""
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[60px] h-[60px] rounded-full"
        />
      </div>

      <div className="flex flex-col gap-y-[10px] w-full items-center my-[30px]">
        <h3 className="text-[#b27409] text-[40px] font-bold font-Inria text-center">
          You’re now in the <br />{" "}
          <span className="text-[#795D2B]">Limelight!</span>
        </h3>
        <h6 className="text-[#795d2b] text-lg font-normal font-Inter">
          Get ready for more views and interactions.
        </h6>
      </div>

      <div>
        <ul className="flex gap-x-8 items-center w-full justify-center">
          <li className="flex flex-col items-center gap-y-[10px]">
            <span className="w-[50px] h-[50px] flex justify-center items-center bg-[#b27409] rounded-full">
              <IoMdShareAlt className="text-white text-3xl" />
            </span>
            <p className="text-center text-[#795d2b] text-sm font-Inter">
              Send Push <br /> Notification
            </p>
          </li>
          <li className="flex flex-col items-center gap-y-[10px]">
            <span className="w-[50px] h-[50px] flex justify-center items-center bg-[#b27409] rounded-full">
              <BiSolidBellRing className="text-white text-3xl" />
            </span>
            <p className="text-center text-[#795d2b] text-sm font-Inter">
              Alert Nearby <br /> People
            </p>
          </li>
          <li className="flex flex-col items-center gap-y-[10px]">
            <span className="w-[50px] h-[50px] flex justify-center items-center bg-[#b27409] rounded-full">
              <GoStarFill className="text-white text-3xl" />
            </span>
            <p className="text-center text-[#795d2b] text-sm font-Inter">
              Interactive <br /> Profile
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
