import React, { useState } from "react";
import {
  Cross,
  HeartWhite,
  NeverMarried,
  TurnedArrowLeft,
  TurnedArrowRight,
  Cigaret,
  Height,
  Graduate,
  StarYelllow,
  StarWhite,
  CakeRound,
  ChocolateStar,
} from "../../assets/Svg/Svg";
import gorgeous_lady from "../../assets/Images/gorgeous_lady.png";
import blackMan from "../../assets/Images/black_man.png";
import yellowHair from "../../assets/Images/yellow_hair.png";
import shortHair from "../../assets/Images/short_hair.png";
import classicGirl from "../../assets/Images/classic_girl.png";
import blackGirl from "../../assets/Images/black_girl.png";
import prettyGirl from "../../assets/Images/pretty_girl.png";
import Modal from "../../components/Modal/Modal";
import SoulModalOne from "../../components/Modal/SoulModals/SoulModalOne";
import SoulModalTwo from "../../components/Modal/SoulModals/SoulModalTwo";
import SoulModalThree from "../../components/Modal/SoulModals/SoulModalThree";

const userHabbit = ["Cricket", "Dancing", "Travelling", "Swimming"];
const myHabbits = [
  {
    hobbyName: "Smokes Socially",
    Icon: Cigaret,
  },
  {
    hobbyName: "College graduate",
    Icon: Graduate,
  },
  {
    hobbyName: "Never married",
    Icon: NeverMarried,
  },
  {
    hobbyName: "5’6”",
    Icon: Height,
  },
];

