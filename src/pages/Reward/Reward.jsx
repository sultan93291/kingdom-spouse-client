import React from "react";
import { useState } from "react";
import { FaCopy } from "react-icons/fa6";

const Reward = () => {
  const [copied, setCopied] = useState(false);
  const link = "www.adameve.com/Rfs#fme$f";

  const handleLinkClick = (e) => {
    e.preventDefault(); // Prevents the default navigation
    navigator.clipboard.writeText(link); // Copies the link to clipboard
    setCopied(true);

    // Navigate to the link
    window.open(`https://${link}`, "_blank", "noopener,noreferrer");

    // Reset "Copied!" feedback after 2 seconds
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-5 flex flex-col gap-5">
      <div>
        <h2 className="text-[#b27409] text-3xl font-bold font-['Inria Serif'] leading-[46px]">
          Rewards
        </h2>
      </div>
      <div className="flex justify-between items-center gap-7">
        <div className="w-[50%] p-6 bg-white rounded-3xl flex flex-col gap-5 h-[365px] ">
          <div>
            <h4 className="text-[#b27409] text-2xl font-bold font-['Inria Serif'] capitalize leading-normal">
              You`re off to a great start!
            </h4>
          </div>
          <div>
            <p className="text-[#b27409] text-base font-normal font-['Inter']">
              Points earned
            </p>
            <h2 className="text-[49px] text-[#b27409] font-bold font-['Inria Serif']">
              2645
            </h2>
          </div>
          <div className="flex justify-between items-center gap-3">
            <div className="w-[400px] flex flex-col gap-3">
              <div
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, transparent, transparent 10px, #ffffff 10px, #ffffff 20px)",
                  backgroundColor: "#e8e5df",
                }}
                className="w-[100%] h-[54px] rounded-xl"
              >
                <div className="w-[80%] h-full bg-[#b27409] rounded-xl"></div>
              </div>
              <div className="flex justify-between items-center gap-3">
                <p className="text-[#795D2B] text-base font-normal font-['Inter']">
                  5hr Spent
                </p>
                <p className="text-[#795D2B] text-base font-normal font-['Inter']">
                  Goal 7 hours
                </p>
              </div>
            </div>
            <div className="w-[15%]">
              <h4 className="text-[#b27409] text-2xl font-bold font-['Inria Serif'] capitalize leading-normal">
                Level 2
              </h4>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex flex-col gap-5 ">
          <div className=" flex justify-between gap-5">
            <div className="bg-white w-[50%] p-6 rounded-xl">
              <h5 className="text-[#b27409] text-base font-normal font-['Inter']">
                Invite Sent
              </h5>
              <h3 className="text-[#795d2b] text-3xl font-bold font-['Inria Serif'] leading-[46px]">
                21
              </h3>
            </div>
            <div className="bg-white w-[50%] p-6 rounded-xl">
              <h5 className="text-[#b27409] text-base font-normal font-['Inter']">
                People joined
              </h5>
              <h3 className="text-[#795d2b] text-3xl font-bold font-['Inria Serif'] leading-[46px]">
                05
              </h3>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl flex flex-col gap-5">
            <div>
              <h4 className="text-[#b27409] text-2xl font-bold font-['Inria Serif'] capitalize leading-normal">
                Refer Your Friends
              </h4>
            </div>
            <div className="">
              <ul className="list-disc list-inside">
                <li className="text-[#795d2b] text-base font-normal font-['Inter']">
                  You get 10min Boost
                </li>
                <li className="text-[#795d2b] text-base font-normal font-['Inter']">
                  They get 15min Boost
                </li>
              </ul>
            </div>
            <div>
              <div className="w-full px-5 py-3 bg-[#e6e7ec] rounded-[50px] border border-[#e6e7ec]/10 backdrop-blur-xl flex justify-between items-center">
                <a
                  href={`https://${link}`}
                  onClick={handleLinkClick}
                  className="text-center text-[#b27409] text-sm font-normal font-['Inter'] hover:underline"
                >
                  {link}
                </a>

                {copied ? (
                  <span className="ml-2 text-xs text-green-600">Copied!</span>
                ) : (
                  <FaCopy
                    onClick={() => {
                      navigator.clipboard.writeText(link);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                    className="text-[#b27409] cursor-pointer hover:text-[#965f08]"
                    aria-label="Copy link"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reward;
