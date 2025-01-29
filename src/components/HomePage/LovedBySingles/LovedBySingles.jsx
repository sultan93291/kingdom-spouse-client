import React from "react";
import Header from "../../Common/Header";
import lovedBySingleGirl from "../../../assets/Images/lovedBySingleGirl.png";
import { IoIosArrowRoundForward } from "react-icons/io";
const LovedBySingles = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto">
        <div className="text-center max-w-[518px] mx-auto flex flex-col gap-[20px]">
          <Header content="Loved By Singles Around the World" color="#B27409" />
        </div>

        <div className="mt-[45px] items-center flex gap-[190px] justify-center relative z-20">
          <div>
            <img src={lovedBySingleGirl} alt="" />
          </div>
          <div className="w-[640px]">
            <h1 className="font-Inria text-buttonBg text-[30px]">
              I joined Kingdom Spouse looking for companionship and ended up
              finding my best friend and partner.{" "}
            </h1>
            <p className="font-Inter text-secondaryYellow text-lg mt-4">
              The site is so user-friendly and safe, making the entire
              experience enjoyable. Highly recommended!
            </p>

            <div className="mt-12">
              <button className="py-3.5 px-6  rounded-full bg-white flex items-center justify-center gap-1 text-buttonBg">
                Let’s give it a try{" "}
                <IoIosArrowRoundForward className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LovedBySingles;
