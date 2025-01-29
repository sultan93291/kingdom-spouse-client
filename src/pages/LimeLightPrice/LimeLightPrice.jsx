import React, { useState } from "react";


import { FaCircleCheck } from "react-icons/fa6";
const LimeLightPrice = () => {
  const [selectedPrice, setSelectedPrice] = useState("Pay-Per-Use");
  const [selectedBundlePrice, setSelectedBundlePrice] = useState("1");

  const checkMarkSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
    >
      <circle cx="14.9996" cy="15.0039" r="8.75" fill="white" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.9996 2.50391C8.09601 2.50391 2.49957 8.10035 2.49957 15.0039C2.49957 21.9075 8.09601 27.5039 14.9996 27.5039C21.9031 27.5039 27.4996 21.9075 27.4996 15.0039C27.4996 8.10035 21.9031 2.50391 14.9996 2.50391ZM19.4752 12.4726C19.803 12.0718 19.744 11.4812 19.3432 11.1533C18.9425 10.8255 18.3519 10.8845 18.024 11.2852L13.055 17.3585L11.2875 15.591C10.9214 15.2249 10.3278 15.2249 9.96166 15.591C9.59555 15.9571 9.59555 16.5507 9.96166 16.9168L12.4617 19.4168C12.649 19.6041 12.9067 19.7034 13.1713 19.6902C13.4358 19.6771 13.6824 19.5526 13.8502 19.3476L19.4752 12.4726Z"
        fill="#C69848"
      />
    </svg>
  );

  return (
    <section className="p-5">
      <div className="mb-5">
        <h1 className="text-[#b27409] text-3xl font-bold leading-[46px] font-Inria">
          Limelight Pricing
        </h1>
      </div>

      <div className="w-full p-[30px] bg-white rounded-[22px] shadow-[inset_2px_4px_16px_0px_rgba(248,248,248,0.04)] border border-[#e6e7ec]/0 backdrop-blur-[1px] flex-col justify-start items-start gap-10 inline-flex overflow-hidden">
        <ul className="w-full flex flex-col gap-y-6">
          <li
            onClick={() => setSelectedPrice("Pay-Per-Use")}
            className={`w-full bg-[#d7c7a8]/30 rounded-[20px] p-6 border-[1.5px] border-transparent cursor-pointer ${
              selectedPrice == "Pay-Per-Use" && "border-[#ffbd4b]"
            }`}
          >
            <div className="w-full flex justify-between items-center gap-x-10">
              {/* Left Side */}
              <div className="w-[45%] flex items-center gap-x-5">
                <div className="w-6 h-6 relative rounded-3xl border-2 border-[#795d2b] flex justify-center items-center">
                  {selectedPrice == "Pay-Per-Use" && (
                    <div className="w-3 h-3 bg-[#b27409] rounded-full shadow-[inset_-5px_5px_5px_0px_rgba(255,255,255,0.24)]" />
                  )}
                </div>
                <div className="flex flex-col gap-y-[10px]">
                  <h3 className="text-[#b27409] text-2xl font-bold font-Inria capitalize leading-normal">
                    Pay-Per-Use
                  </h3>
                  <p className="text-[#795d2b] text-base font-normal font-Inter">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod{" "}
                  </p>
                </div>
              </div>

              {/* Right Side */}
              <div className="w-[55%] flex items-center justify-between">
                <ul className="flex flex-col gap-y-[10px] w-full">
                  <li className="min-w-min text-[#795d2b] text-base font-normal font-Inter flex items-center gap-x-[10px]">
                    <span>
                      <FaCircleCheck className="text-[#0CA151]" />
                    </span>{" "}
                    One-time fee
                  </li>
                  <li className="min-w-min text-[#795d2b] text-base font-normal font-Inter flex items-center gap-x-[10px]">
                    <span>
                      <FaCircleCheck className="text-[#0CA151]" />
                    </span>{" "}
                    30 Minutes limelight
                  </li>
                  <li className="min-w-min text-[#795d2b] text-base font-normal font-Inter flex items-center gap-x-[10px]">
                    <span>
                      <FaCircleCheck className="text-[#0CA151]" />
                    </span>{" "}
                    Extend limelight at just $4/1hr
                  </li>
                </ul>
                <div>
                  <h6 className="text-[#b27409] text-base font-bold font-Inria capitalize">
                    <span className="text-3xl">$4</span>.99
                  </h6>
                </div>
              </div>
            </div>
          </li>
          <li
            onClick={() => setSelectedPrice("Subscription")}
            className={`w-full bg-[#d7c7a8]/30 rounded-[20px] p-6 border-[1.5px] border-transparent cursor-pointer ${
              selectedPrice == "Subscription" && "border-[#ffbd4b]"
            }`}
          >
            <div className="w-full flex justify-between items-center gap-x-10">
              {/* Left Side */}
              <div className="w-[45%] flex items-center gap-x-5">
                <div className="w-6 h-6 relative rounded-3xl border-2 border-[#795d2b] flex justify-center items-center">
                  {selectedPrice == "Subscription" && (
                    <div className="w-3 h-3 bg-[#b27409] rounded-full shadow-[inset_-5px_5px_5px_0px_rgba(255,255,255,0.24)]" />
                  )}
                </div>
                <div className="flex flex-col gap-y-[10px]">
                  <h3 className="text-[#b27409] text-2xl font-bold font-Inria capitalize leading-normal">
                    Subscription
                  </h3>
                  <p className="text-[#795d2b] text-base font-normal font-Inter">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod{" "}
                  </p>
                </div>
              </div>

              {/* Right Side */}
              <div className="w-[55%] flex items-center justify-between">
                <ul className="flex flex-col gap-y-[10px] w-full">
                  <li className="min-w-min text-[#795d2b] text-base font-normal font-Inter flex items-center gap-x-[10px]">
                    <span>
                      <FaCircleCheck className="text-[#0CA151]" />
                    </span>{" "}
                    One-time fee
                  </li>
                  <li className="min-w-min text-[#795d2b] text-base font-normal font-Inter flex items-center gap-x-[10px]">
                    <span>
                      <FaCircleCheck className="text-[#0CA151]" />
                    </span>{" "}
                    30 Minutes limelight
                  </li>
                  <li className="min-w-min text-[#795d2b] text-base font-normal font-Inter flex items-center gap-x-[10px]">
                    <span>
                      <FaCircleCheck className="text-[#0CA151]" />
                    </span>{" "}
                    Extend limelight at just $4/1hr
                  </li>
                  <li className="min-w-min text-[#795d2b] text-base font-normal font-Inter flex items-center gap-x-[10px]">
                    <span>
                      <FaCircleCheck className="text-[#0CA151]" />
                    </span>{" "}
                    20% Discount on boost extend
                  </li>
                </ul>
                <div>
                  <h6 className="text-[#b27409] text-base font-bold font-Inria capitalize min-w-max">
                    <span className="text-3xl">$19</span>.99 / month
                  </h6>
                </div>
              </div>
            </div>
          </li>
          <li
            onClick={() => setSelectedPrice("Bundles")}
            className={`w-full bg-[#d7c7a8]/30 rounded-[20px] p-6 border-[1.5px] border-transparent cursor-pointer ${
              selectedPrice == "Bundles" && "border-[#ffbd4b]"
            }`}
          >
            <div className="w-full flex justify-between items-center gap-x-10">
              {/* Left Side */}
              <div className="w-[45%] flex items-center gap-x-5">
                <div className="w-6 h-6 relative rounded-3xl border-2 border-[#795d2b] flex justify-center items-center">
                  {selectedPrice == "Bundles" && (
                    <div className="w-3 h-3 bg-[#b27409] rounded-full shadow-[inset_-5px_5px_5px_0px_rgba(255,255,255,0.24)]" />
                  )}
                </div>
                <div className="flex flex-col gap-y-[10px]">
                  <h3 className="text-[#b27409] text-2xl font-bold font-Inria capitalize leading-normal">
                    Bundles
                  </h3>
                  <p className="text-[#795d2b] text-base font-normal font-Inter">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod{" "}
                  </p>
                </div>
              </div>

              {/* Right Side */}
              <div className="w-[55%] flex items-center justify-between">
                <ul className="flex self-stretch gap-x-[10px] w-full">
                  <li
                    onClick={() => setSelectedBundlePrice("1")}
                    className="p-[14px] w-full bg-white flex flex-col gap-y-1 border-[1.5px] border-primaryYellow rounded-[10px] relative"
                  >
                    <h6 className="text-[#b27409] text-base font-bold font-Inria capitalize min-w-max">
                      <span className="text-3xl">$1</span>.99
                    </h6>
                    <p className="text-[#795d2b] text-sm font-normal">
                      30 minute boost
                    </p>

                    {selectedBundlePrice == "1" &&
                      selectedPrice == "Bundles" && (
                        <div className="absolute top-[-15px] right-2 z-[2]">
                          {checkMarkSvg}
                        </div>
                      )}
                  </li>
                  <li
                    onClick={() => setSelectedBundlePrice("2")}
                    className="p-[14px] w-full bg-white flex flex-col gap-y-1 border-[1.5px] border-primaryYellow rounded-[10px] relative"
                  >
                    <h6 className="text-[#b27409] text-base font-bold font-Inria capitalize min-w-max">
                      <span className="text-3xl">$1</span>.99
                    </h6>
                    <p className="text-[#795d2b] text-sm font-normal">
                      30 minute boost
                    </p>

                    {selectedBundlePrice == "2" &&
                      selectedPrice == "Bundles" && (
                        <div className="absolute top-[-15px] right-2 z-[2]">
                          {checkMarkSvg}
                        </div>
                      )}
                  </li>
                  <li
                    onClick={() => setSelectedBundlePrice("3")}
                    className="p-[14px] w-full bg-white flex flex-col gap-y-1 border-[1.5px] border-primaryYellow rounded-[10px] relative"
                  >
                    <h6 className="text-[#b27409] text-base font-bold font-Inria capitalize min-w-max">
                      <span className="text-3xl">$1</span>.99
                    </h6>
                    <p className="text-[#795d2b] text-sm font-normal">
                      30 minute boost
                    </p>

                    {selectedBundlePrice == "3" &&
                      selectedPrice == "Bundles" && (
                        <div className="absolute top-[-15px] right-2 z-[2]">
                          {checkMarkSvg}
                        </div>
                      )}
                  </li>
                  <li
                    onClick={() => setSelectedBundlePrice("4")}
                    className="p-[14px] w-full bg-white flex flex-col gap-y-1 border-[1.5px] border-primaryYellow rounded-[10px] relative"
                  >
                    <h6 className="text-[#b27409] text-base font-bold font-Inria capitalize min-w-max">
                      <span className="text-3xl">$1</span>.99
                    </h6>
                    <p className="text-[#795d2b] text-sm font-normal">
                      30 minute boost
                    </p>

                    {selectedBundlePrice == "4" &&
                      selectedPrice == "Bundles" && (
                        <div className="absolute top-[-15px] right-2 z-[2]">
                          {checkMarkSvg}
                        </div>
                      )}
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>

        <div className="w-full">
          <button
            type="button"
            className="text-white text-base font-medium w-full h-[46px] relative bg-[#b27409] rounded-xl shadow-[inset_-5px_5px_5px_0px_rgba(255,255,255,0.74)] border-2 border-[#c69748]"
          >
            Get Subscription
          </button>
        </div>
      </div>
    </section>
  );
};

export default LimeLightPrice;
