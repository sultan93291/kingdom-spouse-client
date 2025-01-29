import React, { useState } from "react";
import { Filter } from "../../assets/Svg/Svg";
import MatchCard from "./../../components/Cards/MatchCard/MatchCard";
import FilterModal from "./../../components/Modal/FilterModal/FilterModal";
const matchNav = ["All", "Online", "Newest", "Nearby", "Favorite"];

export const Match = () => {
  const [activeBtn, setactiveBtn] = useState("All");
  const [filterModalOpen, setfilterModalOpen] = useState(false);

  const handleModalClose = () => {
    setfilterModalOpen(false);
  };

  return (
    <>
      <FilterModal
        isOpen={filterModalOpen}
        setIsOpen={setfilterModalOpen}
        onClose={handleModalClose}
      />

      <section className="flex flex-col gap-y-8  m-5 ">
        <div className="flex flex-row w-full justify-between items-center ">
          <div className="flex flex-row gap-x-3">
            {matchNav.map((item, index) => {
              return (
                <button
                  onClick={() => {
                    setactiveBtn(item);
                  }}
                  className={`px-[18px] shadow-custom ease-out duration-300 text-[16px] font-medium rounded-[32px] py-[10px]  ${
                    item === activeBtn
                      ? "bg-[#B27409] text-white "
                      : " bg-white text-[#B27409]"
                  }   `}
                  key={index}
                >
                  {item}
                </button>
              );
            })}
          </div>
          <button
            onClick={() => {
              setfilterModalOpen(true);
            }}
            className="py-[12.5px] cursor-pointer shadow-custom flex gap-x-[6px] w-[117px] text-[16px]  px-[24px] bg-white rounded-[32px] "
          >
            <Filter />
            <p className="text-[16px] font-medium text-[#B27409] ">Filter</p>
          </button>
        </div>
        <div className="flex flex-row flex-wrap gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
            return <MatchCard key={index} />;
          })}
        </div>
      </section>
    </>
  );
};
