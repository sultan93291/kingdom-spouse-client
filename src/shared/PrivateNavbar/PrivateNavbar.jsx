import React, { useState } from "react";
import siteLogo from "../../assets/Images/LOGO.png";
import lady from "../../assets/Images/lady.png";
import {
  NoteBook,
  Heart,
  MenHeart,
  Idea,
  Reward,
  Tutorial,
  Star,
  Arrow,
  Message,
  Setting,
  Notification,
} from "../../assets/Svg/Svg";
import { GoArrowUp } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import DarkLightButton from "../../components/Common/DarkLightButton";

const PrivateRouteUrl = [
  {
    id: 1,
    linkName: "Find Your Soul",
    linkTo: "/user/find-your-soul",
    url: "/user/find-your-soul",
    icon: Heart,
  },
  {
    id: 2,
    linkName: "Matches",
    linkTo: "/home",
    url: "/user/match",
    icon: MenHeart,
  },
  {
    id: 3,
    linkName: "Limelight Info",
    linkTo: "/home",
    url: "/user/lime-light-price",
    icon: Idea,
  },
  {
    id: 4,
    linkName: "Reward",
    linkTo: "/home",
    url: "/user/Reward",
    icon: Reward,
  },
  {
    id: 5,
    linkName: "Tutorial",
    linkTo: "/home",
    url: "/user/tutorial",
    icon: Tutorial,
  },
];

const PrivateNavbar = ({ children }) => {
  const [activeId, setactiveId] = useState(1);
  const [activeDotId, setactiveDotId] = useState(0);
  const navigate = useNavigate();
  const handleActiveId = (id) => {
    setactiveId(id);
  };

  const handleRedirect = (url) => {
    navigate(url);
  };

  return (
    <section className="flex flex-col">
      <div className="flex flex-row">
        {/* Sidebar Navigation */}
        <nav className="h-[100vh] w-[280px] px-[14px] pb-[10px] flex flex-col justify-between   bg-primaryWhiteMain">
          <div className="flex flex-col gap-y-[34.5px] ">
            <div className="flex items-center flex-row justify-between">
              <img
                src={siteLogo}
                className="h-[72px] w-[72px] object-cover cursor-pointer "
                alt="site "
              />
              <div className="h-[44px] w-[44px] cursor-pointer rounded-full bg-[#E8E5DF] flex items-center justify-center  ">
                <NoteBook />
              </div>
            </div>
            <ul className="flex flex-col gap-y-1 ">
              {PrivateRouteUrl.map((item, index) => {
                const Icon = item.icon;
                let isActive = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      handleActiveId(item?.id);
                      handleRedirect(item?.url);
                    }}
                    className={`flex h-auto  w-[256px] py-[14px] text-[16px] font-medium   px-[12.5px] flex-row gap-x-4 transition-all ease-in-out duration-500 ${
                      item.id === activeId
                        ? "text-[#FFF]  bg-buttonBg shadow-buttonSHadow rounded-[12px] relative"
                        : "bg-transparent"
                    }`}
                  >
                    {(() => {
                      if (item.id === 1) {
                        return <Heart strokeColor={isActive ? "#fff" : ""} />;
                      } else if (item.id === 2) {
                        return (
                          <MenHeart strokeColor={isActive ? "#fff" : ""} />
                        );
                      } else if (item.id === 3) {
                        return <Idea strokeColor={isActive ? "#fff" : ""} />;
                      } else if (item.id === 4) {
                        return <Reward strokeColor={isActive ? "#fff" : ""} />;
                      } else if (item.id === 5) {
                        return (
                          <Tutorial strokeColor={isActive ? "#fff" : ""} />
                        );
                      }
                    })()}
                    <p
                      className={`user-nav-btn-txt transition-all ease-in-out duration-300 ${
                        item.id === activeId ? "text-white" : "text-buttonBg  "
                      }`}
                    >
                      {item.linkName}
                    </p>
                  </button>
                );
              })}
            </ul>
          </div>

          <div className="flex flex-col w-[252px] h-auto rounded-[22px] bg-secondaryYellow p-[15px] gap-y-[15px] ">
            <div className="flex flex-col gap-y-[10px] items-center ">
              <div className="w-10 h-10 rounded-full bg-transparent border-[1px] border-solid border-white flex items-center justify-center cursor-pointer ">
                <Arrow />
              </div>
              <div className="flex flex-col gap-y-[15px] items-center ">
                <div className="flex flex-col gap-y-[6px] items-center ">
                  <p className="text-[16px] text-white font-medium ">
                    7x chances to get reply
                  </p>
                  <p className="text-[16px] text-white font-medium text-center ">
                    Make your message number one in their inbox
                  </p>
                </div>
                <ul className="flex flex-row gap-x-[10px]">
                  {[0, 1, 2, 3].map((item, index) => {
                    return (
                      <li
                        onClick={() => {
                          setactiveDotId(item);
                        }}
                        className={`h-[7px] w-[7px] ease-in-out duration-150 cursor-pointer rounded-full ${
                          activeDotId === index ? "bg-white" : "bg-[#795D2B]"
                        }  `}
                      ></li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <button className="flex flex-row gap-x-1 w-[222px] text-[16px] text-buttonBg font-medium  h-auto py-[10px] px-[46.5px] bg-primaryWhiteMain rounded-[32px] ">
              {" "}
              <Star />
              Get Premium{" "}
            </button>
          </div>
        </nav>
        {/* Main Content Area */}
        <div className="flex flex-col w-full">
          {/* Top Bar */}
          <div className="w-full bg-primaryWhiteMain h-[66px]  px-[30px] py-2 items-center  flex flex-row justify-end ">
            <div className="flex flex-row gap-x-[25px] items-center ">
              <DarkLightButton />
              <Message />
              <Notification />
              <Setting />
              <img
                src={lady}
                alt="not found"
                className="w-10 h-10 object-cover"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full h-full">
            {children} {/* Dynamically render child routes here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateNavbar;