const Soul = () => {
  const [activeDotId, setactiveDotId] = useState(0);
  const [openModalOne, setOpenModalOne] = useState(false);
  const [openModalTwo, setOpenModalTwo] = useState(false);
  const [openModalThree, setOpenModalThree] = useState(false);
  return (
    <section className="p-5 flex flex-row gap-x-[54px]   ">
      <div
        style={{
          backgroundImage: `url(${gorgeous_lady})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="w-[486px] h-[721px] rounded-[12px]  relative  "
      >
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2  rounded-[80px]  mt-[20px] flex felx-row gap-x-1 ">
          <div className="w-[56px] h-[6px] bg-[#B27409] rounded-[10px] "></div>
          <div className="w-[56px] h-[6px] bg-white rounded-[10px] "></div>
          <div className="w-[56px] h-[6px] bg-white rounded-[10px] "></div>
          <div className="w-[56px] h-[6px] bg-white rounded-[10px] "></div>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[365px] h-[80px] rounded-[80px] flex flex-row justify-between  bg-[#E6E7EC] mb-[-40px] p-[10px] border-[1px] border-solid border-[#C9C6C2] ">
          <div className="h-[60px] w-[60px] cursor-pointer bg-white rounded-[40px] p-[10px] flex items-center justify-center ">
            <TurnedArrowRight />
          </div>
          <div className="h-[60px] cursor-pointer w-[60px] bg-[#000] rounded-[40px] p-[10px] flex items-center justify-center  ">
            <HeartWhite />
          </div>
          <div className="h-[60px] w-[60px] bg-[#B27409] rounded-[40px] p-[10px] cursor-pointer flex items-center justify-center  ">
            <Cross />
          </div>
          <div className="h-[60px] w-[60px] bg-white rounded-[40px] p-[10px] flex items-center justify-center cursor-pointer  ">
            <TurnedArrowLeft />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-[34px]">
        <div className="flex flex-col gap-y-6">
          <div className="flex flex-col gap-y-[5px]">
            <h2 className="text-[40px]  font-Inter text-[#B27409] leading-normal font-bold  ">
              Kinsley, 23
            </h2>
            <p className="text-[16px] font-normal font-Inter text-[#795D2B] leading-normal   ">
              Costa, NY
            </p>
          </div>
          <div></div>
          <p className="text-[16px] font-normal font-Inter text-[#795D2B] leading-normal w-[710px]  ">
            My name is Amanda, you can call me, I’m 19 years old and live in
            Jakarta. Want to get acquainted with me?{" "}
          </p>
          <div className="flex flex-row gap-6 flex-wrap  ">
            {userHabbit.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-[96px] h-[41px] flex items-center justify-center px-6 bg-white rounded-[32px] text-[16px] font-normal font-Inter text-[#795D2B] leading-normal "
                >
                  {item}
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-y-[23px] ">
            {myHabbits.map((item, index) => {
              const HobbyIcon = item.Icon;
              return (
                <div
                  key={index}
                  className="flex flex-row gap-x-[6px] items-center "
                >
                  <HobbyIcon />
                  <p className="text-[16px] font-medium font-Inter text-[#B27409] leading-normal  ">
                    {item.hobbyName}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-[567px] h-[220px] p-[15px] flex flex-row items-center gap-x-[25px] border-[1.5px] border-solid border-WhiteBorder bg-white rounded-[22px] shadow-customeShadow ">
          <div className="h-[153px] w-[153px] border-[0.5px] border-solid border-[#B27409] flex items-center justify-center  rounded-full relative ">
            <img
              src={blackMan}
              alt="not found"
              className="absolute top-0 left-0 h-[33px] w-[33px]  rounded-full mt-[18.69px] ml-[-5px] "
            />
            <img
              src={yellowHair}
              alt="not found"
              className="absolute top-0 right-0 h-[30px] w-[30px] object-cover rounded-full mt-[3.69px] mr-[5px] "
            />
            <img
              src={shortHair}
              alt="not found"
              className="absolute top-0 left-0 h-[30px] w-[30px] object-cover rounded-full mt-[105.69px] mr-[5px] "
            />
            <img
              src={shortHair}
              alt="not found"
              className="absolute top-0 left-0 h-[30px] w-[30px] object-cover rounded-full mt-[105.69px] mr-[5px] "
            />
            <img
              src={classicGirl}
              alt="not found"
              className="absolute bottom-0 left-0 h-[30px] w-[30px] object-cover rounded-full mb-[-12px]  ml-[65px] "
            />
            <img
              src={blackGirl}
              alt="not found"
              className="absolute bottom-0 right-0 h-[30px] w-[30px] object-cover rounded-full mb-[30px]  mr-[-8px] "
            />
            <img
              src={prettyGirl}
              alt="not found"
              className="absolute bottom-0 right-0 h-[30px] w-[30px] object-cover rounded-full mb-[80px]  mr-[-8px] "
            />

            <div className="w-[107px] h-[107px] flex flex-row items-center justify-center gap-x-[25px] border-[1.5px] bg-[#B27409]  rounded-full  ">
              <div className="w-[62px] h-[62px] flex flex-row items-center justify-center gap-x-[25px]     bg-[#b68228]  rounded-full shadow-customeShadow">
                <div className="w-[33px] h-[33px] flex flex-row items-center justify-center gap-x-[25px]  bg-white opacity-[0.8]  rounded-full  ">
                  <ChocolateStar />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center flex-col gap-y-[15px]">
            <div className="flex flex-col gap-y-[10px] items-center ">
              <div className="h-10 w-10 rounded-[26.7px] bg-[#795D2B] flex items-center justify-center">
                <StarWhite />
              </div>
              <div className="flex flex-col items-center gap-y-[6px] ">
                <h3 className="font-medium text-[16px] font-Inter border-[1px] border-solid border-white text-[#B27409] ">
                  7x chances to get reply
                </h3>
                <p className="font-normal text-[16px] font-Inter text-[#795D2B] ">
                  Make your message number one in their inbox
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center w-full ">
              <ul className="flex flex-row gap-x-[10px]">
                {[0, 1, 2, 3].map((item, index) => {
                  return (
                    <li
                      onClick={() => {
                        setactiveDotId(item);
                      }}
                      className={`h-[7px] w-[7px] ease-in-out duration-150 cursor-pointer rounded-full ${
                        activeDotId === index
                          ? "bg-[#B27409]"
                          : "bg-[#B27409] opacity-[0.4]"
                      }  `}
                    ></li>
                  );
                })}
              </ul>
            </div>
            <button
              onClick={() => setOpenModalOne(true)}
              className="h-auto bg-[#E6E7EC] items-center justify-center rounded-[32px] w-[228px] py-[10px] px-6 flex flex-row gap-x-[6px]  "
            >
              <StarYelllow />
              <p className="text-[16px] font-medium font-Inter text-[] leading-medium  ">
                Get Premium
              </p>
            </button>
          </div>
        </div>
      </div>

      {/*  */}

      {/* LineLight Buy Modal */}
      <Modal
        visible={openModalOne}
        onClose={() => setOpenModalOne(false)}
        onInnerClick={(e) => e.stopPropagation()}
        closeBtn={true}
        className={"w-[550px] px-0"}
      >
        <SoulModalOne onCancle={() => setOpenModalOne(false)} />
      </Modal>

      {/* LimeLight Boost Modal */}
      <Modal
        visible={openModalTwo}
        onClose={() => setOpenModalTwo(false)}
        onInnerClick={(e) => e.stopPropagation()}
        closeBtn={true}
        className={"w-[550px]"}
      >
        <SoulModalTwo />
      </Modal>

      {/* LimeLight Badge Modal */}
      <Modal
        visible={openModalThree}
        onClose={() => setOpenModalThree(false)}
        onInnerClick={(e) => e.stopPropagation()}
        closeBtn={true}
        className={"w-[550px] px-0"}
      >
        <SoulModalThree />
      </Modal>
    </section>
  );
};
export default Soul;
