import React from "react";
import { BiSolidBellRing } from "react-icons/bi";
import { GoStarFill } from "react-icons/go";
import { IoMdShareAlt } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import PopupImgTwo from "../../../assets/Images/sm--soulPopupTwo.png";

export default function SoulModalOne({ onCancle }) {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <img
          src={PopupImgTwo}
          alt=""
          className="w-full max-w-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-y-[10px] w-full items-center my-[30px]">
        <h3 className="text-[#b27409] text-[40px] font-bold font-Inria">
          Want more views?
        </h3>
        <h6 className="text-[#795d2b] text-lg font-normal font-Inter">
          Step into the Limelight now!
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

      <div className="w-full flex flex-col gap-y-[10px] px-[30px] mt-[30px]">
        <button
          onClick={() => navigate("/user/lime-light-price")}
          // to={"user/lime-light-price"}
          // type="button"
          className="text-white text-base font-medium text-center w-full h-[46px] leading-[46px] relative bg-[#b27409] rounded-xl shadow-[inset_-5px_5px_5px_0px_rgba(255,255,255,0.74)] border-2 border-[#c69748]"
        >
          Buy Limelight
        </button>
        <button
          onClick={onCancle}
          type="button"
          className="text-[#b27409] text-base font-medium w-full h-[46px] relative bg-[#e6e7ec] rounded-xl border-2"
        >
          No, Thanks
        </button>
      </div>
    </div>
  );
}
