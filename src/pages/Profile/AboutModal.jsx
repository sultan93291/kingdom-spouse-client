import React from "react";
import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbPhoneFilled } from "react-icons/tb";
import Faq from "../../components/Profile/Faq";
import PrivacyPolicy from "../../components/Profile/PrivacyPolicy";
import TermOfServices from "../../components/Profile/TermOfServices";
import AboutInfo from "../../components/Profile/AboutInfo";

export default function AboutModal({ visiblity, onBgCLick }) {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
      <div>
        {visiblity && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white shadow-md  h-[90vh] w-2/3 rounded-[34px] flex justify-start">
              <div className="w-[300px] flex flex-col justify-between h-full bg-[#d7c7a7] rounded-tl-[34px] rounded-bl-[34px]">
                <div className="flex flex-col">
                  <div className="flex justify-start gap-3 items-center p-5">
                    <button
                      onClick={onBgCLick}
                      className="py-3 px-3 text-2xl rounded-full bg-[#B27409] shadow-[inset_2px_4px_16px_0px_rgba(248,248,248,0.06)] backdrop-blur-[100px] text-white"
                    >
                      <FaArrowLeftLong />
                    </button>
                    <input
                      className="px-5 py-3 bg-white outline-none rounded-xl text-[#b27409] text-sm font-normal placeholder:text-[#b27409]"
                      type="search"
                      name="search"
                      id="search"
                      placeholder="Search"
                    />
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col items-start gap-3">
                      <button
                        onClick={() => setActiveTab(0)}
                        className={`py-5 px-5 w-full text-start text-base font-normal font-['Inter'] ${
                          activeTab === 0
                            ? "bg-[#b27409] text-white"
                            : "text-[#b27409]"
                        }`}
                      >
                        About Us
                      </button>
                      <button
                        onClick={() => setActiveTab(1)}
                        className={`py-5 px-5 w-full text-start text-base font-normal font-['Inter'] ${
                          activeTab === 1
                            ? "bg-[#b27409] text-white"
                            : "text-[#b27409]"
                        }`}
                      >
                        FAQ
                      </button>
                      <button
                        onClick={() => setActiveTab(2)}
                        className={`py-5 px-5 w-full text-start text-base font-normal font-['Inter'] ${
                          activeTab === 2
                            ? "bg-[#b27409] text-white"
                            : "text-[#b27409]"
                        }`}
                      >
                        Privacy Policy
                      </button>
                      <button
                        onClick={() => setActiveTab(3)}
                        className={`py-5 px-5 w-full text-start text-base font-normal font-['Inter'] ${
                          activeTab === 3
                            ? "bg-[#b27409] text-white"
                            : "text-[#b27409]"
                        }`}
                      >
                        Term of Services
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className=" bg-white text-center py-3 px-5 rounded-[12px] flex flex-col gap-4">
                    <h3 className="text-[#b27409] text-lg font-['Inter'] font-normal">
                      Need help?
                    </h3>
                    <div className="flex flex-col gap-[10px]">
                      <div className="flex justify-start items-center gap-3">
                        <div className="text-3xl border-2 py-2 px-2 text-[#795d2b] rounded-full border-[#b27409]">
                          <TbPhoneFilled />
                        </div>
                        <a
                          className="text-[#795d2b] text-sm font-normal font-['Inter']"
                          href="tel:+456365885465"
                        >
                          +4 563 6588 5465
                        </a>
                      </div>
                      <div className="flex justify-start items-center gap-3">
                        <div className="text-3xl border-2 py-2 px-2 text-[#795d2b] rounded-full border-[#b27409]">
                          <MdOutlineMailOutline />
                        </div>
                        <a
                          className="text-[#795d2b] text-sm font-normal font-['Inter']"
                          href="mailto:help@adameve.com"
                        >
                          help@adameve.com
                        </a>
                      </div>
                    </div>
                    <div>
                      <button className="w-full bg-[#b27409] text-white py-3 px-5 rounded-[34px]">
                        Chat with us
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col p-4 w-full h-full overflow-y-scroll custom-scrollbar">
                {activeTab === 0 && (
                  <>
                    <AboutInfo />
                  </>
                )}
                {activeTab === 1 && (
                  <>
                    <Faq></Faq>
                  </>
                )}
                {activeTab === 2 && (
                  <>
                    <PrivacyPolicy></PrivacyPolicy>
                  </>
                )}
                {activeTab === 3 && (
                  <>
                    <TermOfServices></TermOfServices>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
